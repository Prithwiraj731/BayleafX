import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileCode2,
  Globe2,
  Target,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { ServiceHero, ServiceHeroImage } from '@/components/sections/service-hero';

export const metadata: Metadata = {
  title: 'Google SEO & Growth Services | BayleafX',
  description:
    'Technical SEO audits, high-intent keyword clustering, Core Web Vitals optimization, and authoritative content strategies that compound organic search revenue.',
};

const CAPABILITIES = [
  {
    icon: FileCode2,
    title: 'Technical SEO & Core Web Vitals Audits',
    summary: 'Fix crawl bottlenecks, broken canonicals, and server lag so search engines index your pages instantly.',
    details: [
      'Comprehensive indexation, robots.txt, and XML sitemap architectural hygiene',
      'Passing Google Core Web Vitals (LCP, INP, CLS) across all screen sizes',
      'Elimination of 404 dead ends, redirect chains, and internal link loops',
      'Mobile-first crawlability optimization and edge caching headers',
    ],
  },
  {
    icon: Target,
    title: 'Commercial Keyword Clustering & Topic Silos',
    summary: 'Target high-intent search terms used by customers actively comparing solutions and ready to buy.',
    details: [
      'In-depth competitor keyword gap analysis identifying low-hanging opportunities',
      'Topical authority clustering grouping related queries into structured hubs',
      'Search intent classification (Commercial, Informational, Transactional)',
      'Strategic internal linking matrices passing PageRank authority to revenue pages',
    ],
  },
  {
    icon: Globe2,
    title: 'High-Authority Content & Editorial Strategy',
    summary: 'Publish human-written, well-researched guides that educate buyers and outrank bloated competitor fluff.',
    details: [
      'Data-backed editorial briefs addressing real customer objections and questions',
      'Conversion-oriented copywriting with contextual CTA placement within articles',
      'Regular content refreshes protecting mature articles from ranking decay',
      'Zero AI-generated spam content — only high-signal, industry-tested insights',
    ],
  },
  {
    icon: Bot,
    title: 'Schema Markup & Generative Engine Optimization (GEO)',
    summary: 'Prepare your brand to be cited by AI search engines like Perplexity, ChatGPT, and Google Gemini.',
    details: [
      'Comprehensive Schema.org JSON-LD markup (Organization, Product, FAQ, Article)',
      'Rich snippet optimization capturing featured stars, sitelinks, and snippets',
      'Topical entity definitions aligning your brand in Google Knowledge Graphs',
      'Citation structuring enabling AI search engines to accurately reference your brand',
    ],
  },
];

const TECH_BADGES = [
  'Technical SEO Audits',
  'Core Web Vitals',
  'Schema.org JSON-LD',
  'Ahrefs & Semrush',
  'Google Search Console',
  'Topical Authority Silos',
  'Generative Engine Optimization',
  'White-Hat Only',
];

const DELIVERABLES = [
  'Initial 40-point technical, on-page, and competitive SEO audit',
  'Keyword opportunity roadmap with search volume, difficulty, and revenue potential',
  'Full on-page metadata optimization (Title tags, Meta descriptions, OpenGraph, H1-H3)',
  'Complete Schema.org JSON-LD structured data implementation across core templates',
  'Monthly high-authority editorial content briefs and fully optimized articles',
  'Google Search Console and Google Analytics 4 conversion tracking integration',
  'Monthly organic ranking, traffic quality, and inbound inquiry report',
];

const FAQS = [
  {
    q: 'How long does it take to see ranking improvements from SEO?',
    a: 'SEO is a compounding organic channel. Technical fixes and Core Web Vitals improvements often show initial crawl improvements within 2 to 4 weeks. Meaningful keyword ranking and organic lead growth typically materializes between months 3 and 6 as topical authority builds.',
  },
  {
    q: 'What makes BayleafX SEO different from typical SEO agencies?',
    a: 'Most SEO agencies hand you a 50-page PDF report and tell your team to fix the code. Because BayleafX is an engineering studio, we actually implement the technical code fixes, redesign bloated templates, and pass Core Web Vitals directly on your codebase.',
  },
  {
    q: 'Do you guarantee #1 rankings on Google?',
    a: 'No legitimate agency can guarantee a #1 rank because Google’s algorithms are proprietary and constantly evolving. However, we guarantee 100% white-hat adherence to Google Search Essentials, technical excellence, and measurable organic visibility growth.',
  },
  {
    q: 'Is our website optimized for new AI search engines?',
    a: 'Yes. We implement Generative Engine Optimization (GEO) principles: clean structured data (JSON-LD), entity-based topical authority, and factual clarity that allows LLM models (ChatGPT Search, Perplexity, Gemini) to cite your brand as an authoritative source.',
  },
];

const HERO_IMAGES: ServiceHeroImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1920&q=80',
    alt: 'Google search analytics showing organic ranking improvements',
    caption: 'Technical SEO Audits & Core Web Vitals',
  },
  {
    url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80',
    alt: 'Content marketing and keyword cluster research workstation',
    caption: 'High-Intent Commercial Keyword Clustering',
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Climbing architectural geometry symbolizing continuous upward ranking',
    caption: 'High-Authority Content Engine & Pillar Silos',
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Strategic digital team evaluating schema markup and AI search visibility',
    caption: 'Schema.org JSON-LD & Generative Search (GEO)',
  },
];

export default function SeoGrowthPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-20">
        {/* Full-Width Background Image Carousel Hero Section */}
        <ServiceHero
          breadcrumbTitle="Google SEO & Growth"
          title="Google SEO & Organic Search Growth"
          description="We engineer comprehensive search engine optimization strategies: technical Core Web Vitals fixes, high-intent programmatic keyword clustering, structured schema markup, and authoritative editorial content that compounds month over month."
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
                White-Hat Methods
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Passing
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Core Web Vitals Scores
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                JSON-LD
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Rich Schema Markup
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                GEO-Ready
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                AI Citation Optimization
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              SEO Framework:
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
                Organic Strategy
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineering-led SEO that turns search into revenue.
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
                Ongoing Deliverables
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What you receive in our monthly SEO partnership
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                We combine technical implementation with high-caliber editorial content:
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
              Common questions about search engine optimization
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
                Unlock Organic Revenue
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Start capturing the customers already searching for you.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Send us your website URL and primary competitors. We will send you a complimentary video audit breaking down your top technical bottlenecks and keyword growth gaps.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Request a Free SEO Audit</span>
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
