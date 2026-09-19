import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BarChart3, CheckCircle2, Megaphone, PenTool, Share2, Target, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const metadata: Metadata = {
  title: 'Marketing & Business Growth Services | BayleafX',
  description:
    'Data-driven digital marketing, Google & Meta paid advertising, organic SEO search ranking, and conversion rate optimization that drives real revenue.',
};

const CAPABILITIES = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    summary: 'A bespoke customer acquisition roadmap built around your ideal client profile and unit economics.',
    details: [
      'Customer persona discovery and market competitor audits',
      'Multi-channel acquisition roadmap (Paid, Organic, Referral)',
      'Lead funnel architecture and automated nurture flows',
      'Clear CAC (Customer Acquisition Cost) and ROI tracking',
    ],
  },
  {
    icon: Target,
    title: 'Paid Ads (Google & Meta)',
    summary: 'High-intent search ads and persuasive social campaigns designed to drive qualified leads.',
    details: [
      'Google Search & Performance Max campaign buildouts',
      'Meta (Facebook & Instagram) scroll-stopping video and image ads',
      'Retargeting funnels that recover abandoned traffic',
      'Daily bid management, negative keyword pruning, and A/B split testing',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Growth & Creative Content',
    summary: 'Consistent, memorable brand storytelling that builds lasting trust and engagement.',
    details: [
      'High-converting social graphics and copywriting templates',
      'Content calendar creation and multi-channel scheduling',
      'Community engagement strategies to foster organic brand advocacy',
      'Executive thought-leadership and industry authority positioning',
    ],
  },
  {
    icon: PenTool,
    title: 'Google SEO & Content Marketing',
    summary: 'Rank higher on Google search queries so customers discover you without continuous ad spend.',
    details: [
      'Technical SEO audits (Core Web Vitals, schema markup, indexing)',
      'High-value commercial intent keyword research',
      'Authoritative blog posts and educational landing page copy',
      'Internal linking structures and high-domain backlink generation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Sales Conversion Optimization',
    summary: 'Turn traffic into qualified inquiries with heatmaps, funnel tracking, and CRO experiments.',
    details: [
      'Google Analytics 4 (GA4) and Google Tag Manager custom events',
      'Conversion rate optimization (CRO) audits and headline experiments',
      'User session recordings and drop-off leak fixes',
      'Clear monthly reporting dashboards highlighting leads and revenue',
    ],
  },
];

export default function MarketingGrowthPage() {
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
            <span className="text-[#1B4332] font-bold">Marketing &amp; Business Growth</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4">
              <Megaphone className="h-3.5 w-3.5" />
              Revenue Acceleration
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Marketing &amp; Business Growth
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              Traffic is vanity, revenue is sanity. We combine rigorous Google &amp; Meta advertising, organic SEO search authority, and conversion optimization to fill your pipeline with ready-to-buy clients.
            </p>
          </div>

          {/* Marketing Channels row */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Growth Channels:</span>
            {['Google Ads', 'Meta Ads', 'Organic SEO', 'GA4 Analytics', 'Conversion Rate Optimization', 'Email Nurture'].map((badge) => (
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
                Data-Driven Marketing Capabilities
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Transparent attribution, real-time ROI tracking, and zero marketing jargon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <TrendingUp className="h-3.5 w-3.5" />
                Scalable Customer Acquisition
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ignite your customer pipeline today.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Book a free marketing and growth audit. We will analyze your website, keywords, and competitor ad strategies to uncover immediate revenue opportunities.
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
