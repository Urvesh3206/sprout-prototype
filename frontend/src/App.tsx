import React, { useState, useEffect, useCallback } from 'react';
import { WorkItem, AuditLog, WorkItemComment, Team, User, Status } from './types';
import { api, setActiveUser, getActiveUserId, ConcurrencyConflictError } from './api/client';
import { Navbar } from './components/Navbar';
import { WorkItemList } from './components/WorkItemList';
import { WorkItemDetail } from './components/WorkItemDetail';
import { CreateWorkItemModal } from './components/CreateWorkItemModal';
import { ConflictResolutionModal } from './components/ConflictResolutionModal';
import { OutboxMonitorModal } from './components/OutboxMonitorModal';
import { FloatingChatBot } from './components/FloatingChatBot';
import { ThreeDScene } from './components/ThreeDScene';
import { SproutPrototype } from './components/SproutPrototype';

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Work items state
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Selected item detail
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [comments, setComments] = useState<WorkItemComment[]>([]);

  // Filtering state
  const [filterTeam, setFilterTeam] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterTab, setFilterTab] = useState<'all' | 'attention' | 'my' | 'unassigned'>('attention');
  const [searchQuery, setSearchQuery] = useState('');

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isOutboxOpen, setIsOutboxOpen] = useState(false);
  const [outboxPendingCount, setOutboxPendingCount] = useState(0);

  // Conflict resolution modal
  const [conflictModalOpen, setConflictModalOpen] = useState(false);
  const [conflictData, setConflictData] = useState<{
    expectedVersion: number;
    currentVersion: number;
    currentItem: WorkItem | null;
  }>({
    expectedVersion: 1,
    currentVersion: 1,
    currentItem: null
  });

  // View mode switcher: Sprout 2.0 Mobile Prototype (default for reviewers) vs Ops Console
  const [viewMode, setViewMode] = useState<'console' | 'prototype'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'console') return 'console';
    }
    return 'prototype';
  });

  // 1. Initial Load of Users & Teams
  useEffect(() => {
    async function init() {
      try {
        const [loadedUsers, loadedTeams] = await Promise.all([
          api.getUsers(),
          api.getTeams()
        ]);
        setUsers(loadedUsers);
        setTeams(loadedTeams);

        const savedUserId = getActiveUserId();
        const active = loadedUsers.find(u => u.id === savedUserId) || loadedUsers[0] || null;
        setCurrentUser(active);
        if (active) setActiveUser(active.id);
      } catch (err: any) {
        console.error('Failed to load initial metadata:', err);
      }
    }
    init();
  }, []);

  // 2. Fetch Work Items list
  const fetchWorkItems = useCallback(async (showSpinner = false) => {
    if (showSpinner) setIsLoading(true);
    setIsRefreshing(true);
    try {
      const data = await api.listWorkItems({
        team_id: filterTeam || undefined,
        status: filterStatus || undefined,
        priority: filterPriority || undefined,
        category: filterCategory || undefined,
        assignee_id: filterTab === 'my' && currentUser ? currentUser.id : undefined,
        unassigned_only: filterTab === 'unassigned',
        requires_attention: filterTab === 'attention',
        search: searchQuery || undefined,
        limit,
        offset
      });
      setWorkItems(data.items);
      setTotalItems(data.total);

      // Auto-select first item if none selected or selected item is gone
      if (data.items.length > 0 && (!selectedId || !data.items.some(i => i.id === selectedId))) {
        setSelectedId(data.items[0].id);
      } else if (data.items.length === 0) {
        setSelectedId(null);
        setSelectedItem(null);
      }
    } catch (err: any) {
      console.error('Failed to fetch items:', err);
      setErrorBanner('Failed to load operational items queue');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [filterTeam, filterStatus, filterPriority, filterCategory, filterTab, searchQuery, limit, offset, currentUser, selectedId]);

  useEffect(() => {
    fetchWorkItems(true);
  }, [fetchWorkItems]);

  // 3. Fetch Detail when selectedId changes
  const fetchItemDetail = useCallback(async (id: string) => {
    try {
      const data = await api.getWorkItem(id);
      setSelectedItem(data.workItem);
      setAuditLogs(data.auditLogs);
      setComments(data.comments);
    } catch (err: any) {
      console.error('Failed to fetch item detail:', err);
      if (err.status === 404) {
        setSelectedId(null);
        setSelectedItem(null);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedId) {
      fetchItemDetail(selectedId);
    } else {
      setSelectedItem(null);
      setAuditLogs([]);
      setComments([]);
    }
  }, [selectedId, fetchItemDetail]);

  // 4. Background Polling (Poll every 15s for fresh changes & outbox count)
  useEffect(() => {
    const timer = setInterval(async () => {
      if (selectedId) {
        fetchItemDetail(selectedId);
      }
      try {
        const outbox = await api.getOutbox();
        const pending = outbox.stats.find(s => s.status === 'PENDING')?.count || 0;
        setOutboxPendingCount(pending);
      } catch {
        // silent
      }
    }, 15000);
    return () => clearInterval(timer);
  }, [selectedId, fetchItemDetail]);

  // Handle Switch User Persona
  const handleSelectUser = (user: User) => {
    setCurrentUser(user);
    setActiveUser(user.id);
    setSuccessBanner(`Switched active persona to ${user.name}`);
    setTimeout(() => setSuccessBanner(null), 3000);
  };

  // Handle Actions: Claim (Atomic UPDATE with LOSER 409 handling)
  const handleClaim = async () => {
    if (!selectedItem) return;
    setIsActionLoading(true);
    setErrorBanner(null);
    setSuccessBanner(null);
    try {
      const updated = await api.claimWorkItem(selectedItem.id, selectedItem.version);
      setSelectedItem(updated);
      setSuccessBanner('Successfully claimed item! You are now the designated owner.');
      fetchWorkItems();
      fetchItemDetail(selectedItem.id);
    } catch (err: any) {
      if (err instanceof ConcurrencyConflictError) {
        setErrorBanner(`Conflict: ${err.message}`);
        setConflictData({
          expectedVersion: selectedItem.version,
          currentVersion: err.currentVersion,
          currentItem: err.currentItem
        });
        setConflictModalOpen(true);
      } else {
        setErrorBanner(err.message || 'Failed to claim work item');
      }
    } finally {
      setIsActionLoading(false);
    }
  };

  // Handle Actions: Update Status (Optimistic Locking If-Match: version)
  const handleUpdateStatus = async (targetStatus: Status, resolutionSummary?: string) => {
    if (!selectedItem) return;
    setIsActionLoading(true);
    setErrorBanner(null);
    setSuccessBanner(null);
    try {
      const updated = await api.updateWorkItem(
        selectedItem.id,
        {
          status: targetStatus,
          expectedVersion: selectedItem.version,
          resolution_summary: resolutionSummary
        }
      );
      setSelectedItem(updated);
      setSuccessBanner(`Status updated to ${targetStatus.replace(/_/g, ' ')}`);
      fetchWorkItems();
      fetchItemDetail(selectedItem.id);
    } catch (err: any) {
      if (err instanceof ConcurrencyConflictError) {
        setErrorBanner(`Concurrent modification detected (409): ${err.message}`);
        setConflictData({
          expectedVersion: selectedItem.version,
          currentVersion: err.currentVersion,
          currentItem: err.currentItem
        });
        setConflictModalOpen(true);
      } else {
        setErrorBanner(err.message || 'Failed to update status');
      }
    } finally {
      setIsActionLoading(false);
    }
  };

  // Handle Approval Determination (Four-eyes check)
  const handleApprove = async (decision: 'APPROVED' | 'REJECTED', rationale: string) => {
    if (!selectedItem) return;
    setIsActionLoading(true);
    setErrorBanner(null);
    try {
      const updated = await api.decideApproval(
        selectedItem.id,
        decision,
        rationale,
        selectedItem.version
      );
      setSelectedItem(updated);
      setSuccessBanner(`Decision recorded: ${decision}`);
      fetchWorkItems();
      fetchItemDetail(selectedItem.id);
    } catch (err: any) {
      if (err instanceof ConcurrencyConflictError) {
        setConflictData({
          expectedVersion: selectedItem.version,
          currentVersion: err.currentVersion,
          currentItem: err.currentItem
        });
        setConflictModalOpen(true);
      } else {
        setErrorBanner(err.message || 'Approval rejected by server policy');
      }
    } finally {
      setIsActionLoading(false);
    }
  };

  // Handle Add Note / Comment
  const handleAddComment = async (content: string) => {
    if (!selectedItem) return;
    try {
      await api.addComment(selectedItem.id, content);
      fetchItemDetail(selectedItem.id);
    } catch (err: any) {
      setErrorBanner('Failed to add note');
    }
  };

  // Simulate Conflict (OCC 409 test tool)
  const handleSimulateConflict = async () => {
    if (!selectedItem) return;
    try {
      const res = await api.simulateConflict(selectedItem.id);
      setSuccessBanner(`Simulated: another user just updated this request to version ${res.newVersion}. Now click any action button to see the conflict modal.`);
    } catch (err: any) {
      setErrorBanner('Failed to simulate conflict');
    }
  };

  const handleCreateWorkItem = async (payload: any, idempotencyKey?: string) => {
    const res = await api.createWorkItem(payload, idempotencyKey);
    fetchWorkItems();
    setSelectedId(res.id);
    return res;
  };

  return (
    <div className="flex flex-col h-screen light-sprout-bg text-slate-900 dark:text-slate-100 overflow-hidden selection:bg-emerald-500 selection:text-white transition-colors duration-200 relative">
      
      {/* Three.js Interactive 3D Background with Floating Rupee Coins, Depth Parallax & Stardust */}
      <ThreeDScene />

      {/* Top Navigation */}
      <Navbar
        currentUser={currentUser}
        users={users}
        teams={teams}
        onSelectUser={handleSelectUser}
        onOpenCreate={() => setIsCreateOpen(true)}
        onOpenOutbox={() => setIsOutboxOpen(true)}
        onRefresh={() => {
          fetchWorkItems(false);
          if (selectedId) fetchItemDetail(selectedId);
        }}
        isRefreshing={isRefreshing}
        outboxPendingCount={outboxPendingCount}
        viewMode={viewMode}
        onToggleView={() => setViewMode(prev => prev === 'console' ? 'prototype' : 'console')}
      />

      {/* Main Content Area */}
      {viewMode === 'prototype' ? (
        <div className="flex-1 overflow-y-auto z-10">
          <SproutPrototype onBackToConsole={() => setViewMode('console')} />
        </div>
      ) : (
        /* Main Split Layout: Left Queue, Right Details */
        <div className="flex-1 flex overflow-hidden z-10">
          
          {/* Left Column: Work Items List (420px–480px width) */}
          <div className="w-full md:w-[420px] lg:w-[460px] flex-shrink-0 flex flex-col h-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border-r border-slate-200/90 dark:border-slate-800 shadow-xs z-10">
            <WorkItemList
              items={workItems}
              total={totalItems}
              limit={limit}
              offset={offset}
              selectedId={selectedId}
              onSelectItem={setSelectedId}
              teams={teams}
              currentUser={currentUser}
              filterTeam={filterTeam}
              setFilterTeam={setFilterTeam}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filterPriority={filterPriority}
              setFilterPriority={setFilterPriority}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filterTab={filterTab}
              setFilterTab={setFilterTab}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onPageChange={setOffset}
              isLoading={isLoading}
            />
          </div>

          {/* Right Column: Work Item Detail Pane with High-Contrast Canvas */}
          <div className="hidden md:flex flex-1 flex-col h-full bg-slate-50/70 dark:bg-slate-950/60 backdrop-blur-md overflow-hidden">
            <WorkItemDetail
              item={selectedItem}
              auditLogs={auditLogs}
              comments={comments}
              currentUser={currentUser}
              users={users}
              onClaim={handleClaim}
              onUpdateStatus={handleUpdateStatus}
              onApprove={handleApprove}
              onAddComment={handleAddComment}
              onSimulateConflict={handleSimulateConflict}
              isActionLoading={isActionLoading}
              errorBanner={errorBanner}
              successBanner={successBanner}
            />
          </div>

        </div>
      )}

      {/* Full-Width Pinned Frosted Regulatory Status Bar */}
      <footer className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 py-2.5 px-6 text-center text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-between z-20 transition-colors">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-bold text-slate-900 dark:text-white">OpsPulse Active</span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-slate-600 dark:text-slate-400">PostgreSQL Strict Concurrency & Append-Only Event Stream</span>
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
          Conditional Optimistic Locking (OCC) · Atomic Claim Handlers · Idempotency Keys · Outbox Queue
        </div>
      </footer>

      {/* Create Work Item Modal */}
      <CreateWorkItemModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        teams={teams}
        users={users}
        onCreate={handleCreateWorkItem}
      />

      {/* Conflict Resolution Modal (OCC 409) */}
      <ConflictResolutionModal
        isOpen={conflictModalOpen}
        onClose={() => setConflictModalOpen(false)}
        onReload={() => {
          setConflictModalOpen(false);
          if (selectedId) fetchItemDetail(selectedId);
          fetchWorkItems();
        }}
        expectedVersion={conflictData.expectedVersion}
        currentVersion={conflictData.currentVersion}
        currentItem={conflictData.currentItem}
      />

      {/* Transactional Outbox Monitor Modal */}
      <OutboxMonitorModal
        isOpen={isOutboxOpen}
        onClose={() => setIsOutboxOpen(false)}
      />

      {/* Floating Animated AI Copilot Chatbot */}
      <FloatingChatBot />

    </div>
  );
}
