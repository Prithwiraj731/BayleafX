# BayleafX — Product Requirements Document (PRD)

> **Phase**: 1 of 3  
> **Status**: Draft for Review  
> **Last Updated**: 2026-09-10  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)

---

## 1. Brand Identity

### 1.1 Name & Positioning

| Attribute        | Value                                                                                        |
|------------------|----------------------------------------------------------------------------------------------|
| **Brand Name**   | BayleafX                                                                                     |
| **Tagline**      | *Engineered for impact.*                                                                     |
| **Positioning**  | A multi-disciplinary digital agency that fuses engineering rigor with design craft — no fluff, no templates, no shortcuts. |
| **Voice**        | Confident, precise, technical yet approachable. Speaks like a senior engineer explaining elegant architecture to a sharp CEO. |
| **Tone Spectrum**| 80% professional authority · 15% warm human clarity · 5% bold provocation                    |

### 1.2 Brand Personality Pillars

1. **Engineering-Led** — Every pixel justified by logic. Every animation serves a purpose.
2. **Craft Obsessed** — We don't ship "good enough". We ship what we'd proudly put our name on.
3. **Radically Transparent** — No vanity metrics, no hidden costs, no scope ambiguity. You see what we see.
4. **Velocity Without Compromise** — Fast doesn't mean sloppy. Our rapid turnaround comes from deep systems, not cut corners.

### 1.3 Brand Story (Homepage Narrative Arc)

The homepage follows a deliberate emotional arc:

```
INTRIGUE → CREDIBILITY → SPECIFICITY → PROOF → URGENCY → ACTION
```

| Beat            | Section               | Emotional Goal                                          |
|-----------------|-----------------------|---------------------------------------------------------|
| **Intrigue**    | Hero                  | "This isn't a template agency." Immediate pattern break.|
| **Credibility** | What We Build         | Concrete, tangible service categories. Zero vagueness.  |
| **Specificity** | How We're Different   | Side-by-side contrast vs generic agencies.              |
| **Proof**       | Work / Metrics        | Real numbers, real outcomes, real screenshots.          |
| **Urgency**     | Why Now                | The cost of waiting, the speed of competitors.          |
| **Action**      | CTA                   | Single, unmissable conversion moment.                   |

---

## 2. Target Audience

### 2.1 Primary Personas

#### Persona A: "The Scaling Founder"
- **Role**: CEO/CTO of a Series A–C startup (10–100 employees)
- **Pain**: Outgrew their MVP. Current site/app feels amateur. Tried freelancers — got inconsistency.
- **Desire**: A partner who can own the full stack — not just make it pretty, but make it perform.
- **Decision Driver**: Speed-to-launch, technical credibility, portfolio proof.

#### Persona B: "The Marketing Director"
- **Role**: VP Marketing at a mid-market company ($5M–$50M revenue)
- **Pain**: Agency fatigue — hired 3 agencies last year, none delivered measurable ROI.
- **Desire**: One team that handles brand, web, and growth under a single strategy.
- **Decision Driver**: Transparent reporting, multi-channel capability, design quality.

#### Persona C: "The Enterprise Innovator"
- **Role**: Digital Transformation lead at a large org
- **Pain**: Internal IT is slow. External agencies don't understand their stack.
- **Desire**: A technical agency that can integrate with existing infra while delivering beautiful UX.
- **Decision Driver**: Architecture fluency, security posture, scalability proof.

### 2.2 Anti-Personas (Who We Are NOT For)

- Solopreneurs needing a $500 Wix site
- Clients looking for "just a logo"
- Organizations unwilling to invest in quality

---

## 3. Scope of Services

### 3.1 Service Pillars

```
┌──────────────────────────────────────────────────────────────────┐
│                        BayleafX Services                        │
├─────────────────────┬──────────────────────┬────────────────────┤
│   CORE DEVELOPMENT  │  UI/UX ENGINEERING   │   GROWTH & REACH   │
├─────────────────────┼──────────────────────┼────────────────────┤
│ Web App Development │ Product Strategy     │ Digital Marketing   │
│ Full-Stack Platforms│ Interactive Proto    │ Performance Mktg    │
│ Wordpress Dev       │ Design Systems       │ Social Media Mgmt   │
│ API & Integrations  │ Accessibility Audit  │ Content & SEO       │
│                     │                      │ Analytics & CRO     │
└─────────────────────┴──────────────────────┴────────────────────┘
```

### 3.2 Service Detail Cards

Each service on the website will be presented as a **bento card** with:

| Element          | Description                                                    |
|------------------|----------------------------------------------------------------|
| **Icon**         | Lucide icon, monochrome, 24px, with subtle glow on hover       |
| **Title**        | 2–4 word service name                                          |
| **Subtitle**     | 1-line benefit statement (not a description)                   |
| **Hover State**  | Card lifts with glass border reveal + expanded description     |
| **Visual**       | Abstract gradient mesh or code snippet preview                 |

### 3.3 Detailed Service Descriptions

#### Core Development
| Service                    | One-liner                                                        |
|----------------------------|------------------------------------------------------------------|
| Web Application Development | Production-grade React/Next.js apps built for scale, not demos. |
| Full-Stack Platforms        | End-to-end systems: auth, payments, dashboards, APIs.           |
| Wordpress Website Development | High-performance, bespoke WordPress & WooCommerce architectures. |
| API & Integrations          | Clean, documented APIs. Third-party stitching that doesn't rot. |

#### UI/UX Engineering
| Service                    | One-liner                                                        |
|----------------------------|------------------------------------------------------------------|
| Product Strategy            | We ask "should we build this?" before "how do we build this?"   |
| Interactive Prototyping     | Click-through prototypes that feel like the real product.       |
| Design Systems              | Tokens, components, documentation. Scales across teams.        |
| Accessibility Audit         | WCAG 2.2 AA compliance. Inclusive design, not afterthought.     |

#### Growth & Reach
| Service                    | One-liner                                                        |
|----------------------------|------------------------------------------------------------------|
| Digital Marketing           | Strategy-first campaigns. No spray-and-pray.                   |
| Performance Marketing       | Paid search, social ads, retargeting — optimized to CAC.       |
| Social Media Management     | Platform-native content with real engagement strategy.          |
| Content & SEO               | Authority content that ranks and converts, not just publishes.  |
| Analytics & CRO             | Data pipelines, dashboards, and conversion experiments.        |

---

## 4. Information Architecture

### 4.1 Site Map

```
BayleafX.com
│
├── / (Homepage — single-page experience)
│   ├── #hero           → Full-viewport editorial hero
│   ├── #services       → Bento grid of service pillars
│   ├── #differentiators→ "Why BayleafX" contrast section
│   ├── #work           → Selected case studies / metrics
│   ├── #process        → How we work (3–4 step visual)
│   ├── #testimonials   → Client quotes with attribution
│   └── #contact        → CTA + contact form
│
├── /services (Future — deep-dive pages per pillar)
├── /work (Future — full case study pages)
├── /about (Future — team, mission, values)
└── /blog (Future — thought leadership)
```

> [!NOTE]
> **MVP scope is the single-page homepage.** Future routes are defined for IA completeness but will not be built in Phase 4. Navigation links to future pages will use `#` anchors or "Coming Soon" treatments.

### 4.2 Section Breakdown — Homepage

#### Section 1: Hero
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Full viewport height (100dvh), centered editorial typography       |
| **Headline**    | Large, sharp, 2–3 line statement. Weight contrast (thin + bold).   |
| **Subhead**     | 1 sentence. Calm confidence. No exclamation marks.                 |
| **CTA**         | Single primary button: "Start a project" or "Let's talk"          |
| **Background**  | Deep obsidian (#0A0A0B) with subtle animated gradient mesh         |
| **Animation**   | Text reveals via staggered clip-path. Gradient drifts slowly.      |
| **Mobile**      | Stack vertically, reduce headline size, maintain whitespace.       |

**Copy direction**:
```
Headline:  "We don't decorate websites.
            We engineer experiences."

Subhead:   "BayleafX is a design & engineering studio for teams 
            that refuse to ship mediocre."

CTA:       [ Start a Project → ]
```

#### Section 2: Services (Bento Grid)
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | 3-column bento grid on desktop, 1-column stack on mobile           |
| **Cards**       | Glassmorphic panels with frosted border, subtle inner glow         |
| **Interaction** | Hover: lift + border glow + expanded description reveal            |
| **Content**     | Icon + Title + One-liner per card. 3 pillar headers above.         |
| **Background**  | Slightly elevated dark (#111113) with radial spotlight behind grid |

#### Section 3: Differentiators ("Why BayleafX")
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Split layout: left = bold statement, right = comparison list       |
| **Style**       | High contrast. Gold accent on BayleafX column.                     |
| **Content**     | Side-by-side: "Other Agencies" vs "BayleafX"                      |
| **Tone**        | Respectfully direct. Not arrogant, but unambiguous.                |

**Comparison content**:

| Dimension             | Other Agencies                    | BayleafX                                     |
|-----------------------|-----------------------------------|----------------------------------------------|
| Design approach       | Template-first, reskin & ship     | Custom-crafted from zero, every time         |
| Technical depth       | Outsourced dev, no architecture   | In-house full-stack, infra to interface       |
| Communication         | Weekly PDF reports, vague updates | Real-time dashboards, async standups         |
| Animation & motion    | Static or stock Lottie drops      | Hand-coded micro-interactions, Framer Motion |
| Delivery speed        | 8–12 week standard timelines      | 3–6 week sprints, rapid iteration            |
| Post-launch support   | "Our contract ended"              | Ongoing partnership, monitoring & growth     |

#### Section 4: Selected Work / Metrics
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Horizontal scroll carousel or 2-column masonry on desktop          |
| **Cards**       | Dark cards with screenshot preview, project name, key metric       |
| **Metric Style**| Large numeric counter animation on scroll-into-view                |
| **Fallback**    | If no real case studies, use "Impact Numbers" — aggregate stats    |

**Impact Numbers** (placeholder until real projects):
```
150+   Projects shipped
98%    Client retention rate
3.2s   Average page load improvement
40%    Average conversion lift
```

#### Section 5: Process ("How We Work")
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Horizontal stepper with 4 phases, vertical stack on mobile         |
| **Steps**       | Discovery → Design → Develop → Deploy & Grow                      |
| **Style**       | Numbered circles connected by a thin animated line                 |
| **Animation**   | Steps reveal sequentially on scroll, line draws progressively      |

#### Section 6: Testimonials
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Single featured quote, large italic typography                     |
| **Rotation**    | Auto-rotate every 6s, or swipe on mobile                          |
| **Attribution** | Name, title, company. Optional small avatar.                      |
| **Style**       | Oversized quotation mark accent, muted background                 |

#### Section 7: CTA / Contact
| Attribute       | Specification                                                      |
|-----------------|--------------------------------------------------------------------|
| **Layout**      | Full-width section, centered                                       |
| **Headline**    | "Ready to build something real?"                                   |
| **Form**        | Name, email, brief message. Minimal fields. No CAPTCHA.            |
| **Alt CTA**     | "Or email us directly: hello@bayleafx.com"                        |
| **Style**       | Warm gradient background shift (dark → slightly warm amber/gold)  |

---

## 5. Value Differentiators — Messaging Framework

### 5.1 Primary Differentiators

1. **Zero-Template Philosophy**  
   Every project starts from a blank canvas. No purchased themes, no recycled layouts. If we've built it before, we build it better this time.

2. **Engineering-Led Design**  
   Our designers write code. Our engineers understand typography. The handoff gap doesn't exist because there is no handoff.

3. **Custom Micro-Animations**  
   We don't drop in Lottie files and call it "motion design." Every interaction is hand-coded, performance-profiled, and purposeful.

4. **Radical Transparency**  
   You get access to our Figma, our repo, our sprint board, and our analytics. No black boxes.

5. **Rapid Turnaround**  
   We don't pad timelines. Deep systems thinking + reusable architecture = fast without fragile.

6. **Full-Funnel Ownership**  
   Strategy → Design → Code → Launch → Growth. One team, one vision, zero context loss between handoffs.

### 5.2 Proof Points (To Source)

| Claim                        | Required Proof                              | Status       |
|------------------------------|---------------------------------------------|--------------|
| 150+ projects shipped        | Internal project database count             | ⬜ Verify    |
| 98% client retention         | Calculate from repeat client ratio          | ⬜ Verify    |
| 3.2s load improvement avg    | Lighthouse before/after from 5 projects     | ⬜ Verify    |
| 40% conversion lift avg      | Analytics screenshots from 3 projects       | ⬜ Verify    |

> [!IMPORTANT]
> All proof points must be verified with real data before launch. Placeholder numbers are marked for internal use only and must not go live unvalidated.

---

## 6. Competitive Landscape

### 6.1 Competitive Positioning Map

```
                    HIGH DESIGN QUALITY
                          │
              ┌───────────┼───────────┐
              │           │           │
              │   BayleafX ★         │
              │           │           │
  FULL-STACK  ────────────┼────────────  DESIGN
  TECHNICAL   │           │           │  ONLY
  DEPTH       │           │           │
              │           │           │
              │           │           │
              └───────────┼───────────┘
                          │
                    LOW DESIGN QUALITY
```

### 6.2 Competitor Gaps We Exploit

| Competitor Type          | Their Weakness                          | Our Counter                              |
|--------------------------|-----------------------------------------|------------------------------------------|
| Boutique design studios  | Can't build what they design            | We ship production code, not just mockups |
| Dev agencies             | Ugly, functional-only output            | Engineering + design craft, unified       |
| Big consultancies        | Slow, expensive, junior-staffed         | Senior talent, lean team, fast delivery   |
| Freelancer collectives   | Inconsistent quality, no process        | Systematic methodology, quality control   |

---

## 7. Non-Functional Requirements

### 7.1 Performance Targets

| Metric                        | Target         |
|-------------------------------|----------------|
| Lighthouse Performance Score  | ≥ 95           |
| Largest Contentful Paint      | < 1.5s         |
| First Input Delay             | < 50ms         |
| Cumulative Layout Shift       | < 0.05         |
| Total Bundle Size (gzipped)   | < 200KB        |
| Time to Interactive           | < 2.0s         |

### 7.2 Browser & Device Support

| Platform       | Minimum Version              |
|----------------|------------------------------|
| Chrome         | Last 2 major versions        |
| Safari         | Last 2 major versions        |
| Firefox        | Last 2 major versions        |
| Edge           | Last 2 major versions        |
| iOS Safari     | iOS 15+                      |
| Android Chrome | Android 10+                  |
| Screen widths  | 375px → 2560px               |

### 7.3 Accessibility

| Requirement              | Standard                    |
|--------------------------|-----------------------------|
| WCAG Compliance          | 2.2 Level AA               |
| Keyboard Navigation      | Full support                |
| Screen Reader            | Tested with VoiceOver + NVDA|
| Color Contrast           | Minimum 4.5:1 (AA)         |
| Motion                   | Respects `prefers-reduced-motion` |
| Focus Indicators         | Visible, styled, not removed|

---

## 8. Content Requirements

### 8.1 Copy Tone Guide

| Context          | Tone                                                           | Example                                     |
|------------------|----------------------------------------------------------------|---------------------------------------------|
| Headlines        | Bold, declarative, short                                        | "We engineer experiences."                  |
| Body text        | Clear, confident, jargon-light                                  | "Our team handles strategy through deploy." |
| CTAs             | Direct, low-friction, action-oriented                           | "Start a project" not "Learn more"          |
| Differentiators  | Respectfully comparative, factual                               | "Custom-built, not reskinned."              |
| Error states     | Human, helpful, never blaming                                   | "Something went wrong. Try again?"          |

### 8.2 Visual Content Needs

| Asset                    | Type               | Source                           |
|--------------------------|--------------------|---------------------------------|
| Hero background          | Animated gradient  | Custom CSS/Canvas                |
| Service icons            | Vector icons       | Lucide icon set                  |
| Case study screenshots   | Static images      | Generated / placeholder          |
| Team photos              | Photography        | Future — not in MVP              |
| OG/Social image          | Static 1200×630    | Generated from brand tokens      |

---

## 9. Success Metrics (Post-Launch)

| Metric                          | Target              | Measurement                |
|---------------------------------|----------------------|----------------------------|
| Avg. session duration           | > 2 minutes          | Analytics                  |
| Scroll depth (homepage)         | > 70% reach #contact | Analytics                  |
| Contact form submissions / week | > 5                  | Form backend               |
| Lighthouse score (all pages)    | > 95 performance     | Automated CI check         |
| Mobile bounce rate              | < 40%                | Analytics                  |

---

## 10. Out of Scope (MVP)

The following are explicitly **out of scope** for the initial build:

- ❌ Blog / CMS integration
- ❌ Individual case study pages
- ❌ Team / About page
- ❌ Client portal or dashboard
- ❌ E-commerce or payment flows
- ❌ Multi-language / i18n support
- ❌ Authentication or user accounts
- ❌ Backend API beyond contact form submission

---

## Appendix A: Naming Conventions

| Element          | Convention             | Example                    |
|------------------|------------------------|----------------------------|
| Components       | PascalCase             | `HeroSection`, `BentoCard` |
| Files            | kebab-case             | `hero-section.tsx`         |
| CSS variables    | `--bl-{category}-{name}` | `--bl-color-accent`      |
| Tailwind classes | Default Tailwind       | `text-lg`, `bg-obsidian`  |
| Animation names  | camelCase              | `fadeInUp`, `glowPulse`   |

---

## Appendix B: Key Decisions Log

| Decision                                   | Rationale                                              | Date       |
|--------------------------------------------|--------------------------------------------------------|------------|
| Single-page homepage for MVP               | Faster to ship, validates positioning before expanding | 2026-09-10 |
| Next.js App Router over Pages Router       | Modern standard, better layouts, server components     | 2026-09-10 |
| Tailwind CSS over vanilla CSS              | Rapid utility-first iteration with design token control| 2026-09-10 |
| Framer Motion over CSS-only animations     | Scroll-triggered, gesture-aware, physics-based motion  | 2026-09-10 |
| Lucide over Heroicons                      | Larger set, consistent stroke width, tree-shakeable    | 2026-09-10 |
| Dark-first design                          | Aligns with tech-forward positioning, reduces eye strain| 2026-09-10 |

---

> **Next Phase**: `docs/DESIGN.md` — Design tokens, typography scale, grid system, animation contracts, and component visual specs.
