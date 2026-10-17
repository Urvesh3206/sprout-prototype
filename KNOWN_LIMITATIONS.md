# Known Limitations & Production Scaling Roadmap

**System**: Newtonite OpsPulse  
**Assessment**: Newtonite Software Engineering Challenge (Operations Under Pressure)  

This document details the intentional scope boundaries, known edge cases, and architectural roadmap for moving this prototype to enterprise-scale production (1,000s of simultaneous users, 100,000s of active work items).

---

### 1. Database & Distributed Locking

- **Current State**: Single embedded SQLite instance using Write-Ahead Logging (WAL) and memory pragmas. Atomic compare-and-swap SQL (`WHERE id = ? AND version = ?` and `WHERE assignee_id IS NULL AND version = ?`) eliminates claim and update races with zero external infrastructure.
- **Limitation**: While SQLite WAL handles thousands of concurrent readers and thousands of writes per second on a single node, it cannot scale horizontally across multiple stateless web nodes.
- **Production Roadmap**:
  - Migrate storage engine to **PostgreSQL** with row-level locks (`FOR UPDATE SKIP LOCKED` for task queues and atomic claiming).
  - Use **PostgreSQL Read Replicas** for queue filtering, dashboard aggregates, and full-text search, keeping the primary writer reserved for mutations and event writes.

---

### 2. Client Push vs. Reactive Polling

- **Current State**: The client uses short-interval polling (3–5 seconds) for outbox status and queue counts, alongside manual and optimistic refreshes.
- **Limitation**: At 5,000 simultaneously open browser tabs, polling generates constant read load on the database even when tickets are idle.
- **Production Roadmap**:
  - Implement **Server-Sent Events (SSE)** or **WebSockets** backed by a Redis Pub/Sub channel.
  - When a work item version changes or a claim is won, publish a lightweight event `{"type": "WORK_ITEM_UPDATED", "id": "wi-101", "version": 4}`.
  - Connected browser tabs listening to that specific ticket display a live toast: *"Updated by Carol Danvers just now"* with a one-click reconcile banner.

---

### 3. Authentication & Identity Management

- **Current State**: Users authenticate via `x-user-id` header with a rapid persona switcher dropdown in the navigation bar. Resource-level RBAC is strictly enforced on the server for all operations.
- **Limitation**: Suitable for internal assessments and demos, but not for production environments without cryptographic token verification.
- **Production Roadmap**:
  - Replace the header with **OIDC / OAuth2 JWT Bearer tokens** integrated into enterprise SSO (Okta, Google Workspace, Azure AD).
  - Embed user team memberships and role claims into signed JWT claims, with cryptographic signature verification on the API gateway.

---

### 4. Asynchronous Outbox Worker & Partitioning

- **Current State**: Background polling worker queries `outbox_events` table for `PENDING` items every 3 seconds, handles retries with exponential backoff, and routes dead letters after 3 attempts.
- **Limitation**: A single polling loop can suffer from processing lag under extreme burst loads (e.g. 5,000 incident events generated in 10 seconds).
- **Production Roadmap**:
  - At scale, the transactional outbox can be connected to **Debezium** (Change Data Capture / CDC) reading Postgres WAL directly into **Apache Kafka** or **AWS SQS**.
  - Partition event streams by `team_id` or `work_item_id` to guarantee strictly ordered, non-blocking asynchronous processing across worker fleets.

---

### 5. Keyset (Cursor) Pagination vs. Offset Pagination

- **Current State**: Work items list endpoint supports indexed `limit` and `offset` pagination, combined with indexed filters on `(team_id, status)` and `priority`.
- **Limitation**: When tables exceed 500,000 rows, deep offset pagination (`OFFSET 100000`) incurs disk scan overhead.
- **Production Roadmap**:
  - Migrate to pure **Keyset (Cursor-based) Pagination** using `WHERE (created_at, id) < (:cursorCreatedAt, :cursorId) ORDER BY created_at DESC, id DESC LIMIT 20`. This ensures deterministic \(O(1)\) index seek times regardless of queue depth.

---

### 6. Audit Trail Growth & Cold Archival

- **Current State**: Every ticket mutation appends an immutable row to `audit_logs`.
- **Limitation**: In high-throughput operations, the audit log grows 10x faster than the work items table.
- **Production Roadmap**:
  - Implement monthly range partitioning on `audit_logs.created_at`.
  - Automatically archive logs older than 180 days to compressed columnar storage (e.g., ClickHouse or AWS S3 Parquet) for long-term regulatory compliance.
