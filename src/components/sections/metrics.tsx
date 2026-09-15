'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { MetricCard } from '@/components/ui/metric-card';
import { METRICS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-b border-slate-200/80">
      <Container>
        <SectionHeader
          title="Proven by audited metrics."
          description="Real benchmark improvements achieved across production web platforms and enterprise partnerships."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto"
        >
          {METRICS.map((metric) => (
            <motion.div key={metric.label} variants={fadeInUp}>
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
