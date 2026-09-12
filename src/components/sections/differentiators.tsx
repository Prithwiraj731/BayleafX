'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { DIFFERENTIATORS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section
      id="differentiators"
      aria-label="Value Differentiators & Strategic Contrast"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0A0E0C]"
    >
      {/* Background Subtle Bayleaf Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-[#2D6A4F]/[0.07] blur-[160px]" />

      <Container className="relative z-10">
        <SectionHeader
          overline="02 // THE CONTRAST"
          title="Direct Contrast. Zero Ambiguity."
          description="We eliminated standard agency bloat. No account managers playing telephone, no reskinned templates, and zero outsourced development."
        />

        {/* Corporate Comparison Matrix */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto max-w-5xl"
        >
          {/* Header Row */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 pb-4 mb-4 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-[#6C7A70]">
            <div className="md:col-span-3">Strategic Dimension</div>
            <div className="md:col-span-4 text-[#8E8B85]">Standard Agency Model</div>
            <div className="md:col-span-5 text-[#52B788] font-bold flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The BayleafX Standard</span>
            </div>
          </div>

          {/* Dimension Comparison Cards */}
          <div className="space-y-3.5">
            {DIFFERENTIATORS.map((item, index) => (
              <motion.div
                key={item.dimension}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-5 md:p-6 transition-all duration-300 hover:border-[#2D6A4F]/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_24px_rgba(45,106,79,0.12)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                  {/* Dimension Title */}
                  <div className="md:col-span-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#52B788] block md:hidden mb-1">
                      Pillar 0{index + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm md:text-base text-[#F5F7F5]">
                      {item.dimension}
                    </h4>
                  </div>

                  {/* Standard Agency Model */}
                  <div className="md:col-span-4 flex items-start gap-2.5 text-xs md:text-sm text-[#737F76] bg-black/20 md:bg-transparent p-3 md:p-0 rounded-lg">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-[#6C7A70]">
                      <X className="h-2.5 w-2.5" />
                    </div>
                    <span className="line-through decoration-white/20">
                      {item.others}
                    </span>
                  </div>

                  {/* The BayleafX Standard */}
                  <div className="md:col-span-5 flex items-start gap-3 text-xs md:text-sm font-medium text-white md:border-l md:border-white/10 md:pl-6 bg-[#16221B]/40 md:bg-transparent p-3 md:p-0 rounded-lg border border-[#2D6A4F]/30 md:border-0">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/60 border border-[#2D6A4F]/60 text-[#52B788] shadow-[0_0_10px_rgba(45,106,79,0.3)]">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[#F5F7F5] group-hover:text-white transition-colors">
                      {item.ours}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Enterprise Reassurance Banner */}
          <div className="mt-10 rounded-xl border border-[#2D6A4F]/30 bg-gradient-to-r from-[#16221B] via-[#111714] to-[#16221B] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B4332] text-[#52B788]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-display text-sm font-bold text-[#F5F7F5]">
                  Zero Outsourcing Guarantee
                </h5>
                <p className="font-body text-xs text-[#9CA3AF]">
                  Every architectural blueprint, component token, and cloud deployment is executed in-house.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Award className="h-4 w-4 text-[#52B788]" />
              <span className="font-mono text-xs text-[#52B788] font-semibold uppercase tracking-wider">
                Full IP Assignment
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
