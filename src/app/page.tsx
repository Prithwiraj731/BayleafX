import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { DifferentiatorsSection } from '@/components/sections/differentiators';
import { MetricsSection } from '@/components/sections/metrics';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />
      <main id="main-content" className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <MetricsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
