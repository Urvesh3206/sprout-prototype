export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type Status = 
  | 'OPEN' 
  | 'TRIAGED' 
  | 'IN_PROGRESS' 
  | 'PENDING_APPROVAL' 
  | 'RESOLVED' 
  | 'CLOSED' 
  | 'REJECTED';

export type Category = 
  | 'CUSTOMER_ISSUE' 
  | 'ENGINEERING_BUG' 
  | 'PAYMENT_INVESTIGATION' 
  | 'PRODUCTION_INCIDENT' 
  | 'COMPLIANCE_REVIEW' 
  | 'OPERATIONAL_APPROVAL';

export type TeamRole = 'LEAD' | 'OPERATOR' | 'VIEWER';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  is_system_admin: number; // 0 or 1
  created_at: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
}

export interface TeamMembership {
  user_id: string;
  team_id: string;
  role: TeamRole;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
  team_id: string;
  assignee_id: string | null;
  creator_id: string;
  requires_approval: number; // 0 or 1
  approval_status: 'PENDING' | 'APPROVED' | 'REJECTED' | null;
  approved_by: string | null;
  approved_at: string | null;
  resolution_summary: string | null;
  version: number;
  due_at: string | null;
  created_at: string;
  updated_at: string;
  // Joined fields for view convenience
  team_name?: string;
  assignee_name?: string | null;
  creator_name?: string;
}

export interface WorkItemComment {
  id: string;
  work_item_id: string;
  user_id: string;
  user_name: string;
  content: string;
  is_internal: number;
  created_at: string;
}

export interface AuditLog {
  id: string;
  work_item_id: string;
  actor_id: string;
  actor_name: string;
  action: 
    | 'CREATED'
    | 'STATUS_CHANGED'
    | 'ASSIGNED'
    | 'CLAIMED'
    | 'PRIORITY_CHANGED'
    | 'APPROVAL_REQUESTED'
    | 'APPROVAL_GRANTED'
    | 'APPROVAL_REJECTED'
    | 'COMMENT_ADDED'
    | 'RESOLVED'
    | 'REOPENED'
    | 'UPDATED';
  old_state: string | null;
  new_state: string | null;
  diff_summary: string;
  created_at: string;
}

export interface OutboxEvent {
  id: string;
  event_type: string;
  payload: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'DEAD_LETTER';
  retry_count: number;
  last_error: string | null;
  created_at: string;
  processed_at: string | null;
}

export interface AuthContext {
  user: User;
  memberships: TeamMembership[];
}
