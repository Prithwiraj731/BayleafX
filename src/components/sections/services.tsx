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

  // Scroll tracking: As soon as user begins scrolling down from Hero into Services
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 0.1'],
  });

  // Smooth side-by-side sliding of the two full-width doors
  const leftDoorX = useTransform(scrollYProgress, [0.05, 0.75], ['0%', '-105%']);
  const rightDoorX = useTransform(scrollYProgress, [0.05, 0.75], ['0%', '105%']);

  // "WELCOME TO BAYLEAFX" fades out cleanly before doors open wide (preventing any overlap)
  const textOpacity = useTransform(scrollYProgress, [0.03, 0.22], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0.03, 0.22], [1, 0.95]);

  // Center vertical seam laser glow fades out early
  const seamOpacity = useTransform(scrollYProgress, [0.03, 0.2], [1, 0]);

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
      className="relative w-full py-20 md:py-28 bg-[#0B0B0B] overflow-hidden"
    >
      {/* ─────────────────────────────────────────────────────────────
          DOUBLE DOOR REVEAL OVERLAY (Smooth side-by-side parting)
          Strictly ONLY "WELCOME TO BAYLEAFX" - no extra words or telemetry
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Left Door (Slides Left) */}
        <motion.div
          style={{ x: leftDoorX }}
          className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-[#0B0B0B] border-r border-white/[0.08] shadow-[20px_0_50px_rgba(0,0,0,0.98)]"
        >
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B0D1A]/50 to-transparent" />
        </motion.div>

        {/* Right Door (Slides Right) */}
        <motion.div
          style={{ x: rightDoorX }}
          className="absolute top-0 bottom-0 right-0 w-[50.5%] bg-[#0B0B0B] border-l border-white/[0.08] shadow-[-20px_0_50px_rgba(0,0,0,0.98)]"
        >
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B0D1A]/50 to-transparent" />
        </motion.div>

        {/* Center Seam Red Laser Glow */}
        <motion.div
          style={{ opacity: seamOpacity }}
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-25 flex items-center justify-center"
        >
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#E50914] to-transparent shadow-[0_0_16px_#E50914]" />
        </motion.div>

        {/* ONLY "WELCOME TO BAYLEAFX" */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
          className="absolute top-24 sm:top-28 md:top-36 inset-x-0 z-30 flex items-center justify-center pointer-events-none px-4"
        >
          <h2 className="font-display text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F5F2ED] text-center select-none leading-[1.05]">
            <span>WELCOME TO </span>
            <span className="text-[#F5F2ED]">BAYLEAF</span>
            <span className="text-[#E50914] ml-1 sm:ml-2 inline-block drop-shadow-[0_0_24px_rgba(229,9,20,0.65)]">
              X
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          STANDARD SERVICES CONTENT (Normal layout without delay or gaps)
          Heading, Filter Tabs, and 15 Bento Service Cards
          ───────────────────────────────────────────────────────────── */}
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="mb-3.5 flex items-center gap-2.5 justify-center">
            <span className="font-mono text-[11px] font-semibold tracking-[0.24em] uppercase text-[#8B0D1A]">
              01 // CAPABILITIES
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#F5F2ED] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            Engineered from Infrastructure to Interface.
          </h2>

          <p className="mt-4 font-body text-sm md:text-base leading-relaxed text-[#9E9B95] mx-auto max-w-2xl">
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
                      ? 'text-[#F5F2ED] font-bold bg-[#8B0D1A] shadow-[0_0_24px_rgba(139,13,26,0.45)] border border-[#8B0D1A]'
                      : 'text-[#9E9B95] hover:text-white bg-[#141414] hover:bg-[#1A1A1A] border border-white/[0.08]'
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
