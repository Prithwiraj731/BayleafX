# BayleafX — Implementation Plan v2 (Complete UI/UX Rebuild)

> **Phase**: 3 of 3  
> **Status**: Complete  
> **Last Updated**: 2026-09-15  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)  
> **Depends On**: [`docs/DESIGN.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/DESIGN.md)

---

## 1. Build Strategy

### Approach
This is a **full rewrite** of every section component, most UI components, global styles, and the font system. The data layer (constants, types) receives minor cleanup but its content is preserved.

### Build Order
Execute in strict dependency order:

```
Phase A: Foundation (Fonts, CSS, Layout)
  -> Phase B: UI Components (Button, Input, Textarea, Logo)
    -> Phase C: Section Components (Hero -> Services -> Differentiators -> Metrics -> Process -> Testimonials -> Contact)
      -> Phase D: Page Assembly + Footer
        -> Phase E: Cleanup & Verification
```

---

## 2. Phase A — Foundation

### A1. Font System Update

**[MODIFY]** `src/lib/fonts.ts`

Replace Outfit with Instrument Serif:

```
- Remove: Outfit import
- Add: Instrument_Serif from 'next/font/google'
- Keep: Inter (unchanged)
- Keep: JetBrains_Mono (unchanged)

Export variables:
  --font-serif    (Instrument Serif, weights: 400)
  --font-inter    (Inter, weights: 300-700)
  --font-mono     (JetBrains Mono, weights: 400, 500)
```

### A2. Global CSS Rewrite

**[MODIFY]** `src/app/globals.css`

Complete rewrite:

```
- Remove: .bayleaf-ambient-glow / .crimson-ambient-glow keyframes
- Remove: .bl-card-glass and .bl-card-glass:hover
- Remove: ambient-pulse animation
- Remove: backdrop-filter glass styles

- Update: CSS custom properties to v2 palette
  (rename --bl-accent to --bl-green, add --bl-bg-deep, etc.)

- Update: font-family references
  --font-display -> --font-serif (Instrument Serif)
  --font-body -> --font-inter (Inter)

- Keep: Reduced motion media query
- Keep: Scrollbar styles (update colors if needed)
- Keep: Selection styles
- Keep: @import "tailwindcss"
```

### A3. Layout Component Update

**[MODIFY]** `src/app/layout.tsx`

- Update font variable classnames on `<html>` tag
- Replace `outfit.variable` with new serif variable
- Ensure `--font-serif` is applied

**[MODIFY]** `src/components/layout/container.tsx`

- Update max-width from current to 1200px (75rem)
- Verify padding values match v2 spec

**[MODIFY]** `src/components/layout/section-header.tsx`

- Headline: Change from `font-display` (Outfit) to serif font class
- Overline: Change to `font-mono`, green color, uppercase
- Description: Keep Inter, update max-width to 520px
- Remove any badge/icon elements if present

---

## 3. Phase B — UI Components

### B1. Button Component

**[MODIFY]** `src/components/ui/button.tsx`

- Primary: bg #2D6A4F, white text, 8px radius, no shadow, no glow
- Hover: bg #40916C, translateY(-1px)
- Ghost: transparent bg, hairline border, 8px radius
- Remove: Any box-shadow or glow on hover
- Remove: Icon badge circles around arrow icons

### B2. Input & Textarea

**[MODIFY]** `src/components/ui/input.tsx`
**[MODIFY]** `src/components/ui/textarea.tsx`

- Background: --bl-bg-elevated
- Border: 1px --bl-border-card, 8px radius
- Focus: border-color --bl-green only. No glow ring, no shadow.
- Remove: Any shadow or ring effect on focus

### B3. Logo Component

**[KEEP]** `src/components/ui/logo.tsx` — No changes needed. SVG logo preserved.

### B4. Components to Delete

**[DELETE]** `src/components/ui/glass-card.tsx` — Glassmorphism eliminated.
**[DELETE]** `src/components/ui/service-card.tsx` — Services restructured as lists, not cards.
**[DELETE]** `src/components/ui/process-step.tsx` — Process redesigned as numbered blocks.
**[DELETE]** `src/components/ui/testimonial-card.tsx` — Testimonials are now a single quote.

### B5. Metric Counter (Keep & Simplify)

**[MODIFY]** `src/components/ui/metric-card.tsx`

- Rename to `metric-counter.tsx` or keep name
- Remove: card background, border, padding
- Number: Instrument Serif, 56px, --bl-text-primary
- Label: Inter, 14px, --bl-text-tertiary
- Keep: Counter animation (count up from 0)

---

## 4. Phase C — Section Components (Full Rewrites)

### C1. Hero

**[REWRITE]** `src/components/sections/hero.tsx`

Current: 340 lines with mobile/desktop split, character images, swipe button, telemetry UI, floating preview widget, giant background word.

New (target ~80 lines):
- Single layout for all breakpoints (centered, responsive via clamp)
- No images. No `import Image from 'next/image'`
- Content: overline, serif headline, sans-serif subhead, single CTA button, scroll cue
- Background: solid --bl-bg-base, optional subtle radial gradient
- Animation: Simple fadeInUp on text content (staggered)
- Remove: MobileSwipeButton component entirely
- Remove: All Image imports and references

### C2. Services

**[REWRITE]** `src/components/sections/services.tsx`

Current: 305 lines with tab switcher, pillar meta with SLA badges, tech stack pills, icon-mapped cards.

New (target ~120 lines):
- Section header (overline + headline + description)
- 3-column grid (all pillars visible simultaneously)
- Each pillar: number + name + divider + service list
- Service list: title + one-liner, vertically stacked
- No icons on services. No tech stack pills. No SLA badges.
- No tab switcher. No AnimatePresence. No pillar meta.
- No "View All" toggle. All services visible.
- Animation: fadeInUp on each pillar column

### C3. Differentiators

**[REWRITE]** `src/components/sections/differentiators.tsx`

Current: 119 lines with X/Check icons, colored backgrounds, glow effects, enterprise banner.

New (target ~80 lines):
- Section header
- Clean table/grid: "Others" column (faded) vs "BayleafX" column (bright)
- Text-only contrast. No icons, no colored backgrounds.
- Rows separated by 1px borders.
- Remove: Bottom enterprise reassurance banner
- Animation: fadeIn on table

### C4. Metrics

**[REWRITE]** `src/components/sections/metrics.tsx`

Current: 142 lines with KPI grid cards + full case study spotlight with before/after benchmarks.

New (target ~60 lines):
- Section header
- 4 metrics in a row, separated by thin vertical lines
- Number + label only. No card backgrounds.
- Counter animation on scroll.
- Remove: Entire case study spotlight card
- Remove: CASE_STUDY_METRICS data

### C5. Process

**[REWRITE]** `src/components/sections/process.tsx`

Current: 123 lines with cadence badges, deliverable checklists, gate checkpoint footers.

New (target ~70 lines):
- Section header
- 4 numbered blocks: large number + title + description
- 2x2 grid on desktop, stacked on mobile
- Remove: Cadence pills, deliverable checklists, gate checkpoints
- Remove: PHASE_DETAILS metadata
- Animation: staggered fadeInUp

### C6. Testimonials

**[REWRITE]** `src/components/sections/testimonials.tsx`

Current: 135 lines with 3-column grid, star ratings, verified badges, outcome metrics.

New (target ~80 lines):
- Single centered quote, large serif italic
- Attribution: name, title, company
- Auto-rotate every 6s with opacity crossfade
- Dot indicators below
- Remove: Star ratings, verified badges, outcome metric tags
- Remove: TESTIMONIAL_META metadata

### C7. Contact

**[REWRITE]** `src/components/sections/contact.tsx`

Current: 354 lines with scope selectors, timeline pills, engagement model cards, enterprise SLA guarantees.

New (target ~120 lines):
- 2-column layout: copy left, form right
- Left: serif headline, body copy, email link
- Right: 3 fields (name, email, message) + submit button
- Success state: simple "Thank you" message
- Remove: ENGAGEMENT_MODELS, SCOPE_OPTIONS, TIMELINE_OPTIONS
- Remove: Enterprise Standards card
- Remove: Scope selector pills, timeline selector

---

## 5. Phase D — Page Assembly + Navigation + Footer

### D1. Homepage

**[MODIFY]** `src/app/page.tsx`

- Remove: TrustMarqueeSection import and usage
- Keep remaining sections in order: Hero, Services, Differentiators, Metrics, Process, Testimonials, Contact
- Update section comment labels to be simpler

### D2. Navbar

**[REWRITE]** `src/components/layout/navbar.tsx`

- Simplify to: Logo (left), nav links (center), single CTA button (right)
- Remove: Double CTA buttons (currently "Get Started" + "Contact")
- Single CTA: "Start a project" primary button
- Mobile: Logo + hamburger. Full-screen overlay with serif links.
- Remove: Capsule button styling
- Keep: Scroll-triggered backdrop blur

### D3. Footer

**[MODIFY]** `src/components/layout/footer.tsx`

- 3-column: Brand + Nav + Legal
- Remove: "ALL SYSTEMS OPERATIONAL" status indicator with pulse dot
- Remove: "ARCHITECTED TO SCALE" tagline in copyright
- Simplify copyright to: "(c) 2026 BayleafX. All rights reserved."

---

## 6. Phase E — Cleanup & Deletion

### E1. Files to Delete

```
src/components/ui/glass-card.tsx
src/components/ui/service-card.tsx
src/components/ui/process-step.tsx
src/components/ui/testimonial-card.tsx
src/components/sections/trust-marquee.tsx
public/images/hero-character.png
public/images/hero-character-opt.png
public/images/hero-mobile-bg.jpg
public/images/hero-raven.jpg
```

### E2. Constants Cleanup

**[MODIFY]** `src/lib/constants.ts`

- Service content: KEEP (all 13 services preserved)
- Metrics: KEEP
- Process steps: SIMPLIFY (remove cadence/deliverable references if embedded)
- Testimonials: KEEP
- Differentiators: KEEP
- Nav links: UPDATE (remove "Our Edge" label -> "Differentiators" or keep as "Why Us")

### E3. Types Cleanup

**[MODIFY]** `src/types/index.ts`

- Remove: GlassCardProps
- Remove: ServiceCardProps (services are now inline)
- Remove: ProcessStepProps (process is now inline)
- Remove: TestimonialCardProps (testimonials are now inline)
- Keep: All data types (ServicePillar, MetricItem, etc.)
- Keep: ContainerProps, SectionHeaderProps, ButtonProps

### E4. Animations Cleanup

**[MODIFY]** `src/lib/animations.ts`

- Keep: fadeInUp, staggerContainer, staggerChild, transitionEase
- Remove: fadeInScale (not used in v2)
- Remove: hoverCardGlow (no glow effects in v2)
- Simplify easing values if needed

### E5. Styles Cleanup

**[DELETE or SIMPLIFY]** `src/styles/globals.css`

- If it only imports `../app/globals.css`, either delete or keep as redirect

---

## 7. Verification Plan

### Build Test
```bash
npm run build
```
Must complete with zero errors.

### Visual Verification
- Open in browser at 375px, 768px, 1280px
- Confirm: No ambient glows, no glassmorphism, no floating orbs
- Confirm: Serif headlines (Instrument Serif) rendering correctly
- Confirm: Green accent only on interactive elements
- Confirm: Generous whitespace between sections

### Performance
```bash
# After build, run Lighthouse
npx lighthouse http://localhost:3000 --output=json
```
Target: Performance >= 95, Accessibility >= 95

### Accessibility
- Tab through entire page — all interactive elements focusable
- Verify focus indicators are visible
- Check color contrast with browser DevTools

---

## 8. Estimated Component Line Counts

| Component               | Current Lines | Target Lines | Reduction |
|-------------------------|---------------|--------------|-----------|
| hero.tsx                | 340           | ~80          | 76%       |
| services.tsx            | 305           | ~120         | 61%       |
| differentiators.tsx     | 119           | ~80          | 33%       |
| metrics.tsx             | 142           | ~60          | 58%       |
| process.tsx             | 123           | ~70          | 43%       |
| testimonials.tsx        | 135           | ~80          | 41%       |
| contact.tsx             | 354           | ~120         | 66%       |
| navbar.tsx              | 160           | ~100         | 38%       |
| **Total**               | **1,678**     | **~710**     | **58%**   |

Less code = fewer bugs, faster loads, easier maintenance. This is a feature, not a compromise.

---

> **Next Step**: Execute Phase A through E in order. Update `ORCHESTRATION.md` Phase 4 status upon completion.
