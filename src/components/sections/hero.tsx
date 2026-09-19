'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const TRUST_METRICS = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Fast Delivery', value: '3-4 Weeks' },
  { label: 'Client Rating', value: '4.9 / 5' },
];

const SHOW_PRODUCTION_STACK = false;

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry' | 'stack'>('architecture');

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-[#F2F7F4]/60 via-white to-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#1B4332 1px, transparent 1px), radial-gradient(#1B4332 1px, #FFFFFF 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-slate-900 leading-[1.1] tracking-[-0.03em]"
          >
            We build <span className="text-[#1B4332]">modern websites &amp; apps</span> that grow your business.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 font-body text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            From custom websites and web applications to design and marketing, BayleafX helps you look world-class, load fast, and turn visitors into paying customers.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <InteractiveHoverButton
              text="Start Your Project"
              variant="solid"
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base"
            />

            <InteractiveHoverButton
              text="See Our Services"
              variant="outline"
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 w-full pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1B4332] tracking-tight">
                  {metric.value}
                </span>
                <span className="font-body text-xs sm:text-[13px] font-medium text-slate-500 mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {SHOW_PRODUCTION_STACK && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-12 sm:mt-14 max-w-4xl mx-auto rounded-2xl border border-slate-200/90 bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-50/90 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-[11px] text-slate-500 hidden sm:inline-block">
                  bayleafx-core-architecture.config.ts
                </span>
              </div>

              <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'telemetry'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Telemetry
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'stack'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tech Stack
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {activeTab === 'architecture' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div className="p-4 rounded-xl border border-slate-200 bg-[#F9FAF9]">
                    <div className="flex items-center gap-2 text-[#1B4332] font-semibold text-sm mb-1.5">
                      <Layers className="h-4 w-4" />
                      <span>Modular Frontend</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      React 19 &amp; Next.js 15 App Router with zero-layout-shift hydration and edge rendering.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-[#F9FAF9]">
                    <div className="flex items-center gap-2 text-[#1B4332] font-semibold text-sm mb-1.5">
                      <Zap className="h-4 w-4" />
                      <span>Edge API Ingestion</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ultra-low latency server actions, resilient webhooks, and scalable distributed data caching.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-[#F9FAF9]">
                    <div className="flex items-center gap-2 text-[#1B4332] font-semibold text-sm mb-1.5">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Hardened Security</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      OWASP Top 10 compliance, zero-trust token authentication, and audited data encryption.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">P95 Latency</span>
                    <p className="font-sans text-2xl font-bold text-slate-900 mt-1">24ms</p>
                    <span className="text-[11px] text-emerald-600 font-medium">Global Edge P95</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Uptime SLA</span>
                    <p className="font-sans text-2xl font-bold text-slate-900 mt-1">99.99%</p>
                    <span className="text-[11px] text-emerald-600 font-medium">Production Verified</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">First Load JS</span>
                    <p className="font-sans text-2xl font-bold text-slate-900 mt-1">168 kB</p>
                    <span className="text-[11px] text-emerald-600 font-medium">Compressed Bundle</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Lighthouse Score</span>
                    <p className="font-sans text-2xl font-bold text-slate-900 mt-1">99/100</p>
                    <span className="text-[11px] text-emerald-600 font-medium">Performance Grade</span>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="flex flex-wrap items-center justify-center gap-3 py-2">
                  {[
                    'Next.js 15 (App Router)',
                    'TypeScript 5',
                    'Tailwind CSS v4',
                    'Framer Motion',
                    'PostgreSQL / Supabase',
                    'Redis / Edge Caching',
                    'REST & GraphQL APIs',
                    'Docker & CI/CD',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2D6A4F]" />
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-slate-700">Live Production Stack Configured</span>
                </div>
                <div className="font-mono text-[11px]">
                  Deployment Environment: Edge Cluster Active
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
};
