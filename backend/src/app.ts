import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middleware/auth';
import { idempotencyMiddleware } from './middleware/idempotency';
import { workItemsRouter } from './routes/workItems';
import { teamsRouter, usersRouter } from './routes/teams';
import { outboxRouter } from './routes/outbox';
import { chatRouter } from './routes/chat';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Global Auth and Idempotency
  app.use(authMiddleware);
  app.use(idempotencyMiddleware);

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      service: 'Newtonite Operations Engine',
      timestamp: new Date().toISOString()
    });
  });

  // Domain API Routes
  app.use('/api/work-items', workItemsRouter);
  app.use('/api/teams', teamsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/outbox', outboxRouter);
  app.use('/api/chat', chatRouter);

  // Generic 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found', path: req.originalUrl });
  });

  return app;
}
