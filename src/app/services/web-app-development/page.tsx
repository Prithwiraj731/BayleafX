import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Code2, Database, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const metadata: Metadata = {
  title: 'Web & App Development Services | BayleafX',
  description:
    'Custom web application development, full-stack software, modern WordPress solutions, and API integrations engineered for high speed and scale.',
};

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Custom Web Application Development',
    summary: 'Tailored web apps engineered with React 19, Next.js 15, and TypeScript.',
    details: [
      'Zero-layout-shift server component architecture',
      'Instant page transitions and edge runtime optimization',
      'Fully responsive for iOS, Android, tablets, and desktop',
      'Strict accessibility (WCAG 2.2 AA) and SEO compliance',
    ],
  },
  {
    icon: Layers,
    title: 'Full-Stack Software Platforms',
    summary: 'End-to-end digital platforms featuring accounts, subscriptions, and administrative tools.',
    details: [
      'Role-based access control and secure authentication',
      'Stripe & PayPal billing, invoicing, and subscription portals',
      'Real-time analytics dashboards and customer databases',
      'Automated background jobs, emails, and transactional triggers',
    ],
  },
  {
    icon: Globe,
    title: 'High-Performance WordPress Websites',
    summary: 'Fast, secure, and easily editable WordPress and WooCommerce platforms.',
    details: [
      'Custom bespoke themes with zero bloated plugins',
      'Hardened security against brute-force and SQL injection attacks',
      'WooCommerce stores tailored for frictionless checkout',
      'Clean Gutenberg blocks enabling your team to edit content with ease',
    ],
  },
  {
    icon: Database,
    title: 'Tool & Enterprise API Integrations',
    summary: 'Connect your business ecosystem to eliminate manual data entry and errors.',
    details: [
      'CRM connections (HubSpot, Salesforce, Zoho, Pipedrive)',
      'Automated notification workflows via Slack, WhatsApp, and email',
      'Custom REST and GraphQL API development and documentation',
      'Secure webhook listeners with idempotency and error retry queues',
    ],
  },
];

const TECH_BADGES = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Docker',
  'Redis',
  'REST & GraphQL',
];

export default function WebAppDevelopmentPage() {
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
            <span className="text-[#1B4332] font-bold">Web &amp; App Development</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4">
              <Zap className="h-3.5 w-3.5" />
              Engineering Excellence
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Web &amp; Custom Application Development
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              We design and engineer lightning-fast digital products that elevate your brand, load instantly, and turn visitors into loyal customers. No templates, no bloat—pure high-performance craftsmanship.
            </p>
          </div>

          {/* Tech stack badge row */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Core Tech:</span>
            {TECH_BADGES.map((badge) => (
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
                Detailed Capabilities &amp; Deliverables
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Every project is built with production-grade engineering standards and strict quality control.
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

        {/* Engineering Guarantees & CTA */}
        <Container className="mt-16">
          <div className="rounded-3xl bg-[#0A0F0D] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                Guaranteed 3-4 Week Delivery
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to build something extraordinary?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Schedule a 30-minute discovery session with our lead engineer. We will review your goals, map out the architecture, and provide a fixed-price roadmap.
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
