import React, { useState } from 'react';
import { WorkItem, AuditLog, WorkItemComment, User, Status } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  UserCheck, 
  AlertTriangle, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface WorkItemDetailProps {
  item: WorkItem | null;
  auditLogs: AuditLog[];
  comments: WorkItemComment[];
  currentUser: User | null;
  users: User[];
  onClaim: () => void;
  onUpdateStatus: (targetStatus: Status, resolutionSummary?: string) => void;
  onApprove: (decision: 'APPROVED' | 'REJECTED', rationale: string) => void;
  onAddComment: (content: string) => void;
  onSimulateConflict: () => void;
  isActionLoading: boolean;
  errorBanner: string | null;
  successBanner: string | null;
}

export const WorkItemDetail: React.FC<WorkItemDetailProps> = ({
  item,
  auditLogs,
  comments,
  currentUser,
  users,
  onClaim,
  onUpdateStatus,
  onApprove,
  onAddComment,
  onSimulateConflict,
  isActionLoading,
  errorBanner,
  successBanner
}) => {
  const [commentText, setCommentText] = useState('');
  const [approvalRationale, setApprovalRationale] = useState('');
  const [resolutionSummary, setResolutionSummary] = useState('');
  const [showResolveModal, setShowResolveModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'activity' | 'notes'>('details');

  if (!item) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-slate-500 dark:text-slate-400 text-sm bg-transparent relative overflow-hidden">
        {/* Floating Apple-Style Frosted 3D Card with Zero-Gravity Depth */}
        <div className="relative max-w-md w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center animate-float-slow transition-colors">
          
          <div className="relative mb-5">
            <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 relative z-10 backdrop-blur-xl transition-colors">
              <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" viewBox="0 0 32 32" fill="none">
                <path d="M12 28C12 20 18 14 26 12C26 20 20 26 12 28Z" fill="#10B981" />
                <path d="M12 28C12 16 8 10 2 8C2 20 8 26 12 28Z" fill="currentColor" />
                <path d="M12 28V8C15 12 20 12 20 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="absolute -inset-3 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-xl"></div>
          </div>

          <span className="text-[10px] font-bold tracking-wider text-slate-600 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full mb-3">
            Zero-Gravity 3D Workspace
          </span>

          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">OpsPulse Work Coordination</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
            Select an operational work item from the queue to review evidence, manage approval gates, and coordinate with your team.
          </p>

          <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Strict OCC 409 · Atomic Claims · Outbox Queue</span>
          </div>
        </div>
      </div>
    );
  }

  const isAssignedToMe = item.assignee_id === currentUser?.id;
  const isUnassigned = !item.assignee_id;
  const isPendingApproval = item.status === 'PENDING_APPROVAL';

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(commentText);
    setCommentText('');
  };

  const handleResolveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resolutionSummary.trim() || resolutionSummary.trim().length < 10) return;
    onUpdateStatus('RESOLVED', resolutionSummary);
    setShowResolveModal(false);
    setResolutionSummary('');
  };

  const formatAuditSentence = (log: AuditLog) => {
    switch (log.action) {
      case 'CREATED':
        return `${log.actor_name || 'System'} created this request`;
      case 'CLAIMED':
        return `${log.actor_name || 'User'} claimed this item`;
      case 'STATUS_CHANGE':
        return `${log.actor_name || 'User'} changed status from ${log.old_state || 'open'} to ${log.new_state || 'in progress'}`;
      case 'APPROVED':
        return `${log.actor_name || 'Manager'} approved this request: "${log.diff_summary || 'Approved'}"`;
      case 'REJECTED':
        return `${log.actor_name || 'Manager'} rejected approval: "${log.diff_summary || 'Rejected'}"`;
      case 'REASSIGNED':
        return `${log.actor_name || 'User'} reassigned this item`;
      case 'COMMENT_ADDED':
        return `${log.actor_name || 'User'} added an internal note`;
      default:
        return `${log.actor_name || 'User'} updated this item`;
    }
  };

  // Plain-Language "What's Next" Logic
  const getNextActionState = () => {
    if (item.status === 'RESOLVED' || item.status === 'CLOSED') {
      return {
        sentence: `This request was marked as ${item.status.toLowerCase()} and requires no further action.`,
        allowedActions: []
      };
    }

    if (isPendingApproval) {
      const isManager = currentUser?.is_system_admin === 1 || currentUser?.memberships?.some(m => m.role === 'LEAD');
      const isRequester = currentUser?.id === item.creator_id;
      const canApprove = isManager && !isRequester;

      let sentence = "Awaiting managerial review and sign-off.";
      if (canApprove) {
        sentence = `As an authorized manager, please review evidence and make an approval determination.`;
      } else if (isRequester) {
        sentence = "You requested this change. Another manager must review and approve it (self-approval prohibited).";
      } else {
        sentence = "Requires a manager on this team to approve.";
      }

      return {
        sentence,
        allowedActions: canApprove ? ['APPROVE', 'REJECT'] : []
      };
    }

    if (isUnassigned) {
      return {
        sentence: "This item is currently unassigned. Take ownership to begin working on it.",
        allowedActions: ['CLAIM']
      };
    }

    if (isAssignedToMe) {
      if (item.status === 'OPEN' || item.status === 'TRIAGED') {
        return {
          sentence: "You own this item. Ready to start working?",
          allowedActions: ['START_WORK']
        };
      }
      if (item.status === 'IN_PROGRESS') {
        return {
          sentence: "You are currently working on this item. Submit for manager sign-off or mark resolved.",
          allowedActions: ['REQUEST_APPROVAL', 'RESOLVE']
        };
      }
    }

    return {
      sentence: `Assigned to ${item.assignee_name || 'another team member'}.`,
      allowedActions: ['CLAIM']
    };
  };

  const nextAction = getNextActionState();

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden transition-colors">
      
      {/* Error & Success Notification Banners */}
      {errorBanner && (
        <div className="bg-rose-50/90 dark:bg-rose-950/80 backdrop-blur-md border-b border-rose-200 dark:border-rose-800 px-6 py-3 text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
            <span className="font-semibold">{errorBanner}</span>
          </div>
        </div>
      )}

      {successBanner && (
        <div className="bg-emerald-50/90 dark:bg-emerald-950/80 backdrop-blur-md border-b border-emerald-200 dark:border-emerald-800 px-6 py-3 text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#149B56] dark:text-emerald-400 flex-shrink-0" />
            <span className="font-semibold">{successBanner}</span>
          </div>
        </div>
      )}

      {/* Top Details Header Bar */}
      <div className="p-6 border-b border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xs transition-colors">
        
        {/* Pills Row: Category + Version + Status + Priority */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
              {item.category?.replace(/_/g, ' ') || 'General Ops'}
            </span>
            <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
              v{item.version}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              item.status === 'RESOLVED' ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' :
              item.status === 'PENDING_APPROVAL' ? 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800' :
              item.status === 'IN_PROGRESS' ? 'bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800' :
              'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}>
              {item.status.replace(/_/g, ' ')}
            </span>

            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              item.priority === 'URGENT' ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800 animate-pulse' :
              item.priority === 'HIGH' ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' :
              'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}>
              {item.priority}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-2.5">
          {item.title}
        </h1>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
          {item.description}
        </p>

      </div>

      {/* Main Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Apple-Style "What's Next" Action Card with Clean Depth */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs relative overflow-hidden transition-colors">
          
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400 font-semibold">What's Next</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {nextAction.sentence}
              </p>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            
            {/* Take This (Atomic Claim) */}
            {nextAction.allowedActions.includes('CLAIM') && (
              <button
                onClick={onClaim}
                disabled={isActionLoading}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
              >
                <UserCheck className="w-4 h-4" />
                <span>Take this item (Claim)</span>
              </button>
            )}

            {/* Start Work */}
            {nextAction.allowedActions.includes('START_WORK') && (
              <button
                onClick={() => onUpdateStatus('IN_PROGRESS')}
                disabled={isActionLoading}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Start work</span>
              </button>
            )}

            {/* Request Approval */}
            {nextAction.allowedActions.includes('REQUEST_APPROVAL') && (
              <button
                onClick={() => onUpdateStatus('PENDING_APPROVAL')}
                disabled={isActionLoading}
                className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Ask for manager approval</span>
              </button>
            )}

            {/* Mark as Resolved */}
            {nextAction.allowedActions.includes('RESOLVE') && (
              <button
                onClick={() => setShowResolveModal(true)}
                disabled={isActionLoading}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark as resolved</span>
              </button>
            )}

            {/* Approve / Reject Gate (Manager Only) */}
            {nextAction.allowedActions.includes('APPROVE') && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onApprove('APPROVED', approvalRationale || 'Meets operational compliance guidelines')}
                  disabled={isActionLoading}
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve Request</span>
                </button>

                <button
                  onClick={() => onApprove('REJECTED', approvalRationale || 'Insufficient documentation')}
                  disabled={isActionLoading}
                  className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-xs active:scale-95 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Send Back (Reject)</span>
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Details Grid Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">Requester</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-slate-700">
                {item.creator_name?.charAt(0) || 'R'}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">{item.creator_name || 'Requester'}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">Assignee</span>
            <div className="flex items-center space-x-2">
              {item.assignee_name ? (
                <>
                  <div className="w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-700 text-white font-bold text-xs flex items-center justify-center">
                    {item.assignee_name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{item.assignee_name}</span>
                </>
              ) : (
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/60">
                  Unassigned
                </span>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">Created At</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {new Date(item.created_at).toLocaleDateString()}
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">Version</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
              Version {item.version}
            </span>
          </div>

        </div>

        {/* Segmented Detail Tabs: Details / Activity / Notes */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
          
          <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-slate-50/70 dark:bg-slate-950/70">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${
                activeTab === 'details'
                  ? 'border-emerald-500 text-slate-900 dark:text-white font-bold'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Overview & Evidence
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${
                activeTab === 'activity'
                  ? 'border-emerald-500 text-slate-900 dark:text-white font-bold'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Activity Timeline ({auditLogs.length})
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`pb-3 px-3 text-xs font-semibold transition border-b-2 cursor-pointer ${
                activeTab === 'notes'
                  ? 'border-emerald-500 text-slate-900 dark:text-white font-bold'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Internal Notes ({comments.length})
            </button>
          </div>

          <div className="p-6">
            
            {activeTab === 'details' && (
              <div className="space-y-5 text-sm leading-relaxed">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">Work Item Overview</h4>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-normal">{item.description}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-semibold text-xs text-slate-900 dark:text-white">Audit & Traceability Guarantee</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    All updates to this work item write append-only records to PostgreSQL with transactional atomicity. Concurrent edits enforce conditional version locking (<code className="font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium">If-Match: v{item.version}</code>).
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                {auditLogs.length === 0 ? (
                  <p className="text-xs text-slate-400 dark:text-slate-500 text-center py-4">No activity logged yet.</p>
                ) : (
                  <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                    {auditLogs.map((log) => (
                      <div key={log.id} className="relative flex items-start space-x-3 text-xs">
                        <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-xs">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-950/70 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs flex-1">
                          <p className="font-semibold text-xs text-slate-900 dark:text-white">{formatAuditSentence(log)}</p>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                            {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · {new Date(log.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                {/* Notes Feed */}
                <div className="space-y-3">
                  {comments.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-500 text-center py-4">No internal notes posted yet.</p>
                  ) : (
                    comments.map(c => (
                      <div key={c.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1 text-xs">
                        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px]">
                          <span className="font-semibold text-xs text-slate-900 dark:text-white">{c.user_name}</span>
                          <span>{new Date(c.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{c.content}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Comment Input */}
                <form onSubmit={handleCommentSubmit} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Add an internal note or context for team members..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!commentText.trim() || isActionLoading}
                    className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs disabled:opacity-40 transition cursor-pointer flex items-center space-x-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>

        {/* Developer Tools Box */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs flex items-center justify-between transition-colors">
          <div className="space-y-0.5">
            <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs block">Developer Concurrency Testing</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">Simulate another user updating this record behind your back to test OCC 409 rollback</span>
          </div>
          <button
            onClick={onSimulateConflict}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200 dark:border-slate-700 shadow-xs transition cursor-pointer"
          >
            Simulate 409 Conflict
          </button>
        </div>

      </div>

      {/* RESOLVE MODAL */}
      {showResolveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Mark Request as Resolved</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Provide a clear summary of the resolution for audit compliance.
            </p>
            <form onSubmit={handleResolveSubmit} className="space-y-4">
              <textarea
                required
                minLength={10}
                placeholder="Resolution summary (minimum 10 characters)..."
                value={resolutionSummary}
                onChange={(e) => setResolutionSummary(e.target.value)}
                className="w-full h-24 p-3 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowResolveModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={resolutionSummary.trim().length < 10 || isActionLoading}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs disabled:opacity-40"
                >
                  Confirm Resolution
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
