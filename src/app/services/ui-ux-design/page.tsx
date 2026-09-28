import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MousePointerClick,
  Palette,
  Smartphone,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { ServiceHero, ServiceHeroImage } from '@/components/sections/service-hero';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | BayleafX',
  description:
    'Human-centered UI/UX design, interactive clickable Figma prototypes, cohesive design systems, and conversion-engineered digital product interfaces.',
};

const CAPABILITIES = [
  {
    icon: Compass,
    title: 'Product Discovery & User Journey Mapping',
    summary: 'We eliminate guesswork before designing by aligning user needs directly with business goals.',
    details: [
      'In-depth competitor interface teardowns and positioning analysis',
      'User journey mapping to identify and eliminate customer drop-off friction',
      'Information architecture, site maps, and low-fidelity structural wireframes',
      'Defined usability milestones and conversion-oriented interaction flows',
    ],
  },
  {
    icon: MousePointerClick,
    title: 'Clickable Prototypes & Usability Testing',
    summary: 'Experience and test every screen and micro-interaction on your phone before coding begins.',
    details: [
      'High-fidelity Figma prototypes with realistic animations and interactions',
      'Mobile, tablet, and desktop responsive interactive walkthroughs',
      'Real user testing sessions to uncover navigation ambiguities early',
      'Stakeholder review cycles to ensure full alignment across your team',
    ],
  },
  {
    icon: Palette,
    title: 'Scalable Design Systems & Tokens',
    summary: 'Establish a memorable, trustworthy visual identity that commands credibility and scales.',
    details: [
      'Modern, curated color palettes with calibrated light/dark contrast',
      'Harmonious typography hierarchies utilizing premium, modern web fonts',
      'Reusable atomic component libraries (inputs, buttons, modals, cards)',
      'Design tokens formatted for seamless developer handoff in React & Tailwind',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Ergonomics & Conversion Design',
    summary: 'Interfaces engineered for one-handed thumb navigation, rapid scanning, and effortless action.',
    details: [
      'Thumb-friendly mobile navigation zones and bottom action drawers',
      'High-visibility call-to-action (CTA) button hierarchy and placement',
      'Zero visual clutter with intentional whitespace and clean focal points',
      'Strict WCAG 2.2 AA accessibility standards for all users and contrast ratios',
    ],
  },
];

const TECH_BADGES = [
  'Figma',
  'Design Systems',
  'Interactive Prototyping',
  'Design Tokens',
  'WCAG 2.2 AA Compliant',
  'Micro-Interactions',
  'Mobile Ergonomics',
  'SVG Iconography',
];

const DELIVERABLES = [
  'Complete organized Figma source file with components and styles',
  'Clickable interactive prototype ready for user testing and presentations',
  'Responsive layouts for mobile (iOS/Android), tablet, and desktop viewports',
  'Design system documentation with typography scales, color tokens, and spacing',
  'Exported SVGs, custom icons, and web-optimized visual assets',
  'Developer handoff call with comprehensive CSS specifications',
  '100% intellectual property ownership and commercial usage rights',
];

const FAQS = [
  {
    q: 'Do we receive full access to the source Figma files?',
    a: 'Yes. Upon project completion, you receive full editing access and ownership of all Figma files, component libraries, typography guides, and vector assets. Nothing is locked or withheld.',
  },
  {
    q: 'How do you hand off designs to our development team?',
    a: 'We provide structured Figma files with auto-layout, named layers, responsive constraints, and design tokens aligned with Tailwind CSS. We also offer a dedicated handoff walk-through call with your engineers to review interactions.',
  },
  {
    q: 'Can you work within our existing brand guidelines?',
    a: 'Absolutely. Whether you have an established corporate brand that needs modernizing or just a logo and rough color ideas, we adapt our design system to respect your brand heritage while elevating its execution.',
  },
  {
    q: 'How many rounds of revisions are included?',
    a: 'We design in close collaboration through structured review phases (Wireframes -> Visual Concepts -> High-Fidelity -> Final Polish). Each milestone includes feedback rounds so you are never surprised by the final result.',
  },
];

const HERO_IMAGES: ServiceHeroImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1920&q=80',
    alt: 'Product designer refining user interface flows on Apple workstation',
    caption: 'Interactive Figma Prototypes & User Testing',
  },
  {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=80',
    alt: 'Creative design studio workspace with design system components',
    caption: 'Comprehensive Multi-Platform Design Systems',
  },
  {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80',
    alt: 'Design team collaborating on mobile wireframes and interaction flows',
    caption: 'User Journey Mapping & Ergonomic Layouts',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1920&q=80',
    alt: 'Digital product presentation with token architecture',
    caption: 'Clean Token Architecture & Developer Handoff',
  },
];

export default function UiUxDesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-16 pb-20">
        {/* Full-Width Background Image Carousel Hero Section */}
        <ServiceHero
          breadcrumbTitle="UI/UX Design"
          title="Human-Centered UI/UX Design & Systems"
          description="We design intuitive interfaces, clickable Figma prototypes, and complete design systems that make digital products effortless to use and impossible to forget. Every typography choice, spacing unit, and interaction serves your users."
          images={HERO_IMAGES}
          ctaPrimaryText="Discuss Your Project"
          ctaPrimaryHref="#contact"
          ctaSecondaryText="Explore Deliverables"
          ctaSecondaryHref="#deliverables"
        />

        <Container className="mt-12 sm:mt-16">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/90">
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                100%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Clickable Prototypes
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                AA
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                WCAG 2.2 Accessibility
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Pixel
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Engineering Precision
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Figma
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Complete Design Tokens
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Design Toolkit:
            </span>
            {TECH_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Core Capabilities */}
          <div className="mt-16 sm:mt-20">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B4332] font-bold">
                Design Scope
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Crafted for clarity, beauty, and developer ease.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-[#1B4332]/40 transition-colors"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#1B4332] mb-5">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed font-body">
                      {cap.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                      {cap.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div id="deliverables" className="mt-16 sm:mt-20 rounded-2xl bg-[#F8FAF9] border border-slate-200/90 p-6 sm:p-10 scroll-mt-28">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B4332] font-bold">
                Deliverables Package
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What you receive at the end of design
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                Clean, organized, production-grade assets ready for development:
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DELIVERABLES.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70">
                  <CheckCircle2 className="h-4 w-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 sm:mt-20 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B4332] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Common questions about our design approach
            </h2>

            <div className="mt-8 space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-slate-200/90 p-5 sm:p-6 bg-white">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-b from-[#24543F] via-[#1B4332] to-[#143526] p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Elevate Your Product Experience
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Turn complex ideas into clean, world-class UI.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Schedule a discovery call with our lead product designer. We will review your product wireframes or existing website and share instant UX improvement ideas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Book a Design Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <span>Browse All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
