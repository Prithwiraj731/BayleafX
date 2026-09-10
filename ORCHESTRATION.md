# BayleafX — Project Orchestration Map

> **Purpose**: Single source of truth for project structure, phase status, and file locations.
> Any agent working in this directory should read this file FIRST.

---

## Directory Structure

```
BayleafX/
├── ORCHESTRATION.md          ← You are here. Read this first.
├── docs/                     ← All planning & design artifacts
│   ├── PRD.md                ← Phase 1: Product Requirements Document
│   ├── DESIGN.md             ← Phase 2: Design System & Visual Spec
│   └── IMPLEMENTATION.md     ← Phase 3: Build Plan & Component Breakdown
├── src/                      ← Next.js App Router source (Phase 3+)
│   ├── app/                  ← Routes & layouts
│   ├── components/           ← Reusable UI components
│   │   ├── layout/           ← Header, Footer, Nav, Container
│   │   ├── sections/         ← Hero, Services, Differentiators, CTA, etc.
│   │   └── ui/               ← Buttons, Cards, Badges, Glassmorphic panels
│   ├── lib/                  ← Utilities, constants, animation configs
│   └── styles/               ← Global CSS, Tailwind config overrides
├── public/                   ← Static assets (images, icons, og-image)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Phase Tracker

| Phase | Artifact                  | Status      | Description                                      |
|-------|---------------------------|-------------|--------------------------------------------------|
| 1     | `docs/PRD.md`             | ✅ Complete | Identity, positioning, IA, differentiators        |
| 2     | `docs/DESIGN.md`          | ✅ Complete | Tokens, typography, grid, animations, contracts   |
| 3     | `docs/IMPLEMENTATION.md`  | ✅ Complete | Component tree, build order, route map            |
| 4     | `src/`                    | ✅ Complete | Production Application Code (Next.js + Tailwind + Framer) |

---

## Rules for Agents

1. **Read `ORCHESTRATION.md` first** — understand the file map before touching anything.
2. **Never write application code** until Phase 3 is approved by the user.
3. **All planning docs live in `docs/`** — never scatter `.md` files in root.
4. **All source code lives in `src/`** — follow the component directory convention above.
5. **Update the Phase Tracker** in this file when completing a phase.
6. **Mobile-first, performance-first** — every component must work at 375px.
7. **Tech stack is locked**: Next.js (App Router), Tailwind CSS, Lucide Icons, Framer Motion.

---

## Brand Quick Reference

- **Name**: BayleafX
- **Tagline**: "Engineered for impact."
- **Aesthetic DNA**: Apple.com editorial precision × MetaMask.io dark-tech sophistication
- **Primary Palette**: Deep obsidian backgrounds, warm gold/amber accents, frosted glass panels
- **Typography**: Sharp geometric sans-serif (Inter/Outfit family), editorial weight contrast
