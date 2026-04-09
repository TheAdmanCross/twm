# TradingWithMatt.ai – Website Structure & Build Specification

**Purpose of this document:**  
This is a complete technical and structural breakdown of the current live website[](https://www.tradingwithmatt.ai/) as of April 2026. It is designed to be handed directly to an AI Coder / IDE (Cursor, Claude Projects, Windsurf, etc.) so the model can fully understand the existing site before we create a new design plan and rebuild it.

The site is a **clean, conversion-focused, single-page marketing website** for a trading education / mentorship product. It is built as a modern, responsive landing page with minimal internal navigation.

---

## 1. Overall Site Architecture

- **Type**: Primarily **single-page application (SPA)-style landing page**. Almost everything lives on the root `/` route.
- **Internal Pages**:
  - `/` – Homepage (main sales page)
  - `/contact` – Minimal contact form page
- **Navigation**: Extremely minimal. The only visible nav element is the logo/text “Trading With Matt | Education” in the top-left, which links back to `/`.
- **No traditional top menu** with multiple links (no “About”, “Blog”, “Pricing” separate pages – everything is on the homepage scroll).
- **Footer**: Present but light (exact links not heavily populated; mainly copyright and legal mentions).
- **External destinations** (heavily used):
  - Discord: https://discord.gg/kdwcjjDmCZ
  - Socials: Instagram, TikTok, YouTube (linked from content and likely footer)

---

## 2. Homepage – Section-by-Section Breakdown (Top to Bottom)

### 2.1 Hero Section (Above the fold)
- **Background**: Dark / trading-themed with possible subtle live video or animated trading chart overlay (noted as “Live Your Video Title 00:00 00:00” in page source – likely an embedded video background or autoplay video).
- **Headline** (exact):
  > Do you feel like you're working hard at trading but have nothing to show for it?
- **Sub-headline** (exact):
  > Stop the grind. Use Matt’s 15 years of experience to filter out the bad trades and only take the ones that actually grow your account.
- **CTA Buttons**:
  - Primary: “Join Now” (links to pricing section or directly to checkout flow)
- **Visuals**: Professional trading imagery, possibly Matt’s photo or chart screenshots.

### 2.2 Testimonials / Social Proof
- Section title: **“What Our Students Say”**
- Prominent testimonial from “Miguel, VIP Member” (exact quote included on site):
  > “I took some losses this week, because I did not stick to the plan. I appreciate Matt's diligience on sticking to the plan. All and all first week with a live account; I am blessed to have ran into Matt's channel to confirm the research I have been doing on my own since November. matt confirmed and reaffirmed many things.”
- Additional section: **“Our Student Wins”** (likely screenshots or results from students).

### 2.3 Pricing / Plans Section
- Section title: **“Choose your pricing plan”**
- Three monthly subscription tiers displayed side-by-side (responsive cards that stack on mobile).

| Plan      | Price     | Badge          | Key Features |
|-----------|-----------|----------------|--------------|
| **Core**  | $27/mo    | —              | • VIP Role Access in Discord<br>• VIP Signals Access<br>• VIP Community Access<br>• The Trader’s Handbook by Matt<br>• Live market discussion<br>• Trade breakdowns & mindset coaching |
| **Precision** | $97/mo | —              | Everything in Core +<br>• 1× MONTHLY 45-Minute 1-on-1 Mentorship Call with Matt<br>• Additional Chart Breakdowns<br>• Direct Access to Ask Matt Questions<br>• Strategy refinement<br>• Trade review & execution feedback |
| **Apex**  | $297/mo   | **BEST VALUE** | Everything in Core + Precision +<br>• 4× MONTHLY 45-Minute 1-on-1 Mentorship Sessions with Matt<br>• Advanced Strategy & Performance Coaching<br>• Option to Open a PAMM or Copy Trading Account<br>• Trade alongside Matt OFF STREAM<br>• Hands-off execution option<br>• One month Trading with Matt Premium Access |

- All plans include **cancel anytime**.
- Strong emphasis on Discord as the central hub.

### 2.4 FAQ Section
- Simple accordion or list format.
- Exact questions & answers present:
  1. **How do I get access to Matt's signals?** → Explains free vs VIP signals in Discord. All paid plans get full VIP access.
  2. **How do I get 1 to 1 mentorships with Matt?** → Explains Precision vs Apex call allocations + PAMM option.
  3. **What is the Best Broker I can use to trade?** → (Currently no answer shown on site).

### 2.5 Final CTA / Footer Area
- Final “Join Now” push before footer.

---

## 3. Contact Page (`/contact`)

- **Page Title**: “Contact | TRADING WITH MATT LIVE”
- **Main Heading**: “Get in Touch Today”
- **Body text**:
  > Reach out to us for any inquiries, feedback, or collaboration opportunities. We value your input and are always eager to connect with our audience.
- **Form**: Single “Submit” button visible. Form fields are likely dynamically loaded (name, email, message) but not fully rendered in static HTML.
- **Contact email** referenced elsewhere on site: matt@tradingwithmatt.ai
- Very minimal page – acts as a simple lead capture.

---

## 4. Design System & Styling (Inferred from live site)

- **Overall Aesthetic**: Modern, professional, clean trading-education style. Dark-mode dominant (typical for finance/trading sites).
- **Color Palette** (observed):
  - Primary background: Deep dark navy/black
  - Accents: Likely vibrant green/blue (profit/trust colors common in trading)
  - Text: High-contrast white/light gray
- **Typography**:
  - Headings: Bold, modern sans-serif (probably Inter, Satoshi, or similar)
  - Body: Clean, readable sans-serif
- **Layout**:
  - Full-width sections with generous padding
  - Pricing cards use grid layout (3-column desktop → stacked mobile)
  - Strong use of whitespace and hierarchy
- **Responsiveness**: Fully responsive (mobile-first design). Pricing and sections stack cleanly on mobile.
- **Animations/Interactions**:
  - Hover effects on buttons and cards
  - Smooth scroll to sections
  - Possible fade-in animations on scroll

---

## 5. Technical Build Observations

- **Framework**: Likely built with a modern no-code/low-code tool (Webflow, Framer, or custom Next.js/Tailwind) or a simple HTML/CSS/JS stack. Clean, semantic structure with minimal bloat.
- **Performance**: Fast-loading landing page optimized for conversion.
- **Integrations**:
  - Discord invite links throughout
  - Payment processing (Stripe or similar – not visible on front-end but implied by subscription model)
  - Possible Memberful, Whop, or custom membership backend for plan access
- **SEO**: Basic meta title “Trading With Matt | Education”. Focused on trading education keywords.
- **Accessibility**: Standard modern practices (contrast, readable fonts).

---

## 6. Key Content Tone & Messaging

- **Tone**: Straightforward, empathetic, no-hype. Acknowledges the “grind” and positions Matt’s system as the solution.
- **Core Value Proposition**:
  - 15+ years experience
  - Signals + community + mentorship + handbook
  - Focus on **consistency** and **removing emotion**
  - Discord is the main delivery platform

---

## 7. Assets & Media to Replicate

- Hero video/background
- Student testimonial images / win screenshots
- Pricing card icons (if any)
- Matt’s branding / logo
- TradingView indicator screenshots (mentioned heavily in related social content)

---

**Ready for AI Coder**  
Copy this entire Markdown into your project as `tradingwithmatt-current-site-spec.md`. You now have a complete blueprint of the existing website’s structure, content, layout, and functionality.

Let me know when you want the **next step**:
- “Create new design brief” (modern 2026 redesign)
- “Generate Figma-style component library”
- Or start building the new version directly.

Just say the word, mate.