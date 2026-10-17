import React from 'react';
import { WorkItem } from '../types';
import { RefreshCw, X, ShieldAlert } from 'lucide-react';

interface ConflictResolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReload: () => void;
  expectedVersion: number;
  currentVersion: number;
  currentItem: WorkItem | null;
  pendingChanges?: any;
}

export const ConflictResolutionModal: React.FC<ConflictResolutionModalProps> = ({
  isOpen,
  onClose,
  onReload,
  expectedVersion,
  currentVersion,
  currentItem
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Someone just updated this item</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                A teammate saved changes while you had this open.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-full cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison card */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 font-medium pb-2 border-b border-slate-200 dark:border-slate-800">
            <span>Current server state</span>
            <span className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-semibold">
              Latest (v{currentVersion})
            </span>
          </div>

          <div className="space-y-1.5 pt-1 text-slate-800 dark:text-slate-200">
            <div><span className="text-slate-500 dark:text-slate-400 font-semibold">Title:</span> {currentItem?.title}</div>
            <div><span className="text-slate-500 dark:text-slate-400 font-semibold">Status:</span> {currentItem?.status?.replace(/_/g, ' ')}</div>
            <div><span className="text-slate-500 dark:text-slate-400 font-semibold">Owner:</span> {currentItem?.assignee_name || 'Unassigned'}</div>
            <div><span className="text-slate-500 dark:text-slate-400 font-semibold">Priority:</span> {currentItem?.priority}</div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          To prevent accidentally overwriting what your teammate just saved, please reload the latest version to review their updates.
        </p>

        {/* Footer Actions */}
        <div className="flex items-center justify-end space-x-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onReload}
            className="flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs active:scale-95 cursor-pointer transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Show latest version</span>
          </button>
        </div>

      </div>
    </div>
  );
};
