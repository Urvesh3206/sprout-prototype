import { getDatabase } from '../db/database';
import { v4 as uuidv4 } from 'uuid';
import { OutboxEvent } from '../types';

export class OutboxWorker {
  private timer: NodeJS.Timeout | null = null;
  private isProcessing = false;
  private intervalMs: number;

  constructor(intervalMs = 3000) {
    this.intervalMs = intervalMs;
  }

  public start(): void {
    if (this.timer) return;
    this.timer = setInterval(() => this.processPendingEvents(), this.intervalMs);
    console.log(`[OutboxWorker] Started background event processor (interval: ${this.intervalMs}ms)`);
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      console.log('[OutboxWorker] Stopped background event processor');
    }
  }

  public async processPendingEvents(): Promise<number> {
    if (this.isProcessing) return 0;
    this.isProcessing = true;

    let processedCount = 0;
    try {
      const db = getDatabase();

      // Fetch pending events
      const events = db.prepare(`
        SELECT * FROM outbox_events
        WHERE status = 'PENDING'
        ORDER BY created_at ASC
        LIMIT 10
      `).all() as OutboxEvent[];

      for (const event of events) {
        // Mark as processing
        db.prepare(`UPDATE outbox_events SET status = 'PROCESSING' WHERE id = ?`).run(event.id);

        try {
          // Process the event asynchronously
          await this.dispatch(event);

          // Mark completed
          db.prepare(`
            UPDATE outbox_events
            SET status = 'COMPLETED', processed_at = ?
            WHERE id = ?
          `).run(new Date().toISOString(), event.id);

          processedCount++;
        } catch (error: any) {
          console.error(`[OutboxWorker] Failed to process event ${event.id}:`, error.message);
          const nextRetry = event.retry_count + 1;
          const newStatus = nextRetry >= 3 ? 'DEAD_LETTER' : 'PENDING';

          db.prepare(`
            UPDATE outbox_events
            SET status = ?, retry_count = ?, last_error = ?
            WHERE id = ?
          `).run(newStatus, nextRetry, error.message || 'Unknown processing error', event.id);
        }
      }
    } catch (err) {
      console.error('[OutboxWorker] Error during outbox processing cycle:', err);
    } finally {
      this.isProcessing = false;
    }

    return processedCount;
  }

  private async dispatch(event: OutboxEvent): Promise<void> {
    const payload = JSON.parse(event.payload);

    // Simulated external side-effect processing
    switch (event.event_type) {
      case 'NOTIFICATION_DISPATCH':
        // Simulating push/email/slack notification
        break;

      case 'APPROVAL_REQUIRED':
        // Simulating pager / high-priority notification to lead
        break;

      case 'SLA_BREACH_ALERT':
        // Simulating ops alert dispatch
        break;

      case 'SIMULATED_FAILURE_TEST':
        // Special test event to demonstrate dead letter queue
        throw new Error('Downstream external service timeout (HTTP 504)');

      default:
        break;
    }
  }

  public enqueue(
    db: any,
    eventType: string,
    payload: any
  ): string {
    const id = `evt_${uuidv4().substring(0, 8)}`;
    db.prepare(`
      INSERT INTO outbox_events (id, event_type, payload, status, retry_count, created_at)
      VALUES (?, ?, ?, 'PENDING', 0, ?)
    `).run(id, eventType, JSON.stringify(payload), new Date().toISOString());
    return id;
  }
}

export const outboxWorkerInstance = new OutboxWorker();
