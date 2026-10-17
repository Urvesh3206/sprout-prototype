import { WorkItem, AuditLog, WorkItemComment, Team, User, OutboxEvent } from '../types';

export class ApiError extends Error {
  public status: number;
  public data: any;

  constructor(status: number, data: any) {
    super(data?.message || data?.error || 'API Error');
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export class ConcurrencyConflictError extends ApiError {
  public expectedVersion: number;
  public currentVersion: number;
  public currentItem: WorkItem;

  constructor(data: any) {
    super(409, data);
    this.name = 'ConcurrencyConflictError';
    this.expectedVersion = data.expectedVersion;
    this.currentVersion = data.currentVersion;
    this.currentItem = data.currentItem;
  }
}

let activeUserId: string = localStorage.getItem('ops_user_id') || 'usr_alice';

export function setActiveUser(userId: string) {
  activeUserId = userId;
  localStorage.setItem('ops_user_id', userId);
}

export function getActiveUserId(): string {
  return activeUserId;
}

export function generateIdempotencyKey(): string {
  return 'idemp_' + Math.random().toString(36).substring(2, 12) + '_' + Date.now();
}

async function request<T>(
  url: string,
  options: RequestInit & { idempotencyKey?: string } = {}
): Promise<{ data: T; isReplayed?: boolean }> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-user-id': activeUserId,
    ...(options.headers as Record<string, string> || {})
  };

  if (options.idempotencyKey) {
    headers['Idempotency-Key'] = options.idempotencyKey;
  }

  const response = await fetch(url, {
    ...options,
    headers
  });

  const isReplayed = response.headers.get('x-idempotent-replay') === 'true';

  let data: any = null;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    if (response.status === 409 && data.code === 'VERSION_CONFLICT') {
      throw new ConcurrencyConflictError(data);
    }
    throw new ApiError(response.status, data);
  }

  return { data, isReplayed };
}

export const api = {
  // Users & Teams
  getUsers: async (): Promise<User[]> => {
    const res = await request<User[]>('/api/users');
    return res.data;
  },
  getTeams: async (): Promise<Team[]> => {
    const res = await request<Team[]>('/api/teams');
    return res.data;
  },

  // Work Items
  listWorkItems: async (params: {
    team_id?: string;
    status?: string;
    priority?: string;
    category?: string;
    assignee_id?: string;
    unassigned_only?: boolean;
    requires_attention?: boolean;
    search?: string;
    limit?: number;
    offset?: number;
  }) => {
    const query = new URLSearchParams();
    if (params.team_id) query.set('team_id', params.team_id);
    if (params.status) query.set('status', params.status);
    if (params.priority) query.set('priority', params.priority);
    if (params.category) query.set('category', params.category);
    if (params.assignee_id) query.set('assignee_id', params.assignee_id);
    if (params.unassigned_only) query.set('unassigned_only', 'true');
    if (params.requires_attention) query.set('requires_attention', 'true');
    if (params.search) query.set('search', params.search);
    if (params.limit) query.set('limit', params.limit.toString());
    if (params.offset) query.set('offset', params.offset.toString());

    const res = await request<{
      items: WorkItem[];
      total: number;
      limit: number;
      offset: number;
      hasMore: boolean;
    }>(`/api/work-items?${query.toString()}`);
    return res.data;
  },

  getWorkItem: async (id: string) => {
    const res = await request<{
      workItem: WorkItem;
      auditLogs: AuditLog[];
      comments: WorkItemComment[];
    }>(`/api/work-items/${id}`);
    return res.data;
  },

  createWorkItem: async (payload: {
    title: string;
    description: string;
    category: string;
    priority: string;
    team_id: string;
    assignee_id?: string | null;
    due_at?: string | null;
  }, idempotencyKey?: string) => {
    const key = idempotencyKey || generateIdempotencyKey();
    const res = await request<WorkItem>('/api/work-items', {
      method: 'POST',
      body: JSON.stringify(payload),
      idempotencyKey: key
    });
    return res.data;
  },

  updateWorkItem: async (
    id: string,
    updates: Partial<WorkItem> & { expectedVersion: number; resolution_summary?: string },
    idempotencyKey?: string
  ) => {
    const res = await request<WorkItem>(`/api/work-items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
      idempotencyKey
    });
    return res.data;
  },

  claimWorkItem: async (id: string, expectedVersion: number) => {
    const res = await request<WorkItem>(`/api/work-items/${id}/claim`, {
      method: 'POST',
      body: JSON.stringify({ expectedVersion })
    });
    return res.data;
  },

  decideApproval: async (id: string, decision: 'APPROVED' | 'REJECTED', rationale: string, expectedVersion: number) => {
    const res = await request<WorkItem>(`/api/work-items/${id}/approve`, {
      method: 'POST',
      body: JSON.stringify({ decision, rationale, expectedVersion })
    });
    return res.data;
  },

  addComment: async (id: string, content: string, is_internal = true) => {
    const res = await request<WorkItemComment>(`/api/work-items/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, is_internal })
    });
    return res.data;
  },

  // Testing & Simulation Endpoints
  simulateConflict: async (id: string) => {
    const res = await request<{ message: string; newVersion: number }>(`/api/work-items/${id}/simulate-conflict`, {
      method: 'POST'
    });
    return res.data;
  },

  // Outbox & Async
  getOutbox: async () => {
    const res = await request<{ events: OutboxEvent[]; stats: { status: string; count: number }[] }>('/api/outbox');
    return res.data;
  },

  processOutbox: async () => {
    const res = await request<{ message: string; processedCount: number }>('/api/outbox/process', {
      method: 'POST'
    });
    return res.data;
  },

  simulateOutboxFailure: async () => {
    const res = await request<{ message: string; eventId: string }>('/api/outbox/simulate-failure', {
      method: 'POST'
    });
    return res.data;
  },

  // AI Copilot Chat
  chatWithAi: async (message: string, history?: { role: 'user' | 'model'; text: string }[]) => {
    const res = await request<{ reply: string; source: string }>('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, history })
    });
    return res.data;
  }
};
