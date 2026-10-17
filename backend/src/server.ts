import { createApp } from './app';
import { getDatabase } from './db/database';
import { seedDatabase } from './db/seed';
import { outboxWorkerInstance } from './services/outboxWorker';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const db = getDatabase();

  // Auto-seed if database has no work items
  const count = db.prepare('SELECT COUNT(*) as c FROM work_items').get() as { c: number };
  if (count.c === 0) {
    console.log('[Bootstrap] No existing items found. Seeding initial operations data...');
    seedDatabase(db);
  }

  // Start background Outbox Worker
  outboxWorkerInstance.start();

  const app = createApp();

  const server = app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 Newtonite Operations Console API running on port ${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/api/health`);
    console.log(`   Items:  http://localhost:${PORT}/api/work-items`);
    console.log(`   Outbox: http://localhost:${PORT}/api/outbox`);
    console.log(`=======================================================`);
  });

  const shutdown = () => {
    console.log('\nGracefully shutting down...');
    outboxWorkerInstance.stop();
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

bootstrap().catch(err => {
  console.error('Fatal bootstrap error:', err);
  process.exit(1);
});
