import React from 'react';
import type { Metadata } from 'next';
import { Monitor, Palette, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { SERVICE_PILLARS } from '@/lib/constants';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities | BayleafX',
  description:
    'Explore BayleafX core capabilities: Web & App Development, UI/UX Design Systems, and Digital Marketing & Growth.',
};

const PILLAR_ICONS = [Monitor, Palette, TrendingUp];

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
              We provide full-spectrum digital transformation. Explore our specialized pillars below or book a consultation to tailor a custom solution.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx] || Monitor;
              return (
                <div
                  key={pillar.name}
                  className="bl-card p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
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

                    <div className="my-6 border-b border-slate-100" />

                    <ul className="space-y-2.5">
                      {pillar.services.map((service) => (
                        <li key={service.title} className="text-xs sm:text-sm font-medium text-slate-700">
                          • {service.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
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
        </Container>
      </main>

      <Footer />
    </div>
  );
}
