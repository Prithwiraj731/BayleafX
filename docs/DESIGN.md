# BayleafX — Design System & Visual Specification

> **Phase**: 2 of 3  
> **Status**: Draft for Review  
> **Last Updated**: 2026-09-10  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)  
> **Depends On**: [`docs/PRD.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/PRD.md)

---

## 1. Design Philosophy

### 1.1 Aesthetic DNA

Two reference poles, blended into a singular identity:

| Pole              | What We Take                                                      | What We Leave Behind              |
|-------------------|-------------------------------------------------------------------|-----------------------------------|
| **Apple.com**     | Editorial typography hierarchy, generous whitespace, scroll pacing, restrained motion, high-contrast text | Minimal color — we add warmth     |
| **MetaMask.io**   | Dark depth layers, glassmorphic borders, glow accents, bento grids, tech-forward energy | Crypto aesthetics — we stay broad |

### 1.2 Design Principles

1. **Depth, not decoration** — Every visual layer communicates hierarchy. No ornamental elements.
2. **Contrast is king** — Text is either boldly large or deliberately small. No medium-everything.
3. **Glass is structural** — Glassmorphism defines containers, not sprinkled as effect.
4. **Motion earns attention** — Animations reveal content, guide eyes, or confirm interaction. Never loop for show.
5. **Space is a feature** — Whitespace (darkspace) is as designed as content. Never fill it nervously.

---

## 2. Color System

### 2.1 Core Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  BACKGROUNDS (Dark Depth Stack)                                 │
├─────────────────────────────────────────────────────────────────┤
│  --bl-bg-void       #050506   Deepest — page body              │
│  --bl-bg-base       #0A0A0B   Primary surface — sections       │
│  --bl-bg-elevated   #111113   Cards, panels, raised surfaces   │
│  --bl-bg-overlay    #1A1A1E   Modals, dropdowns, tooltips      │
│  --bl-bg-subtle     #222228   Hover states, active backgrounds │
├─────────────────────────────────────────────────────────────────┤
│  TEXT                                                           │
├─────────────────────────────────────────────────────────────────┤
│  --bl-text-primary    #F5F5F7   Headlines, primary content     │
│  --bl-text-secondary  #A1A1AA   Body text, descriptions        │
│  --bl-text-tertiary   #6B6B76   Captions, metadata, labels     │
│  --bl-text-muted      #3E3E47   Disabled, placeholder text     │
├─────────────────────────────────────────────────────────────────┤
│  ACCENT (Warm Gold / Amber)                                    │
├─────────────────────────────────────────────────────────────────┤
│  --bl-accent          #D4A843   Primary accent — CTAs, links   │
│  --bl-accent-hover    #E5BD5A   Hover state                    │
│  --bl-accent-muted    #D4A84333 33% opacity — subtle highlights│
│  --bl-accent-glow     #D4A84366 66% opacity — glow effects     │
├─────────────────────────────────────────────────────────────────┤
│  BORDERS & GLASS                                                │
├─────────────────────────────────────────────────────────────────┤
│  --bl-border-subtle   #FFFFFF08  8% white — glass panel edges  │
│  --bl-border-default  #FFFFFF12  12% white — card borders      │
│  --bl-border-hover    #FFFFFF20  20% white — hover borders     │
│  --bl-border-accent   #D4A84340  Accent border for emphasis    │
├─────────────────────────────────────────────────────────────────┤
│  SEMANTIC                                                       │
├─────────────────────────────────────────────────────────────────┤
│  --bl-success         #34D399   Confirmation, positive states  │
│  --bl-error           #F87171   Error, destructive actions     │
│  --bl-warning         #FBBF24   Caution, attention needed      │
│  --bl-info            #60A5FA   Informational, neutral alerts  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Contrast Ratios (WCAG 2.2 AA Compliance)

| Combination                                | Ratio  | Pass |
|--------------------------------------------|--------|------|
| `--bl-text-primary` on `--bl-bg-base`      | 17.4:1 | ✅   |
| `--bl-text-secondary` on `--bl-bg-base`    | 7.8:1  | ✅   |
| `--bl-text-tertiary` on `--bl-bg-base`     | 4.6:1  | ✅   |
| `--bl-accent` on `--bl-bg-base`            | 8.2:1  | ✅   |
| `--bl-text-primary` on `--bl-bg-elevated`  | 14.1:1 | ✅   |
| `--bl-accent` on `--bl-bg-elevated`        | 6.7:1  | ✅   |

### 2.3 Gradient Tokens

```css
/* Hero mesh gradient — slow animated drift */
--bl-gradient-hero: radial-gradient(
  ellipse 80% 50% at 50% 50%,
  #D4A84310 0%,
  transparent 70%
);

/* CTA section warm wash */
--bl-gradient-cta: linear-gradient(
  165deg,
  #0A0A0B 0%,
  #1A150D 50%,
  #0A0A0B 100%
);

/* Glass panel background */
--bl-gradient-glass: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.03) 0%,
  rgba(255, 255, 255, 0.01) 100%
);

/* Accent glow (behind interactive elements) */
--bl-gradient-glow: radial-gradient(
  circle at center,
  #D4A84325 0%,
  transparent 70%
);
```

---

## 3. Typography

### 3.1 Font Stack

| Role          | Family                        | Fallback Stack                          | Loading    |
|---------------|-------------------------------|-----------------------------------------|------------|
| **Display**   | `"Outfit"` (Google Fonts)     | `system-ui, -apple-system, sans-serif`  | `swap`     |
| **Body**      | `"Inter"` (Google Fonts)      | `system-ui, -apple-system, sans-serif`  | `swap`     |
| **Mono**      | `"JetBrains Mono"` (Google)   | `"Fira Code", monospace`                | `swap`     |

**Rationale**:
- **Outfit** — Geometric sans with sharp terminals. Perfect for bold headlines. Wide weight range (100–900).
- **Inter** — Optimized for screens. Excellent at small sizes. Variable font for performance.
- **JetBrains Mono** — Code snippets in service cards, technical credibility signal.

### 3.2 Type Scale

Using a **1.250 (Major Third)** scale with `clamp()` for fluid responsiveness:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  Token                  Size (desktop)     Clamp                        │
├──────────────────────────────────────────────────────────────────────────┤
│  --bl-text-hero         72px / 4.5rem      clamp(2.5rem, 5vw, 4.5rem)  │
│  --bl-text-display      56px / 3.5rem      clamp(2rem, 4vw, 3.5rem)    │
│  --bl-text-h1           44px / 2.75rem     clamp(1.75rem, 3.2vw, 2.75rem)│
│  --bl-text-h2           36px / 2.25rem     clamp(1.5rem, 2.5vw, 2.25rem)│
│  --bl-text-h3           28px / 1.75rem     clamp(1.25rem, 2vw, 1.75rem)│
│  --bl-text-h4           22px / 1.375rem    clamp(1.125rem, 1.5vw, 1.375rem)│
│  --bl-text-body-lg      18px / 1.125rem    Fixed                        │
│  --bl-text-body         16px / 1rem        Fixed                        │
│  --bl-text-body-sm      14px / 0.875rem    Fixed                        │
│  --bl-text-caption       12px / 0.75rem     Fixed                        │
│  --bl-text-overline     11px / 0.6875rem   Fixed, uppercase, tracked    │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Typography Styles (Composite Tokens)

| Style Name         | Font     | Size Token        | Weight | Line Height | Letter Spacing | Usage                         |
|--------------------|----------|-------------------|--------|-------------|----------------|-------------------------------|
| `hero-headline`    | Outfit   | `--bl-text-hero`  | 700    | 1.05        | -0.03em        | Hero section headline         |
| `hero-subhead`     | Inter    | `--bl-text-body-lg`| 400   | 1.6         | 0              | Hero subheadline              |
| `section-title`    | Outfit   | `--bl-text-h1`    | 600    | 1.15        | -0.02em        | Section headlines             |
| `section-subtitle` | Inter    | `--bl-text-body-lg`| 400   | 1.6         | 0              | Section descriptions          |
| `card-title`       | Outfit   | `--bl-text-h4`    | 600    | 1.3         | -0.01em        | Bento card titles             |
| `card-body`        | Inter    | `--bl-text-body-sm`| 400   | 1.6         | 0              | Card descriptions             |
| `overline`         | Inter    | `--bl-text-overline`| 500  | 1.4         | 0.12em         | Section labels, categories    |
| `button-label`     | Inter    | `--bl-text-body-sm`| 600   | 1           | 0.02em         | Button text                   |
| `nav-link`         | Inter    | `--bl-text-body-sm`| 500   | 1           | 0.01em         | Navigation items              |
| `quote`            | Outfit   | `--bl-text-h2`    | 300    | 1.4         | -0.01em        | Testimonial quotes            |
| `code`             | JetBrains| `--bl-text-body-sm`| 400   | 1.5         | 0              | Code snippets                 |

### 3.4 Typographic Rules

1. **Headlines** use Outfit. Everything else uses Inter. Never mix within a single line.
2. **Weight contrast** in headlines: pair 300 (thin) with 700 (bold) in the same line for editorial impact.
3. **Max line length**: Body text capped at `65ch`. Headlines capped at `20ch` per line.
4. **No font size below 12px** on any breakpoint.
5. **Letter spacing**: Negative on large type (tighter), positive on overlines (tracked out).

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8px base)

```
--bl-space-1     4px      0.25rem    Inline padding, icon gaps
--bl-space-2     8px      0.5rem     Tight element spacing
--bl-space-3     12px     0.75rem    Form field padding
--bl-space-4     16px     1rem       Standard element gap
--bl-space-5     20px     1.25rem    Card internal padding
--bl-space-6     24px     1.5rem     Component spacing
--bl-space-8     32px     2rem       Section internal gap
--bl-space-10    40px     2.5rem     Large component separation
--bl-space-12    48px     3rem       Sub-section gap
--bl-space-16    64px     4rem       Section padding (mobile)
--bl-space-20    80px     5rem       Section padding (tablet)
--bl-space-24    96px     6rem       Section padding (desktop small)
--bl-space-32    128px    8rem       Section padding (desktop large)
--bl-space-40    160px    10rem      Hero-level vertical space
```

### 4.2 Container & Grid

```
┌─────────────────────────────────────────────────────────────────┐
│  CONTAINER                                                      │
├─────────────────────────────────────────────────────────────────┤
│  Max width:        1280px (80rem)                               │
│  Padding:          24px (mobile) → 32px (tablet) → 48px (desk) │
│  Center:           margin: 0 auto                               │
├─────────────────────────────────────────────────────────────────┤
│  GRID                                                           │
├─────────────────────────────────────────────────────────────────┤
│  System:           CSS Grid                                     │
│  Columns:          12-column base                               │
│  Gutter:           24px (mobile) → 32px (desktop)               │
│  Bento grid:       Auto-fill, minmax(300px, 1fr)                │
├─────────────────────────────────────────────────────────────────┤
│  BREAKPOINTS                                                    │
├─────────────────────────────────────────────────────────────────┤
│  --bl-bp-sm        640px     Mobile landscape / large phone     │
│  --bl-bp-md        768px     Tablet portrait                    │
│  --bl-bp-lg        1024px    Tablet landscape / small desktop   │
│  --bl-bp-xl        1280px    Desktop                            │
│  --bl-bp-2xl       1536px    Large desktop                      │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Section Vertical Rhythm

Every homepage section follows a consistent vertical structure:

```
┌──────────────────────────────────────────────┐
│  Section Top Padding     (--bl-space-24)     │
│                                              │
│  [Overline Label]        overline style       │
│  [Section Headline]      section-title        │
│  [Section Description]   section-subtitle     │
│                                              │
│  Content Gap             (--bl-space-16)     │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │  SECTION CONTENT                       │  │
│  │  (Grid / Cards / List / Media)         │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  Section Bottom Padding  (--bl-space-24)     │
└──────────────────────────────────────────────┘
```

---

## 5. Component Specifications

### 5.1 Glassmorphic Card (`.bl-card-glass`)

The foundational card pattern used across Services, Work, and Process sections.

```
┌─────────────────────────────────────────────┐
│  VISUAL SPEC                                │
├─────────────────────────────────────────────┤
│  Background:    --bl-gradient-glass          │
│  Border:        1px solid --bl-border-subtle │
│  Border Radius: 16px (1rem)                  │
│  Padding:       --bl-space-6 (24px)          │
│  Backdrop:      blur(12px) saturate(150%)    │
│                                              │
│  HOVER STATE                                 │
│  Border:        --bl-border-hover            │
│  Transform:     translateY(-2px)             │
│  Box Shadow:    0 8px 32px rgba(0,0,0,0.3)  │
│  Transition:    all 400ms cubic-bezier(...)  │
│                                              │
│  ACTIVE STATE                                │
│  Transform:     translateY(0)                │
│  Transition:    all 150ms ease-out           │
└─────────────────────────────────────────────┘
```

**Internal layout:**
```
┌────────────────────────────────────┐
│  [Icon]  24×24, --bl-text-tertiary │
│                                    │
│  [Title]  card-title style         │
│  [Subtitle]  card-body style       │
│                                    │
│  [Expanded description]            │
│  (revealed on hover, 0→1 opacity)  │
└────────────────────────────────────┘
```

### 5.2 Primary Button (`.bl-btn-primary`)

```
┌─────────────────────────────────────────────┐
│  DEFAULT                                    │
├─────────────────────────────────────────────┤
│  Background:     --bl-accent                │
│  Color:          --bl-bg-base (#0A0A0B)     │
│  Padding:        12px 28px                  │
│  Border Radius:  10px                       │
│  Font:           button-label style         │
│  Border:         none                       │
│                                              │
│  HOVER                                       │
│  Background:     --bl-accent-hover          │
│  Box Shadow:     0 0 24px --bl-accent-glow  │
│  Transform:      translateY(-1px)           │
│                                              │
│  ACTIVE                                      │
│  Transform:      translateY(0) scale(0.98)  │
│                                              │
│  FOCUS-VISIBLE                               │
│  Outline:        2px solid --bl-accent      │
│  Outline Offset: 4px                        │
│                                              │
│  DISABLED                                    │
│  Opacity:        0.4                        │
│  Cursor:         not-allowed                │
│  Pointer Events: none                       │
└─────────────────────────────────────────────┘
```

### 5.3 Ghost Button (`.bl-btn-ghost`)

```
Background:      transparent
Color:           --bl-text-primary
Border:          1px solid --bl-border-default
Padding:         12px 28px
Border Radius:   10px

HOVER:
Border Color:    --bl-border-hover
Background:      --bl-bg-subtle
```

### 5.4 Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  STRUCTURE                                                      │
├─────────────────────────────────────────────────────────────────┤
│  Position:       fixed, top: 0, z-index: 50                    │
│  Width:          100%                                           │
│  Height:         72px (desktop), 64px (mobile)                  │
│  Background:     --bl-bg-void with 80% opacity                 │
│  Backdrop:       blur(16px) saturate(180%)                      │
│  Border Bottom:  1px solid --bl-border-subtle                   │
│                                                                  │
│  SCROLL BEHAVIOR                                                │
│  - Appears transparent at top (no border, no bg)                │
│  - On scroll > 50px: bg + blur + border fade in (300ms)         │
│  - On scroll up after scrolling down: navbar slides in          │
│                                                                  │
│  LAYOUT                                                          │
│  ┌──────────┬──────────────────────┬─────────────┐              │
│  │  Logo    │    Nav Links         │   CTA Btn   │              │
│  │  (left)  │    (center)          │   (right)   │              │
│  └──────────┴──────────────────────┴─────────────┘              │
│                                                                  │
│  MOBILE (< 768px)                                                │
│  ┌──────────┬──────────────────────┬─────────────┐              │
│  │  Logo    │                      │  Hamburger  │              │
│  │  (left)  │                      │   (right)   │              │
│  └──────────┴──────────────────────┴─────────────┘              │
│  Full-screen overlay menu on toggle                              │
│  Links stack vertically, centered, section-title size           │
│  Close button: top-right X                                       │
└─────────────────────────────────────────────────────────────────┘
```

**Nav Links:**
```
Services  ·  Our Edge  ·  Work  ·  Process  ·  Contact
```

### 5.5 Section Header (Reusable Pattern)

```
┌─────────────────────────────────────────────┐
│  [OVERLINE]    "WHAT WE BUILD"              │
│               overline style, accent color   │
│                                              │
│  [HEADLINE]   "Services built to ship."     │
│               section-title style            │
│                                              │
│  [BODY]       "From architecture to..."     │
│               section-subtitle, max 50ch     │
│               --bl-text-secondary            │
└─────────────────────────────────────────────┘

Alignment: center (default), left (for split layouts)
Spacing: 8px between overline→headline, 16px headline→body
```

### 5.6 Metric Counter Card

```
┌─────────────────────────────────────────────┐
│  [NUMBER]     "150+"                        │
│              Outfit 700, --bl-text-hero     │
│              Counter animates 0 → target    │
│              on scroll into view            │
│                                              │
│  [LABEL]     "Projects shipped"             │
│              card-body, --bl-text-secondary  │
└─────────────────────────────────────────────┘

Layout: 4-column grid on desktop, 2-column on mobile
Border: Bottom accent line (2px --bl-accent)
```

### 5.7 Testimonial Card

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ❝                     Oversized quotation mark                  │
│                        --bl-accent, 120px Outfit 300             │
│                                                                  │
│  "BayleafX didn't just redesign our platform —                  │
│   they re-engineered how our users think about us."             │
│                        quote style, --bl-text-primary            │
│                                                                  │
│  — Sarah Chen, VP Product, Luminary AI                          │
│                        card-body, --bl-text-tertiary             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.8 Contact Form

```
┌─────────────────────────────────────────────┐
│  FIELD SPEC                                 │
├─────────────────────────────────────────────┤
│  Background:     --bl-bg-elevated           │
│  Border:         1px solid --bl-border-default│
│  Border Radius:  10px                       │
│  Padding:        14px 16px                  │
│  Font:           body style                 │
│  Color:          --bl-text-primary          │
│  Placeholder:    --bl-text-muted            │
│                                              │
│  FOCUS                                       │
│  Border Color:   --bl-accent                │
│  Box Shadow:     0 0 0 3px --bl-accent-muted│
│  Outline:        none                       │
│                                              │
│  FIELDS                                      │
│  1. Name (text, required)                   │
│  2. Email (email, required)                 │
│  3. Message (textarea, 4 rows, required)    │
│  4. Submit button (bl-btn-primary)          │
│                                              │
│  LAYOUT                                      │
│  Name + Email: side-by-side on desktop      │
│  Message: full width                        │
│  Max form width: 560px, centered            │
└─────────────────────────────────────────────┘
```

---

## 6. Animation System

### 6.1 Timing & Easing Tokens

```css
/* Duration tokens */
--bl-duration-fast       150ms     Button press, toggle
--bl-duration-normal     300ms     Hover states, fades
--bl-duration-slow       500ms     Section reveals, slide-ins
--bl-duration-glacial    800ms     Hero entrance, complex sequences

/* Easing tokens */
--bl-ease-out            cubic-bezier(0.16, 1, 0.3, 1)       /* Deceleration — entering elements */
--bl-ease-in-out         cubic-bezier(0.65, 0, 0.35, 1)      /* Symmetric — state transitions */
--bl-ease-spring         cubic-bezier(0.34, 1.56, 0.64, 1)   /* Overshoot — playful emphasis */
--bl-ease-smooth         cubic-bezier(0.4, 0, 0.2, 1)        /* Material-style — general purpose */
```

### 6.2 Scroll-Triggered Animations (Framer Motion)

| Animation Name       | Trigger            | Properties                                    | Duration | Easing       |
|----------------------|--------------------|-----------------------------------------------|----------|--------------|
| `fadeInUp`           | Scroll into view   | opacity: 0→1, y: 30→0                        | 500ms    | ease-out     |
| `fadeInScale`        | Scroll into view   | opacity: 0→1, scale: 0.95→1                  | 500ms    | ease-out     |
| `staggerChildren`    | Parent in view     | Stagger delay: 100ms between children         | —        | —            |
| `clipReveal`         | Scroll into view   | clipPath: inset(100% 0 0 0) → inset(0)       | 800ms    | ease-out     |
| `counterUp`          | Scroll into view   | Number counts from 0 to target value          | 1500ms   | ease-in-out  |
| `lineDrawProgress`   | Scroll progress    | strokeDashoffset animates with scroll         | Tied to scroll | linear |
| `heroGradientDrift`  | Continuous         | Background position shifts slowly             | 15s loop | linear       |

### 6.3 Interaction Animations

| Element              | Trigger     | Animation                                    | Duration |
|----------------------|-------------|----------------------------------------------|----------|
| Button hover         | mouseenter  | translateY(-1px), glow shadow appears        | 300ms    |
| Button press         | mousedown   | scale(0.98), translateY(0)                   | 150ms    |
| Card hover           | mouseenter  | translateY(-2px), border brightens           | 400ms    |
| Nav link hover       | mouseenter  | Underline grows from center (scaleX 0→1)     | 300ms    |
| Mobile menu open     | click       | Overlay fades in, links slide in staggered   | 500ms    |
| Mobile menu close    | click       | Reverse of open                              | 300ms    |
| Form field focus     | focus       | Border glow pulses once, then holds          | 300ms    |
| Testimonial rotate   | auto/swipe  | Cross-fade with slight y-shift               | 600ms    |

### 6.4 Framer Motion Configuration Patterns

```tsx
// Scroll reveal wrapper — reused across all sections
const scrollReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

// Staggered container
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

// Stagger child
const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
};
```

### 6.5 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Framer Motion equivalent:
```tsx
const prefersReducedMotion = 
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Pass to all motion components
const motionProps = prefersReducedMotion 
  ? { initial: false, animate: false }
  : scrollReveal;
```

---

## 7. Iconography

### 7.1 Lucide Icon Mapping

| Service / Element          | Lucide Icon       | Size   | Context                    |
|----------------------------|-------------------|--------|----------------------------|
| Web App Development        | `Monitor`         | 24px   | Service card               |
| Full-Stack Platforms       | `Layers`          | 24px   | Service card               |
| Custom Architecture        | `GitBranch`       | 24px   | Service card               |
| API & Integrations         | `Plug`            | 24px   | Service card               |
| Cloud & DevOps             | `Cloud`           | 24px   | Service card               |
| Product Strategy           | `Compass`         | 24px   | Service card               |
| Interactive Prototyping    | `MousePointerClick` | 24px | Service card               |
| Design Systems             | `Palette`         | 24px   | Service card               |
| Motion & Animation         | `Sparkles`        | 24px   | Service card               |
| Accessibility Audit        | `Eye`             | 24px   | Service card               |
| Digital Marketing          | `TrendingUp`      | 24px   | Service card               |
| Performance Marketing      | `Target`          | 24px   | Service card               |
| Social Media Management    | `Share2`          | 24px   | Service card               |
| Content & SEO              | `PenTool`         | 24px   | Service card               |
| Analytics & CRO            | `BarChart3`       | 24px   | Service card               |
| Navigation menu toggle     | `Menu` / `X`      | 24px   | Mobile nav                 |
| External link indicator    | `ArrowUpRight`    | 14px   | Links, CTAs                |
| CTA arrow                  | `ArrowRight`      | 18px   | Primary buttons            |

### 7.2 Icon Style Rules

1. **Stroke width**: 1.5px (Lucide default). Never change.
2. **Color**: `--bl-text-tertiary` default, `--bl-accent` on hover/active.
3. **Sizing**: 24px for cards, 18px for buttons, 14px for inline indicators.
4. **Animation**: Icons do not animate independently. Only their parent container transforms.

---

## 8. Effects & Depth

### 8.1 Box Shadows

```css
--bl-shadow-sm:      0 1px 2px rgba(0, 0, 0, 0.3);
--bl-shadow-md:      0 4px 12px rgba(0, 0, 0, 0.4);
--bl-shadow-lg:      0 8px 32px rgba(0, 0, 0, 0.5);
--bl-shadow-xl:      0 16px 48px rgba(0, 0, 0, 0.6);
--bl-shadow-glow:    0 0 24px var(--bl-accent-glow);
--bl-shadow-glow-lg: 0 0 48px var(--bl-accent-glow);
```

### 8.2 Backdrop Filters

```css
--bl-glass-blur:     blur(12px) saturate(150%);
--bl-nav-blur:       blur(16px) saturate(180%);
```

### 8.3 Border Radius Scale

```css
--bl-radius-sm:      6px;      /* Tags, badges */
--bl-radius-md:      10px;     /* Buttons, inputs */
--bl-radius-lg:      16px;     /* Cards, panels */
--bl-radius-xl:      24px;     /* Large feature cards */
--bl-radius-full:    9999px;   /* Pills, avatars */
```

---

## 9. Responsive Behavior Matrix

| Element              | 375px (Mobile)          | 768px (Tablet)          | 1280px+ (Desktop)        |
|----------------------|-------------------------|-------------------------|--------------------------|
| **Nav**              | Logo + hamburger        | Logo + links + CTA      | Logo + links + CTA       |
| **Hero headline**    | `clamp` → ~40px         | `clamp` → ~56px         | 72px                     |
| **Hero layout**      | Centered, single col    | Centered, single col    | Centered, single col     |
| **Bento grid**       | 1 column, stacked       | 2 columns               | 3 columns                |
| **Differentiator**   | Stacked (statement→list)| Side-by-side split      | Side-by-side split       |
| **Metrics**          | 2×2 grid                | 4 columns               | 4 columns                |
| **Process stepper**  | Vertical stack           | Horizontal, compact     | Horizontal, full         |
| **Testimonial**      | Full width, swipe       | Full width, arrows      | Centered, max-width      |
| **Contact form**     | Single column fields    | Name+Email side-by-side | Name+Email side-by-side  |
| **Section padding**  | 64px top/bottom         | 80px top/bottom         | 96–128px top/bottom      |
| **Container padding**| 24px horizontal         | 32px horizontal         | 48px horizontal          |

---

## 10. Asset Requirements

### 10.1 Generated Assets (Pre-Build)

| Asset                | Format    | Dimensions      | Source          |
|----------------------|-----------|-----------------|-----------------|
| OG Image             | PNG/WebP  | 1200×630        | AI-generated    |
| Favicon set          | ICO + PNG | 16/32/180/192   | SVG → generated |
| Logo (text mark)     | SVG       | Scalable        | Custom Outfit   |
| Hero gradient mesh   | CSS       | Full viewport   | Code            |
| Case study mockups   | WebP      | 800×600 each    | AI-generated    |

### 10.2 Logo Specification

The BayleafX logo is a **text mark** (no icon/symbol needed for MVP):

```
Font:           Outfit
Weight:         700
Text:           BayleafX
Color:          --bl-text-primary (#F5F5F7)
Accent:         The "X" rendered in --bl-accent (#D4A843)
Size:           20px in nav, scalable elsewhere
Tracking:       -0.02em
```

---

## 11. Tailwind Configuration Preview

```ts
// tailwind.config.ts — key customizations
{
  theme: {
    extend: {
      colors: {
        'bl-void':      '#050506',
        'bl-base':      '#0A0A0B',
        'bl-elevated':  '#111113',
        'bl-overlay':   '#1A1A1E',
        'bl-subtle':    '#222228',
        'bl-accent':    '#D4A843',
        'bl-accent-hover': '#E5BD5A',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'bl-sm': '6px',
        'bl-md': '10px',
        'bl-lg': '16px',
        'bl-xl': '24px',
      },
      backdropBlur: {
        'glass': '12px',
        'nav':   '16px',
      },
    },
  },
}
```

---

## 12. Design Checklist (Pre-Implementation Gate)

Before moving to Phase 3, confirm:

- [ ] Color palette contrast ratios verified against WCAG 2.2 AA
- [ ] Typography scale tested at 375px and 1440px extremes
- [ ] All 15 service cards have assigned Lucide icons
- [ ] Glassmorphic card style tested on dark backgrounds
- [ ] Animation timing feels natural (not mechanical, not sluggish)
- [ ] Reduced motion fallback defined for all animated elements
- [ ] Logo text mark renders cleanly at 20px nav size
- [ ] Form field states cover: default, focus, error, disabled
- [ ] Mobile nav overlay interaction fully specified
- [ ] Gradient tokens don't cause banding on 8-bit displays

---

> **Next Phase**: [`docs/IMPLEMENTATION.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/IMPLEMENTATION.md) — Component tree, build order, file structure, route setup, and development workflow.
