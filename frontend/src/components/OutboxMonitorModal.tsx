import React, { useState, useEffect } from 'react';
import { OutboxEvent } from '../types';
import { api } from '../api/client';
import { X, Play, RefreshCw, AlertTriangle, Cpu, CheckCircle2 } from 'lucide-react';

interface OutboxMonitorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutboxMonitorModal: React.FC<OutboxMonitorModalProps> = ({ isOpen, onClose }) => {
  const [events, setEvents] = useState<OutboxEvent[]>([]);
  const [stats, setStats] = useState<{ status: string; count: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchOutboxData = async () => {
    setIsLoading(true);
    try {
      const data = await api.getOutbox();
      setEvents(data.events);
      setStats(data.stats);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchOutboxData();
      const interval = setInterval(fetchOutboxData, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleProcessNow = async () => {
    try {
      const res = await api.processOutbox();
      setMessage(`Worker processed ${res.processedCount} queued event(s).`);
      fetchOutboxData();
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      setMessage(`Worker failed: ${err.message}`);
    }
  };

  const handleSimulateFailure = async () => {
    try {
      const res = await api.simulateOutboxFailure();
      setMessage(`Simulated failing job created. Worker will retry 3x then route to dead-letter.`);
      fetchOutboxData();
      setTimeout(() => setMessage(null), 4000);
    } catch (err: any) {
      setMessage(`Failed: ${err.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Background Outbox & Notification Worker</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">SKIP LOCKED concurrency, exponential backoff, and idempotent queue</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Controls & Stats */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs transition-colors">
          <div className="flex items-center space-x-3">
            {stats.map(s => (
              <div key={s.status} className="flex items-center space-x-1.5 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs">
                <span className="text-slate-500 dark:text-slate-400 capitalize">{s.status.toLowerCase()}:</span>
                <span className={`font-bold ${
                  s.status === 'PENDING' ? 'text-amber-700 dark:text-amber-300' :
                  s.status === 'DEAD' ? 'text-rose-700 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                }`}>
                  {s.count}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleProcessNow}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Run worker now</span>
            </button>

            <button
              onClick={handleSimulateFailure}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition cursor-pointer shadow-xs"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Simulate failure</span>
            </button>
          </div>
        </div>

        {message && (
          <div className="mx-6 mt-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-medium flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{message}</span>
          </div>
        )}

        {/* Table of Events */}
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-200">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider sticky top-0">
              <tr>
                <th className="py-2.5 px-3">Job ID</th>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Attempts</th>
                <th className="py-2.5 px-3">Created</th>
                <th className="py-2.5 px-3">Payload Summary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {events.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 dark:text-slate-500">
                    No outbox events queued. Actions write notifications transactionally.
                  </td>
                </tr>
              ) : (
                events.map(ev => (
                  <tr key={ev.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {ev.id.slice(0, 8)}...
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                      {ev.event_type}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        ev.status === 'COMPLETED' ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700' :
                        ev.status === 'DEAD_LETTER' ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800' :
                        'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800 animate-pulse'
                      }`}>
                        {ev.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono">
                      {ev.retry_count} / 3
                    </td>
                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 text-[11px]">
                      {new Date(ev.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300 max-w-xs truncate text-[11px]">
                      {typeof ev.payload === 'object' ? JSON.stringify(ev.payload) : ev.payload}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
