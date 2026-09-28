import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Package,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { ServiceHero, ServiceHeroImage } from '@/components/sections/service-hero';

export const metadata: Metadata = {
  title: 'E-commerce Development Services | BayleafX',
  description:
    'Custom e-commerce website development built for speed, conversion, and scale. Modern Shopify, WooCommerce, and headless Next.js online stores.',
};

const CAPABILITIES = [
  {
    icon: ShoppingBag,
    title: 'Custom Storefronts & Headless Commerce',
    summary: 'Bespoke online shopping experiences crafted to match your exact brand identity with zero template bloat.',
    details: [
      'Tailored Shopify Liquid, WooCommerce, or headless Next.js architectures',
      'Sub-second product catalog browsing and instant search filtering',
      'Zero layout shift product galleries optimized for mobile shoppers',
      'Custom product variant pickers, bundles, and dynamic pricing rules',
    ],
  },
  {
    icon: CreditCard,
    title: 'Frictionless Payments & 1-Click Checkout',
    summary: 'Eliminate cart abandonment with fast, secure, and globally compliant payment flows.',
    details: [
      'Stripe, PayPal, Razorpay, Apple Pay, and Google Pay integrations',
      'Multi-currency support with automatic local tax & VAT calculations',
      'Frictionless 1-page checkout designed to maximize completed orders',
      'PCI-DSS compliant data encryption with hardened fraud prevention',
    ],
  },
  {
    icon: Package,
    title: 'Inventory, ERP & Logistics Automation',
    summary: 'Connect your store directly with your warehouse, accounting, and courier partners.',
    details: [
      'Real-time multi-location inventory tracking and backorder management',
      'Automated shipping label generation with DHL, FedEx, and local couriers',
      'CRM & ERP data sync (Zoho, QuickBooks, NetSuite, HubSpot)',
      'Automated transactional customer notifications via SMS, WhatsApp, and email',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Conversion Funnels & Average Order Value (AOV)',
    summary: 'Strategic on-page mechanisms engineered to increase cart value and repeat purchases.',
    details: [
      'Pre-purchase and post-purchase one-click upsell and cross-sell modules',
      'Automated abandoned cart recovery workflows with high open rates',
      'Customer loyalty points, referral rewards, and subscription programs',
      'Server-side Google Tag Manager and Meta Pixel attribution tracking',
    ],
  },
];

const TECH_BADGES = [
  'Shopify Plus',
  'WooCommerce',
  'Next.js Commerce',
  'Stripe Payments',
  'Razorpay',
  'Tailwind CSS',
  'PostgreSQL',
  'Klaviyo Email',
  'Algolia Search',
  'ShipStation',
];

const DELIVERABLES = [
  'Fully bespoke mobile-responsive storefront with 100% source ownership',
  'Configured payment gateways with multi-currency checkout verification',
  'Product catalog import, category taxonomy, and SEO-friendly URLs',
  'Automated transactional emails (Order Confirmed, Dispatched, Delivered)',
  'Abandoned cart recovery sequence setup and attribution tracking',
  'Live staff training session with recorded dashboard administration video',
  '30 days of post-launch warranty, bug-fixing, and speed monitoring',
];

const FAQS = [
  {
    q: 'Do you build on Shopify or custom platforms?',
    a: 'We evaluate your business requirements. For most direct-to-consumer and retail brands, Shopify or WooCommerce provides the best balance of speed and control. For complex product configurators or custom subscriptions, we build headless stores using Next.js with a dedicated backend.',
  },
  {
    q: 'Can you migrate our products and customer history from our old store?',
    a: 'Yes. We migrate your complete product catalog, variants, images, customer accounts, and historical order records without downtime or lost SEO rankings.',
  },
  {
    q: 'What is the typical timeline for an e-commerce store build?',
    a: 'Standard bespoke stores typically take 3 to 5 weeks from kickoff to launch. More complex headless setups with deep ERP integrations take 6 to 8 weeks.',
  },
  {
    q: 'Who owns the website and code after launch?',
    a: 'You do. 100% full ownership of all design files, source code, domains, and store credentials. We do not lock you into proprietary hosting.',
  },
];

const HERO_IMAGES: ServiceHeroImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1920&q=80',
    alt: 'Bespoke modern storefront and luxury retail display',
    caption: 'Custom Storefronts & Brand Experiences',
  },
  {
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1920&q=80',
    alt: 'Frictionless contactless payments and digital checkout terminal',
    caption: 'Frictionless 1-Click Payments & Checkout',
  },
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Automated fulfillment warehouse and logistics management',
    caption: 'Real-Time Inventory & ERP Automation',
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80',
    alt: 'Minimalist designer product showroom display',
    caption: 'High-Converting Product Architecture',
  },
];

export default function EcommerceDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-20">
        {/* Full-Width Background Image Carousel Hero Section */}
        <ServiceHero
          breadcrumbTitle="E-commerce Development"
          title="E-commerce Development Built for Conversions & Scale"
          description="We engineer fast, secure, and frictionless online stores designed to turn casual browsers into repeat buyers. From custom Shopify setups to headless Next.js commerce, we eliminate checkout drop-offs and scale with your inventory."
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
                &lt; 1.2s
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Target Page Speed
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                0%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Template Bloat
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                1-Page
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Streamlined Checkout
              </span>
            </div>
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-black text-slate-900">
                100%
              </span>
              <span className="mt-1 block font-body text-xs font-medium text-slate-500">
                Code &amp; Store Ownership
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Commerce Stack:
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
                Capabilities &amp; Scope
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Everything required to sell online with confidence.
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
                Tangible Outcomes
              </span>
              <h2 className="mt-2 font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What you receive upon completion
              </h2>
              <p className="mt-2 text-sm text-slate-600 font-body">
                We believe in complete transparency. Every e-commerce deployment includes:
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
              Common questions about our e-commerce process
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
                Ready to sell more?
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight">
                Let&apos;s build an online store customers love to buy from.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                Tell us about your products, volume, and target market. We will provide a clear technical roadmap and fixed quote within 24 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B4332] font-bold text-sm hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Start Your E-commerce Project</span>
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
