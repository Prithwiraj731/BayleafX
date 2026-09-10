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
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0B0B]"
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
              className="rounded-xl border border-white/[0.08] bg-[#121212] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8B0D1A]/50 hover:bg-[#161616]"
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
