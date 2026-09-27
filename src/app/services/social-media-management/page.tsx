import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  MessageSquare,
  PenTool,
  Share2,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Social Media Handling & Content Creation Services | BayleafX',
  description:
    'End-to-end social media handling, bespoke graphic design, short-form reels editing, daily publishing, and community engagement for modern businesses.',
};

const CAPABILITIES = [
  {
    icon: PenTool,
    title: 'Content Strategy & Editorial Planning',
    summary: 'Strategic content pillars tailored to educate your audience, build authority, and drive sales.',
    details: [
      'Monthly editorial calendars organized and approved in advance',
      'Target audience research and competitive content gap analysis',
      'Harmonized blend of thought leadership, proof of work, and offers',
      'Hashtag, keyword, and algorithm-optimized post formatting',
    ],
  },
  {
    icon: Clapperboard,
    title: 'Short-Form Video & High-Retention Reels',
    summary: 'Engaging video content engineered for modern algorithmic feeds on Instagram, TikTok, and YouTube.',
    details: [
      'Hook-driven video pacing, sound design, and animated typography',
      'Clear, accessible captions with styled subtitles for sound-off viewing',
      'Custom high-converting cover thumbnails maintaining grid aesthetics',
      'Repurposing podcasts, demos, and founder interviews into micro-clips',
    ],
  },
  {
    icon: Sparkles,
    title: 'Custom Brand Visuals & Carousels',
    summary: 'Elevated design assets crafted specifically for your brand with zero generic template feel.',
    details: [
      'Educational multi-slide carousels optimized for saves and shares',
      'Bespoke infographics, milestone announcements, and client spotlight cards',
      'Consistent typography, color palette, and premium editorial polish',
      'High-resolution exports formatted for LinkedIn, Instagram, and X',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Community Management & Inbound Triage',
    summary: 'Human-centered engagement that turns passive followers into engaged advocates and buyers.',
    details: [
      'Daily comment moderation, answers to customer questions, and brand banter',
      'Inbound direct message triage forwarding qualified business leads directly to you',
      'Proactive engagement with industry leaders, partners, and relevant accounts',
      'Spam filter monitoring and brand reputation safeguarding',
    ],
  },
];

const TECH_BADGES = [
  'LinkedIn B2B',
  'Instagram & Threads',
  'X (Twitter)',
  'YouTube Shorts',
  'Editorial Calendars',
  'Premiere & After Effects',
  'Figma Visuals',
  'Attribution Analytics',
];

const DELIVERABLES = [
  'Complete monthly content calendar scheduled in a shared Notion / Buffer board',
  '16–24 custom-designed feed graphics, carousels, and stories per month',
  '4–8 professionally edited short-form reels with custom captions and hooks',
  'Daily comment moderation and direct message routing within business hours',
  'Weekly post performance tracking and creative iteration testing',
  'Monthly transparency analytics report detailing follower growth, impressions, and clicks',
  'Dedicated Slack or WhatsApp channel with your account manager and copywriter',
];

const FAQS = [
  {
    q: 'Do you create the content or do we need to provide raw materials?',
    a: 'We handle the entire production pipeline. We can work from raw founder voice notes, bullet points, customer case studies, or product links. If you have video footage, we edit and polish it; if not, we design high-converting visual carousels and motion assets.',
  },
  {
    q: 'Can we review and approve posts before they go live?',
    a: 'Yes. Every post is drafted in your shared calendar 7 to 10 days before publication. Nothing goes live without your team’s explicit stamp of approval.',
  },
  {
    q: 'Which platforms do you manage?',
    a: 'We specialize in LinkedIn, Instagram, X (Twitter), and YouTube Shorts. We tailor the format and tone to match the natural culture of each platform rather than blindly cross-posting identical text.',
  },
  {
    q: 'How do you capture our exact brand voice and tone?',
    a: 'During our onboarding week, we conduct a brand voice audit. We analyze your past successful posts, founder philosophy, target client personas, and establish a clear "do and do not" vocabulary guide.',
  },
];

export default function SocialMediaManagementPage() {
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
            <span className="text-[#1B4332] font-bold">Social Media Handling</span>
          </div>

          {/* Hero Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-4">
              <Share2 className="h-3.5 w-3.5" />
              Organic Brand Authority
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Strategic Social Media Handling &amp; Storytelling
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              We handle your social media presence end-to-end: high-retention short-form reels, bespoke design assets, daily scheduling, and authentic community engagement that builds authority and drives organic inbound leads.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/90">
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                100%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Custom Branded Assets
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Daily
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Community Moderation
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Weekly
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Advance Approvals
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                Zero
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Generic Template Posts
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Channels Managed:
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
                Management Scope
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Everything required to dominate social feeds.
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
                Monthly Deliverables
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What we produce and manage every month
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                Consistent execution without pulling your team away from running your company:
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
              Common questions about our social media management
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
                Grow Your Brand Presence
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Turn your social profiles into an inbound lead generator.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Send us your social profile handles. We will prepare a complimentary 10-point content review highlighting missed reach opportunities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Request a Free Social Audit</span>
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
