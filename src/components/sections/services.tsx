'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Layers,
  GitBranch,
  Plug,
  Cloud,
  Compass,
  MousePointerClick,
  Palette,
  Sparkles,
  Eye,
  TrendingUp,
  Target,
  Share2,
  PenTool,
  BarChart3,
  Globe,
  LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { ServiceCard } from '@/components/ui/service-card';
import { SERVICE_PILLARS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Layers,
  GitBranch,
  Plug,
  Cloud,
  Compass,
  MousePointerClick,
  Palette,
  Sparkles,
  Eye,
  TrendingUp,
  Target,
  Share2,
  PenTool,
  BarChart3,
  Globe,
};

export const ServicesSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('All');
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll tracking: Starts when Services section approaches viewport from Hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'start -0.35'],
  });

  // Slow, smooth side-by-side sliding of the two full-width doors
  const leftDoorX = useTransform(scrollYProgress, [0.15, 0.82], ['0%', '-105%']);
  const rightDoorX = useTransform(scrollYProgress, [0.15, 0.82], ['0%', '105%']);

  // Center vertical seam laser glow
  const seamOpacity = useTransform(scrollYProgress, [0.12, 0.35], [1, 0]);

  // Text on doors remains fully visible while doors are closed, then gently fades as doors slide off-screen
  const doorTextOpacity = useTransform(scrollYProgress, [0.15, 0.72], [1, 0]);

  const filterOptions = ['All', ...SERVICE_PILLARS.map((p) => p.name)];

  const displayedServices =
    activePillar === 'All'
      ? SERVICE_PILLARS.flatMap((p) =>
          p.services.map((s) => ({ ...s, pillarName: p.name }))
        )
      : (
          SERVICE_PILLARS.find((p) => p.name === activePillar)?.services || []
        ).map((s) => ({ ...s, pillarName: activePillar }));

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-label="Scope of Services"
      className="relative w-full py-20 md:py-28 bg-[#0B0E0C] overflow-hidden"
    >
      {/* ─────────────────────────────────────────────────────────────
          DOUBLE DOOR REVEAL OVERLAY
          Left Door carries "WELCOME TO" to the left
          Right Door carries "BAYLEAFX" to the right
          Slowly parts side by side without tampering with the section
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Left Door (Slides Left carrying "WELCOME TO") */}
        <motion.div
          style={{ x: leftDoorX }}
          className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-[#0B0E0C] border-r border-white/[0.08] shadow-[20px_0_60px_rgba(0,0,0,0.98)] pointer-events-none flex flex-col justify-start items-end"
        >
          {/* Seam bayleaf line on right edge */}
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#2D6A4F]/70 to-transparent" />

          {/* "WELCOME TO" on Left Door */}
          <motion.div
            style={{ opacity: doorTextOpacity }}
            className="absolute top-28 sm:top-36 md:top-44 right-0 pr-2 sm:pr-3 md:pr-4 flex items-center justify-end select-none pointer-events-none"
          >
            <span className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F5F7F5] whitespace-nowrap leading-none">
              WELCOME TO
            </span>
          </motion.div>
        </motion.div>

        {/* Right Door (Slides Right carrying "BAYLEAFX") */}
        <motion.div
          style={{ x: rightDoorX }}
          className="absolute top-0 bottom-0 right-0 w-[50.5%] bg-[#0B0E0C] border-l border-white/[0.08] shadow-[-20px_0_60px_rgba(0,0,0,0.98)] pointer-events-none flex flex-col justify-start items-start"
        >
          {/* Seam bayleaf line on left edge */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#2D6A4F]/70 to-transparent" />

          {/* "BAYLEAFX" on Right Door */}
          <motion.div
            style={{ opacity: doorTextOpacity }}
            className="absolute top-28 sm:top-36 md:top-44 left-0 pl-2 sm:pl-3 md:pl-4 flex items-center justify-start select-none pointer-events-none"
          >
            <span className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F5F7F5] whitespace-nowrap leading-none">
              BAYLEAF
            </span>
            <span className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#52B788] ml-1 sm:ml-2 inline-block drop-shadow-[0_0_24px_rgba(82,183,136,0.5)] leading-none">
              X
            </span>
          </motion.div>
        </motion.div>

        {/* Center Seam Bayleaf Green Glow (when doors meet) */}
        <motion.div
          style={{ opacity: seamOpacity }}
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-25 flex items-center justify-center"
        >
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#52B788] to-transparent shadow-[0_0_16px_rgba(82,183,136,0.6)]" />
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          STANDARD SERVICES CONTENT (Completely untampered)
          Heading, Filter Tabs, and 15 Bento Service Cards
          ───────────────────────────────────────────────────────────── */}
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="mb-3.5 flex items-center gap-2.5 justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/15 border border-[#2D6A4F]/30 font-mono text-[11px] font-semibold tracking-[0.22em] uppercase text-[#52B788]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52B788]" />
              01 // CAPABILITIES
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#F5F7F5] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            Engineered from Infrastructure to Interface.
          </h2>

          <p className="mt-4 font-body text-sm md:text-base leading-relaxed text-[#9CA3AF] mx-auto max-w-2xl">
            Fifteen specialized capabilities spanning systems engineering, haute-couture interface design, and data-driven market velocity.
          </p>

          {/* Pillar Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((option) => {
              const isSelected = activePillar === option;
              return (
                <button
                  key={option}
                  onClick={() => setActivePillar(option)}
                  className={`relative px-5 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-[6px] cursor-pointer ${
                    isSelected
                      ? 'text-white font-bold bg-[#2D6A4F] shadow-[0_0_20px_rgba(45,106,79,0.4)] border border-[#40916C]'
                      : 'text-[#9CA3AF] hover:text-white bg-[#131A16] hover:bg-[#18231D] border border-white/[0.08]'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid of 15 Services */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;

              return (
                <motion.div
                  key={`${service.pillarName}-${service.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                >
                  <ServiceCard
                    icon={IconComponent}
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
