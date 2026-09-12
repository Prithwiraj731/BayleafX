'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Layers,
  Globe,
  Plug,
  Compass,
  MousePointerClick,
  Palette,
  Eye,
  TrendingUp,
  Target,
  Share2,
  PenTool,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LucideIcon,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { SERVICE_PILLARS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Layers,
  Globe,
  Plug,
  Compass,
  MousePointerClick,
  Palette,
  Eye,
  TrendingUp,
  Target,
  Share2,
  PenTool,
  BarChart3,
};

const PILLAR_META: Record<
  string,
  {
    tagline: string;
    description: string;
    outcomes: string[];
    techStack: string[];
    slaBadge: string;
  }
> = {
  'Core Development': {
    tagline: 'High-Throughput Web & Full-Stack Systems',
    description:
      'We engineer production-grade platforms with clean component architecture, resilient database topologies, and edge SSR capabilities that eliminate technical debt before it forms.',
    outcomes: [
      'Sub-500ms Edge First Contentful Paint',
      'Zero-Downtime Deployment Workflows',
      'Bulletproof Identity & Payment Lifecycles',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    slaBadge: '99.99% Edge SLA Standard',
  },
  'UI/UX Engineering': {
    tagline: 'Haute-Couture Interface Design & Design Systems',
    description:
      'We combine Apple-grade typography and hardware-accelerated motion with tokenized design systems, ensuring cohesive brand prestige across web and mobile surfaces.',
    outcomes: [
      'WCAG 2.2 AA Verified Accessibility',
      'Figma-to-Code Token Synchronization',
      'Tactile 60FPS Micro-Interactions',
    ],
    techStack: ['Figma Tokens', 'Framer Motion', 'Radix Primitives', 'Design Tokens', 'Storybook'],
    slaBadge: 'Haute-Couture Craft Guarantee',
  },
  'Growth & Reach': {
    tagline: 'Attribution Modeling & Full-Funnel Velocity',
    description:
      'We eliminate guesswork through technical SEO architecture, Generative Engine Optimization (GEO), and conversion rate experiments calibrated directly to Customer Acquisition Cost.',
    outcomes: [
      'Avg. 40% Verified Conversion Lift',
      'Generative AI Search Indexation (GEO)',
      'Telemetry Attribution Pipelines',
    ],
    techStack: ['PostHog', 'Telemetry Pipelines', 'GEO Schema', 'Multivariate CRO', 'Edge Analytics'],
    slaBadge: 'Measurable ROI Calibration',
  },
};

export const ServicesSection: React.FC = () => {
  const [activePillarName, setActivePillarName] = useState<string>('Core Development');
  const [viewAll, setViewAll] = useState<boolean>(false);

  const activePillar =
    SERVICE_PILLARS.find((p) => p.name === activePillarName) || SERVICE_PILLARS[0];
  const meta = PILLAR_META[activePillarName] || PILLAR_META['Core Development'];

  return (
    <section
      id="services"
      aria-label="Enterprise Solutions & Capabilities"
      className="relative w-full py-24 md:py-36 bg-[#0B0E0C] overflow-hidden"
    >
      {/* Ambient Bayleaf Depth */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-[#2D6A4F]/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[450px] w-[450px] rounded-full bg-[#1B4332]/[0.08] blur-[150px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          overline="01 // CAPABILITIES"
          title="Engineered from Infrastructure to Interface."
          description="Fifteen specialized capabilities spanning systems engineering, haute-couture interface design, and data-driven market velocity."
        />

        {/* 3-Pillar Corporate Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const isSelected = activePillarName === pillar.name;
            return (
              <button
                key={pillar.name}
                onClick={() => {
                  setActivePillarName(pillar.name);
                  setViewAll(false);
                }}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2D6A4F] text-white font-bold shadow-[0_0_24px_rgba(45,106,79,0.4)] border border-[#40916C]'
                    : 'bg-[#121815] text-[#9CA3AF] hover:text-[#F5F7F5] hover:bg-[#16201B] border border-white/[0.08]'
                }`}
              >
                <span className={`text-[10px] font-bold ${isSelected ? 'text-[#A3B18A]' : 'text-[#6C7A70]'}`}>
                  0{idx + 1}
                </span>
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Pillar Showcase Deck */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillarName}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Strategic Overview Card */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#121815] to-[#0D120F] p-8 md:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-[#2D6A4F]/10 blur-[60px]" />

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2D6A4F]/40 bg-[#2D6A4F]/15 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#52B788] mb-4">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{meta.slaBadge}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#F5F7F5] leading-tight mb-3">
                  {meta.tagline}
                </h3>

                <p className="font-body text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {meta.description}
                </p>

                {/* Key Business Outcomes */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06] mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F7F5] font-semibold block">
                    Enterprise Deliverables & Outcomes
                  </span>
                  {meta.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                      <CheckCircle2 className="h-4 w-4 text-[#52B788] shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {meta.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.06] bg-[#16201B] px-2.5 py-1 text-[10px] font-mono text-[#A3B18A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#52B788] hover:text-white transition-colors group"
                >
                  <span>Initiate Consultation in {activePillarName}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Pillar Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {activePillar.services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Sparkles;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0E1210] p-6 transition-all duration-300 hover:border-[#2D6A4F]/60 hover:bg-[#141C17] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(45,106,79,0.15)]"
                  >
                    <div>
                      {/* Icon Badge */}
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#2D6A4F]/30 bg-[#16221B] text-[#52B788] transition-colors group-hover:border-[#2D6A4F]/60 group-hover:bg-[#1B4332]/40">
                        <IconComponent className="h-5 w-5 stroke-[1.5]" />
                      </div>

                      <h4 className="font-display text-lg font-bold text-[#F5F7F5] mb-2 group-hover:text-white transition-colors">
                        {service.title}
                      </h4>

                      <p className="font-body text-xs text-[#9CA3AF] leading-relaxed mb-4">
                        {service.subtitle}
                      </p>
                    </div>

                    {service.description && (
                      <p className="font-body text-[11px] text-[#6C7A70] leading-relaxed pt-3 border-t border-white/[0.06] group-hover:text-[#8E9B93] transition-colors">
                        {service.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Capabilities Directory Toggle */}
        <div className="mt-14 pt-10 border-t border-white/[0.06] text-center">
          <button
            onClick={() => setViewAll(!viewAll)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121815] px-6 py-2.5 text-xs font-mono tracking-wider uppercase text-[#9CA3AF] hover:border-[#2D6A4F] hover:text-white transition-all cursor-pointer"
          >
            <span>{viewAll ? 'Collapse Enterprise Directory' : 'Explore Complete 15-Capability Architecture'}</span>
            <Zap className="h-3.5 w-3.5 text-[#52B788]" />
          </button>

          {/* Full Grid of All 15 Capabilities */}
          {viewAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left"
            >
              {SERVICE_PILLARS.flatMap((p) =>
                p.services.map((s) => {
                  const Icon = iconMap[s.icon] || Sparkles;
                  return (
                    <div
                      key={s.title}
                      className="rounded-xl border border-white/[0.08] bg-[#111714]/80 p-5 hover:border-[#2D6A4F]/50 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16221B] text-[#52B788]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#52B788] block">
                            {p.name}
                          </span>
                          <h5 className="font-display text-sm font-bold text-[#F5F7F5]">
                            {s.title}
                          </h5>
                        </div>
                      </div>
                      <p className="font-body text-xs text-[#9CA3AF] leading-relaxed">
                        {s.subtitle}
                      </p>
                    </div>
                  );
                })
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
