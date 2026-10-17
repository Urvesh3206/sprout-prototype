import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { getDatabase } from '../db/database';

export function idempotencyMiddleware(req: Request, res: Response, next: NextFunction) {
  // Only apply to mutating requests
  if (!['POST', 'PUT', 'PATCH'].includes(req.method)) {
    return next();
  }

  const idempotencyKey = (req.headers['idempotency-key'] || req.headers['x-idempotency-key']) as string | undefined;

  if (!idempotencyKey) {
    // If no key provided, proceed normally
    return next();
  }

  const db = getDatabase();
  const userId = (req as any).user?.id || 'anonymous';
  const bodyString = JSON.stringify(req.body || {});
  const requestHash = crypto.createHash('sha256').update(bodyString).digest('hex');

  // Check if key already processed
  const existing = db.prepare(`
    SELECT status_code, response_body, request_hash
    FROM idempotency_keys
    WHERE key = ?
  `).get(idempotencyKey) as { status_code: number; response_body: string; request_hash: string } | undefined;

  if (existing) {
    if (existing.request_hash !== requestHash) {
      return res.status(422).json({
        error: 'Idempotency Conflict',
        message: 'Idempotency key reused with different request parameters or body.',
        code: 'IDEMPOTENCY_PAYLOAD_MISMATCH'
      });
    }

    // Replay saved response
    res.setHeader('X-Idempotent-Replay', 'true');
    res.status(existing.status_code);
    try {
      return res.json(JSON.parse(existing.response_body));
    } catch {
      return res.send(existing.response_body);
    }
  }

  // Intercept response to store upon completion
  const originalJson = res.json.bind(res);
  const originalSend = res.send.bind(res);

  let responseSaved = false;

  const saveResponse = (statusCode: number, body: string) => {
    if (responseSaved) return;
    responseSaved = true;

    // Only save successful or deterministic client error responses (don't cache 500 server crashes)
    if (statusCode < 500) {
      try {
        db.prepare(`
          INSERT INTO idempotency_keys (key, user_id, request_path, request_hash, status_code, response_body, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(
          idempotencyKey,
          userId,
          req.originalUrl || req.url,
          requestHash,
          statusCode,
          body,
          new Date().toISOString()
        );
      } catch (err) {
        console.error('Failed to save idempotency record:', err);
      }
    }
  };

  res.json = (body: any): Response => {
    saveResponse(res.statusCode, JSON.stringify(body));
    return originalJson(body);
  };

  res.send = (body: any): Response => {
    const stringBody = typeof body === 'string' ? body : JSON.stringify(body);
    saveResponse(res.statusCode, stringBody);
    return originalSend(body);
  };

  next();
}
