# BayleafX — Product Requirements Document (PRD) v2

> **Phase**: 1 of 3  
> **Status**: Complete  
> **Last Updated**: 2026-09-15  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)

---

## 1. Brand Identity

### 1.1 Name & Positioning

| Attribute        | Value                                                                                        |
|------------------|----------------------------------------------------------------------------------------------|
| **Brand Name**   | BayleafX                                                                                     |
| **Tagline**      | *Engineered for impact.*                                                                     |
| **Positioning**  | A premium digital studio that fuses engineering rigor with design craft. Not an agency. A studio. |
| **Voice**        | Confident, calm, precise. Speaks like a principal designer explaining their portfolio to a peer. |
| **Tone**         | 85% quiet authority, 10% warm clarity, 5% editorial sharpness                                |

### 1.2 Brand Personality

1. **Understated excellence** — We don't announce quality. It's visible.
2. **Engineering-led design** — Our designers code. Our engineers understand typography.
3. **Radical simplicity** — Complex problems, simple interfaces.
4. **Speed with substance** — Fast delivery from deep systems, not shortcuts.

### 1.3 Homepage Narrative Arc

The homepage follows a deliberate emotional progression:

```
CONFIDENCE → CLARITY → CONTRAST → PROOF → TRUST → ACTION
```

| Beat            | Section            | Emotional Goal                                          |
|-----------------|--------------------|--------------------------------------------------------|
| **Confidence**  | Hero               | "This studio is different." Immediate authority.        |
| **Clarity**     | Services           | Concrete, specific capabilities. Zero fluff.            |
| **Contrast**    | Differentiators    | Side-by-side: what others do vs. what we do.           |
| **Proof**       | Metrics            | Real numbers. Quantified outcomes.                      |
| **Trust**       | Process + Quotes   | How we work + what clients say.                         |
| **Action**      | Contact            | Simple, low-friction conversion.                        |

---

## 2. Target Audience

### 2.1 Primary Personas

**Persona A: "The Scaling Founder"**
- CEO/CTO at a Series A-C startup (10-100 employees)
- Outgrew their MVP. Current site feels amateur.
- Wants: A partner who owns the full stack.
- Decides by: Speed, technical credibility, portfolio.

**Persona B: "The Marketing Director"**
- VP Marketing at a mid-market company ($5M-$50M revenue)
- Agency fatigue. No one delivered measurable ROI.
- Wants: One team for brand, web, and growth.
- Decides by: Design quality, transparent reporting.

**Persona C: "The Enterprise Innovator"**
- Digital transformation lead at a large organization
- Internal IT is slow. External agencies don't understand the stack.
- Wants: Technical agency that integrates with existing infra.
- Decides by: Architecture fluency, security, scalability.

### 2.2 Not For

- Solopreneurs needing a $500 site
- "Just a logo" requests
- Organizations unwilling to invest in quality

---

## 3. Scope of Services

### 3.1 Three Pillars

| Pillar              | Services                                                        |
|---------------------|-----------------------------------------------------------------|
| **Core Development** | Web App Development, Full-Stack Platforms, WordPress Dev, API & Integrations |
| **UI/UX Engineering**| Product Strategy, Interactive Prototyping, Design Systems, Accessibility Audit |
| **Growth & Reach**   | Digital Marketing, Performance Marketing, Social Media, Content & SEO, Analytics & CRO |

### 3.2 Service Details

#### Core Development
| Service                     | One-liner                                                         |
|-----------------------------|-------------------------------------------------------------------|
| Web Application Development | Production-grade React/Next.js apps built for scale, not demos.   |
| Full-Stack Platforms        | End-to-end systems: auth, payments, dashboards, APIs.             |
| WordPress Development       | High-performance, bespoke WordPress & WooCommerce architectures.  |
| API & Integrations          | Clean, documented APIs. Third-party stitching that doesn't rot.   |

#### UI/UX Engineering
| Service                     | One-liner                                                         |
|-----------------------------|-------------------------------------------------------------------|
| Product Strategy            | We ask "should we build this?" before "how do we build this?"     |
| Interactive Prototyping     | Click-through prototypes that feel like the real product.         |
| Design Systems              | Tokens, components, documentation. Scales across teams.           |
| Accessibility Audit         | WCAG 2.2 AA compliance. Inclusive design, not afterthought.       |

#### Growth & Reach
| Service                     | One-liner                                                         |
|-----------------------------|-------------------------------------------------------------------|
| Digital Marketing           | Strategy-first campaigns. No spray-and-pray.                      |
| Performance Marketing       | Paid search, social ads, retargeting, optimized to CAC.           |
| Social Media Management     | Platform-native content with real engagement strategy.            |
| Content & SEO               | Authority content that ranks and converts, not just publishes.    |
| Analytics & CRO             | Data pipelines, dashboards, and conversion experiments.           |

---

## 4. Information Architecture

### 4.1 Site Map

```
BayleafX.com
|
+-- / (Homepage - single-page experience)
|   +-- #hero              Full-viewport typographic hero
|   +-- #services          3-pillar service grid
|   +-- #differentiators   Clean comparison table
|   +-- #metrics           Impact numbers (no case study cards)
|   +-- #process           4-step editorial numbered list
|   +-- #testimonials      Single rotating quote
|   +-- #contact           Simple 3-field form + copy
|
+-- /services (Future)
+-- /work (Future)
+-- /about (Future)
```

> MVP scope is the single-page homepage. Future routes are defined for IA completeness only.

### 4.2 Section Breakdown

#### Hero
- Full viewport height, centered typography
- Serif headline, sans-serif subhead
- Single CTA button
- No images, no background art, no widgets

#### Services
- All 3 pillars visible simultaneously in a 3-column grid
- Each pillar lists its services as a simple vertical list (title + one-liner)
- No tabs, no switchers, no interactive filters

#### Differentiators
- Clean comparison table: "Others" vs "BayleafX"
- Text-only contrast. No icons, no colored backgrounds
- 6 rows of direct comparison

#### Metrics
- 4 large numbers with labels
- Separated by thin vertical lines, not card containers
- Counter animation on scroll into view

#### Process
- 4 numbered steps with title + short description
- 2x2 grid on desktop, stacked on mobile
- No connecting lines, no stepper UI

#### Testimonials
- Single large quote, centered
- Serif italic typography
- Auto-rotates with crossfade. Dot indicators below.
- No badges, no star ratings

#### Contact
- 2-column: copy on left, 3-field form on right
- Fields: Name, Email, Message
- Single submit button
- Email link as alternative

#### Footer
- 3-column: Brand + Navigation + Legal
- Clean, minimal. No status indicators.

---

## 5. Value Differentiators

1. **Zero-Template Philosophy** — Every project starts from scratch.
2. **Engineering-Led Design** — No handoff gap. Designers code, engineers understand design.
3. **Radical Transparency** — Access to Figma, repos, sprint boards, analytics.
4. **Rapid Turnaround** — 3-6 week sprints from deep systems, not cut corners.
5. **Full-Funnel Ownership** — Strategy through growth. One team, zero context loss.

---

## 6. Non-Functional Requirements

### Performance
| Metric                        | Target         |
|-------------------------------|----------------|
| Lighthouse Performance Score  | >= 95          |
| Largest Contentful Paint      | < 1.5s         |
| First Input Delay             | < 50ms         |
| Cumulative Layout Shift       | < 0.05         |
| Total Bundle Size (gzipped)   | < 150KB        |

### Browser Support
Last 2 versions of Chrome, Safari, Firefox, Edge. iOS 15+, Android 10+. 375px-2560px.

### Accessibility
WCAG 2.2 Level AA. Full keyboard navigation. Tested with VoiceOver + NVDA. 4.5:1 minimum contrast. Respects `prefers-reduced-motion`.

---

## 7. Content Requirements

### Copy Tone
| Context          | Tone                                              | Example                           |
|------------------|---------------------------------------------------|-----------------------------------|
| Headlines        | Confident, editorial, calm                        | "What we build."                  |
| Body text        | Clear, precise, jargon-light                      | "From infrastructure to interface." |
| CTAs             | Direct, single-action                             | "Start a project"                 |
| Differentiators  | Factual comparison, not arrogant                  | "Custom-built, not reskinned."    |

### Visual Content
| Asset                | Source              |
|----------------------|---------------------|
| Hero                 | No image. Typography only. |
| Service icons        | None. Text-only lists.     |
| Logo                 | Existing SVG (preserved).  |
| OG/Social image      | Generated from brand tokens. |

---

## 8. Out of Scope (MVP)

- Blog / CMS integration
- Individual case study pages
- Team / About page
- Client portal or dashboard
- E-commerce or payment flows
- Multi-language / i18n support
- Authentication or user accounts
- Backend API beyond contact form

---

> **Next Phase**: [`docs/DESIGN.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/DESIGN.md) — Design tokens, typography, layout specs, animation rules, component specifications.
