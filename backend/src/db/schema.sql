-- Newtonite Operations Console Schema

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar TEXT,
  is_system_admin INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS teams (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS team_memberships (
  user_id TEXT NOT NULL,
  team_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('LEAD', 'OPERATOR', 'VIEWER')),
  PRIMARY KEY (user_id, team_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS work_items (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK(category IN (
    'CUSTOMER_ISSUE', 
    'ENGINEERING_BUG', 
    'PAYMENT_INVESTIGATION', 
    'PRODUCTION_INCIDENT', 
    'COMPLIANCE_REVIEW', 
    'OPERATIONAL_APPROVAL'
  )),
  priority TEXT NOT NULL CHECK(priority IN ('LOW', 'MEDIUM', 'HIGH', 'URGENT')),
  status TEXT NOT NULL CHECK(status IN (
    'OPEN', 
    'TRIAGED', 
    'IN_PROGRESS', 
    'PENDING_APPROVAL', 
    'RESOLVED', 
    'CLOSED', 
    'REJECTED'
  )),
  team_id TEXT NOT NULL,
  assignee_id TEXT,
  creator_id TEXT NOT NULL,
  requires_approval INTEGER NOT NULL DEFAULT 0,
  approval_status TEXT CHECK(approval_status IN ('PENDING', 'APPROVED', 'REJECTED')),
  approved_by TEXT,
  approved_at TEXT,
  resolution_summary TEXT,
  version INTEGER NOT NULL DEFAULT 1,
  due_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (assignee_id) REFERENCES users(id),
  FOREIGN KEY (creator_id) REFERENCES users(id),
  FOREIGN KEY (approved_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_work_items_team_status ON work_items(team_id, status);
CREATE INDEX IF NOT EXISTS idx_work_items_assignee ON work_items(assignee_id);
CREATE INDEX IF NOT EXISTS idx_work_items_priority ON work_items(priority);
CREATE INDEX IF NOT EXISTS idx_work_items_created ON work_items(created_at DESC);

CREATE TABLE IF NOT EXISTS work_item_comments (
  id TEXT PRIMARY KEY,
  work_item_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  content TEXT NOT NULL,
  is_internal INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  FOREIGN KEY (work_item_id) REFERENCES work_items(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_comments_work_item ON work_item_comments(work_item_id, created_at ASC);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  work_item_id TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  actor_name TEXT NOT NULL,
  action TEXT NOT NULL,
  old_state TEXT,
  new_state TEXT,
  diff_summary TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (work_item_id) REFERENCES work_items(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_audit_work_item ON audit_logs(work_item_id, created_at DESC);

CREATE TABLE IF NOT EXISTS idempotency_keys (
  key TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  request_path TEXT NOT NULL,
  request_hash TEXT NOT NULL,
  status_code INTEGER NOT NULL,
  response_body TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS outbox_events (
  id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  payload TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK(status IN ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'DEAD_LETTER')),
  retry_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  created_at TEXT NOT NULL,
  processed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_outbox_status ON outbox_events(status, created_at ASC);
