import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { ServiceHero, ServiceHeroImage } from '@/components/sections/service-hero';

export const metadata: Metadata = {
  title: 'Website Maintenance & Support Services | BayleafX',
  description:
    'Proactive website maintenance, 24/7 uptime monitoring, security patching, cloud backups, and dedicated technical support for high-performing businesses.',
};

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: 'Security Audits & 24/7 Malware Defense',
    summary: 'Active monitoring and automated firewall defense protecting your reputation and customer data.',
    details: [
      'Continuous brute-force and DDoS traffic mitigation via Cloudflare',
      'Daily file-integrity scans detecting malicious injections and spam scripts',
      'Automated SSL/TLS certificate management and encryption renewal',
      'Instant isolation and emergency remediation in the event of an incident',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Safe Staged Core & Dependency Updates',
    summary: 'Keep WordPress, Next.js, and plugins updated without breaking your live site or checkout.',
    details: [
      'Staging-environment regression testing before pushing updates live',
      'PHP, Node.js runtime, and database version compatibility checks',
      'Plugin conflict resolution and deprecated API replacements',
      'Complete rollback snapshots prior to every major system update',
    ],
  },
  {
    icon: Activity,
    title: 'Core Web Vitals & Speed Optimization',
    summary: 'Ensure your site consistently loads fast on every device month after month.',
    details: [
      'Server response time (TTFB) and CDN edge caching optimization',
      'Automated image compression (WebP/AVIF) and script deferral',
      'Database query cleanups, transient purging, and revision pruning',
      'Monthly Google PageSpeed and Core Web Vitals health reports',
    ],
  },
  {
    icon: Clock,
    title: 'On-Demand Developer Support & Edits',
    summary: 'A trusted engineering team on standby for content tweaks, new sections, and bug fixes.',
    details: [
      'Priority ticket response times (under 2 hours for critical issues)',
      'Content updates, banner replacements, and announcement bars',
      'Form testing, CRM webhook verifications, and email deliverability checks',
      'Direct communication channel via Slack, WhatsApp, or email',
    ],
  },
];

const TECH_BADGES = [
  'WordPress & Woo',
  'Next.js & React',
  'Cloudflare Enterprise',
  'Daily Cloud Backups',
  'Uptime Kuma & Datadog',
  'PHP 8.3 & Node 20+',
  'Database Indexing',
  'Core Web Vitals Tuning',
];

const DELIVERABLES = [
  '24/7 automated ping monitoring with instant alert dispatching',
  'Daily encrypted off-site cloud backups stored across redundant regions',
  'Weekly scheduled staging updates for all themes, plugins, and dependencies',
  'Priority bug fixing and layout repair with under 2hr response for outages',
  'Monthly transparency report detailing uptime, speed scores, and security scans',
  'Monthly allotted engineering hours for text, image, and page additions',
  'Quarterly technical strategy review to plan roadmap improvements',
];

const FAQS = [
  {
    q: 'Do you maintain websites built by other agencies or developers?',
    a: 'Yes. We conduct a thorough 48-hour onboarding audit of your existing codebase, hosting, and plugins to resolve lingering bugs, clean up bloat, and verify security before initiating ongoing maintenance.',
  },
  {
    q: 'What happens if our website goes down?',
    a: 'Our automated monitors ping your site every 60 seconds. If an outage or server error occurs, our on-call engineers are immediately notified and begin diagnosing and restoring the site, often before you or your customers even notice.',
  },
  {
    q: 'Can we use our maintenance hours for new features or landing pages?',
    a: 'Absolutely. Your monthly reserved developer time can be used for content edits, banner updates, new blog layouts, form integrations, or performance enhancements.',
  },
  {
    q: 'Are we locked into a long-term contract?',
    a: 'No. All our maintenance retainers are month-to-month. You can adjust your plan tier or cancel anytime with 14 days notice.',
  },
];

const HERO_IMAGES: ServiceHeroImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
    alt: 'High-availability cloud servers and modern data infrastructure',
    caption: '99.9% Uptime & Infrastructure Monitoring',
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
    alt: 'Real-time performance analytics and system health metrics',
    caption: 'Continuous Core Web Vitals & Speed Tuning',
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
    alt: 'Cybersecurity vulnerability scanner and hardened protocols',
    caption: 'Automated Patching & Firewall Protection',
  },
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    alt: 'Global network connectivity and automated daily backups',
    caption: 'Offsite Backups & Rapid Disaster Recovery',
  },
];

export default function WebsiteMaintenancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-16 pb-20">
        {/* Full-Width Background Image Carousel Hero Section */}
        <ServiceHero
          breadcrumbTitle="Website Maintenance & Support"
          title="Proactive Website Maintenance, Security & Support"
          description="We keep your website fast, secure, and continuously updated so you never have to worry about broken plugins, server downtime, malware, or outdated content. Think of us as your in-house web team on demand."
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
                99.9%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Uptime Target
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                &lt; 2h
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Critical Issue Response
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Daily
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Off-Site Cloud Backups
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                100%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Staged Update Verification
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Infrastructure:
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
                Protection &amp; Upkeep
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Full-spectrum technical care for your web presence.
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
                Standard Inclusions
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What&apos;s covered in our maintenance retainer
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                We safeguard your investment with continuous care and zero surprises:
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
              Common questions about website support
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
                Protect Your Online Asset
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Never stress about site updates or server errors again.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Send us your website URL for a free 15-point health, security, and performance audit. We will show you what needs attention right away.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Request a Free Website Audit</span>
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
