import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Compass, Eye, MousePointerClick, Palette, Sparkles, Wand2 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const metadata: Metadata = {
  title: 'Design & User Experience (UI/UX) Services | BayleafX',
  description:
    'Human-centered UI/UX design, interactive clickable prototypes, design systems, and responsive layouts that convert visitors into customers.',
};

const CAPABILITIES = [
  {
    icon: Compass,
    title: 'Project Scoping & Product Discovery',
    summary: 'We eliminate guesswork before writing code by aligning user needs with business KPIs.',
    details: [
      'In-depth competitor analysis & positioning breakdown',
      'User journey mapping & friction point identification',
      'Site architecture and high-level wireframes',
      'Defined success metrics and conversion milestones',
    ],
  },
  {
    icon: MousePointerClick,
    title: 'Clickable Prototypes & User Testing',
    summary: 'Experience and validate every screen and micro-interaction prior to development.',
    details: [
      'High-fidelity Figma prototypes with realistic animations',
      'Mobile and desktop responsive interactive previews',
      'Stakeholder walk-throughs and feedback iterations',
      'Developer handoff specs with exact spacing and design tokens',
    ],
  },
  {
    icon: Palette,
    title: 'Brand Systems & Design Guidelines',
    summary: 'Establish a memorable, trustworthy visual identity that commands premium pricing.',
    details: [
      'Modern, curated color palettes with dark/light mode parity',
      'Harmonious typography hierarchies using premium web fonts',
      'Iconography libraries and micro-interaction tokens',
      'Comprehensive component libraries for long-term scalability',
    ],
  },
  {
    icon: Eye,
    title: 'Mobile-First & Conversion Optimization',
    summary: 'Every pixel engineered for effortless scanning, thumb-friendly navigation, and speed.',
    details: [
      'Mobile-first UX designed for modern smartphone ergonomics',
      'High-converting call-to-action (CTA) button positioning',
      'Zero visual clutter with clear cognitive hierarchy',
      'WCAG 2.2 AA accessibility standards for all users',
    ],
  },
];

export default function DesignUserExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Breadcrumb & Header */}
        <Container>
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#1B4332] font-bold">Design &amp; User Experience</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Creative &amp; Visual Strategy
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Design &amp; User Experience (UI/UX)
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              We design digital experiences that captivate attention, build instant credibility, and make complex workflows feel effortless. Every button, typography choice, and animation serves your bottom line.
            </p>
          </div>

          {/* Design tools row */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Design Tools:</span>
            {['Figma', 'Design Systems', 'Interactive Prototyping', 'WCAG 2.2 AA', 'Micro-Interactions', 'User Testing'].map((badge) => (
              <span
                key={badge}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </Container>

        {/* Detailed Capabilities Grid */}
        <div className="mt-16 bg-[#F8FAF9] py-16 border-y border-slate-200/80">
          <Container>
            <div className="max-w-2xl mb-12">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
                Our Design Process &amp; Deliverables
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                You will review, test, and approve interactive prototypes before any code is written.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="bl-card p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#1B4332] mb-5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-sans text-xl font-bold text-slate-900">
                        {cap.title}
                      </h3>
                      <p className="mt-2 font-body text-sm text-slate-600 leading-relaxed">
                        {cap.summary}
                      </p>

                      <ul className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                        {cap.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>

        {/* CTA */}
        <Container className="mt-16">
          <div className="rounded-3xl bg-[#0A0F0D] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4">
                <Wand2 className="h-3.5 w-3.5" />
                Bespoke Visual Craft
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Transform your brand into a market leader.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Let us craft a world-class user interface that outshines your competitors and turns casual browsers into committed buyers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <InteractiveHoverButton
                  text="Start Your Project"
                  href="/#contact"
                  className="w-full sm:w-auto bg-white text-slate-900"
                />
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Homepage</span>
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
