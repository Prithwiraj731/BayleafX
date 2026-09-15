'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Palette, TrendingUp, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { SERVICE_PILLARS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PILLAR_ICONS = [Monitor, Palette, TrendingUp];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-b border-slate-200/80">
      <Container>
        <SectionHeader
          overline="Services Suite"
          title="Engineered for scale &amp; precision."
          description="Three integrated disciplines covering the entire software lifecycle from architecture to global market growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICE_PILLARS.map((pillar, pillarIdx) => {
            const pillarNum = String(pillarIdx + 1).padStart(2, '0');
            const Icon = PILLAR_ICONS[pillarIdx] || Monitor;

            return (
              <motion.div
                key={pillar.name}
                variants={fadeInUp}
                className="bl-card p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#2D6A4F]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#1B4332]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1B4332]">
                        {pillar.name}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-400">
                      {pillarNum}
                    </span>
                  </div>

                  <div className="my-5 border-b border-slate-100" />

                  <div className="space-y-5">
                    {pillar.services.map((service) => (
                      <div key={service.title} className="group/item">
                        <div className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-body text-[15px] font-semibold text-slate-900 group-hover/item:text-[#1B4332] transition-colors">
                              {service.title}
                            </h3>
                            <p className="mt-1 font-body text-xs sm:text-[13px] leading-relaxed text-slate-500">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B4332] group-hover:text-[#2D6A4F]">
                  <span>Explore capabilities</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
