import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { TrustMarqueeSection } from '@/components/sections/trust-marquee';
import { ServicesSection } from '@/components/sections/services';
import { DifferentiatorsSection } from '@/components/sections/differentiators';
import { MetricsSection } from '@/components/sections/metrics';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0B0E0C] text-[#F5F7F5] selection:bg-[#2D6A4F]/50 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main id="main-content" className="flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Enterprise Trust & Industry Verticals */}
        <TrustMarqueeSection />

        {/* Section 3: Enterprise Solutions Suite */}
        <ServicesSection />

        {/* Section 4: Executive Differentiators Comparison Matrix */}
        <DifferentiatorsSection />

        {/* Section 5: Quantifiable Impact Metrics & Architectural Spotlight */}
        <MetricsSection />

        {/* Section 6: Engineering Lifecycle Roadmap */}
        <ProcessSection />

        {/* Section 7: Executive Social Proof Grid */}
        <TestimonialsSection />

        {/* Section 8: Enterprise RFP & Architectural Consultation Portal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
