import { Router, Request, Response } from 'express';
import https from 'https';

export const chatRouter = Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = 'gemini-flash-latest';

const SYSTEM_INSTRUCTION = `You are the OpsPulse AI Copilot, an expert, friendly assistant embedded inside the OpsPulse operations management application (Newtonite Software Engineering Challenge).
Your goal is to guide users, operators, and evaluators on how every feature works, how to navigate the app, and how to test critical concurrency behaviors.

Core Features & How to Test Them:
1. Atomic Claims ("Take this item"):
   - Where: Click "Unassigned" tab on the left, pick an item, click "Take this item (Claim)".
   - Engine: SQL conditional atomic UPDATE. When 20 operators claim at the same millisecond, exactly 1 wins; 19 get HTTP 409 naming the winner.
2. Optimistic Concurrency Control (OCC 409):
   - Where: Scroll down to the bottom of the item detail pane and click "Simulate 409 Conflict". Then click any action like "Start work".
   - Engine: Version matching via If-Match. Stale updates trigger a side-by-side reconciliation modal to prevent lost updates.
3. Four-Eyes Approval & Separation of Duties:
   - Where: Use the top-right persona switcher to switch between Alice (Lead), Bob (Operator), and Charlie (Admin).
   - Engine: High-risk tickets (payments, compliance) require Lead sign-off. Operators CANNOT approve their own tickets.
4. Idempotency Guarantee:
   - Engine: Cryptographic SHA-256 payload verification with Idempotency-Key headers. Duplicate clicks return cached responses safely.
5. Transactional Outbox Worker:
   - Where: Click "Outbox: X pending" in the top navbar.
   - Engine: Enqueues notifications in the same ACID transaction. Retries 3x with exponential backoff before routing to Dead-Letter Queue (DLQ).
6. Filter & Search:
   - "Needs attention" tab prioritizes urgent and unassigned items. Real-time search and filter dropdowns.

Tone: Friendly, concise, Apple-like clarity, actionable instructions telling users exactly where to click on screen.`;

chatRouter.post('/', async (req: Request, res: Response) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Format conversation history for Gemini API
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Add previous history if provided
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      }
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: `${message}` }]
    });

    const payload = JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    });

    const requestOptions = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const geminiResponse = await new Promise<string>((resolve, reject) => {
      const geminiReq = https.request(requestOptions, (apiRes) => {
        let data = '';
        apiRes.on('data', chunk => data += chunk);
        apiRes.on('end', () => {
          if (apiRes.statusCode && apiRes.statusCode >= 200 && apiRes.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`Gemini API returned status ${apiRes.statusCode}: ${data}`));
          }
        });
      });

      geminiReq.on('error', reject);
      geminiReq.setTimeout(12000, () => {
        geminiReq.destroy(new Error('Gemini API request timed out'));
      });

      geminiReq.write(payload);
      geminiReq.end();
    });

    const parsed = JSON.parse(geminiResponse);
    const replyText = parsed.candidates?.[0]?.content?.parts?.[0]?.text || "I'm ready to assist with OpsPulse! Ask me how any feature works.";

    return res.json({
      reply: replyText,
      source: 'gemini-ai'
    });

  } catch (err: any) {
    console.error('Gemini API Error, falling back to smart domain engine:', err.message);

    // Fallback domain response engine
    const lower = message.toLowerCase();
    let fallbackReply = "OpsPulse coordinates operational work with strict concurrency guarantees. You can ask me about Atomic Claims, 409 Conflict Simulation, Manager Approvals, or the Outbox Queue!";

    if (lower.includes('claim') || lower.includes('take')) {
      fallbackReply = "⚡ **Atomic Claiming** ensures that when multiple operators race to take an unassigned ticket, only one wins! The server runs `UPDATE work_items SET assignee_id = :me WHERE id = :id AND assignee_id IS NULL`. Try it by filtering by **Unassigned** on the left and clicking **'Take this item (Claim)'**.";
    } else if (lower.includes('conflict') || lower.includes('409') || lower.includes('stale') || lower.includes('occ')) {
      fallbackReply = "⚠️ **Optimistic Concurrency Control (OCC)** prevents accidental overwrites when two colleagues view the same item. You can test it right now: select any item, scroll to the bottom of the detail pane, and click **'Simulate 409 Conflict'**! Then try clicking any action button to see the side-by-side reconciliation modal.";
    } else if (lower.includes('approval') || lower.includes('manager') || lower.includes('lead')) {
      fallbackReply = "🛡️ **Four-Eyes Approval**: High-risk tickets (like payment discrepancies) require Team Lead sign-off before resolution. Crucially, operators **cannot approve their own tickets** (anti-fraud separation of duties). Try switching personas in the top right between **Alice (Lead)** and **Bob (Operator)** to see the controls update!";
    } else if (lower.includes('outbox') || lower.includes('worker') || lower.includes('queue')) {
      fallbackReply = "📦 **Transactional Outbox**: Notifications and background jobs are written in the exact same database transaction as the ticket change. Click the **'Outbox: X pending'** pill in the top navbar to inspect the live worker queue, trigger runs, or simulate downstream failures!";
    } else if (lower.includes('idempotency') || lower.includes('retry') || lower.includes('double')) {
      fallbackReply = "🔒 **Idempotency Protection**: Every mutation passes an `Idempotency-Key` header with SHA-256 payload verification. Impatient double-clicks or retried network requests will safely return the cached response without creating duplicate tickets or double-advancing state.";
    }

    return res.json({
      reply: fallbackReply,
      source: 'domain-fallback'
    });
  }
});
