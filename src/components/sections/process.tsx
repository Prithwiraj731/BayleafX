'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { PROCESS_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const STEP_CADENCES = [
  'Phase 1 // Week 1',
  'Phase 2 // Weeks 2–3',
  'Phase 3 // Weeks 3–4',
  'Phase 4 // Week 5+',
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="How we work with you."
          description="A simple, transparent 4-step process from your first conversation to a successful launch."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {PROCESS_STEPS.map((step, idx) => {
            const stepNum = String(step.number).padStart(2, '0');
            const cadence = STEP_CADENCES[idx] || 'Sprint Phase';

            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="bl-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#2D6A4F]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#E8F5E9] text-[#1B4332] font-mono text-xs font-bold">
                      Step {stepNum}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      {cadence}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 font-body text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B4332]">
                  <span>Milestone Verified</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
