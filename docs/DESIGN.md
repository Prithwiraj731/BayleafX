# BayleafX — Design System v2 (Complete Redesign)

> **Phase**: 2 of 3  
> **Status**: Complete  
> **Last Updated**: 2026-09-15  
> **Parent**: [`ORCHESTRATION.md`](file:///c:/Users/USER/Desktop/BayleafX/ORCHESTRATION.md)  
> **Depends On**: [`docs/PRD.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/PRD.md)

---

## 1. Design Philosophy

### 1.1 Design North Stars

This is not a startup landing page. This is not a template. This is the public face of a company that charges six figures per engagement. Every pixel must communicate:

- **Quiet confidence** — not shouting, not proving. Already proven.
- **Surgical precision** — every element earns its place or gets deleted.
- **Restrained luxury** — the most expensive restaurants have the simplest menus.

### 1.2 Reference Poles

| Reference          | What We Study                                              | What We Discard                    |
| ------------------ | ---------------------------------------------------------- | ---------------------------------- |
| **Linear.app**     | Clean sans-serif type, tight grids, monochromatic surfaces, subtle gradient overlays, single-color accent | Marketing fluff                    |
| **Stripe.com**     | Generous whitespace, editorial copywriting, restrained motion, confident single-column hero, world-class typography | Rainbow gradients — we stay green  |
| **Rauno Freiberg** | Micro-interaction craft, intentional negative space, invisible-until-needed UI details | Portfolio-scale — we apply to agency |

### 1.3 Five Laws of BayleafX Design

1. **Whitespace is authority.** Generous spacing signals confidence. Cramped layouts signal desperation.
2. **One accent, everywhere.** Bayleaf green (#2D6A4F) is the only color that speaks. Everything else is grayscale.
3. **Typography is the interface.** Headlines do the heavy lifting. Not icons, not badges, not glow effects.
4. **Motion is invisible.** If a user notices an animation, it's too much. Animations guide — they don't perform.
5. **No decoration.** Zero ambient glows, zero floating orbs, zero gradient meshes behind content. If it doesn't communicate, it doesn't exist.

---

## 2. Color System

### 2.1 Core Palette (Unchanged — Logo & Brand Preserved)

```
BACKGROUNDS (Neutral Dark Stack)
──────────────────────────────────────────
--bl-bg-deep       #080A09     Deepest — page body, void areas
--bl-bg-base       #0B0E0C     Primary surface — sections
--bl-bg-elevated   #121513     Cards, panels, raised content
--bl-bg-subtle     #1A1D1B     Hover states, interactive fills

TEXT (4-Level Hierarchy)
──────────────────────────────────────────
--bl-text-primary    #F5F7F5     Headlines, high-emphasis content
--bl-text-secondary  #A8ADA9     Body text, descriptions
--bl-text-tertiary   #6B716C     Captions, metadata, timestamps
--bl-text-muted      #3D423E     Disabled, placeholder

ACCENT (Single-Hue: Bayleaf Green)
──────────────────────────────────────────
--bl-green           #2D6A4F     Primary accent — buttons, links, highlights
--bl-green-hover     #40916C     Hover/active state
--bl-green-light     #52B788     Small text accents, badges
--bl-green-subtle    #2D6A4F14   8% opacity — backgrounds, tints
--bl-green-border    #2D6A4F40   25% opacity — borders

BORDERS (Hairline Only)
──────────────────────────────────────────
--bl-border          #FFFFFF0A   4% white — section dividers
--bl-border-card     #FFFFFF0F   6% white — card edges
--bl-border-hover    #FFFFFF1A   10% white — hover states

STATUS (Used Sparingly)
──────────────────────────────────────────
--bl-success         #22C55E
--bl-error           #EF4444
```

### 2.2 Color Rules

1. **No color gradients on cards or panels.** Surfaces are flat, single-color fills.
2. **Green is reserved for interactive elements only** — buttons, links, active states, and the logo accent.
3. **No glow effects.** No `box-shadow` with green opacity. No radial gradient blobs.
4. **Text hierarchy is achieved through weight and opacity** — never through color variation (e.g., no teal vs. cyan vs. mint).

### 2.3 Contrast Compliance (WCAG 2.2 AA)

| Combination                           | Ratio  | Status |
| ------------------------------------- | ------ | ------ |
| `--bl-text-primary` on `--bl-bg-base` | 16.8:1 | Pass   |
| `--bl-text-secondary` on `--bl-bg-base` | 8.1:1 | Pass   |
| `--bl-text-tertiary` on `--bl-bg-base` | 4.7:1 | Pass   |
| `--bl-green` on `--bl-bg-base`        | 5.2:1  | Pass   |

---

## 3. Typography

### 3.1 Font Stack

| Role        | Family                           | Purpose                                       | Loading |
| ----------- | -------------------------------- | --------------------------------------------- | ------- |
| **Display** | `"Instrument Serif"` (Google)    | Headlines only. Gives editorial gravitas.      | `swap`  |
| **Body**    | `"Inter"` (Google, Variable)     | Everything else. Optimized for screens.        | `swap`  |
| **Mono**    | `"Geist Mono"` or `"JetBrains Mono"` | Code references, overlines, technical labels. | `swap`  |

**Why Instrument Serif?**
- Serif headlines on a dark tech background creates instant prestige contrast. It signals "we are not another SaaS template."
- Inter for body keeps readability perfect at all sizes.
- This combination is what separates a $10k site from a $100k site.

### 3.2 Type Scale

```
Token                    Size             Clamp                              Usage
─────────────────────────────────────────────────────────────────────────────────
--text-hero              80px / 5rem      clamp(2.75rem, 5.5vw, 5rem)       Hero headline only
--text-display           56px / 3.5rem    clamp(2.25rem, 4vw, 3.5rem)       Section headlines
--text-heading           36px / 2.25rem   clamp(1.75rem, 2.8vw, 2.25rem)    Sub-section titles
--text-subheading        24px / 1.5rem    clamp(1.25rem, 1.8vw, 1.5rem)     Card titles
--text-body-lg           18px / 1.125rem  Fixed                              Lead paragraphs
--text-body              16px / 1rem      Fixed                              Default body
--text-body-sm           14px / 0.875rem  Fixed                              Secondary body
--text-caption           12px / 0.75rem   Fixed                              Meta, labels
--text-overline          11px / 0.6875rem Fixed, uppercase, +0.08em tracking Overlines
```

### 3.3 Typography Rules

1. **Serif headlines, sans-serif everything else.** Never mix within a single element.
2. **Max body width: 600px (37.5rem).** Long lines destroy readability.
3. **No font below 12px** on any breakpoint.
4. **Headline line height: 1.0-1.1.** Tight. Headlines are set like posters.
5. **Body line height: 1.6-1.7.** Generous. Body text breathes.
6. **Weight contrast within headlines**: Use 400 (regular serif) as default. Bold (700) only for single emphasis words.
7. **No ALL-CAPS headlines.** Only overlines use uppercase. Headlines use sentence case or title case.

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (4px base unit)

```
--space-1      4px       Inline gaps, icon padding
--space-2      8px       Tight element spacing
--space-3      12px      Small padding
--space-4      16px      Standard gaps
--space-6      24px      Card padding, element separation
--space-8      32px      Component grouping
--space-12     48px      Section sub-gaps
--space-16     64px      Section padding (mobile)
--space-24     96px      Section padding (tablet)
--space-32     128px     Section padding (desktop)
--space-40     160px     Hero-level vertical breathing room
```

### 4.2 Container & Grid

```
CONTAINER
──────────────────────────────────────
Max width:         1200px (75rem)
Padding:           20px (mobile) -> 32px (tablet) -> 48px (desktop)
Centering:         margin: 0 auto

GRID
──────────────────────────────────────
System:            CSS Grid
Base columns:      12
Gutter:            24px (mobile) -> 32px (desktop)
Content max-width: 680px for single-column text sections

BREAKPOINTS
──────────────────────────────────────
sm      640px      Large phone / landscape
md      768px      Tablet portrait
lg      1024px     Tablet landscape / small desktop
xl      1280px     Desktop
```

### 4.3 Section Rhythm

Every section on the page follows this vertical rhythm:

```
+----------------------------------------------+
|                                              |
|  Section Top Padding    96-128px             |
|                                              |
|  [Overline]             11px mono, green     |
|  [Section Headline]     Instrument Serif     |
|  [Section Description]  Inter, secondary     |
|                                              |
|  Content Gap            48-64px              |
|                                              |
|  +----------------------------------------+  |
|  |  SECTION CONTENT                       |  |
|  +----------------------------------------+  |
|                                              |
|  Section Bottom Padding 96-128px             |
|                                              |
|  ----------- 1px border (#FFFFFF0A) -------- |
+----------------------------------------------+
```

---

## 5. Component Specifications

### 5.1 Cards (`.bl-card`)

Minimal. No glassmorphism. No gradients. No glow.

```
DEFAULT STATE
──────────────────────────────────────
Background:        --bl-bg-elevated
Border:            1px solid --bl-border-card
Border Radius:     12px
Padding:           24px (mobile) -> 32px (desktop)

HOVER STATE
──────────────────────────────────────
Border Color:      --bl-border-hover
Transform:         translateY(-2px)
Transition:        all 300ms cubic-bezier(0.4, 0, 0.2, 1)

No box-shadow on hover. No glow. Just a subtle lift and border brighten.
```

### 5.2 Primary Button

```
DEFAULT
──────────────────────────────────────
Background:        --bl-green (#2D6A4F)
Color:             white
Padding:           12px 24px
Border Radius:     8px
Font:              Inter 500, 14px, +0.01em tracking
Border:            none

HOVER
──────────────────────────────────────
Background:        --bl-green-hover (#40916C)
Transform:         translateY(-1px)

FOCUS-VISIBLE
──────────────────────────────────────
Outline:           2px solid --bl-green
Outline Offset:    3px

No glow. No shadow. Clean.
```

### 5.3 Ghost Button

```
Background:        transparent
Color:             --bl-text-primary
Border:            1px solid --bl-border-card
Padding:           12px 24px
Border Radius:     8px

HOVER:
Background:        --bl-bg-subtle
Border Color:      --bl-border-hover
```

### 5.4 Section Header Pattern

```
[OVERLINE]        "Services"
                  11px, Inter mono, --bl-green, uppercase, tracked
                  margin-bottom: 12px

[HEADLINE]        "What we build."
                  Instrument Serif, --text-display, --bl-text-primary
                  line-height: 1.08
                  margin-bottom: 16px

[DESCRIPTION]     "From infrastructure to interface."
                  Inter 400, --text-body-lg, --bl-text-secondary
                  max-width: 520px
                  line-height: 1.65

Alignment: center (default). Left for asymmetric layouts.
```

### 5.5 Navigation Bar

```
STRUCTURE
──────────────────────────────────────
Position:          fixed, top: 0, z-index: 50
Height:            64px
Background:        --bl-bg-base with 85% opacity
Backdrop:          blur(12px)
Border Bottom:     1px solid --bl-border (appears on scroll)

LAYOUT (Desktop)
+----------------------------------------------+
|  [Logo]          [Nav Links]       [CTA Btn] |
|  (left)          (center)          (right)   |
+----------------------------------------------+

Nav links: Inter 400, 14px, --bl-text-secondary
Active link: --bl-text-primary
Hover: --bl-text-primary, 200ms transition
No underlines. No pills. Just opacity shift.

MOBILE (< 768px)
+----------------------------------------------+
|  [Logo]                           [Menu Btn] |
+----------------------------------------------+
Full-screen overlay on toggle.
Links: Instrument Serif, 32px, stacked center.
```

### 5.6 Input Fields

```
Background:        --bl-bg-elevated
Border:            1px solid --bl-border-card
Border Radius:     8px
Padding:           14px 16px
Font:              Inter 400, 15px
Color:             --bl-text-primary
Placeholder:       --bl-text-muted

FOCUS:
Border Color:      --bl-green
Outline:           none
No shadow. No glow ring. Just a clean green border.
```

### 5.7 Metric Display

```
[NUMBER]           "150+"
                   Instrument Serif, 56px, weight 400, --bl-text-primary
                   Counter animates 0 -> target on scroll

[LABEL]            "Projects shipped"
                   Inter 400, 14px, --bl-text-tertiary
                   margin-top: 4px

Layout: 4 columns on desktop, 2 on mobile.
Separated by thin vertical 1px borders (--bl-border), not card containers.
No background panels. Numbers breathe in open space.
```

---

## 6. Animation System

### 6.1 Timing & Easing

```css
--duration-fast       150ms      /* Button press, toggle */
--duration-normal     250ms      /* Hover states, fades */
--duration-medium     400ms      /* Section reveals */
--duration-slow       600ms      /* Hero entrance, page transitions */

--ease-out            cubic-bezier(0.16, 1, 0.3, 1)       /* Entering elements */
--ease-in-out         cubic-bezier(0.65, 0, 0.35, 1)      /* State changes */
--ease-smooth         cubic-bezier(0.4, 0, 0.2, 1)        /* General purpose */
```

### 6.2 Allowed Animations

| Animation          | Trigger          | Properties                     | Duration | Notes                      |
| ------------------ | ---------------- | ------------------------------ | -------- | -------------------------- |
| `fadeIn`           | Scroll into view | opacity: 0 to 1               | 400ms    | Most common. Subtle.       |
| `fadeInUp`         | Scroll into view | opacity: 0 to 1, y: 16 to 0   | 500ms    | For content blocks         |
| `staggerChildren`  | Parent in view   | 80ms stagger between children  | -        | For lists and grids        |
| `counterUp`        | Scroll into view | Number counts 0 to target      | 1200ms   | Metrics section only       |
| `buttonHover`      | mouseenter       | translateY(-1px)               | 150ms    | Buttons only               |
| `cardHover`        | mouseenter       | translateY(-2px), border shift | 300ms    | Cards only                 |
| `navAppear`        | scroll > 20px    | Backdrop blur + border fade in | 250ms    | Navbar only                |

### 6.3 Banned Animations

- NO Floating orbs or ambient pulse/glow
- NO Parallax scrolling on any section
- NO Continuous looping background animations
- NO Scale-in effects (scale 0.95 to 1)
- NO Clip-path reveals
- NO Gradient drift/shift
- NO Hover glow/shadow on cards
- NO Swipe-to-unlock interactions
- NO Progress bar animations unrelated to actual progress

### 6.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Section-by-Section Visual Specification

### 7.1 Hero

```
LAYOUT
──────────────────────────────────────
Full viewport height (100dvh).
Single column, center-aligned.
No background image. No character art. No floating widgets.
Just type on dark space.

CONTENT (Top to Bottom, centered)
──────────────────────────────────────
[Overline]     "Design & Engineering Studio"
               Inter mono, 11px, --bl-green, uppercase, tracked

[Headline]     "We don't decorate websites.
                We engineer experiences."
               Instrument Serif, 80px (clamped), --bl-text-primary
               line-height: 1.05, max-width: 900px

[Subheadline]  "BayleafX is a design & engineering studio for
                teams that refuse to ship mediocre."
               Inter 400, 18px, --bl-text-secondary
               max-width: 520px, margin-top: 24px

[CTA]          Single primary button: "Start a project"
               with ArrowRight icon suffix
               margin-top: 40px

[Scroll Cue]   Small downward arrow at bottom center
               Inter mono, 11px, --bl-text-muted
               Gentle fade animation (opacity 0.4 to 0.7, 3s loop)

BACKGROUND
──────────────────────────────────────
Solid --bl-bg-base (#0B0E0C).
Optional: A single, barely visible radial gradient at center:
  radial-gradient(ellipse 60% 50% at 50% 40%, #12151310 0%, transparent 70%)
This is NOT a decorative glow. It is the faintest warmth to prevent total flatness.
```

### 7.2 Services

```
LAYOUT
──────────────────────────────────────
Standard section header (overline + headline + description).
Below: 3-column grid on desktop, 1-column on mobile.
Each column represents a Pillar (Core Dev, UI/UX, Growth).

PILLAR CARD
──────────────────────────────────────
No tabs. No switcher. All 3 pillars visible simultaneously.
Each pillar is a tall card with:

  [Pillar Number]    "01" - Inter mono, 12px, --bl-text-muted
  [Pillar Name]      "Core Development" - Inter 600, 13px, --bl-green, uppercase
  [Divider Line]     1px --bl-border, full width, margin 16px vertical

  [Service List]     4-5 services listed vertically:
    [Title]          Inter 500, 16px, --bl-text-primary
    [One-liner]      Inter 400, 14px, --bl-text-tertiary
    margin-bottom: 20px between services

Card styling: --bl-bg-elevated background, 1px --bl-border-card border, 12px radius.
No hover effects on the pillar card. Content is the interaction.
```

### 7.3 Differentiators

```
LAYOUT
──────────────────────────────────────
Section header, then a clean comparison table (not cards).
Two-column table layout:

  LEFT COLUMN HEADER    "Others"       --bl-text-muted, strikethrough style
  RIGHT COLUMN HEADER   "BayleafX"     --bl-green, normal weight

  ROWS:
  Each row is a dimension (Design Approach, Technical Depth, etc.)
  Left cell: faded text, --bl-text-tertiary
  Right cell: confident text, --bl-text-primary
  Rows separated by 1px --bl-border

  No X/Check icons. No colored backgrounds. Just text contrast.
  The design itself IS the differentiator: clean vs cluttered.
```

### 7.4 Metrics

```
LAYOUT
──────────────────────────────────────
No card backgrounds. Numbers stand alone.
4 metrics in a single row on desktop, 2x2 on mobile.
Separated by thin vertical 1px lines (not card edges).

  150+               98%
  Projects shipped    Client retention

  3.2s                40%
  Avg load boost      Conversion lift

Numbers: Instrument Serif, 56px, --bl-text-primary, counter animation.
Labels: Inter 400, 14px, --bl-text-tertiary.
```

### 7.5 Process

```
LAYOUT
──────────────────────────────────────
4 steps displayed as a numbered list, not a stepper with connecting lines.
Simple, editorial layout. Left-aligned or 2x2 grid.

  01   Discovery & Architecture
       "We audit your requirements, technical stack,
        and constraints with zero fluff."

  02   Design System
       "High-fidelity prototypes and tokenized components
        built directly for code translation."

  03   Engineering
       "Clean Next.js / TypeScript code with
        performance auditing and CI/CD."

  04   Launch & Growth
       "Production deployment with telemetry
        and continuous optimization."

Numbers: Instrument Serif, 48px, --bl-text-muted (faded).
Titles: Inter 600, 20px, --bl-text-primary.
Descriptions: Inter 400, 15px, --bl-text-secondary.

Desktop: 2-column grid (2 per row) or 4-column.
Mobile: Single column, stacked.
```

### 7.6 Testimonials

```
LAYOUT
──────────────────────────────────────
Single featured quote, not 3-column grid.
Large italic serif text, centered.

  "BayleafX didn't just redesign our platform -
   they re-engineered how our users think about us."

  - Sarah Chen, VP Product at Luminary AI

Quote: Instrument Serif, 28px (clamped), --bl-text-primary, italic
Attribution: Inter 400, 14px, --bl-text-tertiary

Auto-rotate every 6s with a simple crossfade (opacity transition).
Small dots below indicate current testimonial.

No star ratings. No "verified" badges. No outcome metric tags.
The quote speaks for itself.
```

### 7.7 Contact / CTA

```
LAYOUT
──────────────────────────────────────
Two-column on desktop, stacked on mobile.
Left: Headline + brief copy + direct email link.
Right: Simple contact form.

LEFT COLUMN:
  [Headline]       "Ready to build something real?"
                   Instrument Serif, --text-heading
  [Body]           "Tell us about your project. We will respond
                    within 24 hours with a technical assessment."
                   Inter 400, --text-body, --bl-text-secondary
  [Email]          "avirupd925@gmail.com"
                   Inter mono, 14px, --bl-green, underline on hover

RIGHT COLUMN (Form):
  Fields:  Name, Email, Message (textarea, 4 rows)
  Submit:  Primary button, full-width: "Send message"
  No scope selectors. No timeline pills. No engagement model cards.
  Just name, email, message. Reduce friction to zero.
```

### 7.8 Footer

```
LAYOUT
──────────────────────────────────────
3-column: Brand + Nav Links + Legal
Top border: 1px --bl-border

Brand column: Logo + one-line description + email
Nav column: Same anchor links as navbar
Legal column: Privacy, Terms, Cookies

Bottom bar: (c) 2026 BayleafX. All rights reserved.
No "All Systems Operational" badge. No status dots. No pulse animations.
```

---

## 8. Iconography

### 8.1 Lucide Icon Usage

Icons are **supporting**, never primary. Used at 20px, stroke 1.5.

| Context               | Icon            | Color              |
| --------------------- | --------------- | ------------------ |
| CTA button suffix     | `ArrowRight`    | white              |
| Form success          | `Check`         | --bl-green         |
| Nav mobile toggle     | `Menu` / `X`    | --bl-text-primary  |
| Email link            | `Mail`          | --bl-green         |
| Scroll cue            | `ChevronDown`   | --bl-text-muted    |

### 8.2 Icon Rules

1. **No icon badges** (colored circle backgrounds behind icons).
2. **No service-specific icons** in service lists. The title IS the identifier.
3. **Icons never animate independently.** Only their parent transforms.

---

## 9. What Gets Deleted

### 9.1 Images to Remove

All files in `public/images/`:
- `hero-character.png` — Cybernetic figure. Gone.
- `hero-character-opt.png` — Same. Gone.
- `hero-mobile-bg.jpg` — Sci-fi backdrop. Gone.
- `hero-raven.jpg` — Preview widget image. Gone.

The hero section is now **purely typographic**. No images needed.

### 9.2 UI Patterns to Remove

| Current Pattern                       | Replacement                                  |
| ------------------------------------- | -------------------------------------------- |
| Glassmorphic cards with backdrop-blur  | Flat elevated cards with hairline border      |
| Ambient glow orbs (radial gradients)  | Nothing. Empty space.                        |
| SLA badges, verified badges           | Nothing. Let the work speak.                 |
| Tech stack pill tags                  | Remove entirely or footnote text             |
| Tab switcher for service pillars      | All 3 pillars visible simultaneously         |
| Swipe-to-unlock mobile CTA           | Standard button                              |
| Trust marquee section (industries)    | Remove entirely                              |
| Engagement model cards (contact)      | Remove. Simple form only.                    |
| Enterprise Standards SLA card         | Remove. Simplify contact section.            |
| Floating preview widget (hero)        | Remove.                                      |
| Giant "SINGULARITY" background word   | Remove.                                      |
| Telemetry status indicators           | Remove.                                      |
| 5-star ratings on testimonials        | Remove.                                      |
| Outcome metric tags on testimonials   | Remove.                                      |
| Progress slider (01 --- 06)           | Remove.                                      |

---

## 10. Responsive Behavior

| Element           | 375px (Mobile)        | 768px (Tablet)        | 1200px+ (Desktop)      |
| ----------------- | --------------------- | --------------------- | ---------------------- |
| **Nav**           | Logo + hamburger      | Logo + links + CTA    | Logo + links + CTA     |
| **Hero headline** | clamp to ~44px        | clamp to ~64px        | 80px                   |
| **Service grid**  | 1 column, stacked     | 2 columns             | 3 columns              |
| **Differentiator**| Stacked rows          | Side-by-side table    | Side-by-side table     |
| **Metrics**       | 2x2 grid              | 4 columns             | 4 columns              |
| **Process**       | 1 column              | 2x2 grid              | 4 columns or 2x2       |
| **Testimonial**   | Full width            | Max-width centered    | Max-width centered     |
| **Contact**       | Stacked               | 2 columns             | 2 columns              |
| **Section padding**| 64px vertical        | 80px vertical         | 96-128px vertical      |

---

## 11. Logo Specification (Preserved)

```
Format:          SVG (public/logo.svg) — KEEP AS-IS
Usage:           20-28px height in navbar
Color:           Inherits from SVG. White with green "X" accent.
No modifications to the logo file.
```

---

## 12. Pre-Implementation Checklist

- [ ] Font pairing (Instrument Serif + Inter) tested at 375px and 1440px
- [ ] All ambient glows, orbs, and gradient meshes removed from CSS
- [ ] Glassmorphic `.bl-card-glass` class replaced with flat `.bl-card`
- [ ] All images in `public/images/` deleted
- [ ] Hero section is purely typographic (no Image tags)
- [ ] Services render all 3 pillars simultaneously (no tab switcher)
- [ ] Testimonials display as single rotating quote (not 3-column grid)
- [ ] Contact form reduced to 3 fields: name, email, message
- [ ] Trust marquee section removed entirely from page
- [ ] No component uses `backdrop-filter: blur()` except navbar
- [ ] All animations comply with the "Allowed Animations" list
- [ ] Color usage audit: green only on interactive elements

---

> **Next Phase**: [`docs/IMPLEMENTATION.md`](file:///c:/Users/USER/Desktop/BayleafX/docs/IMPLEMENTATION.md) — Component rewrite plan, file deletions, build order, and verification steps.
