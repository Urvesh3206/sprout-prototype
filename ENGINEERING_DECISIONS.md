# Newtonite Software Engineering Challenge
## Engineering Decisions & Architectural Trade-offs Document

**Candidate Assessment**: Operations Under Pressure — Internal Work Coordination System  
**System Name**: Newtonite OpsPulse  
**Technology Stack**: TypeScript, Node.js (Express), SQLite (WAL mode, ACID transactions), React 18, Vite, Tailwind CSS, Vitest  

---

### Executive Architecture Overview

Operations teams handle high-stakes tasks: payment discrepancies, production incidents, fraud alerts, and compliance approvals. When coordinate through chat threads, spreadsheets, and emails, critical items vanish, multiple people collide on the same task, and stale data overwrites fresh decisions.

This system replaces that fragmented workflow with a **high-integrity operational coordination engine** designed to guarantee correctness under concurrent human interaction and network pressure.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Newtonite OpsPulse UI                           │
│  (Persona Switcher | Attention Queue | OCC Diff Modal | Outbox Queue)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP / JSON
                                    │ (x-user-id, Idempotency-Key, If-Match)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Express API Layer                              │
│  ┌───────────────────────┐ ┌──────────────────────┐ ┌───────────────┐  │
│  │ Identity & RBAC Policy│ │Idempotency Middleware│ │OCC Version Ck │  │
│  └───────────────────────┘ └──────────────────────┘ └───────────────┘  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ ACID Transactions
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   SQLite Database Engine (WAL Mode)                    │
│  ┌──────────────┐  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  │
│  │  work_items  │  │ audit_logs  │  │ idempotency  │  │   outbox    │  │
│  │ (indexed OCC)│  │ (immutable) │  │    _keys     │  │   _events   │  │
│  └──────────────┘  └─────────────┘  └──────────────┘  └──────┬──────┘  │
└──────────────────────────────────────────────────────────────┼─────────┘
                                                               │ Polling
                                                               ▼
                                                  ┌───────────────────────┐
                                                  │ Asynchronous Outbox   │
                                                  │ Background Worker     │
                                                  │ (3x Retry, DLQ, Alerts│
                                                  └───────────────────────┘
```

---

### 1. Decision 1: Optimistic Concurrency Control (OCC) over Pessimistic Row Locking

#### The Problem
In an operations centre with hundreds of operators, users keep ticket tabs open for minutes or hours while investigating. If two operators (e.g., Alice and Bob) view Ticket #104 at the same time, a naive `UPDATE` allows Bob's stale view to overwrite Alice's newly discovered root cause and priority change without warning.

Pessimistic locking (`SELECT FOR UPDATE` or database row mutexes) was rejected because:
1. Operators take human investigation time (minutes). Holding open DB locks or long transactions across network boundaries leads to connection pool starvation, transaction timeouts, and deadlocks.
2. If an operator walks away or closes their laptop with an active row lock, other teammates are blocked indefinitely.

#### Our Solution: Atomic Version Increments & Interactive Reconciliation
Each work item record maintains a monotonically increasing integer `version`. Every update executes an atomic compare-and-swap:
```sql
UPDATE work_items
SET title = ?, status = ?, version = version + 1, updated_at = ?
WHERE id = ? AND version = ?
```
If another transaction mutated the record first, the row count is `0`. The API immediately returns **HTTP 409 Conflict** with error code `VERSION_CONFLICT`, containing:
- The user's submitted stale version (`expectedVersion`).
- The current server version (`currentVersion`).
- The full current item payload from the database.

In the frontend, this triggers a **Diff & Reconciliation Modal**. Instead of silently losing input or crashing, the operator sees what changed on the server, can compare their modifications, and reload fresh state.

---

### 2. Decision 2: Two-Phase Idempotency with Cryptographic Request Hashing

#### The Problem
Network latency spikes, flaky mobile connectivity, or impatient operators frequently trigger duplicate form submissions. In operations, duplicate requests can trigger duplicate wire refund investigations, duplicate incident pages, or unintended state double-advancement.

#### Our Solution: Database-Backed Idempotency Middleware
Mutating endpoints (`POST`, `PUT`, `PATCH`) support an `Idempotency-Key` HTTP header:
1. The incoming request body is hashed using SHA-256 (`request_hash`).
2. The server checks the `idempotency_keys` table inside an ACID transaction:
   - **Key exists & hash matches**: The previously committed response status code and JSON payload are returned immediately with the header `X-Idempotent-Replay: true`. The underlying database mutation is **not re-executed**.
   - **Key exists but hash differs**: The server rejects the request with **HTTP 422 Unprocessable Entity** (`IDEMPOTENCY_PAYLOAD_MISMATCH`), preventing key reuse attacks or bugs where a single UUID is recycled across distinct operations.
   - **Key does not exist**: The request executes normally; upon completion, the response body and status are recorded in `idempotency_keys`.

#### Trade-Off
Storing cached responses consumes database storage. In production, a TTL index (e.g. 24–48 hours) or background cleaner prunes stale keys. For an operational system, the modest storage overhead is overwhelmingly justified by the complete elimination of double-spend or duplicate ticket actions.

---

### 3. Decision 3: Atomic Claiming & Race Condition Elimination

#### The Problem
When an urgent incident or high-priority payment discrepancy arrives in the unassigned queue, multiple operators often click "Claim Ticket" simultaneously. Under standard CRUD read-then-write logic, both operators see `assignee_id = NULL`, both write their user ID, and both believe they own the investigation, leading to duplicate customer outreach and conflicting decisions.

#### Our Solution: Atomic Conditional SQL Claim
The `/api/work-items/:id/claim` endpoint enforces an atomic single-winner claim:
```sql
UPDATE work_items
SET assignee_id = :userId, status = 'IN_PROGRESS', version = version + 1, updated_at = :now
WHERE id = :id AND assignee_id IS NULL AND version = :expectedVersion
```
If two requests race:
1. Exactly one request updates the row and increments the version.
2. The losing request updates 0 rows.
3. The server inspects the winner and responds with **HTTP 409 Conflict** (`CLAIM_COLLISION`):
   ```json
   {
     "error": "Claim Collision",
     "code": "CLAIM_COLLISION",
     "message": "Claim Failed: This work item has already been claimed by Bob Smith.",
     "currentAssignee": { "id": "usr_bob", "name": "Bob Smith" }
   }
   ```
4. The losing operator's UI immediately displays who won the claim, preventing duplicated operational effort.

---

### 4. Decision 4: Server-Enforced State Machine with Separation of Duties

#### The Problem
Operational work involves strict regulatory, financial, and security boundaries. If workflow transitions are only governed by disabling buttons in React, an operator can invoke `PATCH /api/work-items/wi-101` via Postman or script to jump an unverified payment discrepancy from `OPEN` directly to `RESOLVED`, bypassing review.

#### Our Solution: Core Domain Workflow Engine (`workflowRules.ts`)
The server enforces a deterministic finite-state machine (FSM):
```
  ┌────────┐
  │  OPEN  ├──────────┬────────────────────────┐
  └───┬────┘          │                        │
      ▼               ▼                        ▼
┌───────────┐   ┌─────────────┐          ┌──────────┐
│  TRIAGED  ├──►│ IN_PROGRESS │          │ REJECTED │
└───────────┘   └──────┬──────┘          └────┬─────┘
                       │                      │
       Requires        │                      │
       Approval?       │ Normal               │
      ┌────────────────┴──────────────┐       │
      ▼                               ▼       │
┌──────────────────┐           ┌───────────┐  │
│ PENDING_APPROVAL │           │ RESOLVED  │◄─┘
└─────────┬────────┘           └─────┬─────┘
          │ (Lead/Admin Signoff)     │
          └──────────────────────────┼────────┐
                                     ▼        ▼
                               ┌──────────┐ ┌─────────────┐
                               │  CLOSED  │ │ IN_PROGRESS │ (Reopened)
                               └──────────┘ └─────────────┘
```

1. **Approval Gates**: Items with high risk (e.g. `PAYMENT_INVESTIGATION`, `COMPLIANCE_REVIEW`, or `URGENT` production incidents) **cannot** transition to `RESOLVED` directly. They must enter `PENDING_APPROVAL`.
2. **Separation of Duties (Anti-Fraud)**: The user assigned to an investigation cannot approve their own item. An independent `LEAD` in that team or a System Administrator must sign off.
3. **Mandatory Resolution Records**: Moving to `RESOLVED` strictly requires a `resolution_summary` of at least 10 characters detailing root cause and remedial actions.
4. **Authorization at Resource Level**: Viewers cannot mutate tickets; non-team members cannot make state decisions without administrative elevation.

---

### 5. Decision 5: Transactional Outbox Pattern for Resilient Asynchronous Processing

#### The Problem
When a high-priority work item is created or requires lead approval, notifications, search indexing, and webhook dispatches must occur. If these happen synchronously inside the request handler:
- External network latency (e.g., Slack or Twilio timeouts) delays user responses by seconds.
- If the notification succeeds but the database write fails (or vice versa), the system enters a split-brain state ("dual-write problem").

#### Our Solution: Transactional Outbox Worker (`outboxWorker.ts`)
1. In the **exact same database transaction** that creates or updates the work item, an event row is inserted into `outbox_events` (`id, event_type, payload, status: 'PENDING'`). Because it is ACID-local to SQLite, partial failures are physically impossible.
2. A resilient background worker (`OutboxWorker`) polls pending events:
   - Sets status to `'PROCESSING'`.
   - Dispatches downstream operations with error handling.
   - If successful: marks `'COMPLETED'` with timestamp.
   - If an error occurs: increments `retry_count`. If `retry_count >= 3`, the event is quarantined into `'DEAD_LETTER'` and logged.
3. The UI provides a live **Outbox Monitor** where operators and engineers can inspect the async pipeline, trigger manual worker cycles, or simulate downstream failures to verify Dead-Letter Queue (DLQ) behavior.

---

### Scale Strategy: Tens of Thousands of Items & Thousands of Users

The brief specifies designing for growth without loading entire datasets into memory:
1. **Database WAL Mode & Indices**: SQLite WAL (`Write-Ahead Logging`) allows concurrent readers without blocking writers. Targeted B-tree indices on `(team_id, status)`, `priority`, `assignee_id`, and `created_at` ensure sub-millisecond query planning across 100,000+ rows.
2. **Server-Side Pagination & Bounded Windows**: The API strictly enforces `limit` (max 100) and `offset` pagination. The frontend never loads the full database, preventing browser memory leaks.
3. **Audit History Partitioning**: Comments and audit logs are queried on-demand by `work_item_id` when viewing details, keeping queue listings lightweight.

---

### What Was Intentionally Not Built & Known Limitations

To deliver maximum depth on correctness and concurrency within the assessment timeframe, the following trade-offs were made:
1. **Mock Identity Header vs Full OIDC/OAuth2**: Instead of requiring a complete Auth0 or Keycloak SSO setup, authentication uses an `x-user-id` header with a persona switcher UI. This makes exploring multi-role behavior (Alice = Lead, Bob = Operator, Hank = Viewer) instantaneous for evaluators while maintaining full server-side permission enforcement.
2. **Embedded Transactional Outbox vs External Kafka/RabbitMQ**: Rather than requiring Redis or Kafka daemons running locally, we built an ACID SQLite outbox table and worker. This demonstrates identical at-least-once delivery, retry exponential backoff, and dead-letter semantics with zero external setup friction.
3. **WebSockets vs Reactive Polling**: The client polls outbox and item updates. In a production deployment with 5,000 active concurrent operators, an SSE (Server-Sent Events) or WebSocket gateway (e.g. Redis Pub/Sub) would push delta events to open tabs.
