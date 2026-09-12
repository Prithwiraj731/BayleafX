'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Clock, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Container } from './container';
import { Logo } from '@/components/ui/logo';
import { Footer } from './footer';

interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  activeRoute: '/privacy' | '/terms' | '/cookies' | '/refunds';
  tocItems: TocItem[];
  children: React.ReactNode;
}

const LEGAL_TABS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/refunds', label: 'Refund & Cancellation' },
];

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = '[LAST UPDATED DATE]',
  activeRoute,
  tocItems,
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E0C] text-[#F5F7F5] selection:bg-[#2D6A4F]/40 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0E0C]/85 backdrop-blur-xl py-4 transition-all">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Logo href="/" />
              <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#9CA3AF] hover:text-[#F5F7F5] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Return to Atelier</span>
              </Link>
            </div>

            {/* Legal Document Navigation Tabs */}
            <nav className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-[#121714] overflow-x-auto max-w-full" aria-label="Legal Documents">
              {LEGAL_TABS.map((tab) => {
                const isActive = tab.href === activeRoute;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-body tracking-wide transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#2D6A4F] text-white font-semibold shadow-[0_0_15px_rgba(45,106,79,0.4)]'
                        : 'text-[#9CA3AF] hover:text-[#F5F7F5] hover:bg-white/[0.04]'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </Container>
      </header>

      {/* Main Page Area */}
      <main className="flex-1 py-12 md:py-20 relative">
        {/* Subtle Ambient Bayleaf Glow */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[350px] w-[550px] rounded-full bg-[#2D6A4F]/[0.08] blur-[150px]" />

        <Container>
          {/* Document Header */}
          <div className="border-b border-white/[0.08] pb-10 md:pb-14 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2D6A4F]/40 bg-[#2D6A4F]/10 px-3.5 py-1 text-[11px] font-mono tracking-wider uppercase text-[#F5F7F5] mb-4">
              <Shield className="h-3 w-3 text-[#52B788]" />
              <span>Legal Architecture & Compliance</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F7F5] mb-4">
              {title}
            </h1>

            <p className="font-body text-base md:text-lg text-[#9CA3AF] max-w-3xl leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-[#6C7A70]">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#52B788]" />
                <span>Last Updated: <strong className="text-[#9CA3AF]">{lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-[#52B788]" />
                <span>Standard Specification: <strong className="text-[#9CA3AF]">v1.0 (Production)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#52B788]" />
                <span>Application-Specific Factual Audit: <strong className="text-[#9CA3AF]">Verified</strong></span>
              </div>
            </div>
          </div>

          {/* 2-Column Grid: TOC + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Table of Contents (Sticky on desktop) */}
            <aside className="lg:col-span-4 hidden lg:block sticky top-28 space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#121714]/90 backdrop-blur-xl p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#52B788] font-bold mb-4">
                  Table of Contents
                </h2>
                <nav className="space-y-1.5" aria-label="Table of contents">
                  {tocItems.map((item, idx) => {
                    const isCurrent = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`group flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-xs font-body transition-all leading-snug ${
                          isCurrent
                            ? 'bg-[#2D6A4F]/20 text-[#F5F7F5] font-semibold border-l-2 border-[#52B788]'
                            : 'text-[#9CA3AF] hover:text-[#F5F7F5] hover:bg-white/[0.03]'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-[#6C7A70] group-hover:text-[#9CA3AF] shrink-0 mt-0.5">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Support Inquiries Card */}
              <div className="rounded-xl border border-white/10 bg-[#121714]/60 p-5 text-xs text-[#9CA3AF] space-y-3">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#F5F7F5] font-semibold flex items-center gap-2">
                  <span>Legal & Privacy Inquiries</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#6C7A70]">
                  For questions regarding data processing, contractual agreements, or terms clarification:
                </p>
                <a
                  href="mailto:hello@bayleafx.com"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F7F5] hover:text-[#52B788] transition-colors"
                >
                  <span>hello@bayleafx.com</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </aside>

            {/* Document Body */}
            <article className="lg:col-span-8 space-y-12 leading-relaxed text-[#D0CDC8] font-body text-sm sm:text-[15px]">
              {children}
            </article>
          </div>
        </Container>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
