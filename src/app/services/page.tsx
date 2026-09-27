import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  Monitor,
  Palette,
  Server,
  Share2,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { SERVICE_PILLARS } from '@/lib/constants';
import { SERVICES_CAROUSEL_DATA } from '@/lib/services-data';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities | BayleafX',
  description:
    'Explore BayleafX core capabilities: Web & App Development, E-commerce, UI/UX Design Systems, Website Maintenance, Paid Ads, Social Media, and Google SEO.',
};

const PILLAR_ICONS = [Monitor, Palette, TrendingUp];

const SERVICE_ICONS: Record<string, React.ElementType> = {
  ecommerce: ShoppingBag,
  maintenance: Server,
  uiux: Palette,
  webapp: Code2,
  social: Share2,
  paidads: Target,
  seo: TrendingUp,
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B4332] font-semibold">
              Capabilities Directory
            </span>
            <h1 className="mt-3 font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Everything you need to grow online.
            </h1>
            <p className="mt-5 font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide full-spectrum digital transformation. Explore our specialized services below or contact us to tailor a custom multi-disciplinary package.
            </p>
          </div>

          {/* 7 Dedicated Specialized Services Grid */}
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                Specialized Services
              </span>
              <span className="font-mono text-xs text-slate-400">
                07 Dedicated Solutions
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {SERVICES_CAROUSEL_DATA.map((service, index) => {
                const IconComponent = SERVICE_ICONS[service.id] || Sparkles;
                return (
                  <Link
                    key={service.id}
                    href={service.ctaHref || '/services'}
                    className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1B4332] hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-[#1B4332] transition-colors">
                          0{index + 1}
                        </span>
                      </div>

                      <span className="inline-block text-[11px] font-bold text-[#1B4332] uppercase tracking-wider mb-1">
                        {service.label}
                      </span>
                      <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-[#1B4332] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 font-body leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1B4332]">
                      <span>Explore service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3 Core Strategic Pillars */}
          <div className="mt-20">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
                Strategic Pillars
              </span>
              <span className="font-mono text-xs text-slate-400">
                Full-Service Retainers
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SERVICE_PILLARS.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx] || Monitor;
                return (
                  <div
                    key={pillar.name}
                    className="bl-card p-8 rounded-2xl bg-[#F8FAF9] border border-slate-200/90 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#1B4332] mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        PILLAR 0{idx + 1}
                      </span>
                      <h2 className="mt-2 font-sans text-2xl font-bold text-slate-900">
                        {pillar.name}
                      </h2>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="my-6 border-b border-slate-200/60" />

                      <ul className="space-y-2.5">
                        {pillar.services.map((service) => (
                          <li key={service.title} className="text-xs sm:text-sm font-medium text-slate-700">
                            • {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/60">
                      <InteractiveHoverButton
                        text="Explore Capabilities"
                        href={`/services/${pillar.slug || 'web-app-development'}`}
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
