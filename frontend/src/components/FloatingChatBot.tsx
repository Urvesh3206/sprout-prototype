import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Minus,
  HelpCircle,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { api } from '../api/client';
import robotImg from '../assets/sprout-robot-final.png';
import coinImg from '../assets/sprout-coin.png';
import botHeadImg from '../assets/sprout-bot-head.png';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  source?: string;
  timestamp: Date;
}

// Resilient Vector Robot Mascot fallback in case local assets fail or are slow
const VectorRobotMascot: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'lg' }) => {
  const isSm = size === 'sm';
  return (
    <div className={`relative flex items-center justify-center ${isSm ? 'w-7 h-7' : 'w-20 h-24 sm:w-22 sm:h-28'}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`bodyGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          <linearGradient id={`visorGrad-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        
        {/* Antenna */}
        <line x1="50" y1="22" x2="50" y2="8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="7" r="4" fill="#34d399" />
        {/* Sprout Leaf on Antenna */}
        <path d="M50 8 C56 2, 64 4, 61 12 C55 12, 52 10, 50 8 Z" fill="#4ade80" />

        {/* Head */}
        <rect x="22" y="20" width="56" height="42" rx="16" fill={`url(#bodyGrad-${size})`} stroke="#6ee7b7" strokeWidth="2" />
        {/* Visor Screen */}
        <rect x="28" y="28" width="44" height="24" rx="8" fill={`url(#visorGrad-${size})`} stroke="#10b981" strokeWidth="1.5" />
        
        {/* Glowing Robot Eyes */}
        <circle cx="40" cy="40" r="4" fill="#34d399">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="40" r="4" fill="#34d399">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
        </circle>

        {!isSm && (
          <>
            {/* Neck connector */}
            <rect x="42" y="62" width="16" height="6" rx="2" fill="#047857" />

            {/* Torso */}
            <rect x="26" y="68" width="48" height="38" rx="12" fill={`url(#bodyGrad-${size})`} stroke="#6ee7b7" strokeWidth="1.5" />
            {/* Chest Glowing Core / Sprout Symbol */}
            <circle cx="50" cy="86" r="7" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="50" cy="86" r="3.5" fill="#34d399" />
          </>
        )}
      </svg>
    </div>
  );
};

export const FloatingChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [robotImgError, setRobotImgError] = useState(false);
  const [coinImgError, setCoinImgError] = useState(false);
  const [headImgError, setHeadImgError] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "👋 **Hi! I'm here to help.**\n\nI'm your **OpsPulse AI Copilot** (powered by Google Gemini). Ask me how any feature works, how to test concurrent claim races, or why an action is blocked!",
      source: 'gemini-ai',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: 'user_' + Date.now(),
      role: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const res = await api.chatWithAi(text, history);

      const aiMsg: Message = {
        id: 'ai_' + Date.now(),
        role: 'model',
        text: res.reply,
        source: res.source,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        id: 'err_' + Date.now(),
        role: 'model',
        text: "I'm having trouble connecting right now. Try asking about **Atomic Claims**, **409 Conflicts**, or **Manager Approvals**!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    { label: "⚡ Atomic Claim", query: "How does Atomic Claim work in OpsPulse and where can I test it?" },
    { label: "⚠️ 409 Conflict", query: "How do I simulate an Optimistic Concurrency 409 conflict?" },
    { label: "🛡️ Four-Eyes Approval", query: "Explain the four-eyes approval workflow and separation of duties" },
    { label: "📦 Outbox Worker", query: "How does the Transactional Outbox pattern and retry queue work?" }
  ];

  // Helper to format basic markdown-style text (bold, bullet points)
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      // Bullet points
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        return (
          <div key={idx} className="flex items-start space-x-1.5 my-1 pl-1">
            <span className="text-[#149B56] font-bold">•</span>
            <span>{parseInlineBold(content)}</span>
          </div>
        );
      }
      // Numbered items
      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <div key={idx} className="my-1 pl-1">
            {parseInlineBold(line)}
          </div>
        );
      }
      // Blank lines
      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }
      // Normal paragraphs
      return (
        <p key={idx} className="my-0.5">
          {parseInlineBold(line)}
        </p>
      );
    });
  };

  const parseInlineBold = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.2 rounded text-[10px] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* EXPANDED CHAT WINDOW */}
      {isOpen && (
        <div className="pointer-events-auto w-[360px] sm:w-[410px] h-[540px] max-h-[82vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200 transition-colors">
          
          {/* Header with 3D Sprout Bot Avatar */}
          <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {!headImgError ? (
                  <img 
                    src={botHeadImg} 
                    alt="Sprout Bot" 
                    onError={() => setHeadImgError(true)}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                  />
                ) : (
                  <VectorRobotMascot size="sm" />
                )}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse"></span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">Sprout AI Copilot</h3>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.2 rounded-full font-bold">Online</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Gemini Intelligence · Ops Guide</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Minimize chat"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Action Chips */}
          <div className="px-3.5 py-2 bg-slate-50/50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[10px] font-semibold border border-slate-200 dark:border-slate-700 transition active:scale-95 cursor-pointer shadow-2xs"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => {
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex items-start space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                      {!headImgError ? (
                        <img 
                          src={botHeadImg} 
                          alt="AI" 
                          onError={() => setHeadImgError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <VectorRobotMascot size="sm" />
                      )}
                    </div>
                  )}

                  <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[85%]`}>
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-xs ${
                        isUser
                          ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-xs shadow-2xs leading-relaxed'
                      }`}
                    >
                      {renderFormattedText(m.text)}
                    </div>
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 px-1">
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700">
                  <VectorRobotMascot size="sm" />
                </div>
                <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 px-3.5 py-2.5 rounded-2xl rounded-bl-xs border border-slate-200 dark:border-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 transition-colors">
            <input
              type="text"
              placeholder="Ask anything about OpsPulse..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white flex items-center justify-center transition shadow-xs cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* FLOATING 3D SPROUT ROBOT (Pure transparent cutout with zero-gravity float) */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto relative cursor-pointer group select-none flex items-end space-x-2 mr-2"
          title="Click to talk with Sprout AI Copilot"
        >
          
          {/* Frosted Glass Speech Card floating beside the robot */}
          <div className="relative mb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl px-3.5 py-2 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-[11px] text-slate-900 dark:text-white">
              <span>Hi!</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5 whitespace-nowrap">
              I'm here to help.
            </p>
            {/* Speech bubble tail pointing towards the robot */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 dark:bg-slate-900/95 border-r border-t border-slate-200 dark:border-slate-700 rotate-45"></div>
          </div>

          {/* Floating Golden Rupee Coin */}
          <div className="absolute -top-3 right-16 w-5 h-5 rounded-full overflow-hidden shadow-md animate-coin-float pointer-events-none">
            {!coinImgError ? (
              <img 
                src={coinImg} 
                alt="" 
                onError={() => setCoinImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-amber-400 border border-amber-300 flex items-center justify-center text-[9px] font-bold text-amber-900 shadow">
                ₹
              </div>
            )}
          </div>

          {/* 3D Floating Robot Character */}
          <div className="relative flex flex-col items-center">
            
            {/* The Robot Itself (Zero-Gravity Float Animation) */}
            <div className="relative w-20 h-24 sm:w-22 sm:h-28 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1.5 animate-robot-float">
              
              {/* Glowing soft aura behind robot */}
              <div className="absolute inset-1 rounded-full bg-emerald-400/25 blur-lg group-hover:bg-emerald-400/40 transition"></div>

              {/* 3D Transparent Robot with Zero Broken-Image Glitch Fallback */}
              {!robotImgError ? (
                <img 
                  src={robotImg} 
                  alt="" 
                  onError={() => setRobotImgError(true)}
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-lg"
                />
              ) : (
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <VectorRobotMascot size="lg" />
                </div>
              )}

              {/* Glowing animated pulse on robot's chest core */}
              <div className="absolute bottom-8 left-[50%] -translate-x-[50%] w-2 h-2 rounded-full bg-emerald-400 animate-ping z-20 pointer-events-none"></div>
            </div>

            {/* Soft Ambient Ground Shadow Beneath the Robot */}
            <div className="w-12 h-1.5 bg-slate-900/20 dark:bg-black/40 rounded-full blur-xs mt-0.5 transform scale-x-90 animate-pulse"></div>

          </div>

        </div>
      )}

    </div>
  );
};
