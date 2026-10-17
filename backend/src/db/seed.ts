import { getDatabase } from './database';
import { v4 as uuidv4 } from 'uuid';

export function seedDatabase(db = getDatabase()) {
  const insertUser = db.prepare(`
    INSERT OR REPLACE INTO users (id, name, email, avatar, is_system_admin, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const insertTeam = db.prepare(`
    INSERT OR REPLACE INTO teams (id, name, description)
    VALUES (?, ?, ?)
  `);

  const insertMembership = db.prepare(`
    INSERT OR REPLACE INTO team_memberships (user_id, team_id, role)
    VALUES (?, ?, ?)
  `);

  const insertWorkItem = db.prepare(`
    INSERT OR REPLACE INTO work_items (
      id, title, description, category, priority, status, team_id,
      assignee_id, creator_id, requires_approval, approval_status,
      approved_by, approved_at, resolution_summary, version, due_at,
      created_at, updated_at
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
  `);

  const insertAudit = db.prepare(`
    INSERT OR REPLACE INTO audit_logs (
      id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertComment = db.prepare(`
    INSERT OR REPLACE INTO work_item_comments (
      id, work_item_id, user_id, user_name, content, is_internal, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const now = new Date().toISOString();
  const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
  const twoHoursAgo = new Date(Date.now() - 7200000).toISOString();
  const yesterday = new Date(Date.now() - 86400000).toISOString();

  const seedTransaction = db.transaction(() => {
    // Clear existing data for a clean reset
    db.prepare('DELETE FROM work_item_comments').run();
    db.prepare('DELETE FROM audit_logs').run();
    db.prepare('DELETE FROM idempotency_keys').run();
    db.prepare('DELETE FROM outbox_events').run();
    db.prepare('DELETE FROM work_items').run();
    db.prepare('DELETE FROM team_memberships').run();
    db.prepare('DELETE FROM users').run();
    db.prepare('DELETE FROM teams').run();

    // 1. Teams
    const teams = [
      { id: 'payments', name: 'Payments & Settlement', description: 'Payment gateway reconciliation, chargebacks, high-value transfers' },
      { id: 'engineering', name: 'Core Engineering', description: 'Platform bugs, infrastructure incidents, API performance' },
      { id: 'compliance', name: 'Risk & Compliance', description: 'AML checks, regulatory audits, account sanctions' },
      { id: 'support', name: 'Customer Support Escalations', description: 'Tier 2 & 3 customer escalation tickets' },
      { id: 'operations', name: 'Internal Operations', description: 'Vendor approvals, access provisioning, internal tooling' }
    ];

    for (const t of teams) {
      insertTeam.run(t.id, t.name, t.description);
    }

    // 2. Users
    const users = [
      { id: 'usr_alice', name: 'Alice Vance (Payment Lead)', email: 'alice@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', admin: 0 },
      { id: 'usr_bob', name: 'Bob Smith (Payment Operator)', email: 'bob@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', admin: 0 },
      { id: 'usr_carol', name: 'Carol Danvers (Engineering Lead)', email: 'carol@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', admin: 0 },
      { id: 'usr_david', name: 'David Miller (Engineer)', email: 'david@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100', admin: 0 },
      { id: 'usr_elena', name: 'Elena Rostova (Compliance Officer)', email: 'elena@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', admin: 0 },
      { id: 'usr_frank', name: 'Frank Castle (Support Specialist)', email: 'frank@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', admin: 0 },
      { id: 'usr_grace', name: 'Grace Hopper (System Admin)', email: 'admin@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', admin: 1 },
      { id: 'usr_hank', name: 'Hank Pym (External Auditor)', email: 'hank@newtonite.internal', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', admin: 0 }
    ];

    for (const u of users) {
      insertUser.run(u.id, u.name, u.email, u.avatar, u.admin, yesterday);
    }

    // 3. Team Memberships
    const memberships = [
      { user_id: 'usr_alice', team_id: 'payments', role: 'LEAD' },
      { user_id: 'usr_bob', team_id: 'payments', role: 'OPERATOR' },
      { user_id: 'usr_carol', team_id: 'engineering', role: 'LEAD' },
      { user_id: 'usr_david', team_id: 'engineering', role: 'OPERATOR' },
      { user_id: 'usr_elena', team_id: 'compliance', role: 'LEAD' },
      { user_id: 'usr_frank', team_id: 'support', role: 'OPERATOR' },
      { user_id: 'usr_grace', team_id: 'operations', role: 'LEAD' },
      { user_id: 'usr_hank', team_id: 'compliance', role: 'VIEWER' },
      { user_id: 'usr_alice', team_id: 'operations', role: 'OPERATOR' } // Cross-team
    ];

    for (const m of memberships) {
      insertMembership.run(m.user_id, m.team_id, m.role);
    }

    // 4. Seed Work Items
    const items = [
      {
        id: 'wi-101',
        title: 'Duplicate settlement payout detected for Merchant #4829',
        description: 'Payment reconciliation caught a batch discrepancy: batch #9812 executed twice on banking gateway ICICI. Needs root cause investigation, reversal of ₹450,000, and approval before ledger balance adjustment.',
        category: 'PAYMENT_INVESTIGATION',
        priority: 'URGENT',
        status: 'PENDING_APPROVAL',
        team_id: 'payments',
        assignee_id: 'usr_bob',
        creator_id: 'usr_frank',
        requires_approval: 1,
        approval_status: 'PENDING',
        approved_by: null,
        approved_at: null,
        resolution_summary: null,
        version: 3,
        due_at: new Date(Date.now() + 14400000).toISOString(),
        created_at: yesterday,
        updated_at: oneHourAgo
      },
      {
        id: 'wi-102',
        title: 'Kafka Consumer Lag spike in Transaction Ingestion pipeline',
        description: 'Consumer group payment-events lag reached 42,000 messages. Worker node memory usage at 94%. Investigating memory leak after release v2.4.1.',
        category: 'PRODUCTION_INCIDENT',
        priority: 'URGENT',
        status: 'IN_PROGRESS',
        team_id: 'engineering',
        assignee_id: 'usr_david',
        creator_id: 'usr_carol',
        requires_approval: 0,
        approval_status: null,
        approved_by: null,
        approved_at: null,
        resolution_summary: null,
        version: 2,
        due_at: new Date(Date.now() + 7200000).toISOString(),
        created_at: twoHoursAgo,
        updated_at: oneHourAgo
      },
      {
        id: 'wi-103',
        title: 'Unclaimed: AML alert on beneficiary foreign remittance account',
        description: 'Automated sanction screening flagged entity AC-99214. Wire transfer of $32,000 held in escrow. Requires identity documentation verification and regulatory signoff.',
        category: 'COMPLIANCE_REVIEW',
        priority: 'HIGH',
        status: 'OPEN',
        team_id: 'compliance',
        assignee_id: null,
        creator_id: 'usr_grace',
        requires_approval: 1,
        approval_status: null,
        approved_by: null,
        approved_at: null,
        resolution_summary: null,
        version: 1,
        due_at: new Date(Date.now() + 86400000).toISOString(),
        created_at: twoHoursAgo,
        updated_at: twoHoursAgo
      },
      {
        id: 'wi-104',
        title: 'User unable to complete PAN verification during onboarding',
        description: 'Customer ticket #8841. API returned 422 "NSDL gateway timeout". User retried 4 times. Needs manual review or NSDL service ping.',
        category: 'CUSTOMER_ISSUE',
        priority: 'MEDIUM',
        status: 'TRIAGED',
        team_id: 'support',
        assignee_id: 'usr_frank',
        creator_id: 'usr_frank',
        requires_approval: 0,
        approval_status: null,
        approved_by: null,
        approved_at: null,
        resolution_summary: null,
        version: 2,
        due_at: new Date(Date.now() + 172800000).toISOString(),
        created_at: yesterday,
        updated_at: yesterday
      },
      {
        id: 'wi-105',
        title: 'Database connection pool saturation on Read-Replica 02',
        description: 'Read replica 02 maxed out at 200 concurrent connections due to unindexed reporting query. Query was terminated and index idx_audit_created added.',
        category: 'ENGINEERING_BUG',
        priority: 'HIGH',
        status: 'RESOLVED',
        team_id: 'engineering',
        assignee_id: 'usr_carol',
        creator_id: 'usr_carol',
        requires_approval: 0,
        approval_status: null,
        approved_by: null,
        approved_at: null,
        resolution_summary: 'Optimized analytics query with compound index idx_audit_created and bounded time range to 30 days max. Pool utilization dropped to 18%.',
        version: 4,
        due_at: yesterday,
        created_at: yesterday,
        updated_at: oneHourAgo
      },
      {
        id: 'wi-106',
        title: 'Annual SOC2 Type II penetration testing contractor access',
        description: 'Requesting temporary production-mirror VPN tunnel and test credentials for external security firm Bishop Fox.',
        category: 'OPERATIONAL_APPROVAL',
        priority: 'MEDIUM',
        status: 'OPEN',
        team_id: 'operations',
        assignee_id: null,
        creator_id: 'usr_carol',
        requires_approval: 1,
        approval_status: null,
        approved_by: null,
        approved_at: null,
        resolution_summary: null,
        version: 1,
        due_at: new Date(Date.now() + 259200000).toISOString(),
        created_at: now,
        updated_at: now
      }
    ];

    for (const item of items) {
      insertWorkItem.run(
        item.id, item.title, item.description, item.category, item.priority,
        item.status, item.team_id, item.assignee_id, item.creator_id,
        item.requires_approval, item.approval_status, item.approved_by,
        item.approved_at, item.resolution_summary, item.version, item.due_at,
        item.created_at, item.updated_at
      );
    }

    // 5. Seed Audit Logs
    insertAudit.run(
      uuidv4(), 'wi-101', 'usr_frank', 'Frank Castle', 'CREATED',
      null, JSON.stringify({ status: 'OPEN', priority: 'URGENT' }),
      'Created work item from payment batch failure alert', yesterday
    );
    insertAudit.run(
      uuidv4(), 'wi-101', 'usr_bob', 'Bob Smith', 'CLAIMED',
      JSON.stringify({ assignee_id: null }), JSON.stringify({ assignee_id: 'usr_bob' }),
      'Claimed ownership of the payment investigation', twoHoursAgo
    );
    insertAudit.run(
      uuidv4(), 'wi-101', 'usr_bob', 'Bob Smith', 'APPROVAL_REQUESTED',
      JSON.stringify({ status: 'IN_PROGRESS' }), JSON.stringify({ status: 'PENDING_APPROVAL' }),
      'Submitted reversal proposal of ₹450,000 for Lead approval', oneHourAgo
    );

    // Comments
    insertComment.run(
      uuidv4(), 'wi-101', 'usr_bob', 'Bob Smith',
      'I spoke with ICICI nodal desk. They confirmed batch #9812 was re-sent due to network timeout at 03:14 AM. Gateway team has acknowledged the error. Ready for Alice to sign off on ledger adjustment.',
      1, oneHourAgo
    );

    insertComment.run(
      uuidv4(), 'wi-102', 'usr_david', 'David Miller',
      'Heap dump shows 400MB of deserialized event buffers accumulating in memory. Isolating recent consumer group commit change.',
      1, oneHourAgo
    );
  });

  seedTransaction();
  console.log('Database successfully seeded with realistic operational data.');
}

if (require.main === module) {
  seedDatabase();
}
