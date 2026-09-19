import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { TechStackCarousel } from '@/components/sections/tech-stack-carousel';
import { ServicesSection } from '@/components/sections/services';
import { DifferentiatorsSection } from '@/components/sections/differentiators';
import { MetricsSection } from '@/components/sections/metrics';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { PricingSection } from '@/components/sections/pricing';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1B4332] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex flex-col">
        <HeroSection />
        <TechStackCarousel />
        <ServicesSection />
        <DifferentiatorsSection />
        <MetricsSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
