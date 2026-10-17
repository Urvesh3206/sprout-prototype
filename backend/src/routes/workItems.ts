import { Router, Response } from 'express';
import { z } from 'zod';
import { 
  workItemService, 
  ConcurrencyConflictError, 
  ClaimConflictError, 
  WorkflowValidationError 
} from '../services/workItemService';
import { AuthenticatedRequest } from '../middleware/auth';
import { getDatabase } from '../db/database';

export const workItemsRouter = Router();

const createWorkItemSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.enum([
    'CUSTOMER_ISSUE', 
    'ENGINEERING_BUG', 
    'PAYMENT_INVESTIGATION', 
    'PRODUCTION_INCIDENT', 
    'COMPLIANCE_REVIEW', 
    'OPERATIONAL_APPROVAL'
  ]),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']),
  team_id: z.string().min(1, 'Team is required'),
  assignee_id: z.string().optional().nullable(),
  due_at: z.string().optional().nullable()
});

const updateWorkItemSchema = z.object({
  title: z.string().min(5).max(200).optional(),
  description: z.string().min(10).optional(),
  category: z.enum([
    'CUSTOMER_ISSUE', 
    'ENGINEERING_BUG', 
    'PAYMENT_INVESTIGATION', 
    'PRODUCTION_INCIDENT', 
    'COMPLIANCE_REVIEW', 
    'OPERATIONAL_APPROVAL'
  ]).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  status: z.enum([
    'OPEN', 
    'TRIAGED', 
    'IN_PROGRESS', 
    'PENDING_APPROVAL', 
    'RESOLVED', 
    'CLOSED', 
    'REJECTED'
  ]).optional(),
  assignee_id: z.string().nullable().optional(),
  resolution_summary: z.string().optional(),
  due_at: z.string().nullable().optional(),
  expectedVersion: z.number().int().min(1)
});

// GET /api/work-items
workItemsRouter.get('/', (req, res) => {
  try {
    const { 
      team_id, 
      status, 
      priority, 
      category, 
      assignee_id, 
      unassigned_only, 
      requires_attention, 
      search, 
      limit, 
      offset 
    } = req.query;

    const result = workItemService.list({
      team_id: team_id as string,
      status: status as string,
      priority: priority as string,
      category: category as string,
      assignee_id: assignee_id as string,
      unassigned_only: unassigned_only === 'true',
      requires_attention: requires_attention === 'true',
      search: search as string,
      limit: limit ? parseInt(limit as string, 10) : 20,
      offset: offset ? parseInt(offset as string, 10) : 0
    });

    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// GET /api/work-items/:id
workItemsRouter.get('/:id', (req, res) => {
  try {
    const details = workItemService.getById(req.params.id);
    if (!details) {
      return res.status(404).json({ error: 'Not Found', message: `Work item '${req.params.id}' was not found.` });
    }
    // Set ETag header for caching & OCC verification
    res.setHeader('ETag', `"v${details.workItem.version}"`);
    res.json(details);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// POST /api/work-items
workItemsRouter.post('/', (req, res) => {
  const authReq = req as unknown as AuthenticatedRequest;
  const parseResult = createWorkItemSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: parseResult.error.flatten().fieldErrors
    });
  }

  try {
    const created = workItemService.create(parseResult.data, authReq.user);
    res.status(201).json(created);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// PATCH /api/work-items/:id
workItemsRouter.patch('/:id', (req, res) => {
  const authReq = req as unknown as AuthenticatedRequest;

  // Read expected version from body or If-Match header
  let expectedVersion = req.body.expectedVersion;
  if (!expectedVersion && req.headers['if-match']) {
    const match = (req.headers['if-match'] as string).replace(/["v]/g, '');
    expectedVersion = parseInt(match, 10);
  }

  const parseResult = updateWorkItemSchema.safeParse({ ...req.body, expectedVersion });
  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: parseResult.error.flatten().fieldErrors
    });
  }

  try {
    const updated = workItemService.update(
      req.params.id,
      parseResult.data,
      parseResult.data.expectedVersion,
      authReq.user,
      authReq.memberships
    );
    res.setHeader('ETag', `"v${updated.version}"`);
    res.json(updated);
  } catch (error: any) {
    if (error instanceof ConcurrencyConflictError) {
      return res.status(409).json({
        error: 'Conflict: Stale State Detected (OCC)',
        code: 'VERSION_CONFLICT',
        message: error.message,
        expectedVersion: error.expectedVersion,
        currentVersion: error.currentVersion,
        currentItem: error.currentItem
      });
    }

    if (error instanceof WorkflowValidationError) {
      return res.status(422).json({
        error: 'Workflow Rule Violation',
        code: 'INVALID_TRANSITION',
        message: error.message,
        requiresApprovalGate: error.requiresApprovalGate
      });
    }

    if (error.message.startsWith('Forbidden:')) {
      return res.status(403).json({ error: 'Forbidden', message: error.message });
    }

    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// POST /api/work-items/:id/claim
workItemsRouter.post('/:id/claim', (req, res) => {
  const authReq = req as unknown as AuthenticatedRequest;
  const expectedVersion = req.body.expectedVersion;

  if (typeof expectedVersion !== 'number') {
    return res.status(400).json({
      error: 'Validation Error',
      message: 'Field "expectedVersion" (integer) is required to safely claim without race conditions.'
    });
  }

  try {
    const claimed = workItemService.claim(
      req.params.id,
      expectedVersion,
      authReq.user,
      authReq.memberships
    );
    res.json(claimed);
  } catch (error: any) {
    if (error instanceof ClaimConflictError) {
      return res.status(409).json({
        error: 'Claim Collision',
        code: 'CLAIM_COLLISION',
        message: error.message,
        currentAssignee: error.currentAssignee
      });
    }

    if (error instanceof ConcurrencyConflictError) {
      return res.status(409).json({
        error: 'Concurrent Update Conflict',
        code: 'VERSION_CONFLICT',
        message: error.message,
        currentItem: error.currentItem
      });
    }

    if (error.message.startsWith('Forbidden:')) {
      return res.status(403).json({ error: 'Forbidden', message: error.message });
    }

    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// POST /api/work-items/:id/approve
workItemsRouter.post('/:id/approve', (req, res) => {
  const authReq = req as unknown as AuthenticatedRequest;
  const { decision, rationale, expectedVersion } = req.body;

  if (!['APPROVED', 'REJECTED'].includes(decision)) {
    return res.status(400).json({ error: 'Invalid decision: must be APPROVED or REJECTED.' });
  }

  if (!rationale || typeof rationale !== 'string' || rationale.trim().length < 5) {
    return res.status(400).json({ error: 'A valid rationale (minimum 5 characters) is required for compliance sign-off.' });
  }

  if (typeof expectedVersion !== 'number') {
    return res.status(400).json({ error: 'Field "expectedVersion" is required.' });
  }

  try {
    const result = workItemService.decideApproval(
      req.params.id,
      decision,
      rationale.trim(),
      expectedVersion,
      authReq.user,
      authReq.memberships
    );
    res.json(result);
  } catch (error: any) {
    if (error instanceof ConcurrencyConflictError) {
      return res.status(409).json({
        error: 'Conflict: Ticket state changed concurrently',
        code: 'VERSION_CONFLICT',
        message: error.message,
        currentItem: error.currentItem
      });
    }

    if (error instanceof WorkflowValidationError) {
      return res.status(422).json({
        error: 'Approval Rule Violation',
        code: 'APPROVAL_RULE_VIOLATION',
        message: error.message
      });
    }

    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// POST /api/work-items/:id/comments
workItemsRouter.post('/:id/comments', (req, res) => {
  const authReq = req as unknown as AuthenticatedRequest;
  const { content, is_internal } = req.body;

  if (!content || typeof content !== 'string' || content.trim().length === 0) {
    return res.status(400).json({ error: 'Comment content cannot be empty.' });
  }

  try {
    const comment = workItemService.addComment(
      req.params.id,
      content.trim(),
      is_internal !== false,
      authReq.user
    );
    res.status(201).json(comment);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// POST /api/work-items/:id/simulate-conflict (DEMO & TESTING HELPER)
// Simulates an edit happening from another user in the background
workItemsRouter.post('/:id/simulate-conflict', (req, res) => {
  const db = getDatabase();
  const current = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(req.params.id) as any;
  if (!current) {
    return res.status(404).json({ error: 'Not Found' });
  }

  const now = new Date().toISOString();
  db.prepare(`
    UPDATE work_items 
    SET version = version + 1, 
        description = description || ' [Background update by System Monitor]',
        updated_at = ?
    WHERE id = ?
  `).run(now, req.params.id);

  db.prepare(`
    INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
    VALUES (?, ?, 'usr_sys', 'Simulated Concurrent Actor', 'UPDATED', null, null, 'Background change simulated for OCC test', ?)
  `).run(require('uuid').v4(), req.params.id, now);

  res.json({
    message: `Work item ${req.params.id} version incremented in background from ${current.version} to ${current.version + 1}.`,
    newVersion: current.version + 1
  });
});
