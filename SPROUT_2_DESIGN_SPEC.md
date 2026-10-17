# Sprout 2.0: Product & UX Design Strategy

**Challenge Brief**: Sprout 2.0 — Mobile Investing App for First-Time Investors in India (₹100 threshold)  
**Deliverable**: Comprehensive Design Strategy, Stakeholder Reconciliation, 5-Step Storytelling Journey & Front-End Feasibility Plan  

---

## 1. Critique of the Provided Data

Before designing, we must critically evaluate the quantitative and qualitative inputs provided:

| Metric | Stated Value | Critical Flaws & Biases | Remediation / Real Interpretation |
| :--- | :--- | :--- | :--- |
| **Homepage Bounce Rate** | 78% | Measured over only 2 weeks during a paid acquisition campaign. Paid ad traffic frequently skews bounce rates upward due to misaligned ad creatives or unqualified clicks. | Segment bounce rates by organic vs. paid source. Align marketing ad promises directly with the homepage hero value proposition. |
| **Drop-off at KYC Step** | 62% | Marked as *"Cause unknown"*. | Root causes identified through customer support tickets: users didn't know they needed physical PAN and Aadhaar cards ready, and long verification latency made users assume the app had crashed. |
| **Device Demographics** | 91% mobile; 40% < ₹10,000 | Low RAM, budget processors, patchy 4G/3G connections. | Heavy video, large libraries, or complex canvas animations will cause frame drops and app freezing. Page weight must stay strictly < 1.5MB. |
| **Language Preference** | "Many" prefer Hindi | Ambiguous and non-quantified. | Design the layout with **+35% text expansion tolerance** to support Devanagari script without breaking UI containers when Hindi localization is activated. |
| **User Survey** | 65% "Investing feels scary" | Survey sample size \(n = 40\) was exclusively **existing users** who already overcame the activation barrier! The actual fear among non-activated churned users is likely significantly higher (80%+). | Demystify investing with familiar Indian mental models (e.g., comparing ₹100 investing to daily chai/snack spending), avoiding intimidating Wall Street jargon. |

---

## 2. Stakeholder Conflict Reconciliation Matrix

The brief presents real, conflicting requirements from leadership. Here is our resolved product compromise:

```
      Minimal & Premium (CEO)  ◄─────────── [ BALANCE ] ───────────► High-Energy & Viral (Marketing)
  (Clean typography, generous whitespace)                       (Warm mascot "Gullak Sprout", social proof)
```

| Stakeholder | Demands | The Problem | Our Design Compromise |
| :--- | :--- | :--- | :--- |
| **CEO** | *"Feel like Apple: minimal, premium. No cartoon characters. Investors won't trust a cartoon."* | Extreme sterility alienates first-time mass-market Tier 2/3 Indian retail users who feel intimidated by stock markets. | **Understated, Modern "Seed/Sprout" Guide**: Instead of an exaggerated Disney cartoon, create a sleek, organic geometric botanical mascot ("Sprout") drawn with clean vectors. Acts as a polite guide, not a clown. |
| **Head of Marketing** | *"Competitor mascot got 2M views! We need a mascot, video, live ticker, 3 pop-ups, referral banner."* | 3 pop-ups + video will destroy load times on budget devices (currently 6.2s), violate the 1.5MB budget, and trigger instant bounces. | **Single Lightweight Interactive Simulator**: Replace the heavy video with a 45KB interactive CSS slider: *"What happens if you invest ₹100/week for 3 years?"* Display live social proof via static counters instead of a heavy live WebSocket ticker. Eliminate all popups. |
| **Compliance Officer** | *"Risk disclaimer in at least 12px text, visible without scrolling. Cannot say 'guaranteed', 'safe', or 'risk-free'."* | Disclaimers often look like scary legal warnings that scare new users away. | **Sticky Compact Disclaimer Bar**: Place a high-contrast 12px notice pinned above the fold: *"Investments are subject to market risks. Read scheme-related documents before investing."* Frame copy as transparent, honest, and regulated (SEBI compliance badge). |
| **Lead Developer** | *"< 1.5MB page weight, CSS/Lottie < 100KB, 1 developer for 3 weeks."* | Scope must be realistic for a single engineer. | **Pure SVG & CSS Animations**: Zero external canvas or WebGL dependencies. Use semantic HTML and system fonts + Google Inter/Noto Sans. |
| **Customer Support Lead** | *"Users didn't know they needed PAN/Aadhaar ready; thought app crashed while waiting."* | Blind drop-offs at step 4 of KYC. | **Pre-KYC Checklist Screen**: Tell users upfront before starting KYC: *"You will need your PAN card and Aadhaar-linked phone for OTP."* Add an animated progress stepper explaining verification backend stages. |

---

## 3. The Continuous Storytelling Journey: 5 Onboarding Screens

The journey transitions seamlessly from the website to the mobile app installation:

```
[ Homepage: "Grow ₹100 into a habit" ] ──► [ Install App ]
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Screen 1: Welcome & The ₹100 Myth-Buster
Screen 2: Demystifying the Market (Chai vs Compounding)
Screen 3: The 60-Second Readiness Checklist (PAN + Aadhaar)
Screen 4: Transparent Zero-Wait KYC
Screen 5: First ₹100 Milestone & Sprout Celebration
```

### Screen 1: The Myth-Buster (Welcome)
- **Visual**: Sprout mascot resting beside a single ₹100 Indian banknote.
- **Headline**: *"You don't need thousands to start investing."*
- **Subtext**: *"Start with just ₹100 — the cost of two cups of coffee. No hidden charges. Fully SEBI regulated."*
- **Primary CTA**: *"Begin with ₹100 →"* (48px tap target)

### Screen 2: Plain Language Demystification (Addressing Fear)
- **Visual**: Micro-graph showing ₹100 compounding into a blooming plant over 5 years.
- **Copy**: *"What is investing? It simply means letting India's top 50 growing companies work for you while you sleep."*
- **Interactive Pill**: *"Try investing ₹500/month? See your potential growth."*

### Screen 3: The "Ready in 60 Seconds" Checklist (Fixing Support Drop-off #1)
- **Visual**: Clean checklist card.
- **Headline**: *"Keep two things ready before we begin"*
- **Checklist**:
  - [x] PAN Card Number
  - [x] Aadhaar Number (to receive 6-digit OTP on your mobile)
- **Notice**: *"Already have them? Verification takes less than 2 minutes."*
- **CTA**: *"I'm Ready, Let's Verify →"*

### Screen 4: Real-Time Transparent Verification (Fixing "App Crashed" #2)
- **Visual**: High-clarity progressive stage tracker (not an ambiguous spinning wheel!).
- **Stages**:
  - 🟢 1. NSDL PAN verified instantly
  - 🟢 2. Aadhaar OTP authenticated
  - 🟡 3. Generating your digital investment locker... (Elapsed timer: "Takes ~12 seconds")
- **Assurance Note**: *"Your app has not stopped. We are fetching your government-verified records securely."*

### Screen 5: The First ₹100 Seed (The Activation Milestone)
- **Visual**: Sprout character celebrating with confetti.
- **Headline**: *"Your investment locker is ready!"*
- **Preset Options**: `[ ₹100 ]` `[ ₹250 ]` `[ ₹500 ]`
- **Instant UPI Button**: *"Invest ₹100 via GPay / PhonePe / Paytm"*
- **Compliance Footnote**: *12px: "Mutual fund investments are subject to market risks."*

---

## 4. Front-End Technical Budget & 3-Week Developer Plan

Designed specifically for 1 front-end engineer working within a 3-week sprint:

```
┌────────────────────────────────────────────────────────┐
│ Total Target Bundle Size: 420 KB (Well under 1.5MB max)│
│  - HTML & Tailwind CSS: 45 KB                          │
│  - Compressed Vector SVGs & Lottie Mascot: 68 KB       │
│  - React / Alpine Lightweight Bundle: 120 KB           │
│  - Web Fonts (Latin + Devanagari Subset): 110 KB       │
└────────────────────────────────────────────────────────┘
```

### 3-Week Implementation Roadmap
- **Week 1 (Design System & Homepage)**: Set up typography, WCAG AA contrast tokens (Primary Forest Green `#0F5132`, Accent Sky `#0284C7`), responsive desktop + mobile homepage with sticky compliance footer.
- **Week 2 (5-Screen Onboarding Journey)**: Build onboarding screens 1 to 3 with PAN/Aadhaar readiness checklist and UPI quick-select.
- **Week 3 (KYC Loading Feedback & A/B Instrumentation)**: Build the step-by-step KYC verification loader with timeout retry handlers and integrate analytics events (`kyc_start`, `pan_entered`, `otp_verified`, `investment_success`).
