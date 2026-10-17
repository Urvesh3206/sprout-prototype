import { getDatabase } from '../db/database';
import { v4 as uuidv4 } from 'uuid';
import { 
  WorkItem, 
  User, 
  TeamRole, 
  AuditLog, 
  WorkItemComment, 
  Category, 
  Priority, 
  Status 
} from '../types';
import { 
  validateStateTransition, 
  validateApprovalAction, 
  isApprovalMandatory 
} from './workflowRules';
import { outboxWorkerInstance } from './outboxWorker';
import { getUserRoleInTeam, hasTeamRole } from '../middleware/auth';

export class ConcurrencyConflictError extends Error {
  public currentItem: WorkItem;
  public expectedVersion: number;
  public currentVersion: number;

  constructor(currentItem: WorkItem, expectedVersion: number) {
    super(`Conflict: Work item was modified by another user. Your version: ${expectedVersion}, Current version: ${currentItem.version}.`);
    this.name = 'ConcurrencyConflictError';
    this.currentItem = currentItem;
    this.expectedVersion = expectedVersion;
    this.currentVersion = currentItem.version;
  }
}

export class ClaimConflictError extends Error {
  public currentAssignee: { id: string; name: string } | null;

  constructor(currentAssignee: { id: string; name: string } | null) {
    super(currentAssignee 
      ? `Claim Failed: This work item has already been claimed by ${currentAssignee.name}.`
      : 'Claim Failed: Concurrent modification detected while claiming.');
    this.name = 'ClaimConflictError';
    this.currentAssignee = currentAssignee;
  }
}

export class WorkflowValidationError extends Error {
  public requiresApprovalGate?: boolean;

  constructor(message: string, requiresApprovalGate?: boolean) {
    super(message);
    this.name = 'WorkflowValidationError';
    this.requiresApprovalGate = requiresApprovalGate;
  }
}

export interface ListWorkItemsParams {
  team_id?: string;
  status?: string;
  priority?: string;
  category?: string;
  assignee_id?: string;
  unassigned_only?: boolean;
  requires_attention?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
  current_user_id?: string;
}

export class WorkItemService {
  /**
   * List work items with server-side pagination, indexed filtering, and search
   */
  public list(params: ListWorkItemsParams) {
    const db = getDatabase();
    const limit = Math.min(Math.max(params.limit || 20, 1), 100);
    const offset = Math.max(params.offset || 0, 0);

    let whereClauses: string[] = ['1=1'];
    const queryParams: any[] = [];

    if (params.team_id) {
      whereClauses.push('w.team_id = ?');
      queryParams.push(params.team_id);
    }

    if (params.status) {
      whereClauses.push('w.status = ?');
      queryParams.push(params.status);
    }

    if (params.priority) {
      whereClauses.push('w.priority = ?');
      queryParams.push(params.priority);
    }

    if (params.category) {
      whereClauses.push('w.category = ?');
      queryParams.push(params.category);
    }

    if (params.assignee_id) {
      whereClauses.push('w.assignee_id = ?');
      queryParams.push(params.assignee_id);
    } else if (params.unassigned_only) {
      whereClauses.push('w.assignee_id IS NULL');
    }

    if (params.requires_attention) {
      // Items that are PENDING_APPROVAL, or URGENT and unassigned, or OPEN with due date nearing
      whereClauses.push(`(
        w.status = 'PENDING_APPROVAL' 
        OR (w.priority = 'URGENT' AND w.status IN ('OPEN', 'TRIAGED'))
        OR (w.assignee_id IS NULL AND w.status = 'OPEN')
      )`);
    }

    if (params.search && params.search.trim() !== '') {
      whereClauses.push('(w.title LIKE ? OR w.description LIKE ? OR w.id LIKE ?)');
      const term = `%${params.search.trim()}%`;
      queryParams.push(term, term, term);
    }

    const whereSql = whereClauses.join(' AND ');

    // Total count for pagination
    const countRow = db.prepare(`
      SELECT COUNT(*) as total
      FROM work_items w
      WHERE ${whereSql}
    `).get(...queryParams) as { total: number };

    // Fetch items with joined names
    const items = db.prepare(`
      SELECT 
        w.*,
        t.name as team_name,
        u_assignee.name as assignee_name,
        u_creator.name as creator_name
      FROM work_items w
      LEFT JOIN teams t ON w.team_id = t.id
      LEFT JOIN users u_assignee ON w.assignee_id = u_assignee.id
      LEFT JOIN users u_creator ON w.creator_id = u_creator.id
      WHERE ${whereSql}
      ORDER BY 
        CASE w.priority 
          WHEN 'URGENT' THEN 1 
          WHEN 'HIGH' THEN 2 
          WHEN 'MEDIUM' THEN 3 
          WHEN 'LOW' THEN 4 
        END ASC,
        w.created_at DESC
      LIMIT ? OFFSET ?
    `).all(...queryParams, limit, offset) as WorkItem[];

    return {
      items,
      total: countRow.total,
      limit,
      offset,
      hasMore: offset + items.length < countRow.total
    };
  }

  /**
   * Get single work item with full details, audit history, and comments
   */
  public getById(id: string): { workItem: WorkItem; auditLogs: AuditLog[]; comments: WorkItemComment[] } | null {
    const db = getDatabase();

    const workItem = db.prepare(`
      SELECT 
        w.*,
        t.name as team_name,
        u_assignee.name as assignee_name,
        u_creator.name as creator_name,
        u_approver.name as approved_by_name
      FROM work_items w
      LEFT JOIN teams t ON w.team_id = t.id
      LEFT JOIN users u_assignee ON w.assignee_id = u_assignee.id
      LEFT JOIN users u_creator ON w.creator_id = u_creator.id
      LEFT JOIN users u_approver ON w.approved_by = u_approver.id
      WHERE w.id = ?
    `).get(id) as WorkItem | undefined;

    if (!workItem) return null;

    const auditLogs = db.prepare(`
      SELECT * FROM audit_logs
      WHERE work_item_id = ?
      ORDER BY created_at DESC
    `).all(id) as AuditLog[];

    const comments = db.prepare(`
      SELECT * FROM work_item_comments
      WHERE work_item_id = ?
      ORDER BY created_at ASC
    `).all(id) as WorkItemComment[];

    return { workItem, auditLogs, comments };
  }

  /**
   * Create a new work item with audit logging and asynchronous notification dispatch
   */
  public create(
    data: {
      title: string;
      description: string;
      category: Category;
      priority: Priority;
      team_id: string;
      assignee_id?: string | null;
      due_at?: string | null;
    },
    creator: User
  ): WorkItem {
    const db = getDatabase();
    const id = `wi-${Math.floor(100 + Math.random() * 900)}`;
    const now = new Date().toISOString();
    const requiresApproval = isApprovalMandatory(data.category, data.priority) ? 1 : 0;

    const item: WorkItem = {
      id,
      title: data.title,
      description: data.description,
      category: data.category,
      priority: data.priority,
      status: 'OPEN',
      team_id: data.team_id,
      assignee_id: data.assignee_id || null,
      creator_id: creator.id,
      requires_approval: requiresApproval,
      approval_status: null,
      approved_by: null,
      approved_at: null,
      resolution_summary: null,
      version: 1,
      due_at: data.due_at || null,
      created_at: now,
      updated_at: now
    };

    const createTx = db.transaction(() => {
      db.prepare(`
        INSERT INTO work_items (
          id, title, description, category, priority, status,
          team_id, assignee_id, creator_id, requires_approval,
          approval_status, approved_by, approved_at, resolution_summary,
          version, due_at, created_at, updated_at
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
      `).run(
        item.id, item.title, item.description, item.category, item.priority, item.status,
        item.team_id, item.assignee_id, item.creator_id, item.requires_approval,
        item.approval_status, item.approved_by, item.approved_at, item.resolution_summary,
        item.version, item.due_at, item.created_at, item.updated_at
      );

      // Audit log
      db.prepare(`
        INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(), item.id, creator.id, creator.name, 'CREATED',
        null, JSON.stringify({ title: item.title, category: item.category, priority: item.priority }),
        `Created work item '${item.title}' in team ${item.team_id}`,
        now
      );

      // Enqueue asynchronous outbox event
      outboxWorkerInstance.enqueue(db, 'NOTIFICATION_DISPATCH', {
        workItemId: item.id,
        title: item.title,
        priority: item.priority,
        team_id: item.team_id
      });
    });

    createTx();
    return this.getById(id)!.workItem;
  }

  /**
   * Update work item using Optimistic Concurrency Control (OCC)
   */
  public update(
    id: string,
    updates: {
      title?: string;
      description?: string;
      category?: Category;
      priority?: Priority;
      status?: Status;
      assignee_id?: string | null;
      resolution_summary?: string;
      due_at?: string | null;
    },
    expectedVersion: number,
    actor: User,
    memberships: any[]
  ): WorkItem {
    const db = getDatabase();

    // 1. Fetch current record
    const current = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem | undefined;
    if (!current) {
      throw new Error(`Work item '${id}' not found`);
    }

    // 2. Optimistic Concurrency Check
    if (current.version !== expectedVersion) {
      throw new ConcurrencyConflictError(current, expectedVersion);
    }

    const isAdmin = actor.is_system_admin === 1;
    const userRole = getUserRoleInTeam(memberships, current.team_id);

    // Authorization check: Viewers and users outside the team cannot mutate
    if (!isAdmin && (!userRole || userRole === 'VIEWER')) {
      throw new Error(`Forbidden: You do not have permission to modify work items in team '${current.team_id}'.`);
    }

    // 3. Workflow & State Transition Validation
    const diffParts: string[] = [];
    const targetStatus = updates.status || current.status;

    if (updates.status && updates.status !== current.status) {
      const validation = validateStateTransition(current, {
        user: actor,
        userRoleInTeam: userRole,
        isAdmin,
        targetStatus: updates.status,
        resolutionSummary: updates.resolution_summary || current.resolution_summary || undefined
      });

      if (!validation.allowed) {
        throw new WorkflowValidationError(validation.reason || 'Invalid state transition', validation.requiresApprovalGate);
      }
      diffParts.push(`Status changed from ${current.status} to ${updates.status}`);
    }

    if (updates.priority && updates.priority !== current.priority) {
      diffParts.push(`Priority changed from ${current.priority} to ${updates.priority}`);
    }

    if (updates.assignee_id !== undefined && updates.assignee_id !== current.assignee_id) {
      diffParts.push(`Assignee updated to ${updates.assignee_id || 'Unassigned'}`);
    }

    if (updates.title && updates.title !== current.title) {
      diffParts.push(`Title updated`);
    }

    const now = new Date().toISOString();
    const newVersion = current.version + 1;

    // Check if category or priority triggers approval requirement
    const newCategory = updates.category || current.category;
    const newPriority = updates.priority || current.priority;
    const requiresApproval = isApprovalMandatory(newCategory, newPriority) ? 1 : current.requires_approval;

    let updatedItem: WorkItem | null = null;

    const updateTx = db.transaction(() => {
      // Atomic compare-and-swap on version
      const result = db.prepare(`
        UPDATE work_items
        SET 
          title = COALESCE(?, title),
          description = COALESCE(?, description),
          category = COALESCE(?, category),
          priority = COALESCE(?, priority),
          status = COALESCE(?, status),
          assignee_id = ?,
          resolution_summary = COALESCE(?, resolution_summary),
          due_at = COALESCE(?, due_at),
          requires_approval = ?,
          version = ?,
          updated_at = ?
        WHERE id = ? AND version = ?
      `).run(
        updates.title !== undefined ? updates.title : null,
        updates.description !== undefined ? updates.description : null,
        updates.category !== undefined ? updates.category : null,
        updates.priority !== undefined ? updates.priority : null,
        updates.status !== undefined ? updates.status : null,
        updates.assignee_id !== undefined ? updates.assignee_id : current.assignee_id,
        updates.resolution_summary !== undefined ? updates.resolution_summary : null,
        updates.due_at !== undefined ? updates.due_at : null,
        requiresApproval,
        newVersion,
        now,
        id,
        expectedVersion
      );

      if (result.changes === 0) {
        // Race condition occurred between our read and write!
        const latest = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem;
        throw new ConcurrencyConflictError(latest, expectedVersion);
      }

      // Record Audit Log
      db.prepare(`
        INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(),
        id,
        actor.id,
        actor.name,
        updates.status && updates.status !== current.status ? 'STATUS_CHANGED' : 'UPDATED',
        JSON.stringify({ status: current.status, priority: current.priority, assignee_id: current.assignee_id }),
        JSON.stringify({ status: targetStatus, priority: newPriority, assignee_id: updates.assignee_id !== undefined ? updates.assignee_id : current.assignee_id }),
        diffParts.length > 0 ? diffParts.join('; ') : 'Updated ticket details',
        now
      );

      // If status changed to PENDING_APPROVAL, dispatch alert to Team Lead
      if (updates.status === 'PENDING_APPROVAL') {
        outboxWorkerInstance.enqueue(db, 'APPROVAL_REQUIRED', {
          workItemId: id,
          title: current.title,
          requestedBy: actor.name,
          teamId: current.team_id
        });
      }
    });

    updateTx();
    return this.getById(id)!.workItem;
  }

  /**
   * Atomic Claim: guarantees that if 2 users race to claim an item, exactly one succeeds
   */
  public claim(id: string, expectedVersion: number, actor: User, memberships: any[]): WorkItem {
    const db = getDatabase();

    const current = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem | undefined;
    if (!current) {
      throw new Error(`Work item '${id}' not found`);
    }

    if (current.assignee_id) {
      const assignee = db.prepare(`SELECT id, name FROM users WHERE id = ?`).get(current.assignee_id) as { id: string; name: string };
      throw new ClaimConflictError(assignee);
    }

    const isAdmin = actor.is_system_admin === 1;
    const userRole = getUserRoleInTeam(memberships, current.team_id);

    if (!isAdmin && (!userRole || userRole === 'VIEWER')) {
      throw new Error(`Forbidden: You do not have permission to claim work items in team '${current.team_id}'.`);
    }

    const now = new Date().toISOString();
    const newVersion = current.version + 1;
    const newStatus = current.status === 'OPEN' ? 'IN_PROGRESS' : current.status;

    const claimTx = db.transaction(() => {
      const result = db.prepare(`
        UPDATE work_items
        SET assignee_id = ?, status = ?, version = ?, updated_at = ?
        WHERE id = ? AND assignee_id IS NULL AND version = ?
      `).run(
        actor.id,
        newStatus,
        newVersion,
        now,
        id,
        expectedVersion
      );

      if (result.changes === 0) {
        // Find out who claimed it in the split second
        const latest = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem;
        if (latest.assignee_id) {
          const assignee = db.prepare(`SELECT id, name FROM users WHERE id = ?`).get(latest.assignee_id) as { id: string; name: string };
          throw new ClaimConflictError(assignee);
        }
        throw new ConcurrencyConflictError(latest, expectedVersion);
      }

      db.prepare(`
        INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(),
        id,
        actor.id,
        actor.name,
        'CLAIMED',
        JSON.stringify({ assignee_id: null, status: current.status }),
        JSON.stringify({ assignee_id: actor.id, status: newStatus }),
        `Claimed ownership of ticket. Status shifted to ${newStatus}.`,
        now
      );
    });

    claimTx();
    return this.getById(id)!.workItem;
  }

  /**
   * Record Lead / Compliance Approval or Rejection decision
   */
  public decideApproval(
    id: string,
    decision: 'APPROVED' | 'REJECTED',
    rationale: string,
    expectedVersion: number,
    actor: User,
    memberships: any[]
  ): WorkItem {
    const db = getDatabase();

    const current = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem | undefined;
    if (!current) {
      throw new Error(`Work item '${id}' not found`);
    }

    if (current.version !== expectedVersion) {
      throw new ConcurrencyConflictError(current, expectedVersion);
    }

    const isAdmin = actor.is_system_admin === 1;
    const userRole = getUserRoleInTeam(memberships, current.team_id);

    const check = validateApprovalAction(current, actor, userRole, isAdmin, decision);
    if (!check.allowed) {
      throw new WorkflowValidationError(check.reason || 'Approval validation failed');
    }

    const now = new Date().toISOString();
    const newVersion = current.version + 1;
    const nextStatus: Status = decision === 'APPROVED' ? 'RESOLVED' : 'IN_PROGRESS';

    const approvalTx = db.transaction(() => {
      const result = db.prepare(`
        UPDATE work_items
        SET 
          approval_status = ?,
          approved_by = ?,
          approved_at = ?,
          status = ?,
          resolution_summary = CASE WHEN ? = 'APPROVED' THEN ? ELSE resolution_summary END,
          version = ?,
          updated_at = ?
        WHERE id = ? AND version = ?
      `).run(
        decision,
        actor.id,
        now,
        nextStatus,
        decision,
        `Approved by ${actor.name}: ${rationale}`,
        newVersion,
        now,
        id,
        expectedVersion
      );

      if (result.changes === 0) {
        const latest = db.prepare(`SELECT * FROM work_items WHERE id = ?`).get(id) as WorkItem;
        throw new ConcurrencyConflictError(latest, expectedVersion);
      }

      // Add audit log
      db.prepare(`
        INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(),
        id,
        actor.id,
        actor.name,
        decision === 'APPROVED' ? 'APPROVAL_GRANTED' : 'APPROVAL_REJECTED',
        JSON.stringify({ status: current.status, approval_status: current.approval_status }),
        JSON.stringify({ status: nextStatus, approval_status: decision }),
        `${decision === 'APPROVED' ? 'Granted approval' : 'Rejected proposal'}: "${rationale}"`,
        now
      );

      // Add a formal comment
      db.prepare(`
        INSERT INTO work_item_comments (id, work_item_id, user_id, user_name, content, is_internal, created_at)
        VALUES (?, ?, ?, ?, ?, 1, ?)
      `).run(
        uuidv4(),
        id,
        actor.id,
        actor.name,
        `[DECISION: ${decision}] ${rationale}`,
        now
      );
    });

    approvalTx();
    return this.getById(id)!.workItem;
  }

  /**
   * Add comment to work item
   */
  public addComment(
    id: string,
    content: string,
    isInternal: boolean,
    actor: User
  ): WorkItemComment {
    const db = getDatabase();
    const commentId = uuidv4();
    const now = new Date().toISOString();

    const comment: WorkItemComment = {
      id: commentId,
      work_item_id: id,
      user_id: actor.id,
      user_name: actor.name,
      content,
      is_internal: isInternal ? 1 : 0,
      created_at: now
    };

    const commentTx = db.transaction(() => {
      db.prepare(`
        INSERT INTO work_item_comments (id, work_item_id, user_id, user_name, content, is_internal, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(comment.id, comment.work_item_id, comment.user_id, comment.user_name, comment.content, comment.is_internal, comment.created_at);

      db.prepare(`
        INSERT INTO audit_logs (id, work_item_id, actor_id, actor_name, action, old_state, new_state, diff_summary, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(),
        id,
        actor.id,
        actor.name,
        'COMMENT_ADDED',
        null,
        null,
        `Added internal investigation note`,
        now
      );
    });

    commentTx();
    return comment;
  }
}

export const workItemService = new WorkItemService();
