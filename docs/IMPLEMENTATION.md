# BayleafX — Implementation Plan & Component Breakdown

> **Phase**: 3 of 3  
> **Status**: Draft for Review  
> **Last Updated**: 2026-09-10  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)  
> **Depends On**: [`docs/PRD.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/PRD.md) · [`docs/DESIGN.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/DESIGN.md)

---

## 1. Technology Stack (Locked)

| Layer            | Technology              | Version   | Purpose                            |
|------------------|-------------------------|-----------|-------------------------------------|
| Framework        | Next.js (App Router)    | 15.x      | SSR, routing, layouts, metadata     |
| Language         | TypeScript              | 5.x       | Type safety across codebase         |
| Styling          | Tailwind CSS            | 4.x       | Utility-first CSS with design tokens|
| Animation        | Framer Motion           | 11.x      | Scroll-triggered & interaction anim |
| Icons            | Lucide React            | latest    | Tree-shakeable icon components      |
| Fonts            | `next/font/google`      | built-in  | Self-hosted, zero layout shift      |
| Linting          | ESLint + Prettier       | latest    | Code quality enforcement            |
| Package Manager  | npm                     | 10.x      | Dependency management               |

---

## 2. Project Initialization

### 2.1 Scaffold Commands

```bash
# Step 1: Create Next.js app with App Router + TypeScript + Tailwind + ESLint
npx -y create-next-app@latest ./ \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack \
  --use-npm

# Step 2: Install runtime dependencies
npm install framer-motion lucide-react

# Step 3: Install dev dependencies
npm install -D prettier eslint-config-prettier
```

### 2.2 Post-Scaffold Cleanup

| Action                                    | Detail                                              |
|-------------------------------------------|-----------------------------------------------------|
| Delete default `page.tsx` content          | Replace with BayleafX homepage                     |
| Delete `globals.css` boilerplate           | Replace with design token layer                    |
| Delete default favicon                     | Replace with BayleafX favicon                      |
| Update `layout.tsx` metadata               | BayleafX SEO metadata                             |
| Configure `next/font/google`               | Load Outfit, Inter, JetBrains Mono                 |

---

## 3. File Architecture

```
src/
├── app/
│   ├── layout.tsx              Root layout: fonts, metadata, global providers
│   ├── page.tsx                Homepage: assembles all sections in order
│   ├── globals.css             Design tokens + Tailwind base layer
│   └── favicon.ico             Generated favicon
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          Fixed nav: scroll-aware, glassmorphic, mobile menu
│   │   ├── footer.tsx          Minimal footer: logo, copyright, social links
│   │   ├── container.tsx       Max-width centered wrapper with responsive padding
│   │   └── section-header.tsx  Reusable overline + headline + subtitle pattern
│   │
│   ├── sections/
│   │   ├── hero.tsx            Full-viewport hero: animated headline, CTA, gradient
│   │   ├── services.tsx        3-pillar bento grid with glassmorphic cards
│   │   ├── differentiators.tsx Split layout: statement left, comparison right
│   │   ├── metrics.tsx         4-column counter grid with scroll-triggered animation
│   │   ├── process.tsx         4-step horizontal stepper with draw animation
│   │   ├── testimonials.tsx    Auto-rotating quote carousel
│   │   └── contact.tsx         CTA headline + 3-field form on warm gradient
│   │
│   └── ui/
│       ├── button.tsx          Primary + Ghost variants with motion states
│       ├── glass-card.tsx      Glassmorphic card: blur, border, hover lift
│       ├── metric-card.tsx     Counter animation + label
│       ├── service-card.tsx    Icon + title + subtitle + hover expand
│       ├── process-step.tsx    Numbered circle + title + description
│       ├── testimonial-card.tsx Quote + attribution
│       ├── input.tsx           Styled text input with focus glow
│       ├── textarea.tsx        Styled textarea with focus glow
│       └── logo.tsx            BayleafX text mark with accent "X"
│
├── lib/
│   ├── animations.ts          Framer Motion variant objects (shared)
│   ├── constants.ts           Nav links, services data, process steps, testimonials
│   └── fonts.ts               next/font/google configuration for Outfit, Inter, JetBrains
│
└── types/
    └── index.ts               Shared TypeScript interfaces
```

---

## 4. Component Dependency Graph

```
page.tsx
├── Navbar                      (layout/navbar.tsx)
│   ├── Logo                    (ui/logo.tsx)
│   ├── NavLinks                (inline — mapped from constants.ts)
│   └── Button [CTA]            (ui/button.tsx)
│
├── HeroSection                 (sections/hero.tsx)
│   ├── Container               (layout/container.tsx)
│   └── Button [CTA]            (ui/button.tsx)
│
├── ServicesSection              (sections/services.tsx)
│   ├── Container               (layout/container.tsx)
│   ├── SectionHeader           (layout/section-header.tsx)
│   └── ServiceCard ×15         (ui/service-card.tsx)
│       └── GlassCard           (ui/glass-card.tsx)
│
├── DifferentiatorsSection       (sections/differentiators.tsx)
│   ├── Container               (layout/container.tsx)
│   └── SectionHeader           (layout/section-header.tsx)
│
├── MetricsSection               (sections/metrics.tsx)
│   ├── Container               (layout/container.tsx)
│   └── MetricCard ×4           (ui/metric-card.tsx)
│
├── ProcessSection               (sections/process.tsx)
│   ├── Container               (layout/container.tsx)
│   ├── SectionHeader           (layout/section-header.tsx)
│   └── ProcessStep ×4          (ui/process-step.tsx)
│
├── TestimonialsSection          (sections/testimonials.tsx)
│   ├── Container               (layout/container.tsx)
│   └── TestimonialCard         (ui/testimonial-card.tsx)
│
├── ContactSection               (sections/contact.tsx)
│   ├── Container               (layout/container.tsx)
│   ├── SectionHeader           (layout/section-header.tsx)
│   ├── Input ×2                (ui/input.tsx)
│   ├── Textarea                (ui/textarea.tsx)
│   └── Button [Submit]         (ui/button.tsx)
│
└── Footer                      (layout/footer.tsx)
    └── Logo                    (ui/logo.tsx)
```

---

## 5. Build Order (Strict Sequence)

The build follows a **bottom-up** strategy: foundational layers first, compositions last.

### Wave 1: Foundation (No Visual Output Yet)

| #   | File                       | Task                                                         | Dependencies |
|-----|----------------------------|--------------------------------------------------------------|--------------|
| 1.1 | `globals.css`              | Design tokens as CSS custom properties + Tailwind base layer | None         |
| 1.2 | `tailwind.config.ts`       | Extend colors, fonts, radius, backdrop, spacing              | 1.1          |
| 1.3 | `lib/fonts.ts`             | Configure Outfit, Inter, JetBrains Mono via next/font/google | None         |
| 1.4 | `lib/animations.ts`        | Framer Motion variants: fadeInUp, staggerContainer, etc.     | None         |
| 1.5 | `lib/constants.ts`         | All static data: nav links, services, process, testimonials  | None         |
| 1.6 | `types/index.ts`           | TypeScript interfaces for Service, Step, Testimonial, etc.   | None         |
| 1.7 | `app/layout.tsx`           | Root layout: html lang, fonts, metadata, body classes        | 1.2, 1.3     |

### Wave 2: Atomic UI Components

| #   | File                       | Task                                                         | Dependencies |
|-----|----------------------------|--------------------------------------------------------------|--------------|
| 2.1 | `ui/logo.tsx`              | Text mark: "Bayleaf" + accent "X", responsive sizing         | 1.2          |
| 2.2 | `ui/button.tsx`            | Primary + Ghost variants, Framer Motion hover/tap states     | 1.2, 1.4     |
| 2.3 | `ui/glass-card.tsx`        | Glassmorphic wrapper: blur, gradient bg, border, hover lift  | 1.2, 1.4     |
| 2.4 | `ui/input.tsx`             | Styled text input with focus glow ring                       | 1.2          |
| 2.5 | `ui/textarea.tsx`          | Styled textarea (extends input patterns)                     | 1.2, 2.4     |
| 2.6 | `ui/service-card.tsx`      | Icon + title + subtitle inside GlassCard, hover expand       | 2.3, 1.5     |
| 2.7 | `ui/metric-card.tsx`       | Counter animation (useInView + useMotionValue), label        | 1.4          |
| 2.8 | `ui/process-step.tsx`      | Numbered circle + title + description, connection line       | 1.2          |
| 2.9 | `ui/testimonial-card.tsx`  | Oversized quote mark + text + attribution                    | 1.2          |

### Wave 3: Layout Components

| #   | File                       | Task                                                         | Dependencies |
|-----|----------------------------|--------------------------------------------------------------|--------------|
| 3.1 | `layout/container.tsx`     | Max-width wrapper with responsive horizontal padding         | 1.2          |
| 3.2 | `layout/section-header.tsx`| Overline + headline + subtitle, center/left alignment prop   | 1.2          |
| 3.3 | `layout/navbar.tsx`        | Fixed nav: scroll detection, glassmorphic bg, mobile overlay | 2.1, 2.2, 1.5|
| 3.4 | `layout/footer.tsx`        | Logo, copyright year, minimal links                          | 2.1          |

### Wave 4: Page Sections

| #   | File                       | Task                                                         | Dependencies |
|-----|----------------------------|--------------------------------------------------------------|--------------|
| 4.1 | `sections/hero.tsx`        | Full-viewport, animated gradient, clip-reveal headline, CTA  | 3.1, 2.2, 1.4|
| 4.2 | `sections/services.tsx`    | 3-pillar tabs/labels + bento grid of ServiceCards            | 3.1, 3.2, 2.6|
| 4.3 | `sections/differentiators.tsx` | Split layout, comparison table, accent highlights        | 3.1, 3.2     |
| 4.4 | `sections/metrics.tsx`     | 4-column grid of MetricCards with scroll-trigger             | 3.1, 2.7     |
| 4.5 | `sections/process.tsx`     | Horizontal stepper (desktop), vertical (mobile), line draw   | 3.1, 3.2, 2.8|
| 4.6 | `sections/testimonials.tsx`| Auto-rotate carousel, swipe on mobile, cross-fade transition | 3.1, 2.9     |
| 4.7 | `sections/contact.tsx`     | Warm gradient bg, form fields, submit handler (no backend)   | 3.1, 3.2, 2.2, 2.4, 2.5 |

### Wave 5: Page Assembly & Polish

| #   | File                       | Task                                                         | Dependencies |
|-----|----------------------------|--------------------------------------------------------------|--------------|
| 5.1 | `app/page.tsx`             | Import all sections, render in PRD-defined order             | All Wave 4   |
| 5.2 | Responsive QA              | Test every section at 375, 768, 1024, 1280, 1536px           | 5.1          |
| 5.3 | Animation QA               | Verify scroll triggers, stagger timing, reduced-motion       | 5.1          |
| 5.4 | Accessibility QA           | Keyboard nav, focus indicators, contrast, screen reader      | 5.1          |
| 5.5 | Performance QA             | Lighthouse audit, bundle analysis, font loading              | 5.1          |
| 5.6 | OG image + favicon         | Generate and place in `public/` + metadata                   | 5.1          |

---

## 6. Detailed Component Contracts

### 6.1 `Container` — `layout/container.tsx`

```tsx
interface ContainerProps {
  children: React.ReactNode;
  className?: string;        // Additional Tailwind classes
  as?: React.ElementType;    // Default: 'div'. Can be 'section', 'main', etc.
}
```

**Behavior**: Centers content, applies `max-w-7xl mx-auto px-6 md:px-8 lg:px-12`.

---

### 6.2 `SectionHeader` — `layout/section-header.tsx`

```tsx
interface SectionHeaderProps {
  overline?: string;         // Uppercase label above headline
  title: string;             // Section headline
  description?: string;      // Optional subtitle below headline
  align?: 'center' | 'left'; // Default: 'center'
}
```

**Behavior**: Renders Framer Motion `fadeInUp` on scroll. Overline in accent color. Title in `section-title` style. Description capped at `max-w-2xl`.

---

### 6.3 `Button` — `ui/button.tsx`

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'ghost';
  size?: 'default' | 'lg';   // lg adds more padding for hero CTA
  icon?: React.ReactNode;     // Optional trailing icon (e.g., ArrowRight)
  children: React.ReactNode;
  href?: string;              // If set, renders as <a> tag instead
}
```

**Behavior**: Wraps in `motion.button` with `whileHover` (translateY, glow) and `whileTap` (scale). If `href` is provided, renders as `motion.a`.

---

### 6.4 `GlassCard` — `ui/glass-card.tsx`

```tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;            // Default: true. Enables lift + border glow on hover.
  as?: React.ElementType;     // Default: 'div'
}
```

**Behavior**: Applies glassmorphic background, border, backdrop blur. Hover state managed via Framer Motion (translateY, border color transition).

---

### 6.5 `ServiceCard` — `ui/service-card.tsx`

```tsx
interface ServiceCardProps {
  icon: LucideIcon;           // Lucide icon component
  title: string;
  subtitle: string;           // Benefit one-liner
  description?: string;       // Expanded text revealed on hover
}
```

**Behavior**: Wraps content in `GlassCard`. Icon renders at 24px in `--bl-text-tertiary`. On hover, `description` fades in below subtitle via Framer `AnimatePresence`.

---

### 6.6 `MetricCard` — `ui/metric-card.tsx`

```tsx
interface MetricCardProps {
  value: number;              // Target number (e.g., 150)
  suffix?: string;            // e.g., "+", "%", "s"
  label: string;              // e.g., "Projects shipped"
}
```

**Behavior**: Uses Framer Motion `useMotionValue` + `useTransform` + `useInView` to animate from 0 → `value` when scrolled into viewport. Number displayed in `hero` type style. Accent bottom border.

---

### 6.7 `ProcessStep` — `ui/process-step.tsx`

```tsx
interface ProcessStepProps {
  number: number;             // 1–4
  title: string;              // e.g., "Discovery"
  description: string;        // 1–2 sentence explanation
  isLast?: boolean;           // Hides trailing connector line
}
```

**Behavior**: Numbered circle (border + number), title below, description below that. Horizontal connector line to next step (hidden on mobile, hidden for last step).

---

### 6.8 `TestimonialCard` — `ui/testimonial-card.tsx`

```tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;              // Job title
  company: string;
}
```

**Behavior**: Oversized decorative `"` mark in accent color. Quote in `quote` type style. Attribution in `card-body` style with `--bl-text-tertiary`.

---

### 6.9 `Navbar` — `layout/navbar.tsx`

```tsx
// No external props — reads from constants.ts for nav links
// Internal state:
//   scrolled: boolean         — scroll position > 50px
//   mobileOpen: boolean       — mobile menu overlay visible
```

**Behavior**:
1. At top: transparent background, no border.
2. On scroll > 50px: glassmorphic background fades in with border.
3. CTA button always visible on desktop.
4. Mobile (< 768px): hamburger icon toggles full-screen overlay.
5. Overlay: dark bg, links centered vertically in `section-title` size, stagger entrance.
6. Clicking a nav link smooth-scrolls to the target `#section` and closes mobile menu.

---

### 6.10 `Testimonials` Section — `sections/testimonials.tsx`

```tsx
// Internal state:
//   activeIndex: number       — current testimonial index
//   Auto-rotates every 6 seconds
//   Pauses on hover (desktop) or touch (mobile)
```

**Behavior**: Cross-fade transition between testimonials. Mobile: swipeable via Framer Motion drag gesture. Desktop: optional prev/next arrows or just auto-rotate.

---

## 7. Data Structures — `lib/constants.ts`

```tsx
// Navigation
export const NAV_LINKS = [
  { label: 'Services',  href: '#services' },
  { label: 'Our Edge',  href: '#differentiators' },
  { label: 'Work',      href: '#metrics' },
  { label: 'Process',   href: '#process' },
  { label: 'Contact',   href: '#contact' },
];

// Services (grouped by pillar)
export const SERVICE_PILLARS = [
  {
    name: 'Core Development',
    services: [
      { icon: 'Monitor',     title: 'Web App Development',     subtitle: '...', description: '...' },
      { icon: 'Layers',      title: 'Full-Stack Platforms',     subtitle: '...', description: '...' },
      { icon: 'GitBranch',   title: 'Custom Architecture',     subtitle: '...', description: '...' },
      { icon: 'Plug',        title: 'API & Integrations',      subtitle: '...', description: '...' },
      { icon: 'Cloud',       title: 'Cloud & DevOps',          subtitle: '...', description: '...' },
    ],
  },
  {
    name: 'UI/UX Engineering',
    services: [
      { icon: 'Compass',           title: 'Product Strategy',        subtitle: '...', description: '...' },
      { icon: 'MousePointerClick', title: 'Interactive Prototyping',  subtitle: '...', description: '...' },
      { icon: 'Palette',           title: 'Design Systems',          subtitle: '...', description: '...' },
      { icon: 'Sparkles',          title: 'Motion & Animation',      subtitle: '...', description: '...' },
      { icon: 'Eye',               title: 'Accessibility Audit',     subtitle: '...', description: '...' },
    ],
  },
  {
    name: 'Growth & Reach',
    services: [
      { icon: 'TrendingUp', title: 'Digital Marketing',        subtitle: '...', description: '...' },
      { icon: 'Target',     title: 'Performance Marketing',    subtitle: '...', description: '...' },
      { icon: 'Share2',     title: 'Social Media Management',  subtitle: '...', description: '...' },
      { icon: 'PenTool',    title: 'Content & SEO',            subtitle: '...', description: '...' },
      { icon: 'BarChart3',  title: 'Analytics & CRO',          subtitle: '...', description: '...' },
    ],
  },
];

// Impact Metrics
export const METRICS = [
  { value: 150, suffix: '+', label: 'Projects shipped' },
  { value: 98,  suffix: '%', label: 'Client retention rate' },
  { value: 3.2, suffix: 's', label: 'Avg. load improvement' },
  { value: 40,  suffix: '%', label: 'Avg. conversion lift' },
];

// Process Steps
export const PROCESS_STEPS = [
  { number: 1, title: 'Discovery',        description: 'We audit your goals, users, stack, and constraints. No assumptions.' },
  { number: 2, title: 'Design',           description: 'Interactive prototypes and design systems — not static mockups.' },
  { number: 3, title: 'Develop',          description: 'Production-grade code with CI/CD, testing, and performance baked in.' },
  { number: 4, title: 'Deploy & Grow',    description: 'Launch, monitor, iterate. We stay on as your growth partner.' },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "BayleafX didn't just redesign our platform — they re-engineered how our users think about us.",
    author: 'Sarah Chen',
    title: 'VP Product',
    company: 'Luminary AI',
  },
  {
    quote: "Three agencies failed before them. BayleafX shipped in 4 weeks what others couldn't in 4 months.",
    author: 'Marcus Rivera',
    title: 'CEO',
    company: 'Stackbridge',
  },
  {
    quote: "The level of craft in every micro-interaction made our investors take notice. That's rare.",
    author: 'Priya Kapoor',
    title: 'Head of Digital',
    company: 'Meridian Group',
  },
];

// Differentiator comparison rows
export const DIFFERENTIATORS = [
  { dimension: 'Design approach',    others: 'Template-first, reskin & ship',      ours: 'Custom-crafted from zero, every time' },
  { dimension: 'Technical depth',    others: 'Outsourced dev, no architecture',    ours: 'In-house full-stack, infra to interface' },
  { dimension: 'Communication',      others: 'Weekly PDF reports, vague updates',  ours: 'Real-time dashboards, async standups' },
  { dimension: 'Animation & motion', others: 'Static or stock Lottie drops',       ours: 'Hand-coded micro-interactions' },
  { dimension: 'Delivery speed',     others: '8–12 week standard timelines',       ours: '3–6 week sprints, rapid iteration' },
  { dimension: 'Post-launch',        others: '"Our contract ended"',               ours: 'Ongoing partnership & growth' },
];
```

---

## 8. Key Implementation Patterns

### 8.1 Smooth Scroll Navigation

```tsx
// In navbar.tsx — onClick handler for nav links
const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false); // Close mobile menu
  }
};
```

### 8.2 Scroll-Aware Navbar

```tsx
// In navbar.tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### 8.3 Counter Animation (Metric Cards)

```tsx
// In metric-card.tsx
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });
const count = useMotionValue(0);
const rounded = useTransform(count, (v) =>
  Number.isInteger(value) ? Math.floor(v) : v.toFixed(1)
);

useEffect(() => {
  if (isInView) {
    animate(count, value, { duration: 1.5, ease: 'easeInOut' });
  }
}, [isInView]);
```

### 8.4 Testimonial Auto-Rotation

```tsx
// In testimonials.tsx
const [active, setActive] = useState(0);
const [paused, setPaused] = useState(false);

useEffect(() => {
  if (paused) return;
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, 6000);
  return () => clearInterval(interval);
}, [paused]);
```

### 8.5 Contact Form Handler (No Backend)

```tsx
// In contact.tsx — MVP approach
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Option A: mailto link
  window.location.href = `mailto:hello@bayleafx.com?subject=New Project Inquiry&body=...`;
  // Option B: External service (Formspree, Getform)
  // fetch('https://formspree.io/f/xxxxx', { method: 'POST', body: formData });
};
```

### 8.6 Hero Gradient Animation

```css
/* In globals.css */
@keyframes gradient-drift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}

.hero-gradient {
  background: radial-gradient(
    ellipse 80% 50% at 50% 50%,
    rgba(212, 168, 67, 0.06) 0%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: gradient-drift 15s ease infinite;
}
```

---

## 9. SEO & Metadata Configuration

### 9.1 Root Layout Metadata — `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'BayleafX — Engineered for Impact',
  description: 'BayleafX is a design & engineering studio for teams that refuse to ship mediocre. Web apps, design systems, and growth — custom-built, every time.',
  keywords: ['web development agency', 'UI/UX design', 'custom web applications', 'digital marketing', 'design systems'],
  authors: [{ name: 'BayleafX' }],
  openGraph: {
    title: 'BayleafX — Engineered for Impact',
    description: 'Design & engineering studio for teams that refuse to ship mediocre.',
    url: 'https://bayleafx.com',
    siteName: 'BayleafX',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BayleafX' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayleafX — Engineered for Impact',
    description: 'Design & engineering studio for teams that refuse to ship mediocre.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};
```

### 9.2 HTML Semantics

| Section           | HTML Element         | Landmark Role       |
|-------------------|----------------------|---------------------|
| Navbar            | `<header>` + `<nav>` | `banner` + `navigation` |
| Hero              | `<section>`          | Generic (with aria-label) |
| Services          | `<section>`          | Generic (with aria-label) |
| Differentiators   | `<section>`          | Generic (with aria-label) |
| Metrics           | `<section>`          | Generic (with aria-label) |
| Process           | `<section>`          | Generic (with aria-label) |
| Testimonials      | `<section>`          | Generic (with aria-label) |
| Contact           | `<section>`          | Generic (with aria-label) |
| Footer            | `<footer>`           | `contentinfo`       |
| Page wrapper      | `<main>`             | `main`              |

Each `<section>` gets:
- `id` matching nav anchor (e.g., `id="services"`)
- `aria-label` describing the section (e.g., `aria-label="Our services"`)

---

## 10. Accessibility Implementation Checklist

| Requirement                              | Implementation                                           |
|------------------------------------------|----------------------------------------------------------|
| Skip to content link                     | Hidden `<a>` at top of `<body>`, visible on focus        |
| Focus indicators                         | `focus-visible:ring-2 ring-bl-accent ring-offset-2 ring-offset-bl-base` |
| Keyboard nav — mobile menu               | Trap focus inside overlay when open, restore on close    |
| Keyboard nav — testimonial carousel      | Arrow keys to navigate, Enter to select                  |
| Alt text — decorative icons              | `aria-hidden="true"` on Lucide icons in service cards    |
| Alt text — meaningful images             | Descriptive alt on case study screenshots                |
| Form labels                              | `<label>` elements with `htmlFor`, not placeholder-only  |
| Form errors                              | `aria-invalid="true"` + `aria-describedby` on error      |
| Color contrast                           | All text passes WCAG AA (verified in DESIGN.md §2.2)     |
| Reduced motion                           | `@media (prefers-reduced-motion: reduce)` CSS + Framer   |
| Heading hierarchy                        | Single `<h1>` in Hero, `<h2>` per section, `<h3>` for cards |
| Language attribute                       | `<html lang="en">`                                        |

---

## 11. Performance Strategy

| Technique                        | Implementation                                              |
|----------------------------------|-------------------------------------------------------------|
| Font loading                     | `next/font/google` with `display: 'swap'` — zero FOUT      |
| Image optimization               | `next/image` for any raster images — WebP, lazy loading    |
| Bundle splitting                  | Next.js automatic code splitting per route                  |
| Framer Motion tree-shaking       | Import only used features: `{ motion, AnimatePresence }`   |
| Lucide tree-shaking              | Named imports only: `import { Monitor } from 'lucide-react'` |
| CSS purge                        | Tailwind JIT — only used utilities in production build     |
| Lighthouse CI                    | Run `npx lighthouse` in verification step                   |
| Scroll handler optimization      | `{ passive: true }` on scroll listeners                    |
| Reduced motion check             | Skip animation calculations when reduced motion preferred  |

---

## 12. Verification Plan

### 12.1 Automated Checks

```bash
# TypeScript compilation
npx tsc --noEmit

# ESLint
npx eslint src/ --ext .ts,.tsx

# Production build (checks for build errors)
npm run build

# Lighthouse audit (after starting dev server)
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
```

### 12.2 Manual Verification Matrix

| Check                                     | Tool / Method                    | Pass Criteria        |
|-------------------------------------------|----------------------------------|----------------------|
| Mobile layout (375px)                     | Browser DevTools                 | No horizontal scroll |
| Tablet layout (768px)                     | Browser DevTools                 | 2-col bento grid     |
| Desktop layout (1280px)                   | Browser DevTools                 | 3-col bento grid     |
| Ultra-wide (2560px)                       | Browser DevTools                 | Content stays centered|
| Scroll animations fire once               | Scroll up/down test              | No re-triggers       |
| Counter animation                         | Scroll to metrics                | Counts up smoothly   |
| Mobile nav open/close                     | Touch device / emulator          | Smooth overlay       |
| Keyboard navigation                       | Tab through entire page          | All interactive items|
| Reduced motion preference                 | Enable in OS settings            | No animations play   |
| Form validation                           | Submit empty form                | Error states shown   |
| Form submission                           | Fill and submit                  | mailto opens or POST |
| Lighthouse Performance                    | Lighthouse CLI                   | ≥ 95                 |
| Lighthouse Accessibility                  | Lighthouse CLI                   | ≥ 95                 |

---

## 13. Risk Register

| Risk                                      | Likelihood | Impact   | Mitigation                                       |
|-------------------------------------------|------------|----------|--------------------------------------------------|
| Framer Motion bundle bloat                | Medium     | Medium   | Import only needed modules, lazy-load sections   |
| Glassmorphic blur performance on mobile   | Medium     | High     | Fallback to solid bg on low-end devices          |
| Font loading causes layout shift          | Low        | Medium   | `next/font` with `display: swap` + size-adjust   |
| Counter animation janky on low FPS        | Low        | Low      | Use `requestAnimationFrame`, cap at 60fps        |
| Contact form spam (no CAPTCHA)            | Medium     | Low      | Honeypot field, rate limiting if backend added   |
| Testimonial auto-rotate disrupts reading  | Medium     | Medium   | Pause on hover/focus, generous 6s interval       |

---

## 14. Estimated Build Effort

| Wave                        | Components          | Estimated Time    |
|-----------------------------|---------------------|-------------------|
| Wave 1: Foundation          | 7 files             | ~1 hour           |
| Wave 2: Atomic UI           | 9 components        | ~2 hours          |
| Wave 3: Layout Components   | 4 components        | ~1.5 hours        |
| Wave 4: Page Sections       | 7 sections          | ~3 hours          |
| Wave 5: Assembly & QA       | Integration + polish| ~2 hours          |
| **Total**                   | **27 files**        | **~9.5 hours**    |

---

> **All three planning phases are now complete.**
>
> | Phase | Document | Status |
> |-------|----------|--------|
> | 1 | [`docs/PRD.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/PRD.md) | ✅ Complete |
> | 2 | [`docs/DESIGN.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/DESIGN.md) | ✅ Complete |
> | 3 | [`docs/IMPLEMENTATION.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/IMPLEMENTATION.md) | ✅ Complete |
>
> **Next step**: User approval → Begin Wave 1 code implementation.
