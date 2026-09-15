# BayleafX — Project Orchestration Map v2

> **Purpose**: Single source of truth for project structure, phase status, and file locations.  
> Any agent working in this directory should read this file FIRST.

---

## Directory Structure

```
BayleafX/
+-- ORCHESTRATION.md          <- You are here. Read this first.
+-- docs/                     <- All planning & design artifacts
|   +-- PRD.md                <- Phase 1: Product Requirements (v2)
|   +-- DESIGN.md             <- Phase 2: Design System & Visual Spec (v2)
|   +-- IMPLEMENTATION.md     <- Phase 3: Build Plan & Component Breakdown (v2)
+-- src/                      <- Next.js App Router source
|   +-- app/                  <- Routes & layouts
|   +-- components/           <- Reusable UI components
|   |   +-- layout/           <- Navbar, Footer, Container, SectionHeader
|   |   +-- sections/         <- Hero, Services, Differentiators, Metrics, Process, Testimonials, Contact
|   |   +-- ui/               <- Button, Input, Textarea, Logo, MetricCounter
|   +-- lib/                  <- Utilities, constants, animation configs, fonts
|   +-- types/                <- TypeScript type definitions
+-- public/                   <- Static assets
|   +-- logo.svg              <- Brand logo (PRESERVED)
|   +-- favicon.ico           <- Favicon (PRESERVED)
|   +-- tab-logo.png          <- Tab icon (PRESERVED)
+-- package.json
+-- tsconfig.json
+-- next.config.ts
```

---

## Phase Tracker

| Phase | Artifact                  | Status       | Description                                      |
|-------|---------------------------|--------------|--------------------------------------------------|
| 1     | `docs/PRD.md`             | v2 Complete  | Identity, positioning, IA, services (simplified) |
| 2     | `docs/DESIGN.md`          | v2 Complete  | Minimalist design system, typography, animations  |
| 3     | `docs/IMPLEMENTATION.md`  | v2 Complete  | Component rewrite plan, deletions, build order    |
| 4     | `src/`                    | v2 Complete  | Full UI/UX rebuild executed, audited, & verified  |

---

## Rules for Agents

1. **Read `ORCHESTRATION.md` first** — understand the file map before touching anything.
2. **Follow DESIGN.md v2 strictly** — the old design is dead. No glassmorphism, no ambient glows, no badge spam.
3. **All planning docs live in `docs/`** — never scatter `.md` files in root.
4. **All source code lives in `src/`** — follow the component directory convention above.
5. **Update the Phase Tracker** in this file when completing a phase.
6. **Mobile-first, performance-first** — every component must work at 375px.
7. **Tech stack is locked**: Next.js (App Router), Tailwind CSS v4, Lucide Icons, Framer Motion.
8. **Font stack is locked**: Instrument Serif (display), Inter (body), JetBrains Mono (mono).

---

## Brand Quick Reference

- **Name**: BayleafX
- **Tagline**: "Engineered for impact."
- **Design DNA**: Linear.app clean minimalism x Stripe.com editorial confidence
- **Primary Palette**: Deep obsidian backgrounds (#0B0E0C), Bayleaf green accent (#2D6A4F), off-white text (#F5F7F5)
- **Typography**: Instrument Serif for headlines (editorial gravitas), Inter for body (screen-optimized)
- **Animation**: Subtle fade-in on scroll. No decorative motion. Motion is invisible.

---

## v2 Redesign Summary

### What Changed
- Entire visual language reset from "enterprise tech dashboard" to "premium studio"
- Removed all cybernetic imagery, background art, and sci-fi elements
- Eliminated glassmorphism, ambient glows, badge systems, and status indicators
- Replaced tab switcher (services) with 3-column simultaneous display
- Replaced 3-column testimonial grid with single rotating quote
- Simplified contact from 6-field enterprise RFP to 3-field form
- Removed Trust Marquee section entirely
- Upgraded font stack: Outfit -> Instrument Serif (display), kept Inter (body)
- Stripped all ALL-CAPS headlines in favor of editorial sentence/title case

### What Stayed
- Logo (public/logo.svg) — unchanged
- Color theme (Bayleaf green family + obsidian dark)
- Service content (all 13 services across 3 pillars)
- Core tech stack (Next.js, Tailwind, Framer Motion, Lucide)
- Single-page homepage architecture
