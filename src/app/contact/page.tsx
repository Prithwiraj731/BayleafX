'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, MessageCircle, Clock, ShieldCheck, Users, Loader2, Sparkles, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { WHATSAPP_URL } from '@/lib/constants';

const PLAN_OPTIONS = [
  { id: 'starter', label: 'Starter Plan (₹10,000/mo)' },
  { id: 'growth', label: 'Standard / Growth Plan (₹25,000/mo)' },
  { id: 'custom', label: 'Custom / Enterprise Plan' },
  { id: 'general', label: 'General Project Inquiry / Other' },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan')?.toLowerCase() || '';

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'general',
    message: '',
  });

  // Auto-select plan from query parameter
  useEffect(() => {
    if (planParam) {
      if (planParam.includes('starter')) {
        setFormData((prev) => ({ ...prev, plan: 'Starter Plan (₹10,000/mo)' }));
      } else if (planParam.includes('growth') || planParam.includes('standard')) {
        setFormData((prev) => ({ ...prev, plan: 'Standard / Growth Plan (₹25,000/mo)' }));
      } else if (planParam.includes('custom') || planParam.includes('pro') || planParam.includes('enterprise')) {
        setFormData((prev) => ({ ...prev, plan: 'Custom / Enterprise Plan' }));
      } else {
        setFormData((prev) => ({ ...prev, plan: planParam }));
      }
    } else {
      setFormData((prev) => ({ ...prev, plan: 'Standard / Growth Plan (₹25,000/mo)' }));
    }
  }, [planParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit inquiry.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || 'Something went wrong. Please try again or chat with us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Details Column */}
      <div className="lg:col-span-5 space-y-7">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Direct Consultation
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Let&apos;s build your vision.
          </h1>
          <p className="mt-4 font-body text-base text-slate-600 leading-relaxed">
            Tell us about your project or choose a package. We will get back to you within 24 hours with a clear roadmap, technical suggestions, and a fixed quote.
          </p>
        </div>

        <div className="space-y-3.5 pt-2">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <Clock className="h-4 w-4" />
            </div>
            <span className="font-medium">Guaranteed response within 24 hours</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <Users className="h-4 w-4" />
            </div>
            <span className="font-medium">Free 30-min strategy &amp; architecture audit</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <span className="font-medium">100% private, confidential &amp; NDA protected</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/80 space-y-4">
          <div>
            <p className="font-sans text-xs text-slate-500 mb-1 font-semibold">Direct Email:</p>
            <a
              href="mailto:bayleafxtechnologies@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors underline underline-offset-4"
            >
              <Mail className="h-4 w-4" />
              <span>bayleafxtechnologies@gmail.com</span>
            </a>
          </div>
          <div>
            <p className="font-sans text-xs text-slate-500 mb-1 font-semibold">Instant WhatsApp Chat:</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors underline underline-offset-4"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+91 70700 72227</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bl-card p-8 sm:p-12 text-center space-y-5"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
                Inquiry received &amp; confirmation sent!
              </h2>
              <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We have dispatched a confirmation copy of your query to <span className="font-semibold text-slate-800">{formData.email}</span>.
              </p>
              {formData.plan && (
                <div className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-semibold text-[#1B4332]">
                  Selected Plan: {formData.plan}
                </div>
              )}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', plan: 'Standard / Growth Plan (₹25,000/mo)', message: '' });
                  }}
                  className="text-xs font-semibold text-[#1B4332] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bl-card p-7 sm:p-9 space-y-5 bg-white border border-slate-200 shadow-sm rounded-2xl">
              {errorMessage && (
                <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Your Full Name"
                  required
                  placeholder="Sarah Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                  label="Work Email"
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone / WhatsApp Number (Optional)"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                {/* Dropdown for Selected Plan */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="plan-select" className="font-body text-xs font-semibold text-slate-700">
                    Selected Plan / Inquiry Topic
                  </label>
                  <div className="relative">
                    <select
                      id="plan-select"
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm font-medium text-slate-800 transition-colors focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F] cursor-pointer"
                    >
                      {PLAN_OPTIONS.map((option) => (
                        <option key={option.id} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </div>

              <Textarea
                label="Project Details & Requirements"
                required
                rows={4}
                placeholder="Tell us about your business, target timeline, key features, or any specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="pt-2">
                {isSubmitting ? (
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1B4332]/80 text-white py-3.5 px-6 text-sm font-semibold cursor-not-allowed"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting your inquiry...</span>
                  </button>
                ) : (
                  <InteractiveHoverButton
                    type="submit"
                    text="Submit Project Inquiry"
                    variant="solid"
                    className="w-full py-3.5 text-sm sm:text-base font-semibold"
                  />
                )}
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1B4332] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1B4332] font-bold">Contact Us</span>
          </div>

          <Suspense fallback={<div className="py-20 text-center text-slate-400 text-sm">Loading contact details...</div>}>
            <ContactFormInner />
          </Suspense>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
