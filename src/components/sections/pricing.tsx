'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

interface FeatureItem {
  name: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  badge: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  description: string;
  features: FeatureItem[];
  isPopular?: boolean;
  buttonText: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    badge: 'Starter Plan',
    name: 'Starter',
    monthlyPrice: '₹10,000',
    yearlyPrice: '₹8,000',
    period: '/mo',
    description: 'Essential high-speed digital foundation for local businesses, creators & consultants.',
    isPopular: false,
    buttonText: 'Get Started',
    features: [
      { name: 'Custom Responsive Website (Up to 5 Pages)', included: true },
      { name: 'Modern UI/UX Design & Typography', included: true },
      { name: 'Fast Google SEO & Speed Optimization', included: true },
      { name: 'Domain, SSL & Edge Cloud Hosting Setup', included: true },
      { name: 'WhatsApp Chat & Lead Contact Form', included: true },
      { name: 'Two-Way Automated Email Notifications', included: true },
      { name: 'Full-Stack Web App (React 19 & Next.js 15)', included: false },
      { name: 'Customer Database & User Authentication', included: false },
      { name: 'Payment Gateway (Stripe/Razorpay/UPI)', included: false },
      { name: 'Google & Meta Paid Ads Campaign Funnel', included: false },
      { name: '24/7 Dedicated Priority Engineering SLA', included: false },
    ],
  },
  {
    id: 'growth',
    badge: 'Standard Plan',
    name: 'Growth',
    monthlyPrice: '₹25,000',
    yearlyPrice: '₹20,000',
    period: '/mo',
    description: 'Complete full-stack platform, customer accounts, payments, and conversion engineering.',
    isPopular: true,
    buttonText: 'Get Started',
    features: [
      { name: 'Custom Responsive Website (Unlimited Pages)', included: true },
      { name: 'Modern UI/UX Design & Clickable Prototype', included: true },
      { name: 'Fast Google SEO & Speed Optimization', included: true },
      { name: 'Domain, SSL & Edge Cloud Hosting Setup', included: true },
      { name: 'WhatsApp Chat & Lead Contact Form', included: true },
      { name: 'Two-Way Automated Email Notifications', included: true },
      { name: 'Full-Stack Web App (React 19 & Next.js 15)', included: true },
      { name: 'Customer Database & User Authentication', included: true },
      { name: 'Payment Gateway (Stripe/Razorpay/UPI)', included: true },
      { name: 'Google & Meta Paid Ads Campaign Funnel', included: false },
      { name: '24/7 Dedicated Priority Engineering SLA', included: false },
    ],
  },
  {
    id: 'custom',
    badge: 'Enterprise Plan',
    name: 'Custom',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    period: '',
    description: 'Dedicated engineering squad, bespoke cloud architecture, ads funnels, and enterprise SLA.',
    isPopular: false,
    buttonText: 'Get Started',
    features: [
      { name: 'Custom Responsive Website (Unlimited Pages)', included: true },
      { name: 'Modern UI/UX Design & Complete Design System', included: true },
      { name: 'Enterprise SEO Audit & Authority Growth', included: true },
      { name: 'High-Availability Cloud Architecture & CI/CD', included: true },
      { name: 'WhatsApp, Slack & CRM Webhook Sync', included: true },
      { name: 'Two-Way Automated Email Notifications', included: true },
      { name: 'Complex Full-Stack Software & API Integrations', included: true },
      { name: 'Role-Based Authentication & Distributed DB', included: true },
      { name: 'Multi-Currency Subscriptions & Invoicing Portal', included: true },
      { name: 'Full Google & Meta Paid Ads Funnel Setup', included: true },
      { name: '24/7 Dedicated Priority Engineering SLA & Call Line', included: true },
    ],
  },
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

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
        <div className="text-center mb-8">
          <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Predictable plans. World-class delivery.
          </h3>
          <p className="mt-4 max-w-xl mx-auto font-body text-sm sm:text-base text-slate-400 leading-relaxed">
            Transparent pricing tailored to scale with your business. Choose your plan below.
          </p>
        </div>

        {/* Toggle Switch placed UPON the pricing boxes */}
        <div className="mb-12 sm:mb-14 flex items-center justify-center gap-3">
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
          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
            Save 20%
          </span>
        </div>

        {/* 3 Frosted Glassmorphic Cards matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isCustom = plan.id === 'custom';

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
                      {isCustom ? 'Custom' : isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.period && (
                      <span className="font-sans text-sm font-medium text-slate-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[38px]">
                    {plan.description}
                  </p>

                  <div className="my-6 border-b border-white/10" />

                  {/* Feature Checklist with Ticks and Crosses */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        {feature.included ? (
                          <>
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mt-0.5">
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </div>
                            <span className="text-slate-200 font-medium">{feature.name}</span>
                          </>
                        ) : (
                          <>
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-500 mt-0.5">
                              <X className="h-3.5 w-3.5 stroke-[2.5]" />
                            </div>
                            <span className="text-slate-500/80">{feature.name}</span>
                          </>
                        )}
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
                      href={`/contact?plan=${plan.id}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                      className="w-full py-3.5 text-sm font-bold bg-white text-slate-900 border-white hover:border-emerald-400 [&_.dot-bg]:bg-[#1B4332] [&_.hover-text]:text-white"
                    />
                  ) : (
                    <InteractiveHoverButton
                      text={plan.buttonText}
                      variant="dark"
                      href={`/contact?plan=${plan.id}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                      className="w-full py-3 text-sm font-semibold"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connected Tree branch pill label matching photo */}
        <div className="mt-14 flex flex-col items-center">
          <div className="h-6 w-px bg-white/20" />
          <div className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-medium text-slate-400">
            Plans
          </div>
        </div>
      </Container>
    </section>
  );
};
