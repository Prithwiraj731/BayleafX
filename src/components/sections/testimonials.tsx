'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { TESTIMONIALS } from '@/lib/constants';
import { staggerContainer, staggerChild } from '@/lib/animations';

const TESTIMONIAL_META: Record<
  string,
  {
    verifiedBadge: string;
    outcomeMetric: string;
    companyScale: string;
  }
> = {
  'Sarah Chen': {
    verifiedBadge: 'Verified Enterprise Client',
    outcomeMetric: 'Platform Scaled 4x with Zero Downtime',
    companyScale: 'AI & Neural Systems // Series B',
  },
  'Marcus Rivera': {
    verifiedBadge: 'Verified Executive Partner',
    outcomeMetric: 'Shipped in 4 Weeks vs 4 Months Estimate',
    companyScale: 'Cloud Architecture // High-Growth',
  },
  'Priya Kapoor': {
    verifiedBadge: 'Verified Enterprise Client',
    outcomeMetric: '42% Higher Stakeholder Engagement',
    companyScale: 'Global Digital Experience // Enterprise',
  },
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="Executive Testimonials & Social Proof"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
    >
      {/* Background Subtle Bayleaf Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#2D6A4F]/[0.07] blur-[160px]" />

      <Container className="relative z-10">
        <SectionHeader
          overline="05 // PARTNERS & ENDORSEMENTS"
          title="Endorsed by Technical Founders & Leaders."
          description="We measure our success by multi-year retention, zero-downtime deployments, and the market valuation our engineering unlocks."
        />

        {/* 3-Column Executive Endorsement Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => {
            const meta =
              TESTIMONIAL_META[testimonial.author] || {
                verifiedBadge: 'Verified Client',
                outcomeMetric: 'Delivered On-Time & On-Budget',
                companyScale: 'Enterprise Scale',
              };

            return (
              <motion.div
                key={testimonial.author}
                variants={staggerChild}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#121815] to-[#0D120F] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#2D6A4F]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(45,106,79,0.18)] relative overflow-hidden"
              >
                {/* Decorative Quotation Symbol */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 right-4 font-display text-8xl font-light text-[#2D6A4F]/20 select-none"
                >
                  &ldquo;
                </span>

                <div>
                  {/* Top Rating & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-1 text-[#52B788]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#52B788]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#2D6A4F]/30 bg-[#2D6A4F]/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#52B788]">
                      <ShieldCheck className="h-3 w-3" />
                      {meta.verifiedBadge}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="font-display text-base md:text-lg font-light leading-relaxed text-[#F5F7F5] italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Outcome Metric Tag & Author Bio */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="mb-4 rounded-lg bg-[#16221B]/60 border border-[#2D6A4F]/25 px-3 py-1.5 flex items-center gap-2">
                    <Sparkles className="h-3 w-3 text-[#52B788] shrink-0" />
                    <span className="font-mono text-[10px] text-[#A3B18A] tracking-wider truncate">
                      {meta.outcomeMetric}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/60 border border-[#2D6A4F]/60 font-display font-bold text-sm text-[#52B788] shadow-[0_0_12px_rgba(45,106,79,0.25)]">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-bold text-[#F5F7F5] truncate">
                        {testimonial.author}
                      </h4>
                      <p className="font-body text-xs text-[#9CA3AF] truncate">
                        {testimonial.title} &mdash;{' '}
                        <span className="text-[#52B788] font-semibold">{testimonial.company}</span>
                      </p>
                    </div>
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
