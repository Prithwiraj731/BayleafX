'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { SectionHeader } from '@/components/layout/section-header';
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
      aria-label="Scope of Services"
      className="relative w-full py-24 md:py-36 overflow-hidden bg-[#0B0B0B]"
    >
      <Container>
        <SectionHeader
          overline="01 // CAPABILITIES"
          title="Engineered from Infrastructure to Interface."
          description="Fifteen specialized capabilities spanning systems engineering, haute-couture interface design, and data-driven market velocity."
        />

        {/* Pillar Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
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

        {/* Bento Grid layout */}
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
