'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Clock,
  ShieldCheck,
  Layers,
  Sparkles,
  Lock,
  Globe2,
  Users
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ENGAGEMENT_MODELS = [
  {
    icon: Users,
    title: 'Dedicated Engineering Pod',
    description:
      'Cross-functional team of senior engineers and a staff architect embedded directly into your sprint cycle.',
    badge: 'Retainer / Sprint',
  },
  {
    icon: Layers,
    title: 'Fixed-Scope Turnkey Sprint',
    description:
      'Defined milestone delivery with locked budget and timelines for web apps, portals, and design systems.',
    badge: 'Milestone-Based',
  },
  {
    icon: ShieldCheck,
    title: 'Architecture & Scalability Audit',
    description:
      'Triage of bottlenecks, database indexing, infrastructure egress costs, and P95 latency profiles.',
    badge: '1–2 Week Engagement',
  },
];

const SCOPE_OPTIONS = [
  'SaaS / Web App',
  'Enterprise Platform',
  'UI/UX & Design System',
  'Architecture Audit',
];

const TIMELINE_OPTIONS = [
  'Immediate (< 30d)',
  '1–3 Months',
  'Exploring Roadmap',
];

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedScope: 'SaaS / Web App',
    timeline: 'Immediate (< 30d)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Enterprise Contact and Architectural RFP"
      className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden border-t border-white/[0.08] bg-[#0A0D0B]"
    >
      {/* Background Bayleaf Green Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D6A4F]/[0.09] blur-[170px]" />

      <Container>
        <SectionHeader
          overline="06 // ENGAGEMENT & ARCHITECTURAL RFP"
          title="Initiate an Architectural Partnership."
          description="Direct collaboration with senior engineers. No sales intermediaries, no junior team handoffs, no subcontracted code."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Engagement Models & Institutional Assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#111714] to-[#0D120F] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#52B788] mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Flexible Engagement Formats</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F7F5] mb-2">
                Structured for Engineering Rigor.
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                Whether you need a dedicated pod to accelerate product velocity or a fixed-scope release, we integrate seamlessly with your tech leadership.
              </p>

              {/* 3 Models */}
              <div className="space-y-4">
                {ENGAGEMENT_MODELS.map((model) => {
                  const Icon = model.icon;
                  return (
                    <div
                      key={model.title}
                      className="rounded-lg border border-white/[0.06] bg-[#141C17]/60 p-4 transition-colors hover:border-[#2D6A4F]/40 hover:bg-[#16221B]"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#52B788]" />
                          <h4 className="font-display text-sm font-bold text-[#F5F7F5]">
                            {model.title}
                          </h4>
                        </div>
                        <span className="font-mono text-[10px] tracking-wider text-[#52B788] bg-[#2D6A4F]/20 px-2 py-0.5 rounded border border-[#2D6A4F]/30">
                          {model.badge}
                        </span>
                      </div>
                      <p className="font-body text-xs text-[#9CA3AF] leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Guarantees & SLA Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0E1410] p-6 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-bold">
                Enterprise Standards
              </h4>

              <div className="space-y-3 text-xs text-[#9CA3AF]">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#52B788] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F7F5]">24-Hour Technical SLA:</span> Direct response from our engineering leads, not an automated sales cadence.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-[#52B788] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F7F5]">Mutual NDA Standard:</span> We are happy to execute your standard mutual NDA prior to technical discovery.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="h-4 w-4 text-[#52B788] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F7F5]">Global Timezone Alignment:</span> Full overlap with North American and European sprint schedules.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#6C7A70]">Direct Communications:</span>
                <a
                  href="mailto:hello@bayleafx.com"
                  className="font-mono text-xs text-[#52B788] hover:text-[#74C69D] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@bayleafx.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Request Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-[#111714] to-[#0D120F] p-6 sm:p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),0_0_35px_rgba(45,106,79,0.12)] relative overflow-hidden"
            >
              {/* Top Hairline Bayleaf Accent */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#52B788] to-transparent" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1B4332]/50 text-[#52B788] border border-[#2D6A4F]/60 shadow-[0_0_30px_rgba(45,106,79,0.35)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F7F5] mb-2">
                      Request Transmitted.
                    </h3>
                    <p className="font-body text-sm text-[#9CA3AF] max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you, {formData.name}. Our staff architect will review your project brief for <span className="text-[#F5F7F5] font-semibold">{formData.selectedScope}</span> and contact you at <span className="text-[#52B788] font-semibold">{formData.email}</span> within 24 business hours.
                    </p>
                    <Button
                      variant="ghost"
                      size="default"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          selectedScope: 'SaaS / Web App',
                          timeline: 'Immediate (< 30d)',
                          message: '',
                        });
                      }}
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#F5F7F5] mb-1">
                        Request for Proposal & Discovery
                      </h3>
                      <p className="font-body text-xs text-[#9CA3AF]">
                        Provide brief technical details or schedule an architectural walkthrough.
                      </p>
                    </div>

                    {/* Scope Selector */}
                    <div>
                      <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Primary Scope of Engagement
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {SCOPE_OPTIONS.map((scope) => (
                          <button
                            key={scope}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedScope: scope })}
                            className={`px-2.5 py-2.5 rounded-lg border text-[11px] font-mono font-medium transition-all text-center cursor-pointer ${
                              formData.selectedScope === scope
                                ? 'border-[#52B788] bg-[#1B4332]/70 text-white font-bold shadow-[0_0_15px_rgba(45,106,79,0.3)]'
                                : 'border-white/10 bg-[#131A16] text-[#9CA3AF] hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {scope}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="e.g. Sarah Jenkins"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <Input
                        label="Work Email"
                        type="email"
                        placeholder="sarah@enterprise.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Company and Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Organization / Company"
                        placeholder="e.g. Acme Health Technologies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                      <div>
                        <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                          Target Deployment Horizon
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {TIMELINE_OPTIONS.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: time })}
                              className={`h-10 rounded-md border px-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-tight transition-all cursor-pointer flex items-center justify-center text-center ${
                                formData.timeline === time
                                  ? 'border-[#2D6A4F] bg-[#2D6A4F] text-white font-bold shadow-[0_0_12px_rgba(45,106,79,0.35)]'
                                  : 'border-white/10 bg-[#131A16] text-[#9CA3AF] hover:border-white/20 hover:text-white'
                              }`}
                            >
                              <span className="truncate">{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Textarea
                      label="Project Specifications & Architectural Goals"
                      rows={4}
                      placeholder="Outline your tech stack preferences, current latency bottlenecks, target user scale, or expected delivery milestones..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center text-xs sm:text-sm py-3.5 sm:py-4 shadow-[0_4px_24px_rgba(45,106,79,0.35)]"
                      icon={<ArrowUpRight className="h-4 w-4" />}
                    >
                      Submit Architectural Inquiry
                    </Button>

                    <p className="text-[11px] text-[#6C7A70] text-center leading-relaxed">
                      By submitting this inquiry, you agree to our{' '}
                      <a href="/terms" className="text-[#9CA3AF] hover:text-[#F5F7F5] underline underline-offset-2 transition-colors">
                        Terms of Service
                      </a>{' '}
                      and acknowledge our{' '}
                      <a href="/privacy" className="text-[#9CA3AF] hover:text-[#F5F7F5] underline underline-offset-2 transition-colors">
                        Privacy Policy
                      </a>. Strict confidentiality maintained.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
