import React from 'react';
import { WorkItem, Team, User, Priority, Status } from '../types';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Inbox, 
  Clock, 
  X,
  AlertCircle
} from 'lucide-react';

interface WorkItemListProps {
  items: WorkItem[];
  total: number;
  limit: number;
  offset: number;
  selectedId: string | null;
  onSelectItem: (id: string) => void;
  teams: Team[];
  currentUser: User | null;
  filterTeam: string;
  setFilterTeam: (v: string) => void;
  filterStatus: string;
  setFilterStatus: (v: string) => void;
  filterPriority: string;
  setFilterPriority: (v: string) => void;
  filterCategory: string;
  setFilterCategory: (v: string) => void;
  filterTab: 'all' | 'attention' | 'my' | 'unassigned';
  setFilterTab: (t: 'all' | 'attention' | 'my' | 'unassigned') => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  onPageChange: (newOffset: number) => void;
  isLoading: boolean;
}

export const WorkItemList: React.FC<WorkItemListProps> = ({
  items,
  total,
  limit,
  offset,
  selectedId,
  onSelectItem,
  teams,
  currentUser,
  filterTeam,
  setFilterTeam,
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority,
  filterCategory,
  setFilterCategory,
  filterTab,
  setFilterTab,
  searchQuery,
  setSearchQuery,
  onPageChange,
  isLoading
}) => {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  const getStatusDisplay = (s: Status) => {
    switch (s) {
      case 'PENDING_APPROVAL':
        return { label: 'Awaiting approval', bg: 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/50' };
      case 'IN_PROGRESS':
        return { label: 'In progress', bg: 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/50' };
      case 'OPEN':
        return { label: 'Open', bg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50' };
      case 'TRIAGED':
        return { label: 'Triaged', bg: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50' };
      case 'RESOLVED':
        return { label: 'Resolved', bg: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700/60 font-semibold' };
      case 'CLOSED':
        return { label: 'Closed', bg: 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/50' };
      case 'REJECTED':
        return { label: 'Rejected', bg: 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/50' };
    }
  };

  const getPriorityDisplay = (p: Priority) => {
    switch (p) {
      case 'URGENT':
        return (
          <span className="font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-md text-[10px] animate-pulse">
            Urgent
          </span>
        );
      case 'HIGH':
        return (
          <span className="font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-md text-[10px]">
            High
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 px-1.5 py-0.5 rounded-md text-[10px]">
            Medium
          </span>
        );
      case 'LOW':
        return (
          <span className="text-slate-400 dark:text-slate-500 text-[10px]">
            Low
          </span>
        );
    }
  };

  const formatRelativeTime = (iso: string) => {
    try {
      const diffMs = Date.now() - new Date(iso).getTime();
      const mins = Math.floor(diffMs / 60000);
      if (mins < 1) return 'just now';
      if (mins < 60) return `${mins}m ago`;
      const hrs = Math.floor(mins / 60);
      if (hrs < 24) return `${hrs}h ago`;
      const days = Math.floor(hrs / 24);
      return `${days}d ago`;
    } catch {
      return '';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/90 dark:border-slate-800">
      
      {/* Friendly Segmented Tabs (Apple-style clean rounded container) */}
      <div className="p-2.5 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
        <div className="grid grid-cols-4 gap-1 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400">
          <button
            onClick={() => setFilterTab('attention')}
            className={`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${
              filterTab === 'attention'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Needs attention</span>
          </button>
          
          <button
            onClick={() => setFilterTab('my')}
            className={`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${
              filterTab === 'my'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Assigned to me</span>
          </button>

          <button
            onClick={() => setFilterTab('unassigned')}
            className={`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${
              filterTab === 'unassigned'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Unassigned</span>
          </button>

          <button
            onClick={() => setFilterTab('all')}
            className={`py-1.5 px-2 rounded-lg transition text-center flex flex-col items-center justify-center cursor-pointer ${
              filterTab === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>All items</span>
          </button>
        </div>
      </div>

      {/* Search Bar & Filters */}
      <div className="p-3 border-b border-slate-200/90 dark:border-slate-800 space-y-2 bg-white/80 dark:bg-slate-900/60">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, ID, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:text-white transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Dropdowns Row */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <select
            value={filterTeam}
            onChange={(e) => setFilterTeam(e.target.value)}
            className="px-2.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer text-xs"
          >
            <option value="" className="dark:bg-slate-900">All Teams</option>
            {teams.map(t => (
              <option key={t.id} value={t.id} className="dark:bg-slate-900">{t.name}</option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-2.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer text-xs"
          >
            <option value="" className="dark:bg-slate-900">All Statuses</option>
            <option value="OPEN" className="dark:bg-slate-900">Open</option>
            <option value="IN_PROGRESS" className="dark:bg-slate-900">In progress</option>
            <option value="PENDING_APPROVAL" className="dark:bg-slate-900">Awaiting approval</option>
            <option value="RESOLVED" className="dark:bg-slate-900">Resolved</option>
            <option value="CLOSED" className="dark:bg-slate-900">Closed</option>
          </select>
        </div>

      </div>

      {/* Total Count Header */}
      <div className="px-4 py-2 border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing <strong className="text-slate-900 dark:text-white font-semibold">{items.length}</strong> of {total} items
        </span>
        {isLoading && <span className="text-xs text-emerald-600 dark:text-emerald-400 animate-pulse font-medium">Updating...</span>}
      </div>

      {/* Work Item Cards List (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {items.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center p-6 text-slate-400 text-xs">
            <Inbox className="w-10 h-10 mb-2 text-slate-300 stroke-[1.5]" />
            <p className="font-semibold text-slate-600 dark:text-slate-300">No work items found</p>
            <p className="text-[11px] text-slate-400 mt-1">Try relaxing filters or search query</p>
          </div>
        ) : (
          items.map(item => {
            const isSelected = item.id === selectedId;
            const statusInfo = getStatusDisplay(item.status);
            const isUrgent = item.priority === 'URGENT';
            const team = teams.find(t => t.id === item.team_id);

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item.id)}
                className={`bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl p-3.5 cursor-pointer transition-all relative group hover:border-slate-300 dark:hover:border-slate-600 shadow-xs hover:shadow-sm ${
                  isSelected 
                    ? 'ring-2 ring-emerald-500 bg-white dark:bg-slate-800 shadow-sm' 
                    : ''
                } ${
                  isUrgent ? 'border-l-4 border-l-rose-500' : ''
                }`}
              >
                {/* Top Row: Team + Status + Priority */}
                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {team?.name || 'General'}
                  </span>
                  
                  <div className="flex items-center space-x-1.5">
                    {getPriorityDisplay(item.priority)}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusInfo.bg}`}>
                      {statusInfo.label}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-[13px] font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {item.title}
                </h4>

                {/* Bottom Row: Owner + Timestamp */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
                  {/* Owner */}
                  <div className="flex items-center space-x-1.5">
                    {item.assignee_name ? (
                      <div className="flex items-center space-x-1.5">
                        <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[9px] flex items-center justify-center border border-slate-200 dark:border-slate-600">
                          {item.assignee_name.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-300">{item.assignee_name}</span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-semibold text-[10px]">
                        <AlertCircle className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        <span>Unassigned</span>
                      </span>
                    )}
                  </div>

                  {/* Relative Time */}
                  <div className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-[10px]">
                    <Clock className="w-3 h-3" />
                    <span>{formatRelativeTime(item.updated_at || item.created_at)}</span>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Pagination Footer */}
      <div className="p-3 border-t border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 flex items-center justify-between text-xs">
        <button
          disabled={currentPage <= 1 || isLoading}
          onClick={() => onPageChange(Math.max(0, offset - limit))}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs transition"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <span className="text-slate-500 dark:text-slate-400 text-[11px] font-medium">
          Page <strong className="text-slate-900 dark:text-white">{currentPage}</strong> of {totalPages}
        </span>

        <button
          disabled={currentPage >= totalPages || isLoading}
          onClick={() => onPageChange(offset + limit)}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs transition"
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

