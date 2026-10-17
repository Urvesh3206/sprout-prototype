import { Router } from 'express';
import { getDatabase } from '../db/database';
import { outboxWorkerInstance } from '../services/outboxWorker';

export const outboxRouter = Router();

// GET /api/outbox
outboxRouter.get('/', (req, res) => {
  const db = getDatabase();
  const events = db.prepare(`
    SELECT * FROM outbox_events 
    ORDER BY created_at DESC 
    LIMIT 50
  `).all();

  const stats = db.prepare(`
    SELECT status, COUNT(*) as count 
    FROM outbox_events 
    GROUP BY status
  `).all();

  res.json({ events, stats });
});

// POST /api/outbox/process
outboxRouter.post('/process', async (req, res) => {
  try {
    const processed = await outboxWorkerInstance.processPendingEvents();
    res.json({ message: 'Outbox processed successfully', processedCount: processed });
  } catch (error: any) {
    res.status(500).json({ error: 'Processing error', message: error.message });
  }
});

// POST /api/outbox/simulate-failure (Demonstrates retry & Dead-Letter Queue handling)
outboxRouter.post('/simulate-failure', (req, res) => {
  const db = getDatabase();
  const id = outboxWorkerInstance.enqueue(db, 'SIMULATED_FAILURE_TEST', {
    target: 'External Webhook Partner',
    scenario: 'Connection refused / Downstream service failure'
  });
  res.json({ message: 'Enqueued failing event for retry test', eventId: id });
});
