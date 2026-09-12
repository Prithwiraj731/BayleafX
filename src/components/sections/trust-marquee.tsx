'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Activity, Globe2 } from 'lucide-react';
import { Container } from '@/components/layout/container';

const ECOSYSTEM_SECTORS = [
  {
    name: 'Enterprise FinTech',
    badge: 'Real-Time Ledgers & Payment Gateways',
    metric: 'Sub-15ms Latency',
    icon: Database,
  },
  {
    name: 'Clinical & Health Systems',
    badge: 'HIPAA-Aware Telemetry Architectures',
    metric: '99.999% Fault Tolerance',
    icon: Activity,
  },
  {
    name: 'Autonomous AI & Neural Layers',
    badge: 'Production RAG & Model Inference Pipelines',
    metric: 'Hardware Accelerated',
    icon: Cpu,
  },
  {
    name: 'Global SaaS & Cloud Mesh',
    badge: 'Multi-Region Edge Topology',
    metric: '10M+ Daily Requests',
    icon: Globe2,
  },
];

const TRUST_PILLARS = [
  {
    title: 'Zero Subcontracting Guarantee',
    desc: 'Every architecture is designed, coded, and benchmarked by senior software engineers in-house.',
  },
  {
    title: 'Enterprise Security by Design',
    desc: 'Strict end-to-end encryption, automated dependency scanning, and zero client tracking.',
  },
  {
    title: 'Uncompromised IP Ownership',
    desc: 'You own 100% of your source code, design tokens, infrastructure scripts, and documentation.',
  },
];

export const TrustMarqueeSection: React.FC = () => {
  return (
    <section
      aria-label="Enterprise Trust & Industry Ecosystem"
      className="relative w-full border-y border-white/[0.08] bg-[#0A0E0C] py-14 md:py-20 overflow-hidden"
    >
      {/* Background Subtle Bayleaf Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[600px] rounded-full bg-[#2D6A4F]/[0.08] blur-[120px]" />

      <Container className="relative z-10">
        {/* Top Header Tag */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D6A4F]/30 bg-[#2D6A4F]/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-[#52B788] mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-[#52B788]" />
            <span>Enterprise Standards & Industry Verticals</span>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#9CA3AF] max-w-xl">
            Architecting mission-critical software systems across high-velocity sectors where downtime and latency are unacceptable.
          </p>
        </div>

        {/* 4 Industry Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
          {ECOSYSTEM_SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-5 transition-all duration-300 hover:border-[#2D6A4F]/50 hover:bg-[#141C17] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(45,106,79,0.12)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2D6A4F]/30 bg-[#16221B] text-[#52B788] transition-colors group-hover:border-[#2D6A4F]/60 group-hover:bg-[#1B4332]/40">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-[#52B788] bg-[#2D6A4F]/15 px-2 py-0.5 rounded-full border border-[#2D6A4F]/25">
                    {sector.metric}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-[#F5F7F5] mb-1 group-hover:text-white transition-colors">
                  {sector.name}
                </h3>
                <p className="font-body text-xs text-[#9CA3AF] leading-relaxed">
                  {sector.badge}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Executive Trust Pillars Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
          {TRUST_PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-start space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52B788]" />
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F5F7F5]">
                  {pillar.title}
                </h4>
              </div>
              <p className="font-body text-xs text-[#6C7A70] leading-relaxed pl-3.5">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
