import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { DoorRevealSection } from '@/components/sections/door-reveal';
import { ServicesSection } from '@/components/sections/services';
import { DifferentiatorsSection } from '@/components/sections/differentiators';
import { MetricsSection } from '@/components/sections/metrics';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bl-void text-bl-text-primary selection:bg-bl-accent/30 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main id="main-content" className="flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 1.5: Door Reveal Gateway ("Welcome to BayleafX") */}
        <DoorRevealSection />

        {/* Section 2: 15 Services across 3 Core Pillars */}
        <ServicesSection />

        {/* Section 3: Value Differentiators */}
        <DifferentiatorsSection />

        {/* Section 4: Quantifiable Impact Metrics */}
        <MetricsSection />

        {/* Section 5: 4-Phase Delivery Process */}
        <ProcessSection />

        {/* Section 6: Executive Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Contact & Engagement Initiation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
