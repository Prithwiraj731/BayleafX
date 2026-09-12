'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Gauge, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { MetricCard } from '@/components/ui/metric-card';
import { METRICS } from '@/lib/constants';
import { staggerContainer, staggerChild } from '@/lib/animations';

const CASE_STUDY_METRICS = [
  { label: 'Edge P95 Latency', before: '1,840ms', after: '24ms', lift: '98.7% Faster' },
  { label: 'Cloud Egress Overhead', before: '$14.2k/mo', after: '$3.8k/mo', lift: '73% Saved' },
  { label: 'Session Conversion Rate', before: '2.1%', after: '4.8%', lift: '+128% Lift' },
];

export const MetricsSection: React.FC = () => {
  return (
    <section
      id="metrics"
      aria-label="Quantifiable Impact Metrics & Case Studies"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
    >
      {/* Background ambient bayleaf glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#2D6A4F]/[0.08] blur-[160px]" />

      <Container>
        <SectionHeader
          overline="03 // PERFORMANCE BENCHMARKS"
          title="Measured by Impact. Calibrated to Growth."
          description="Every system is benchmarked against conversion velocity, edge rendering speeds, and long-term architectural durability."
        />

        {/* 4-Column Audited KPI Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16"
        >
          {METRICS.map((metric) => (
            <motion.div key={metric.label} variants={staggerChild}>
              <MetricCard
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise Architectural Case Study Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#111714] via-[#0E1411] to-[#0A0E0C] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#2D6A4F]/10 blur-[90px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Case Study Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D6A4F]/40 bg-[#2D6A4F]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#52B788]">
                  <Gauge className="h-3 w-3" />
                  <span>Audited Case Study // Fintech Infrastructure</span>
                </span>
                <span className="font-mono text-xs text-[#6C7A70]">Series B Scale</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#F5F7F5] leading-tight">
                From Monolithic Bottlenecks to Sub-30ms Global Edge Routing
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                We re-engineered a mission-critical financial trading dashboard from a bloated, client-heavy single-page app into a distributed Next.js 15 edge topology with hardware-accelerated charting and zero-latency WebSocket pipelines.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#A3B18A]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#52B788]" />
                  Zero Downtime Migration
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#52B788]" />
                  SOC2 Compliant Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#52B788]" />
                  100% Core Web Vitals Pass
                </span>
              </div>
            </div>

            {/* Before vs After Benchmark Card */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#141E18]/80 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F5F7F5] font-semibold">
                  Audited Production Deltas
                </span>
                <TrendingUp className="h-4 w-4 text-[#52B788]" />
              </div>

              <div className="space-y-4">
                {CASE_STUDY_METRICS.map((benchmark) => (
                  <div key={benchmark.label} className="flex flex-col space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#9CA3AF]">{benchmark.label}</span>
                      <span className="font-mono text-[11px] font-bold text-[#52B788]">
                        {benchmark.lift}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-[#6C7A70] line-through">{benchmark.before}</span>
                      <span className="text-white/40">&rarr;</span>
                      <span className="text-[#F5F7F5] font-semibold">{benchmark.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  className="group flex items-center justify-between text-xs font-mono text-[#52B788] hover:text-white transition-colors"
                >
                  <span>Request Full Architecture Audit</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
