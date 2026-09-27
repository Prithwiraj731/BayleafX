import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MousePointerClick,
  Search,
  Target,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Paid Advertising Services (Google & Meta Ads) | BayleafX',
  description:
    'Targeted Google Search, Performance Max, Instagram, and Meta ad campaigns engineered for measurable ROAS, lower CPA, and profitable customer acquisition.',
};

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Google Search, Shopping & Performance Max',
    summary: 'Intercept ready-to-buy customers actively searching for your services with intent-matched ad copy.',
    details: [
      'High-intent keyword grouping and continuous negative keyword scrubbing',
      'Performance Max asset groups and Shopping feed catalog optimization',
      'Bespoke responsive search ads (RSAs) tested against competitor benchmarks',
      'Target CPA and Target ROAS automated smart-bidding algorithm management',
    ],
  },
  {
    icon: Target,
    title: 'Meta (Instagram & Facebook) Full-Funnel Ads',
    summary: 'Capture attention in crowded social feeds with captivating visual creative and tight audience targeting.',
    details: [
      'Top-of-funnel prospecting targeting high-affinity interest and lookalike clusters',
      'Middle and bottom-of-funnel dynamic retargeting capturing abandoned carts',
      'Creative asset development: static product hero cards, reels, and carousels',
      'Meta Conversions API (CAPI) server-side integration bypassing iOS tracking loss',
    ],
  },
  {
    icon: MousePointerClick,
    title: 'Dedicated Landing Pages & Conversion Copy',
    summary: 'Never send paid ad traffic to a generic homepage. We engineer dedicated pages that convert.',
    details: [
      'Single-purpose layout architecture designed without distracting exit links',
      'Compelling, benefit-led headline copywriting matching user search intent',
      'Sub-second page loading speeds preventing bounce-rate budget waste',
      'A/B split testing of offers, testimonials, button copy, and pricing tables',
    ],
  },
  {
    icon: BarChart3,
    title: 'Server-Side Attribution & Live ROAS Reporting',
    summary: 'Crystal-clear visibility into exactly how much revenue every advertising dollar generates.',
    details: [
      'Server-side Google Tag Manager (sGTM) and first-party cookie configuration',
      'Custom 24/7 Looker Studio analytics dashboard tracking Spend, CPA, and ROAS',
      'Multi-touch attribution modeling connecting ad clicks to completed sales/calls',
      'Transparent weekly performance notes with actionable scaling recommendations',
    ],
  },
];

const TECH_BADGES = [
  'Google Ads Search',
  'Performance Max',
  'Meta Ads Manager',
  'Server-Side CAPI',
  'Google Tag Manager',
  'Looker Studio',
  'Landing Page CRO',
  'A/B Split Testing',
];

const DELIVERABLES = [
  'Full conversion tracking audit and server-side tracking setup (CAPI + sGTM)',
  'Full-funnel campaign architecture (Cold Prospecting, Warm Nurture, Retargeting)',
  '12–20 custom ad creative variations (video hooks, static cards, and carousels)',
  'High-converting landing page wireframe and deployment for your campaign',
  'Weekly negative keyword reviews and budget reallocation toward winning ads',
  'Real-time Looker Studio dashboard showing daily spend, leads, CPA, and ROAS',
  'Bi-weekly strategic review call reviewing creative tests and next steps',
];

const FAQS = [
  {
    q: 'Who owns the ad accounts and payment details?',
    a: 'You do. You retain 100% ownership of your Google Ads and Meta Business Manager accounts. You pay the ad networks directly for your media spend, and we simply manage and optimize the campaigns.',
  },
  {
    q: 'What is the recommended minimum monthly ad spend?',
    a: 'For Google Search or Meta campaigns to exit the initial algorithmic learning phase effectively, we typically recommend a minimum ad spend of $1,500 to $2,500/month, depending on your industry and geographic target.',
  },
  {
    q: 'How fast do we start seeing leads or sales?',
    a: 'Unlike organic SEO which takes months, paid campaigns begin generating traffic and conversion data within 24 to 48 hours of launch. The first 14 days focus on testing winning hooks and pruning wasteful keywords, after which performance stabilizes.',
  },
  {
    q: 'Do you create the ad images and video scripts?',
    a: 'Yes. Our creative team writes the copy, scripts the hooks, and designs high-converting static banners and video reels tailored specifically for your target audience.',
  },
];

export default function PaidAdvertisingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#1B4332] font-bold">Paid Ads (Google &amp; Meta)</span>
          </div>

          {/* Hero Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4">
              <Target className="h-3.5 w-3.5" />
              Profitable Customer Acquisition
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Performance Paid Ads (Google &amp; Meta)
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              We engineer profitable advertising campaigns on Google Search, Performance Max, Instagram, and Facebook. Zero vanity metrics — only qualified customer leads, sales, and a transparent return on ad spend.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/90">
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                100%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Client Ad Account Ownership
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                CAPI
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Server-Side Tracking
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                24/7
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Live ROAS Dashboards
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Zero
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Vanity Clicks Focus
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Ad Channels:
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
                Campaign Architecture
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Data-driven systems that lower customer acquisition cost.
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
          <div className="mt-16 sm:mt-20 rounded-2xl bg-[#F8FAF9] border border-slate-200/90 p-6 sm:p-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B4332] font-bold">
                Campaign Deliverables
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What you get when we run your paid acquisition
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                Full-service management with radical transparency into every ad dollar spent:
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
              Common questions about paid advertising
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
                Stop Burning Ad Spend
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to scale your business with profitable ads?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Book an acquisition audit. We will inspect your current ad accounts or marketing funnel and identify exactly where budget is being wasted and how to fix it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Request an Ad Account Audit</span>
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
