# Newtonite OpsPulse — Operations Under Pressure

> High-integrity operational work management and coordination platform for fast-growing teams.

Built for the **Newtonite Software Engineering Challenge**.

---

## 🌟 Key Features & Critical Behaviors

This application solves the core breakdown points of high-pressure operations:

1. **Optimistic Concurrency Control (OCC)**: Prevents stale overwrites when two employees view the same item simultaneously. Generates HTTP `409 Conflict` with visual diff reconciliation.
2. **Atomic Single-Winner Claiming**: Eliminates race conditions when multiple operators attempt to claim the same unassigned ticket at the same time.
3. **Cryptographic Idempotency**: `Idempotency-Key` header with SHA-256 payload verification caches responses and prevents duplicate double-clicks or retried network writes.
4. **Enforced State Machine & Approval Gates**: High-risk categories (`PAYMENT_INVESTIGATION`, `COMPLIANCE_REVIEW`) require formal approval by authorized Team Leads before resolution.
5. **Separation of Duties**: Anti-fraud enforcement prevents operators from approving tickets assigned to themselves.
6. **Transactional Outbox Worker**: Zero dual-write risk. Enqueues notifications and alerts within the same ACID transaction, featuring 3x retries and a Dead-Letter Queue (DLQ).
7. **Resource-Level RBAC**: Role-based access per team (`LEAD`, `OPERATOR`, `VIEWER`, `ADMIN`).
8. **Immutable Audit Timeline**: Complete chronological history of every state change, ownership assignment, and decision with actor identities.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18+ (tested on v22)
- **npm**: v9+

### 1. Setup All Dependencies
From the repository root:
```bash
npm run setup
```
*(Or run `npm install` inside both `backend` and `frontend`)*

---

### 2. Start the Full System

Run the backend and frontend in two terminal windows:

#### Terminal 1 — Backend API (Port 4000)
```bash
npm run dev:backend
```
*Starts Express API with WAL SQLite database and launches the background Outbox Worker. Automatically seeds realistic operational data on initial launch.*

#### Terminal 2 — Frontend UI (Port 5173)
```bash
npm run dev:frontend
```
*Starts Vite development server at [http://localhost:5173](http://localhost:5173)*

---

## 🧪 Running Automated Tests

Run the complete Vitest integration test suite covering all critical behaviors:
```bash
npm test
```
*(Or `npm test` inside `backend`)*

All 10 integration tests execute in **< 350ms**:
- ✅ OCC: Stale version detection and HTTP 409 Conflict rejection
- ✅ Atomic Claim: Concurrent collision handling between racing operators
- ✅ Idempotency: Duplicate request caching and replay (`X-Idempotent-Replay: true`)
- ✅ Idempotency: Payload tamper / key reuse rejection (HTTP 422)
- ✅ State Machine: Illegal state jump prevention
- ✅ Approval Gates: Mandatory Lead signoff for payment investigations
- ✅ Separation of Duties: Self-approval prevention on assigned work
- ✅ RBAC: Viewer mutation rejection (HTTP 403)
- ✅ Outbox Pattern: Atomic event persistence in DB transaction
- ✅ Worker Retries: Exponential backoff and quarantine to Dead-Letter Queue (DLQ)

---

## 🎮 How to Test Critical Behaviors Interactively in the UI

Open [http://localhost:5173](http://localhost:5173) in your browser:

### 1. Test Optimistic Concurrency Control (OCC)
1. Select any work item (e.g., `wi-102`).
2. Click the yellow button in the header: **"Simulate Concurrent Edit"**.
   - *This simulates another colleague editing the ticket in the background, incrementing the version to `v3` while your screen is still on `v2`.*
3. Now attempt to click **"Start Investigation"** or any action.
4. **Result**: The **Optimistic Concurrency Conflict Modal** immediately appears with a side-by-side diff comparing your local stale version (`v2`) with the server's fresh version (`v3`), giving you the option to review and reconcile.

### 2. Test Persona Switching & Separation of Duties
1. In the top-right header, switch persona to **Bob Smith (Payment Operator)**.
2. Select `wi-101` (*Duplicate settlement payout detected*), which is currently `PENDING_APPROVAL` and assigned to Bob.
3. Observe that Bob cannot approve it: the banner displays *"⚠️ Separation of Duties: Because you are assigned to this item, another Team Lead must grant approval."*
4. Now switch persona to **Alice Vance (Payment Lead)**.
5. Enter a rationale and click **"Approve & Resolve"**.
6. **Result**: Approval succeeds and advances the ticket to `RESOLVED`, recording Alice's signoff in the immutable audit timeline.

### 3. Test Idempotent Double-Submission
1. Click **"+ New Work Item"** in the top bar.
2. Check the box: **"Simulate Double-Click Network Retry"**.
3. Click **"Execute Double Submit Test"**.
4. **Result**: The application fires two requests with the same `Idempotency-Key`. The server returns the cached response with `X-Idempotent-Replay: true`, and exactly **one** item is created in the database.

### 4. Test Transactional Outbox & Dead-Letter Queue
1. Click the **"Outbox Worker"** pill in the navigation bar.
2. View the list of asynchronous events dispatched by the system.
3. Click **"Simulate Downstream Failure & DLQ"**.
4. Click **"Process Pending Now"** 3 times.
5. **Result**: The event retries 3 times, records the error, and automatically transitions to `DEAD_LETTER`.

---

## 📁 Repository Structure

```
/
├── README.md                     # System documentation & quickstart
├── ENGINEERING_DECISIONS.md      # 5 core architectural decisions & trade-offs
├── package.json                  # Root npm scripts
├── data/                         # SQLite operational database (WAL mode)
├── backend/
│   ├── src/
│   │   ├── server.ts             # Express bootstrap & background worker lifecycle
│   │   ├── app.ts                # Express app factory & middleware wiring
│   │   ├── db/
│   │   │   ├── database.ts       # SQLite connection with WAL mode & pragmas
│   │   │   ├── schema.sql        # Tables, foreign keys, and compound indexes
│   │   │   └── seed.ts           # Realistic operational test dataset
│   │   ├── middleware/
│   │   │   ├── auth.ts           # Identity context & resource-level RBAC
│   │   │   └── idempotency.ts    # Request hashing & response replay cache
│   │   ├── services/
│   │   │   ├── workItemService.ts# OCC updates, atomic claims, approvals, search
│   │   │   ├── workflowRules.ts  # FSM validation & separation of duties
│   │   │   └── outboxWorker.ts   # Async event processor with 3x retry & DLQ
│   │   └── routes/
│   │       ├── workItems.ts      # Work item endpoints & OCC conflict handlers
│   │       ├── teams.ts          # Teams & users identity directory
│   │       └── outbox.ts         # Outbox queue inspection & simulation
│   └── tests/
│       └── operations.test.ts    # 10 integration tests for critical behaviors
└── frontend/
    └── src/
        ├── api/client.ts         # Typed API client with OCC & idempotency support
        ├── components/
        │   ├── Navbar.tsx        # Persona switcher & outbox badge
        │   ├── WorkItemList.tsx  # Smart operational queues, search, pagination
        │   ├── WorkItemDetail.tsx# Actions bar, approval gate, audit timeline
        │   ├── ConflictResolutionModal.tsx # Visual 3-way diff for OCC (409)
        │   ├── CreateWorkItemModal.tsx     # Ticket creation with idempotency test
        │   └── OutboxMonitorModal.tsx      # Outbox inspection & DLQ tester
        └── App.tsx               # High-density operational split-pane layout
```

---

## 📖 Architectural Decisions

Please refer to [ENGINEERING_DECISIONS.md](file:///c:/project/ENGINEERING_DECISIONS.md) for detailed explanations of:
1. Optimistic Concurrency Control vs. Pessimistic Row Locking
2. Two-Phase Cryptographic Idempotency
3. Atomic Single-Winner Claim Race Elimination
4. Server-Enforced State Machine & Separation of Duties
5. Transactional Outbox Pattern for Asynchronous Reliability
6. Scale Considerations for 100k+ Work Items and 1,000s of Concurrent Users
