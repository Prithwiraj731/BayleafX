'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { MetricCard } from '@/components/ui/metric-card';
import { METRICS } from '@/lib/constants';
import { staggerContainer, staggerChild } from '@/lib/animations';

export const MetricsSection: React.FC = () => {
  return (
    <section
      id="metrics"
      aria-label="Quantifiable Impact Metrics"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
    >
      {/* Background ambient bayleaf */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#2D6A4F]/[0.08] blur-[140px]" />

      <Container>
        <SectionHeader
          overline="03 // PERFORMANCE BENCHMARKS"
          title="Measured by Impact. Calibrated to Growth."
          description="Every system is benchmarked against conversion velocity, edge rendering speeds, and long-term architectural durability."
        />

        {/* 4-Column Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
      </Container>
    </section>
  );
};
