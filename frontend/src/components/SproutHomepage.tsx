import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  X, 
  Download, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle, 
  Info, 
  Globe,
  Sliders
} from 'lucide-react';

interface SproutHomepageProps {
  onOpenOpsConsole: () => void;
}

export const SproutHomepage: React.FC<SproutHomepageProps> = ({ onOpenOpsConsole }) => {
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Interactive Onboarding Flow inside modal
  const [onboardingStep, setOnboardingStep] = useState<number>(1);
  const [weeklyAmount, setWeeklyAmount] = useState<number>(100);
  const [kycProgress, setKycProgress] = useState<number>(1);

  // Growth calculator
  const totalInvested = weeklyAmount * 52 * 3;
  const estimatedFutureValue = Math.round(weeklyAmount * ((Math.pow(1 + 0.12/52, 52 * 3) - 1) / (0.12/52)));

  return (
    <div className="min-h-screen bg-[#F4F8F4] text-[#1B3C30] flex flex-col font-sans selection:bg-[#149B56] selection:text-white relative overflow-x-hidden">
      
      {/* Ambient background leaf-vein glow */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-200/40 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-lime-100/50 blur-[100px]"></div>
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Left: Brand Logo & Navigation Links */}
        <div className="flex items-center space-x-10">
          <div 
            onClick={() => setActiveModal(null)}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            {/* Sprout 3-leaf green logo */}
            <div className="w-8 h-8 rounded-full bg-emerald-800/10 flex items-center justify-center text-[#0D3A2A] group-hover:scale-105 transition transform">
              <svg className="w-6 h-6 text-[#0D3A2A]" viewBox="0 0 32 32" fill="none">
                <path d="M12 28C12 20 18 14 26 12C26 20 20 26 12 28Z" fill="#149B56" />
                <path d="M12 28C12 16 8 10 2 8C2 20 8 26 12 28Z" fill="#0D3A2A" />
                <path d="M12 28V8C15 12 20 12 20 12" stroke="#0D3A2A" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#0D3A2A]">
              Sprout
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#254638]">
            <button 
              onClick={() => setActiveModal('how-it-works')}
              className="hover:text-[#149B56] transition cursor-pointer"
            >
              {lang === 'EN' ? 'How It Works' : 'यह कैसे काम करता है'}
            </button>
            <button 
              onClick={() => setActiveModal('about-us')}
              className="hover:text-[#149B56] transition cursor-pointer"
            >
              {lang === 'EN' ? 'About Us' : 'हमारे बारे में'}
            </button>
            <button 
              onClick={() => setActiveModal('resources')}
              className="hover:text-[#149B56] transition cursor-pointer"
            >
              {lang === 'EN' ? 'Resources' : 'संसाधन'}
            </button>
          </nav>
        </div>

        {/* Right: Language switch & Download App */}
        <div className="flex items-center space-x-4">
          
          {/* EN | हिंदी Interactive Toggle Switch */}
          <div 
            onClick={() => setLang(l => l === 'EN' ? 'HI' : 'EN')}
            className="flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-[#0D3A2A]/25 px-3 py-1.5 rounded-full cursor-pointer hover:bg-white transition select-none shadow-xs"
            title="Toggle English / Hindi"
          >
            <div className={`w-8 h-4 rounded-full p-0.5 flex items-center transition duration-300 ${
              lang === 'EN' ? 'bg-[#0D3A2A] justify-start' : 'bg-[#149B56] justify-end'
            }`}>
              <div className="w-3 h-3 rounded-full bg-white shadow-xs"></div>
            </div>
            <span className="text-xs font-bold text-[#0D3A2A] tracking-wider">
              EN | हिंदी
            </span>
          </div>

          {/* Download App Bordered Pill */}
          <button 
            onClick={() => setActiveModal('download')}
            className="border border-[#0D3A2A] text-[#0D3A2A] hover:bg-[#0D3A2A] hover:text-white px-5 py-2 rounded-full text-xs font-bold transition shadow-xs cursor-pointer"
          >
            {lang === 'EN' ? 'Download App' : 'ऐप डाउनलोड करें'}
          </button>
        </div>
      </header>

      {/* HERO SECTION CONTAINER: 16:9 HIGH RESOLUTION STAGE */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-2 max-w-7xl mx-auto w-full">
        
        {/* 16:9 Mockup Showcase Frame */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/10 bg-[#E8F3ED]">
          
          {/* Base Mockup Image: Pixel-Perfect Reference Visual */}
          <img 
            src="/sprout-hero.jpg" 
            alt="Sprout Investing App Zero-Gravity Interface"
            className="w-full h-full object-cover object-center select-none"
          />

          {/* Interactive Live Click Layer (Overlay hotspots matching the exact mockup coordinates) */}
          
          {/* 1. Interactive "Start Journey" Button Hotspot */}
          <div 
            style={{ left: '5.2%', top: '65.8%', width: '14.5%', height: '8.2%' }}
            className="absolute rounded-full cursor-pointer group"
            onClick={() => {
              setOnboardingStep(1);
              setActiveModal('onboarding');
            }}
            title="Click to Start Journey & Test Interactive App Flow"
          >
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-[#149B56]/20 transition border-2 border-[#149B56] animate-pulse"></div>
          </div>

          {/* 2. Interactive "Download on the App Store" Hotspot */}
          <div 
            style={{ left: '20.6%', top: '65.8%', width: '8.8%', height: '8.2%' }}
            className="absolute rounded-xl cursor-pointer group"
            onClick={() => setActiveModal('download')}
            title="Download on Apple App Store"
          >
            <div className="w-full h-full rounded-xl opacity-0 group-hover:opacity-100 bg-black/20 transition border border-black/40"></div>
          </div>

          {/* 3. Interactive "GET IT ON Google Play" Hotspot */}
          <div 
            style={{ left: '30.1%', top: '65.8%', width: '8.8%', height: '8.2%' }}
            className="absolute rounded-xl cursor-pointer group"
            onClick={() => setActiveModal('download')}
            title="Download on Google Play"
          >
            <div className="w-full h-full rounded-xl opacity-0 group-hover:opacity-100 bg-black/20 transition border border-black/40"></div>
          </div>

          {/* 4. Interactive Trust Badge Hotspot */}
          <div 
            style={{ left: '5.2%', top: '77.5%', width: '15.5%', height: '8.2%' }}
            className="absolute rounded-full cursor-pointer group"
            onClick={() => setActiveModal('trust')}
            title="View SEBI & User Trust Credentials"
          >
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-white/40 transition border border-emerald-600/30"></div>
          </div>

          {/* 5. Interactive Language Switch Hotspot on Top Mockup */}
          <div 
            style={{ left: '71.8%', top: '7.8%', width: '9.5%', height: '7.0%' }}
            className="absolute rounded-full cursor-pointer group"
            onClick={() => setLang(l => l === 'EN' ? 'HI' : 'EN')}
            title="Toggle EN / हिंदी"
          >
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-emerald-500/20 transition"></div>
          </div>

          {/* 6. Interactive "Download App" Hotspot on Top Mockup */}
          <div 
            style={{ left: '82.5%', top: '7.8%', width: '11.5%', height: '7.0%' }}
            className="absolute rounded-full cursor-pointer group"
            onClick={() => setActiveModal('download')}
            title="Download App"
          >
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-emerald-900/10 transition border border-[#0D3A2A]"></div>
          </div>

          {/* 7. Interactive Floating 3D Phone Hotspot */}
          <div 
            style={{ left: '54%', top: '24%', width: '22%', height: '62%' }}
            className="absolute rounded-[40px] cursor-pointer group"
            onClick={() => {
              setOnboardingStep(1);
              setActiveModal('onboarding');
            }}
            title="Click to interact with 3D Phone App Screen"
          >
            <div className="w-full h-full rounded-[40px] opacity-0 group-hover:opacity-100 transition ring-4 ring-[#149B56]/30 bg-emerald-500/5"></div>
          </div>

          {/* 8. Interactive Floating Sprout Island Hotspot */}
          <div 
            style={{ left: '74%', top: '35%', width: '22%', height: '50%' }}
            className="absolute rounded-3xl cursor-pointer group"
            onClick={() => setActiveModal('sprout-concept')}
            title="The Weightless Sprout: Learn about the Antigravity design philosophy"
          >
            <div className="w-full h-full rounded-3xl opacity-0 group-hover:opacity-100 transition ring-2 ring-emerald-400/40 bg-white/10"></div>
          </div>

          {/* Zero-gravity ambient particle shimmer animation layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] right-[32%] w-3 h-3 rounded-full bg-amber-300/60 blur-[1px] animate-bounce"></div>
            <div className="absolute top-[12%] right-[25%] w-2 h-2 rounded-full bg-emerald-300/70 blur-[1px] animate-pulse"></div>
            <div className="absolute top-[28%] right-[18%] w-2.5 h-2.5 rounded-full bg-amber-200/80 blur-[1px] animate-ping duration-1000"></div>
          </div>

          {/* Quick Action Pill on the bottom right of the canvas */}
          <div className="absolute bottom-4 right-6 hidden sm:flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-900/15 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#149B56] animate-spin" />
            <span className="text-[11px] font-bold text-[#0D3A2A]">Interactive Zero-Gravity Canvas</span>
            <button 
              onClick={() => {
                setOnboardingStep(1);
                setActiveModal('onboarding');
              }}
              className="ml-1 text-[10px] bg-[#149B56] text-white px-2.5 py-0.5 rounded-full font-bold hover:bg-[#0FA958] transition cursor-pointer"
            >
              Test App →
            </button>
          </div>

        </div>

        {/* Feature Badges Grid Below Hero */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          
          <div 
            onClick={() => {
              setOnboardingStep(1);
              setActiveModal('onboarding');
            }}
            className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-900/10 shadow-xs hover:shadow-md transition cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#149B56] flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition transform">
              ₹100
            </div>
            <h4 className="text-xs font-bold text-[#0D3A2A]">Micro-Investing Habit</h4>
            <p className="text-[11px] text-[#3D5B4F] mt-1 leading-snug">
              Start with just ₹100. Build financial resilience without altering daily lifestyle.
            </p>
          </div>

          <div 
            onClick={() => {
              setOnboardingStep(3);
              setActiveModal('onboarding');
            }}
            className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-900/10 shadow-xs hover:shadow-md transition cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition transform">
              60s
            </div>
            <h4 className="text-xs font-bold text-[#0D3A2A]">Zero Paperwork</h4>
            <p className="text-[11px] text-[#3D5B4F] mt-1 leading-snug">
              Instant PAN & Aadhaar e-KYC verified securely in under 60 seconds.
            </p>
          </div>

          <div 
            onClick={() => setActiveModal('trust')}
            className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-900/10 shadow-xs hover:shadow-md transition cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition transform">
              <ShieldCheck className="w-5 h-5 text-[#149B56]" />
            </div>
            <h4 className="text-xs font-bold text-[#0D3A2A]">SEBI Regulated</h4>
            <p className="text-[11px] text-[#3D5B4F] mt-1 leading-snug">
              Bank-grade 256-bit encryption. Fully registered with SEBI & AMFI.
            </p>
          </div>

          <div 
            onClick={() => {
              setOnboardingStep(2);
              setActiveModal('onboarding');
            }}
            className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-emerald-900/10 shadow-xs hover:shadow-md transition cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition transform">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="text-xs font-bold text-[#0D3A2A]">Top 50 Companies</h4>
            <p className="text-[11px] text-[#3D5B4F] mt-1 leading-snug">
              Own fractions of India's biggest enterprises with automatic risk diversification.
            </p>
          </div>

        </div>

      </main>

      {/* FULL-WIDTH PINNED FROSTED GLASS REGULATORY DISCLAIMER (12px visible, regulatory compliance) */}
      <footer className="relative z-30 w-full bg-white/60 backdrop-blur-md border-t border-emerald-900/10 py-3.5 px-6 text-center text-xs text-[#284539] font-medium leading-relaxed">
        <p className="max-w-5xl mx-auto">
          Disclaimer: Investment in securities market are subject to market risks. Read all scheme related documents carefully before investing. No guaranteed returns.
        </p>
      </footer>

      {/* FLOATING ACTION PILL: TOGGLE BACK TO NEWTONITE OPSPULSE CONSOLE */}
      <div className="fixed bottom-12 right-6 z-40">
        <button
          onClick={onOpenOpsConsole}
          className="flex items-center space-x-2 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xl border border-white/20 hover:scale-105 transition transform cursor-pointer backdrop-blur-md"
          title="Switch to Newtonite OpsPulse Concurrency Console"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
          <span>OpsPulse Console</span>
        </button>
      </div>

      {/* MODAL: 5-SCREEN INTERACTIVE ONBOARDING SIMULATOR */}
      {activeModal === 'onboarding' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F4F8F4]">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#149B56] text-white flex items-center justify-center font-bold text-xs">
                  {onboardingStep}
                </div>
                <span className="font-bold text-[#0D3A2A] text-sm">
                  Sprout App Simulator — Step {onboardingStep} of 5
                </span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Screen Content */}
            <div className="p-6 flex-1 flex flex-col">
              
              {onboardingStep === 1 && (
                <div className="space-y-5 text-center">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-100 flex items-center justify-center text-[#149B56] font-mono text-2xl font-bold">
                    ₹100
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D3A2A]">
                      {lang === 'EN' ? "Welcome to Sprout" : "स्प्रूट में आपका स्वागत है"}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                      {lang === 'EN' 
                        ? "You don't need thousands to start building wealth. Start with the cost of two cups of coffee."
                        : "दौलत बनाने के लिए आपको हजारों रुपये की जरूरत नहीं है। सिर्फ दो कप चाय की कीमत से शुरुआत करें।"}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F4F8F4] border border-emerald-900/10 text-left text-xs space-y-2">
                    <div className="flex items-center space-x-2 text-[#0D3A2A]">
                      <CheckCircle2 className="w-4 h-4 text-[#149B56] flex-shrink-0" />
                      <span>Start with just ₹100 threshold</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#0D3A2A]">
                      <CheckCircle2 className="w-4 h-4 text-[#149B56] flex-shrink-0" />
                      <span>Withdraw anytime to your verified bank account</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#0D3A2A]">
                      <CheckCircle2 className="w-4 h-4 text-[#149B56] flex-shrink-0" />
                      <span>Zero paperwork & fully SEBI regulated</span>
                    </div>
                  </div>
                </div>
              )}

              {onboardingStep === 2 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#0D3A2A]">
                      {lang === 'EN' ? "What is investing?" : "निवेश क्या है?"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {lang === 'EN' 
                        ? "Let India's top 50 growing companies work for you."
                        : "भारत की शीर्ष 50 कंपनियों को आपके लिए काम करने दें।"}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-3">
                    <div className="flex items-center justify-between text-[#0D3A2A] font-bold">
                      <span>Weekly savings habit:</span>
                      <span className="text-base text-[#149B56]">₹{weeklyAmount}/week</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="2000" 
                      step="100" 
                      value={weeklyAmount} 
                      onChange={(e) => setWeeklyAmount(Number(e.target.value))}
                      className="w-full accent-[#149B56] cursor-pointer"
                    />
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-emerald-200 text-[11px]">
                      <div>
                        <span className="text-slate-500 block">Total Deposited:</span>
                        <span className="font-bold text-slate-800 text-sm">₹{totalInvested.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 block">Estimated (12% CAGR):</span>
                        <span className="font-bold text-[#149B56] text-sm">₹{estimatedFutureValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Instead of keeping savings idle, your ₹100 buys tiny fractions of resilient enterprises (Reliance, TCS, HDFC Bank, etc.).
                  </p>
                </div>
              )}

              {onboardingStep === 3 && (
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#0D3A2A]">Ready in 60 Seconds</h3>
                    <p className="text-xs text-slate-500">Keep these two items handy before we begin</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">PAN Card Number</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Mandatory government regulation for all Indian investment portfolios.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#149B56] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Aadhaar Linked Phone</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        You will receive an instant 6-digit OTP for 100% paperless verification.
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
                    💡 Don't have them right now? You can save your progress and return anytime.
                  </div>
                </div>
              )}

              {onboardingStep === 4 && (
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#0D3A2A]">Real-Time Verification</h3>
                    <p className="text-xs text-slate-500">Clear progress indicators with government servers</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="text-slate-800">Connecting to Nodal Gateways</span>
                      <span className="text-[#149B56] font-mono">Stage {kycProgress} of 3</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2 text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-[#149B56]" />
                        <span>NSDL PAN Database: Verified</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${kycProgress >= 2 ? 'text-emerald-800' : 'text-slate-400'}`}>
                        {kycProgress >= 2 ? (
                          <CheckCircle2 className="w-4 h-4 text-[#149B56]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                        )}
                        <span>UIDAI Aadhaar e-KYC: Authenticated</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${kycProgress >= 3 ? 'text-emerald-800' : 'text-slate-400'}`}>
                        {kycProgress >= 3 ? (
                          <CheckCircle2 className="w-4 h-4 text-[#149B56]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 animate-spin border-t-[#149B56]"></div>
                        )}
                        <span>Creating investment locker (approx. 8 sec)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setKycProgress(prev => prev < 3 ? prev + 1 : 1)}
                      className="w-full text-center py-1.5 text-[11px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                    >
                      [Tap to simulate stage {kycProgress} completion]
                    </button>
                  </div>
                </div>
              )}

              {onboardingStep === 5 && (
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-[#149B56]">
                    <Sparkles className="w-8 h-8 text-[#149B56] animate-bounce" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0D3A2A]">Plant Your First ₹100 Seed</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Your account is verified and ready for instant UPI deposit</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    {[100, 250, 500].map(amt => (
                      <button
                        key={amt}
                        onClick={() => setWeeklyAmount(amt)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          weeklyAmount === amt 
                            ? 'bg-[#149B56] text-white shadow-md' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      alert(`🎉 Congratulations! Your ₹${weeklyAmount} seed investment was simulated successfully. Sprout is active!`);
                      setActiveModal(null);
                    }}
                    className="w-full py-3 rounded-xl bg-[#149B56] hover:bg-[#0FA958] text-white font-bold text-xs shadow-lg transition active:scale-95 cursor-pointer"
                  >
                    Pay ₹{weeklyAmount} via UPI (GPay / PhonePe / Paytm)
                  </button>
                </div>
              )}

            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              {onboardingStep > 1 ? (
                <button
                  onClick={() => setOnboardingStep(s => s - 1)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  ← Back
                </button>
              ) : <div />}

              <button
                onClick={() => {
                  if (onboardingStep < 5) setOnboardingStep(s => s + 1);
                  else setActiveModal(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#0D3A2A] hover:bg-[#149B56] text-white font-bold text-xs transition cursor-pointer"
              >
                {onboardingStep < 5 ? 'Next Step →' : 'Done'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL: DOWNLOAD APP */}
      {activeModal === 'download' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 text-center">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center text-[#149B56] mb-3">
              <Smartphone className="w-7 h-7 text-[#149B56]" />
            </div>
            <h3 className="text-lg font-bold text-[#0D3A2A]">Get the Sprout App</h3>
            <p className="text-xs text-slate-500 mt-1">Available on iOS and Android. Start with ₹100 today.</p>

            <div className="my-6 p-4 rounded-2xl bg-[#F4F8F4] border border-emerald-900/10 flex flex-col items-center">
              <div className="w-36 h-36 bg-white p-2 rounded-xl border border-slate-200 flex items-center justify-center shadow-xs">
                {/* Simulated QR Code */}
                <div className="w-full h-full bg-radial from-slate-900 via-slate-800 to-black rounded-lg p-2 flex flex-col items-center justify-center text-white text-[10px] text-center font-mono">
                  <span>[SCAN TO INSTALL]</span>
                  <span className="text-[#149B56] font-bold text-xs mt-1">sprout.invest</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 mt-2 font-medium">Scan with your smartphone camera</span>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => {
                  alert('Opening Apple App Store...');
                  setActiveModal(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                App Store
              </button>
              <button 
                onClick={() => {
                  alert('Opening Google Play Store...');
                  setActiveModal(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-black text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                Google Play
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: HOW IT WORKS / ABOUT US / RESOURCES */}
      {['how-it-works', 'about-us', 'resources', 'trust', 'sprout-concept'].includes(activeModal || '') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            
            {activeModal === 'how-it-works' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0D3A2A]">
                  <HelpCircle className="w-6 h-6 text-[#149B56]" />
                  <h3 className="text-lg font-bold">How Sprout Works</h3>
                </div>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="p-3 rounded-xl bg-[#F4F8F4] border border-emerald-900/10">
                    <strong className="text-[#0D3A2A] block mb-0.5">1. Deposit ₹100 anytime</strong>
                    No minimum commitment or salary requirements. Put ₹100 whenever you have spare cash.
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F8F4] border border-emerald-900/10">
                    <strong className="text-[#0D3A2A] block mb-0.5">2. Automated Diversification</strong>
                    Your funds are automatically spread across India's top 50 bluechip companies via low-cost index funds.
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F8F4] border border-emerald-900/10">
                    <strong className="text-[#0D3A2A] block mb-0.5">3. 100% Liquidity</strong>
                    Withdraw your money back into your bank account anytime with one tap. Zero lock-in.
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'about-us' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0D3A2A]">
                  <Info className="w-6 h-6 text-[#149B56]" />
                  <h3 className="text-lg font-bold">About Sprout</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over 95% of Indians never invest in the capital markets due to intimidating financial jargon, high entry barriers, and fear of losses. 
                  Sprout was created to democratize financial growth for Tier 2 and Tier 3 first-time investors, making wealth creation as simple and friendly as saving loose change.
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  🌱 <strong>Our Mission:</strong> Help 10 million first-time Indian investors build financial resilience, ₹100 at a time.
                </div>
              </div>
            )}

            {activeModal === 'resources' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0D3A2A]">
                  <TrendingUp className="w-6 h-6 text-[#149B56]" />
                  <h3 className="text-lg font-bold">Investor Resources & Guides</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer flex justify-between items-center">
                    <span>What is the Nifty 50 Index? (Plain English guide)</span>
                    <span className="text-[#149B56] font-bold">Read →</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer flex justify-between items-center">
                    <span>Compound Interest explained with Chai & Samosa</span>
                    <span className="text-[#149B56] font-bold">Read →</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer flex justify-between items-center">
                    <span>Taxation on Mutual Funds for First-Time Earners</span>
                    <span className="text-[#149B56] font-bold">Read →</span>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'trust' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0D3A2A]">
                  <ShieldCheck className="w-6 h-6 text-[#149B56]" />
                  <h3 className="text-lg font-bold">Trusted by 40,000+ First-Time Investors</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    Sprout is fully registered with the Securities and Exchange Board of India (SEBI) and the Association of Mutual Funds in India (AMFI).
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>AMFI Registered Mutual Fund Distributor: ARN-284910</li>
                    <li>Funds routed directly to SEBI-regulated custodians (BSE StAR MF / NSE NMF II)</li>
                    <li>Sprout never holds your investment money; it goes straight to the mutual fund AMC</li>
                  </ul>
                </div>
              </div>
            )}

            {activeModal === 'sprout-concept' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0D3A2A]">
                  <Sparkles className="w-6 h-6 text-[#149B56]" />
                  <h3 className="text-lg font-bold">Zero-Gravity Design Concept</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The visual aesthetic of Sprout embodies "weightlessness" — stripping away the heavy cognitive burden, anxiety, and fear traditionally associated with stock markets.
                  By levitating the phone, rich soil base, and glowing glass sprout in 3D space with floating ₹ rupee tokens, the interface communicates freedom, effortless growth, and cutting-edge Apple-like craft.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
