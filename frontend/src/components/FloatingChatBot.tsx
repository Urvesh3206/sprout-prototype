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

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  source?: string;
  timestamp: Date;
}

export const FloatingChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
                <img 
                  src="/sprout-bot-head.png" 
                  alt="Sprout Bot" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                />
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
                    <img 
                      src="/sprout-bot-head.png" 
                      alt="AI" 
                      className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700 flex-shrink-0 mt-0.5"
                    />
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
                <img 
                  src="/sprout-bot-head.png" 
                  alt="AI Thinking" 
                  className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700 animate-pulse"
                />
                <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 px-3.5 py-2.5 rounded-2xl rounded-bl-xs border border-slate-200 dark:border-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Box */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 transition-colors">
            <input
              type="text"
              placeholder="Ask how any feature or workflow works..."
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
          className="pointer-events-auto relative cursor-pointer group select-none flex items-end space-x-1.5"
          title="Click to talk with Sprout AI Copilot"
        >
          
          {/* Frosted Glass Speech Card floating beside the robot */}
          <div className="relative mb-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg rounded-xl px-3 py-1.5 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1.5">
            <div className="flex items-center space-x-1 font-bold text-[11px] text-slate-900 dark:text-white">
              <span>Hi!</span>
              <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.5 2.5 6C4.5 19 6 21 8 22c0-4 3-7 7-7 1 0 2 .2 3 .5C19 14 20 12 20 10c0-4.4-3.6-8-8-8z"/>
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5 whitespace-nowrap">
              I'm here to help.
            </p>
            {/* Speech bubble tail pointing towards the robot */}
            <div className="absolute -bottom-1 right-5 w-2.5 h-2.5 bg-white/95 dark:bg-slate-900/95 border-r border-b border-slate-200 dark:border-slate-700 rotate-45"></div>
          </div>

          {/* Floating Golden Rupee Coin */}
          <div className="absolute top-1 right-20 w-6 h-6 rounded-full overflow-hidden shadow-md animate-coin-float pointer-events-none">
            <img 
              src="/sprout-coin.png" 
              alt="₹ Rupee Coin" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3D Floating Robot Character (Transparent cutout with zero-gravity physics) */}
          <div className="relative flex flex-col items-center">
            
            {/* The Robot Itself (Zero-Gravity Float Animation) */}
            <div className="relative w-20 h-26 sm:w-24 sm:h-30 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1.5 animate-robot-float">
              
              {/* Glowing soft aura behind robot */}
              <div className="absolute inset-1 rounded-full bg-emerald-400/20 blur-lg group-hover:bg-emerald-400/35 transition"></div>

              {/* 3D Transparent Robot PNG */}
              <img 
                src="/sprout-robot-final.png" 
                alt="OpsPulse AI Copilot 3D Robot" 
                className="relative z-10 w-full h-full object-contain filter drop-shadow-lg"
              />

              {/* Glowing animated pulse on robot's chest core */}
              <div className="absolute bottom-8 left-[50%] -translate-x-[50%] w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping z-20"></div>
            </div>

            {/* Soft Ambient Ground Shadow Beneath the Robot */}
            <div className="w-12 h-1.5 bg-slate-900/15 dark:bg-black/30 rounded-full blur-xs mt-0.5 transform scale-x-90 animate-pulse"></div>

          </div>

        </div>
      )}

    </div>
  );
};
