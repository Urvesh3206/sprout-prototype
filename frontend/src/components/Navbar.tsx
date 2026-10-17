import React from 'react';
import { User, Team } from '../types';
import { RefreshCw, Plus, Cpu, ChevronDown, Sun, Moon, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentUser: User | null;
  users: User[];
  teams: Team[];
  onSelectUser: (user: User) => void;
  onOpenCreate: () => void;
  onOpenOutbox: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  outboxPendingCount: number;
  viewMode?: 'console' | 'prototype';
  onToggleView?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  users,
  teams,
  onSelectUser,
  onOpenCreate,
  onOpenOutbox,
  onRefresh,
  isRefreshing,
  outboxPendingCount,
  viewMode = 'console',
  onToggleView
}) => {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800 sticky top-0 z-30 shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand: Sprout Leaf Icon + OpsPulse Wordmark */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs transition-colors">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 32 32" fill="none">
              <path d="M12 28C12 20 18 14 26 12C26 20 20 26 12 28Z" fill="#10B981" />
              <path d="M12 28C12 16 8 10 2 8C2 20 8 26 12 28Z" fill="currentColor" />
              <path d="M12 28V8C15 12 20 12 20 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">OpsPulse</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Sprout Ops
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Team coordination & operations queue</p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Switcher: Operations Queue <-> Interactive Prototype */}
          {onToggleView && (
            <button
              onClick={onToggleView}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-xs transition active:scale-95 cursor-pointer ${
                viewMode === 'prototype'
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                  : 'bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}
              title="Toggle between Operations Queue and Sprout 2.0 Mobile Prototype"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {viewMode === 'prototype' ? 'Ops Queue' : 'Sprout 2.0 App'}
              </span>
            </button>
          )}

          {/* Outbox Queue Monitor Pill */}
          <button
            onClick={onOpenOutbox}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs transition active:scale-95 cursor-pointer"
            title="Transactional Outbox Worker Status"
          >
            <Cpu className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="hidden sm:inline">Outbox:</span>
            {outboxPendingCount > 0 ? (
              <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] px-1.5 py-0.2 rounded-full font-bold animate-pulse">
                {outboxPendingCount} pending
              </span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">Idle</span>
            )}
          </button>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95 cursor-pointer"
            title="Refresh queue"
            aria-label="Refresh queue"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-emerald-600' : ''}`} />
          </button>

          {/* Theme Mode Segmented Pill Toggle (Light / Dark) */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs">
            <button
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                theme === 'light'
                  ? 'bg-white text-amber-500 shadow-xs font-bold'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
              title="Switch to Light Mode"
              aria-label="Light mode"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-900 text-sky-400 shadow-xs font-bold'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
              title="Switch to Dark Mode"
              aria-label="Dark mode"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* New Work Item Button (Vibrant Emerald Accent Pill) */}
          <button
            onClick={onOpenCreate}
            className="flex items-center space-x-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">New request</span>
          </button>

          {/* User Persona Switcher (Clean Apple-style frosted pill) */}
          <div className="border-l border-slate-200 dark:border-slate-800 pl-2 sm:pl-3 flex items-center space-x-2">
            {currentUser?.avatar ? (
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-xs"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-slate-700">
                {currentUser?.name?.charAt(0) || 'U'}
              </div>
            )}

            <div className="relative">
              <select
                aria-label="Switch User Persona"
                value={currentUser?.id || ''}
                onChange={(e) => {
                  const u = users.find(x => x.id === e.target.value);
                  if (u) onSelectUser(u);
                }}
                className="appearance-none bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 pr-7 pl-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs cursor-pointer transition"
              >
                {users.map(u => (
                  <option key={u.id} value={u.id} className="dark:bg-slate-900 dark:text-slate-100">
                    {u.name} {u.is_system_admin ? '(Admin)' : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
