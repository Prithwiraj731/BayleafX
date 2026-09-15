'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { DIFFERENTIATORS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section id="differentiators" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Why ambitious teams choose BayleafX."
          description="We eliminated traditional agency bureaucracy, junior handoffs, and fragmented subcontractors."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        >
          <div className="hidden md:grid md:grid-cols-12 border-b border-slate-200 bg-slate-50/80 font-mono text-[11px] uppercase tracking-wider font-semibold">
            <div className="md:col-span-4 p-4 text-slate-500">Dimension</div>
            <div className="md:col-span-4 p-4 text-slate-400">Traditional Agency</div>
            <div className="md:col-span-4 p-4 bg-[#E8F5E9]/70 text-[#1B4332] flex items-center gap-1.5 border-l border-slate-200/80">
              <Sparkles className="h-3.5 w-3.5 text-[#2D6A4F]" />
              <span>The BayleafX Standard</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.dimension}
                className="grid grid-cols-1 md:grid-cols-12 text-sm md:items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="md:col-span-4 p-4 sm:p-5 font-body font-semibold text-slate-900">
                  {item.dimension}
                </div>

                <div className="md:col-span-4 px-4 pb-2 md:p-5 text-slate-500 flex items-start gap-2 text-xs sm:text-sm">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <X className="h-3 w-3" />
                  </div>
                  <span>{item.others}</span>
                </div>

                <div className="md:col-span-4 px-4 pb-4 md:p-5 md:border-l md:border-slate-100 bg-emerald-50/20 text-slate-900 font-medium flex items-start gap-2 text-xs sm:text-sm">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#2D6A4F]">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{item.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
