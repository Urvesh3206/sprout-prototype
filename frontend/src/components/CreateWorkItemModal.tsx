import React, { useState } from 'react';
import { Team, User, Category, Priority } from '../types';
import { X, Plus, ShieldCheck } from 'lucide-react';
import { generateIdempotencyKey } from '../api/client';

interface CreateWorkItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  teams: Team[];
  users: User[];
  onCreate: (payload: {
    title: string;
    description: string;
    category: Category;
    priority: Priority;
    team_id: string;
    assignee_id?: string | null;
  }, idempotencyKey?: string) => Promise<any>;
}

export const CreateWorkItemModal: React.FC<CreateWorkItemModalProps> = ({
  isOpen,
  onClose,
  teams,
  users,
  onCreate
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('PAYMENT_INVESTIGATION');
  const [priority, setPriority] = useState<Priority>('HIGH');
  const [teamId, setTeamId] = useState(teams[0]?.id || 'payments');
  const [assigneeId, setAssigneeId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idempotencyKey] = useState<string>(generateIdempotencyKey());

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setIsSubmitting(true);

    const payload = {
      title: title.trim(),
      description: description.trim(),
      category,
      priority,
      team_id: teamId,
      assignee_id: assigneeId || null
    };

    try {
      await onCreate(payload, idempotencyKey);
      onClose();
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold">
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">New Operational Request</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Create a work item with idempotency guarantee</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Title */}
          <div>
            <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">What is this request? *</label>
            <input
              type="text"
              required
              minLength={5}
              placeholder="e.g. Discrepancy in Merchant batch payout #4829"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition"
            />
          </div>

          {/* Team & Priority */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">Owning Team</label>
              <select
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                {teams.map(t => (
                  <option key={t.id} value={t.id} className="dark:bg-slate-900">{t.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="URGENT" className="dark:bg-slate-900">Urgent (Red left edge)</option>
                <option value="HIGH" className="dark:bg-slate-900">High</option>
                <option value="MEDIUM" className="dark:bg-slate-900">Medium</option>
                <option value="LOW" className="dark:bg-slate-900">Low</option>
              </select>
            </div>
          </div>

          {/* Category & Assignee */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="PAYMENT_INVESTIGATION" className="dark:bg-slate-900">Payment Investigation</option>
                <option value="KYC_DISCREPANCY" className="dark:bg-slate-900">KYC Discrepancy</option>
                <option value="SETTLEMENT_RECONCILIATION" className="dark:bg-slate-900">Settlement Reconciliation</option>
                <option value="ACCOUNT_TAKEOVER_ALERT" className="dark:bg-slate-900">Account Takeover Alert</option>
                <option value="SYSTEM_MAINTENANCE" className="dark:bg-slate-900">System Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">Initial Assignee (Optional)</label>
              <select
                value={assigneeId}
                onChange={(e) => setAssigneeId(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="" className="dark:bg-slate-900">Leave Unassigned</option>
                {users.map(u => (
                  <option key={u.id} value={u.id} className="dark:bg-slate-900">{u.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-700 dark:text-slate-200 mb-1.5 font-semibold">Details & Context *</label>
            <textarea
              required
              minLength={10}
              rows={3}
              placeholder="Provide background, merchant IDs, transaction references, or incident details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition resize-none"
            />
          </div>

          {/* Idempotency Footer Note */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-[11px] text-slate-600 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>
              Idempotency-Key active (<code className="font-mono text-emerald-600 dark:text-emerald-400">{idempotencyKey.slice(0, 10)}...</code>). Retrying will safely return the existing item without duplicates.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim() || !description.trim()}
              className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-xs active:scale-95 disabled:opacity-50 transition cursor-pointer"
            >
              {isSubmitting ? 'Creating...' : 'Create work item'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
