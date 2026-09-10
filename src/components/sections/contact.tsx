'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: 'Immediate',
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
      aria-label="Contact and Inquiries"
      className="relative w-full py-16 sm:py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0B0B]"
    >
      {/* Subtle Crimson Red Chiaroscuro Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B0D1A]/[0.08] blur-[160px]" />

      <Container>
        <SectionHeader
          overline="06 // DIRECT INQUIRY"
          title="Initiate an Architectural Engagement."
          description="Direct communication with our engineering team. No sales representatives, no automated questionnaires."
        />

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-[#121212] p-5 sm:p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(139,13,26,0.15)] relative overflow-hidden"
          >
            {/* Top Hairline Crimson Accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B0D1A] to-transparent" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8B0D1A]/20 text-[#8B0D1A] border border-[#8B0D1A]/40 shadow-[0_0_24px_rgba(139,13,26,0.35)]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F2ED] mb-2">
                    Inquiry Transmitted.
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#9E9B95] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Our lead architect will review your technical specifications and reach out to <span className="text-[#F5F2ED] font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <Button
                    variant="ghost"
                    size="default"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', timeline: 'Immediate', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Liam Vance"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Work Email"
                      type="email"
                      placeholder="liam@domain.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9E9B95]">
                      Target Deployment Horizon
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                      {['Immediate', '1–3 Months', 'Exploring'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`min-w-0 h-11 rounded-[6px] border px-1.5 sm:px-3 text-[10.5px] min-[380px]:text-[11.5px] sm:text-xs font-mono font-medium tracking-tight sm:tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center text-center select-none ${
                            formData.timeline === time
                              ? 'border-[#8B0D1A] bg-[#8B0D1A] text-[#F5F2ED] font-bold shadow-[0_0_15px_rgba(139,13,26,0.35)]'
                              : 'border-white/10 bg-[#171717] text-[#9E9B95] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span className="truncate">{time}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    label="Project Specifications & Challenges"
                    rows={4}
                    placeholder="Describe your architecture requirements, timeline constraints, or product goals..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-xs sm:text-sm py-3.5 sm:py-4"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    Transmit Inquiry
                  </Button>

                  <p className="text-[11px] text-[#6E6B66] text-center leading-relaxed px-1">
                    By transmitting an architectural inquiry, you agree to our{' '}
                    <a href="/terms" className="text-[#9E9B95] hover:text-[#F5F2ED] underline underline-offset-2 transition-colors">
                      Terms of Service
                    </a>{' '}
                    and acknowledge our{' '}
                    <a href="/privacy" className="text-[#9E9B95] hover:text-[#F5F2ED] underline underline-offset-2 transition-colors">
                      Privacy Policy
                    </a>.
                  </p>

                  {/* Trust Signals */}
                  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2.5 sm:gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#6E6B66] text-center sm:text-left">
                    <span className="flex items-center justify-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#8B0D1A] shrink-0" />
                      24h Direct Technical Response
                    </span>
                    <span className="flex items-center justify-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#8B0D1A] shrink-0" />
                      Mutual NDA Standard
                    </span>
                    <a
                      href="mailto:hello@bayleafx.com"
                      className="flex items-center justify-center gap-1.5 hover:text-[#F5F2ED] transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#8B0D1A] shrink-0" />
                      hello@bayleafx.com
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
