'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { PROCESS_STEPS } from '@/lib/constants';
import { staggerContainer, staggerChild } from '@/lib/animations';

const PHASE_DETAILS: Record<
  number,
  {
    cadence: string;
    deliverables: string[];
    gateCheckpoint: string;
  }
> = {
  1: {
    cadence: 'Days 1–5 // Sprint 0',
    deliverables: ['Technical Architecture Blueprint', 'Database & API Schema Matrix', 'Core Constraint Risk Audit'],
    gateCheckpoint: 'Architecture Sign-Off Gate',
  },
  2: {
    cadence: 'Weeks 2–3 // Design Sprint',
    deliverables: ['Tokenized Component Library', '60FPS Clickable Prototypes', 'WCAG 2.2 AA Contrast Audit'],
    gateCheckpoint: 'Interactive Prototype Approval',
  },
  3: {
    cadence: 'Weeks 3–5 // Code Sprint',
    deliverables: ['Modular Next.js / TypeScript Core', 'Hardware Accelerated Motion', 'Automated CI/CD & Unit Tests'],
    gateCheckpoint: 'Staging & Security Audit',
  },
  4: {
    cadence: 'Week 6+ // Production Go-Live',
    deliverables: ['Global Edge CDN Warmup', 'Telemetry & CRO Pipelines', 'Zero-Downtime DNS Cutover'],
    gateCheckpoint: 'Production SLA Handover',
  },
};

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      aria-label="Engineering Lifecycle & Execution Framework"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0A0E0C]"
    >
      {/* Background Subtle Bayleaf Glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-10 -translate-x-1/2 h-[380px] w-[600px] rounded-full bg-[#2D6A4F]/[0.06] blur-[150px]" />

      <Container>
        <SectionHeader
          overline="04 // EXECUTION FRAMEWORK"
          title="From First Principles to Edge Deployment."
          description="A structured engineering cadence replacing arbitrary guesswork with predictable deployment milestones."
        />

        {/* 4-Phase Chronological Engineering Pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {PROCESS_STEPS.map((step, index) => {
            const details = PHASE_DETAILS[step.number];
            return (
              <motion.div
                key={step.number}
                variants={staggerChild}
                className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#2D6A4F]/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(45,106,79,0.15)]"
              >
                <div>
                  {/* Top Phase Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2D6A4F]/50 bg-[#1B4332]/40 font-mono text-xs font-bold text-[#52B788] shadow-[0_0_12px_rgba(45,106,79,0.25)]">
                      0{step.number}
                    </div>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-[#A3B18A] bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                      <Clock className="h-3 w-3 text-[#52B788]" />
                      {details.cadence}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#F5F7F5] mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs text-[#9CA3AF] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7A70] block font-semibold">
                      Key Deliverables
                    </span>
                    {details.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[11px] text-[#D0CDC8] leading-tight">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#52B788] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gate Checkpoint Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#52B788]">
                  <span className="truncate">{details.gateCheckpoint}</span>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-white/30 shrink-0 hidden lg:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
