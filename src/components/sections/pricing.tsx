'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

interface PricingPlan {
  id: string;
  badge: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    badge: 'Starter Plan',
    name: 'Free Consultation',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    period: '/forever',
    description: 'Perfect for exploring your ideas and getting an expert architecture roadmap.',
    features: [
      '30-min strategy & scoping call',
      'Technical architecture audit',
      'Custom project cost estimate',
      'Technology stack recommendations',
      'Basic security & speed checklist',
    ],
    isPopular: false,
    buttonText: 'Get Started',
  },
  {
    id: 'standard',
    badge: 'Standard Plan',
    name: 'Growth',
    monthlyPrice: '$999',
    yearlyPrice: '$799',
    period: '/mo',
    description: 'Full-stack development, continuous feature builds, and dedicated speed optimization.',
    features: [
      'Full-stack Next.js web application',
      'Custom responsive UI/UX design',
      'Unlimited revisions during build',
      'Priority email & Slack support',
      'Search engine (SEO) optimization',
      'Continuous performance tuning',
    ],
    isPopular: true,
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    badge: 'Pro / Enterprise',
    name: 'Scale',
    monthlyPrice: '$2,499',
    yearlyPrice: '$1,999',
    period: '/mo',
    description: 'High-availability infrastructure, complex integrations, and dedicated engineering squad.',
    features: [
      'Multi-platform software architecture',
      'Custom database & cloud DevOps',
      '24/7 priority support & SLA',
      'Enterprise authentication & billing',
      'Dedicated lead developer & designer',
      'Fortified security & compliance audit',
    ],
    isPopular: false,
    buttonText: 'Get Started',
  },
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleSelectPlan = (planName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill message or dispatch custom event if needed
      const messageInput = document.querySelector('textarea[name="message"], textarea') as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `Hi BayleafX team, I am interested in the ${planName} plan (${isYearly ? 'Yearly billing' : 'Monthly billing'}). Let's discuss getting started!`;
      }
    }
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0A0F0D] py-24 sm:py-32 text-white selection:bg-emerald-500 selection:text-black"
    >
      {/* Background Subtle Gradient & Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-emerald-950/30 blur-[130px]" />
        <div className="absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-[#1B4332]/20 blur-[110px]" />
      </div>

      {/* Top Floating Pill Navigation Indicator matching photo */}
      <div className="relative z-10 mx-auto mb-14 flex max-w-fit items-center gap-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-md shadow-xl text-xs font-medium text-slate-300">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white font-bold text-[10px]">✕</span>
        <a href="#hero" className="hover:text-white transition-colors">Home</a>
        <a href="#pricing" className="text-white font-semibold">Pricing</a>
        <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <a
          href="#contact"
          className="rounded-full bg-white px-3.5 py-1 text-slate-900 font-semibold hover:bg-slate-100 transition-all text-xs"
        >
          Inquire
        </a>
      </div>

      {/* Giant Blurred Frosted Heading Backdrop matching Image 2 */}
      <div className="relative flex justify-center items-center">
        <h2
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 sm:-top-20 z-0 text-center text-7xl sm:text-9xl md:text-[150px] font-black tracking-tight text-white/[0.12] select-none blur-[2px]"
        >
          Pricing
        </h2>
      </div>

      <Container className="relative z-10 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
            Transparent Investment
          </p>
          <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Predictable plans. World-class delivery.
          </h3>
          <p className="mt-4 max-w-xl mx-auto font-body text-sm sm:text-base text-slate-400 leading-relaxed">
            No hidden fees, no bloated agency markups. Transparent retainers and fixed-price packages designed to scale with you.
          </p>
        </div>

        {/* 3 Frosted Glassmorphic Cards matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 backdrop-blur-2xl transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-2 border-white/40 bg-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-emerald-400/30'
                    : 'border border-white/10 bg-white/[0.03] hover:border-white/20 shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-[#1B4332] px-3.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Top Plan Label */}
                  <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {plan.badge}
                  </span>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="font-sans text-sm font-medium text-slate-400">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="my-6 border-b border-white/10" />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-emerald-400 mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-4">
                  {plan.isPopular ? (
                    <InteractiveHoverButton
                      text={plan.buttonText}
                      variant="primary"
                      onClick={() => handleSelectPlan(plan.name)}
                      className="w-full py-3.5 text-sm font-bold bg-white text-slate-900 border-white hover:border-emerald-400 [&_.dot-bg]:bg-[#1B4332] [&_.hover-text]:text-white"
                    />
                  ) : (
                    <InteractiveHoverButton
                      text={plan.buttonText}
                      variant="dark"
                      onClick={() => handleSelectPlan(plan.name)}
                      className="w-full py-3 text-sm font-semibold"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Toggle Switch at bottom matching Image 2 */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative flex h-7 w-13 cursor-pointer items-center rounded-full bg-white/20 p-1 transition-colors hover:bg-white/30"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  isYearly ? 'translate-x-6 bg-emerald-400' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="font-sans text-sm font-medium text-slate-300">
              Billed Yearly
            </span>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
              Save 20%
            </span>
          </div>

          {/* Connected Tree branch pill label matching photo */}
          <div className="mt-4 flex flex-col items-center">
            <div className="h-6 w-px bg-white/20" />
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-medium text-slate-400">
              Plans
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
