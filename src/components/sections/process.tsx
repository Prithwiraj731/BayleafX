'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { ProcessStep } from '@/components/ui/process-step';
import { PROCESS_STEPS } from '@/lib/constants';
import { staggerContainer, staggerChild } from '@/lib/animations';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      aria-label="Development Process"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
    >
      <Container>
        <SectionHeader
          overline="04 // EXECUTION FRAMEWORK"
          title="From First Principles to Edge Deployment."
          description="A structured engineering cadence replacing arbitrary guesswork with predictable deployment milestones."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerChild}
              className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#2D6A4F]/60 hover:bg-[#141C17] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(45,106,79,0.15)]"
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
