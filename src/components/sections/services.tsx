'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { TiltedCardCarousel } from '@/components/ui/tilted-card-carousel';
import { SERVICES_CAROUSEL_DATA } from '@/lib/services-data';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#F8FAF9] border-t border-b border-slate-200/80 overflow-x-clip relative"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent pointer-events-none -z-10" />

      <Container>
        <SectionHeader
          title="Everything you need to grow online."
          description="From custom web applications and clickable product design to full-scale social media handling and paid advertising funnels, we build, scale, and manage it all under one roof."
        />
      </Container>

      {/* True Half-Circle Curved Arc Carousel */}
      <div className="mt-4 sm:mt-6">
        <TiltedCardCarousel items={SERVICES_CAROUSEL_DATA} />
      </div>

      {/* Bottom CTA & Support Note */}
      <Container className="mt-12 md:mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-4xl mx-auto">
          <div>
            <h4 className="font-sans text-sm sm:text-base font-bold text-slate-900">
              Need a custom scope or ongoing retainer?
            </h4>
            <p className="font-body text-xs sm:text-sm text-slate-500">
              We craft tailored packages mixing development, UI/UX, and marketing.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1B4332] text-white text-xs sm:text-sm font-semibold hover:bg-[#2D6A4F] transition-all shadow-xs shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
