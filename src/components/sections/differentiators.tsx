'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { DIFFERENTIATORS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section
      id="differentiators"
      aria-label="Value Differentiators"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
    >
      <Container>
        <SectionHeader
          overline="02 // THE CONTRAST"
          title="Direct Contrast. Zero Ambiguity."
          description="We eliminated standard agency bloat. No account managers playing telephone, no reskinned templates, and zero outsourced development."
        />

        {/* Comparison Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto max-w-5xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 mb-4 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-[#6C7A70]">
            <div className="hidden md:block md:col-span-3">Pillar</div>
            <div className="hidden md:block md:col-span-4 text-[#6C7A70]">
              Standard Agency Model
            </div>
            <div className="hidden md:block md:col-span-5 text-[#52B788] font-bold">
              The BayleafX Standard
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {DIFFERENTIATORS.map((item, index) => (
              <motion.div
                key={item.dimension}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-lg border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-5 md:p-6 transition-all duration-300 hover:border-[#2D6A4F]/60 hover:bg-[#141C17] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                  {/* Dimension Title */}
                  <div className="md:col-span-3">
                    <span className="font-display font-bold text-sm md:text-base text-[#F5F7F5]">
                      {item.dimension}
                    </span>
                  </div>

                  {/* Other Agencies */}
                  <div className="md:col-span-4 flex items-start gap-2.5 text-[#6C7A70] text-xs md:text-sm">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-[#6C7A70]">
                      <X className="h-2.5 w-2.5" />
                    </div>
                    <span className="line-through decoration-white/20">
                      {item.others}
                    </span>
                  </div>

                  {/* BayleafX */}
                  <div className="md:col-span-5 flex items-start gap-2.5 text-xs md:text-sm font-medium text-white md:border-l md:border-white/10 md:pl-5">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/40 border border-[#2D6A4F]/50 text-[#52B788] shadow-[0_0_12px_rgba(45,106,79,0.25)]">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#F5F7F5] group-hover:text-white transition-colors duration-200">
                      {item.ours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
