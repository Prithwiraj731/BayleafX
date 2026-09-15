'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { TESTIMONIALS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-b border-slate-200/80">
      <Container>
        <SectionHeader
          overline="Client Endorsements"
          title="Validated by industry leaders."
          description="What technical founders and product executives say about partnering with BayleafX."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {TESTIMONIALS.map((item) => {
            const initials = item.author
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <motion.div
                key={item.author}
                variants={fadeInUp}
                className="bl-card p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#2D6A4F]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body text-slate-700 text-sm sm:text-[15px] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] font-sans text-xs font-bold text-[#1B4332]">
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-bold text-slate-900">
                      {item.author}
                    </h4>
                    <p className="font-body text-xs text-slate-500">
                      {item.title} &middot;{' '}
                      <span className="font-medium text-slate-700">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
