import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app';
import { getDatabase, closeDatabase } from '../src/db/database';
import { seedDatabase } from '../src/db/seed';
import { outboxWorkerInstance } from '../src/services/outboxWorker';

const app = createApp();

describe('Newtonite Operations Under Pressure - Test Suite', () => {
  beforeEach(() => {
    // Re-seed before each test run for clean state
    const db = getDatabase();
    seedDatabase(db);
  });

  afterAll(() => {
    closeDatabase();
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 1: OPTIMISTIC CONCURRENCY CONTROL (OCC)
  // =========================================================================
  describe('Critical Behavior 1: Optimistic Concurrency Control', () => {
    it('successfully updates when client version matches current version', async () => {
      // 1. Fetch current item wi-102
      const getRes = await request(app)
        .get('/api/work-items/wi-102')
        .set('x-user-id', 'usr_carol');
      
      expect(getRes.status).toBe(200);
      const currentVersion = getRes.body.workItem.version;

      // 2. Carol updates with matching version
      const patchRes = await request(app)
        .patch('/api/work-items/wi-102')
        .set('x-user-id', 'usr_carol')
        .send({
          priority: 'URGENT',
          description: 'Updated memory analysis: heap dump complete',
          expectedVersion: currentVersion
        });

      expect(patchRes.status).toBe(200);
      expect(patchRes.body.version).toBe(currentVersion + 1);
    });

    it('rejects stale update with HTTP 409 Conflict when another user updated first', async () => {
      // 1. Fetch initial item state (both Carol and David see wi-102 in engineering)
      const initial = await request(app)
        .get('/api/work-items/wi-102')
        .set('x-user-id', 'usr_carol');
      
      const v = initial.body.workItem.version;

      // 2. Carol updates the ticket to version v + 1
      const carolUpdate = await request(app)
        .patch('/api/work-items/wi-102')
        .set('x-user-id', 'usr_carol')
        .send({
          priority: 'URGENT',
          expectedVersion: v
        });
      expect(carolUpdate.status).toBe(200);
      expect(carolUpdate.body.version).toBe(v + 1);

      // 3. David (who was viewing the older version v) tries to update with expectedVersion: v
      const davidUpdate = await request(app)
        .patch('/api/work-items/wi-102')
        .set('x-user-id', 'usr_david')
        .send({
          description: 'David overwriting with stale description',
          expectedVersion: v
        });

      // Assert: David's update MUST be rejected with 409 Conflict
      expect(davidUpdate.status).toBe(409);
      expect(davidUpdate.body.code).toBe('VERSION_CONFLICT');
      expect(davidUpdate.body.currentVersion).toBe(v + 1);
      expect(davidUpdate.body.expectedVersion).toBe(v);
      expect(davidUpdate.body.currentItem).toBeDefined();
    });
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 2: ATOMIC CLAIM RACE CONDITION HANDLING
  // =========================================================================
  describe('Critical Behavior 2: Concurrent Claim Collision Protection', () => {
    it('ensures exactly one user succeeds in claiming an unassigned item', async () => {
      // wi-103 is unassigned with version 1
      const getRes = await request(app).get('/api/work-items/wi-103');
      expect(getRes.body.workItem.assignee_id).toBeNull();
      const version = getRes.body.workItem.version;

      // Simulate simultaneous requests by Alice and Frank
      const [res1, res2] = await Promise.all([
        request(app)
          .post('/api/work-items/wi-103/claim')
          .set('x-user-id', 'usr_elena') // Compliance Lead
          .send({ expectedVersion: version }),
        request(app)
          .post('/api/work-items/wi-103/claim')
          .set('x-user-id', 'usr_alice') // Admin/Cross-operator
          .send({ expectedVersion: version })
      ]);

      const statuses = [res1.status, res2.status];
      // One must succeed (200) and the other must be rejected (409)
      expect(statuses).toContain(200);
      expect(statuses).toContain(409);

      const conflictRes = res1.status === 409 ? res1 : res2;
      expect(conflictRes.body.error).toBe('Claim Collision');
      expect(conflictRes.body.currentAssignee).toBeDefined();

      // Database verification
      const finalState = await request(app).get('/api/work-items/wi-103');
      expect(finalState.body.workItem.assignee_id).not.toBeNull();
    });

    it('handles 20 parallel claims on an unassigned item: exactly one succeeds and 19 fail', async () => {
      const getRes = await request(app).get('/api/work-items/wi-106');
      const version = getRes.body.workItem.version;

      const promises = Array.from({ length: 20 }, () =>
        request(app)
          .post('/api/work-items/wi-106/claim')
          .set('x-user-id', 'usr_grace')
          .send({ expectedVersion: version })
      );

      const results = await Promise.all(promises);
      const successes = results.filter(r => r.status === 200);
      const conflicts = results.filter(r => r.status === 409);

      expect(successes.length).toBe(1);
      expect(conflicts.length).toBe(19);
    });
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 3: IDEMPOTENT REQUESTS & REPLAY PROTECTION
  // =========================================================================
  describe('Critical Behavior 3: Idempotency Protection', () => {
    it('returns identical cached response on replayed request with same Idempotency-Key', async () => {
      const idempotencyKey = 'test-idemp-key-' + Date.now();
      const payload = {
        title: 'Network latency spike on Redis cluster',
        description: 'Redis latency elevated to 140ms in ap-south-1 zone a',
        category: 'PRODUCTION_INCIDENT',
        priority: 'URGENT',
        team_id: 'engineering'
      };

      // 1. Initial Request
      const firstRes = await request(app)
        .post('/api/work-items')
        .set('x-user-id', 'usr_carol')
        .set('Idempotency-Key', idempotencyKey)
        .send(payload);

      expect(firstRes.status).toBe(201);
      const createdId = firstRes.body.id;
      expect(firstRes.headers['x-idempotent-replay']).toBeUndefined();

      // 2. Duplicate / Retried Request with same key and payload
      const secondRes = await request(app)
        .post('/api/work-items')
        .set('x-user-id', 'usr_carol')
        .set('Idempotency-Key', idempotencyKey)
        .send(payload);

      expect(secondRes.status).toBe(201);
      expect(secondRes.headers['x-idempotent-replay']).toBe('true');
      expect(secondRes.body.id).toBe(createdId);

      // Verify no duplicate items created in DB
      const db = getDatabase();
      const count = db.prepare('SELECT COUNT(*) as c FROM work_items WHERE title = ?').get(payload.title) as { c: number };
      expect(count.c).toBe(1);
    });

    it('rejects idempotency key reuse with mismatched payload', async () => {
      const idempotencyKey = 'mismatch-key-' + Date.now();

      await request(app)
        .post('/api/work-items')
        .set('x-user-id', 'usr_carol')
        .set('Idempotency-Key', idempotencyKey)
        .send({
          title: 'Initial Title',
          description: 'Initial description',
          category: 'ENGINEERING_BUG',
          priority: 'LOW',
          team_id: 'engineering'
        });

      // Send DIFFERENT body with SAME key
      const conflictRes = await request(app)
        .post('/api/work-items')
        .set('x-user-id', 'usr_carol')
        .set('Idempotency-Key', idempotencyKey)
        .send({
          title: 'Tampered Title',
          description: 'Different description',
          category: 'ENGINEERING_BUG',
          priority: 'HIGH',
          team_id: 'engineering'
        });

      expect(conflictRes.status).toBe(422);
      expect(conflictRes.body.code).toBe('IDEMPOTENCY_PAYLOAD_MISMATCH');
    });
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 4: WORKFLOW RULES & SEPARATION OF DUTIES
  // =========================================================================
  describe('Critical Behavior 4: State Machine Invariants & Separation of Duties', () => {
    it('blocks illegal state transition from OPEN directly to RESOLVED without triage/progress', async () => {
      // wi-106 is OPEN
      const getRes = await request(app).get('/api/work-items/wi-106');
      const v = getRes.body.workItem.version;

      const res = await request(app)
        .patch('/api/work-items/wi-106')
        .set('x-user-id', 'usr_grace')
        .send({
          status: 'RESOLVED',
          resolution_summary: 'Trying to skip steps',
          expectedVersion: v
        });

      expect(res.status).toBe(422);
      expect(res.body.error).toBe('Workflow Rule Violation');
    });

    it('enforces mandatory Lead approval for high-risk payment investigations', async () => {
      // wi-101 is a PAYMENT_INVESTIGATION in PENDING_APPROVAL assigned to Bob
      const item = await request(app).get('/api/work-items/wi-101');
      const v = item.body.workItem.version;

      // 1. Bob (Operator) tries to approve -> rejected because not a Lead
      const bobApproveRes = await request(app)
        .post('/api/work-items/wi-101/approve')
        .set('x-user-id', 'usr_bob')
        .send({
          decision: 'APPROVED',
          rationale: 'Self-approving my own transfer reversal',
          expectedVersion: v
        });

      expect(bobApproveRes.status).toBe(422);
      expect(bobApproveRes.body.message).toContain('Only Team Leads or System Administrators can approve');

      // 2. If Lead Alice was the assignee or creator, separation of duties prevents self-approval
      // Let's test separation of duties by assigning wi-101 to Alice temporarily
      const db = getDatabase();
      db.prepare('UPDATE work_items SET assignee_id = ? WHERE id = ?').run('usr_alice', 'wi-101');
      const aliceSelfApprove = await request(app)
        .post('/api/work-items/wi-101/approve')
        .set('x-user-id', 'usr_alice')
        .send({
          decision: 'APPROVED',
          rationale: 'Approving my own work',
          expectedVersion: v
        });

      expect(aliceSelfApprove.status).toBe(422);
      expect(aliceSelfApprove.body.message).toContain('Separation of Duties Violation');

      // Reset assignee back to Bob
      db.prepare('UPDATE work_items SET assignee_id = ? WHERE id = ?').run('usr_bob', 'wi-101');

      // 3. Alice (Payment Lead) reviews Bob's work and approves
      const leadApproveRes = await request(app)
        .post('/api/work-items/wi-101/approve')
        .set('x-user-id', 'usr_alice')
        .send({
          decision: 'APPROVED',
          rationale: 'Reconciliation log confirmed duplicate transfer with ICICI nodal desk. Reversal approved.',
          expectedVersion: v
        });

      expect(leadApproveRes.status).toBe(200);
      expect(leadApproveRes.body.status).toBe('RESOLVED');
      expect(leadApproveRes.body.approval_status).toBe('APPROVED');
    });
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 5: RESOURCE-LEVEL RBAC ENFORCEMENT
  // =========================================================================
  describe('Critical Behavior 5: Resource-Level RBAC Enforcement', () => {
    it('forbids VIEWER role from mutating or claiming work items', async () => {
      // Hank Pym (usr_hank) is a VIEWER in Compliance
      const item = await request(app).get('/api/work-items/wi-103');
      const v = item.body.workItem.version;

      const claimRes = await request(app)
        .post('/api/work-items/wi-103/claim')
        .set('x-user-id', 'usr_hank')
        .send({ expectedVersion: v });

      expect(claimRes.status).toBe(403);
      expect(claimRes.body.message).toContain('permission to claim');
    });

    it('forbids cross-team user without membership from modifying work items', async () => {
      // David Miller (usr_david) is only in Core Engineering, NOT in Compliance
      const item = await request(app).get('/api/work-items/wi-103'); // Compliance ticket
      const v = item.body.workItem.version;

      const updateRes = await request(app)
        .patch('/api/work-items/wi-103')
        .set('x-user-id', 'usr_david')
        .send({
          priority: 'LOW',
          expectedVersion: v
        });

      expect(updateRes.status).toBe(403);
      expect(updateRes.body.message).toContain('permission to modify');
    });
  });

  // =========================================================================
  // CRITICAL BEHAVIOR 6: TRANSACTIONAL OUTBOX & ASYNC PROCESSING
  // =========================================================================
  describe('Critical Behavior 6: Transactional Outbox Pattern & Failure Handling', () => {
    it('creates an outbox event in the same transaction when a work item is created', async () => {
      const res = await request(app)
        .post('/api/work-items')
        .set('x-user-id', 'usr_carol')
        .send({
          title: 'High CPU on Worker Node 04',
          description: 'Worker CPU throttling observed',
          category: 'PRODUCTION_INCIDENT',
          priority: 'HIGH',
          team_id: 'engineering'
        });

      expect(res.status).toBe(201);

      // Verify outbox event exists
      const outboxRes = await request(app).get('/api/outbox');
      expect(outboxRes.status).toBe(200);
      const pendingEvent = outboxRes.body.events.find((e: any) => e.payload.includes(res.body.id));
      expect(pendingEvent).toBeDefined();
    });

    it('processes outbox events and moves failing events to DEAD_LETTER after 3 retries', async () => {
      // Enqueue a simulated failure
      const failRes = await request(app).post('/api/outbox/simulate-failure');
      const eventId = failRes.body.eventId;

      // Run 3 processing cycles
      for (let i = 0; i < 3; i++) {
        await outboxWorkerInstance.processPendingEvents();
      }

      // Check event status
      const db = getDatabase();
      const event = db.prepare('SELECT * FROM outbox_events WHERE id = ?').get(eventId) as any;
      expect(event.retry_count).toBe(3);
      expect(event.status).toBe('DEAD_LETTER');
      expect(event.last_error).toContain('Downstream external service timeout');
    });
  });
});
