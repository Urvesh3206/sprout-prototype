import { Status, Category, Priority, TeamRole, User, WorkItem } from '../types';

export interface TransitionContext {
  user: User;
  userRoleInTeam: TeamRole | null;
  isAdmin: boolean;
  targetStatus: Status;
  resolutionSummary?: string;
}

export interface TransitionValidationResult {
  allowed: boolean;
  reason?: string;
  requiresApprovalGate?: boolean;
}

const ALLOWED_TRANSITIONS: Record<Status, Status[]> = {
  OPEN: ['TRIAGED', 'IN_PROGRESS', 'REJECTED', 'CLOSED'],
  TRIAGED: ['IN_PROGRESS', 'REJECTED', 'CLOSED'],
  IN_PROGRESS: ['PENDING_APPROVAL', 'RESOLVED', 'TRIAGED', 'CLOSED'],
  PENDING_APPROVAL: ['RESOLVED', 'IN_PROGRESS', 'REJECTED'],
  RESOLVED: ['CLOSED', 'IN_PROGRESS'], // IN_PROGRESS = reopened
  CLOSED: ['OPEN'], // reopened
  REJECTED: ['OPEN']
};

/**
 * Checks if a work item inherently requires approval based on risk rules
 */
export function isApprovalMandatory(category: Category, priority: Priority): boolean {
  if (category === 'PAYMENT_INVESTIGATION' || category === 'COMPLIANCE_REVIEW') {
    return true;
  }
  if (category === 'PRODUCTION_INCIDENT' && (priority === 'URGENT' || priority === 'HIGH')) {
    return true;
  }
  if (category === 'OPERATIONAL_APPROVAL') {
    return true;
  }
  return false;
}

/**
 * Validates whether the state transition is valid under business rules and actor permissions
 */
export function validateStateTransition(
  item: WorkItem,
  ctx: TransitionContext
): TransitionValidationResult {
  const currentStatus = item.status;
  const targetStatus = ctx.targetStatus;

  // 1. Check if same state
  if (currentStatus === targetStatus) {
    return { allowed: true };
  }

  // 2. Check general state graph
  const validNextStates = ALLOWED_TRANSITIONS[currentStatus] || [];
  if (!validNextStates.includes(targetStatus)) {
    return {
      allowed: false,
      reason: `Invalid transition: cannot move from '${currentStatus}' to '${targetStatus}'. Valid target states are: ${validNextStates.join(', ')}`
    };
  }

  // 3. Reopening a closed item requires LEAD or Admin
  if (currentStatus === 'CLOSED' && targetStatus === 'OPEN') {
    if (!ctx.isAdmin && ctx.userRoleInTeam !== 'LEAD') {
      return {
        allowed: false,
        reason: 'Only Team Leads or Administrators can reopen a CLOSED item.'
      };
    }
  }

  // 4. Invariant: High-risk or approval-required items must not bypass PENDING_APPROVAL
  const requiresApproval = item.requires_approval === 1 || isApprovalMandatory(item.category, item.priority);
  
  if (targetStatus === 'RESOLVED') {
    // Check if resolution summary is provided
    if (!ctx.resolutionSummary || ctx.resolutionSummary.trim().length < 10) {
      return {
        allowed: false,
        reason: 'A detailed resolution summary (minimum 10 characters) is required to resolve a work item.'
      };
    }

    if (requiresApproval) {
      // Must come through PENDING_APPROVAL and have been approved
      if (currentStatus !== 'PENDING_APPROVAL' && item.approval_status !== 'APPROVED') {
        return {
          allowed: false,
          requiresApprovalGate: true,
          reason: `Work item of category '${item.category}' with priority '${item.priority}' requires formal Lead/Compliance approval before resolution. Move to PENDING_APPROVAL first.`
        };
      }

      if (currentStatus === 'PENDING_APPROVAL' && item.approval_status !== 'APPROVED') {
        return {
          allowed: false,
          reason: 'Cannot resolve item while approval status is not APPROVED. A designated Team Lead must record an approval decision.'
        };
      }
    }
  }

  // 5. Moving to PENDING_APPROVAL requires item to be IN_PROGRESS and assigned
  if (targetStatus === 'PENDING_APPROVAL') {
    if (!item.assignee_id) {
      return {
        allowed: false,
        reason: 'Work item must be assigned to an operator before requesting approval.'
      };
    }
  }

  return { allowed: true };
}

/**
 * Validates whether an actor can approve or reject a work item
 */
export function validateApprovalAction(
  item: WorkItem,
  user: User,
  userRoleInTeam: TeamRole | null,
  isAdmin: boolean,
  decision: 'APPROVED' | 'REJECTED'
): { allowed: boolean; reason?: string } {
  if (item.status !== 'PENDING_APPROVAL') {
    return {
      allowed: false,
      reason: `Item is currently '${item.status}'. Approvals can only be made when item is in 'PENDING_APPROVAL' status.`
    };
  }

  // Permission check: only LEAD or Admin can approve
  if (!isAdmin && userRoleInTeam !== 'LEAD') {
    return {
      allowed: false,
      reason: 'Unauthorized: Only Team Leads or System Administrators can approve or reject operational items.'
    };
  }

  // Separation of duties rule: Operator who is assigned cannot self-approve their own work
  // (unless system admin for emergency bypass)
  if (!isAdmin && item.assignee_id === user.id) {
    return {
      allowed: false,
      reason: 'Separation of Duties Violation: You cannot approve a high-risk work item that you are assigned to. Another Team Lead must review and approve it.'
    };
  }

  return { allowed: true };
}
