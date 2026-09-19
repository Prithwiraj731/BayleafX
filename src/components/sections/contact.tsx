'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, ShieldCheck, Clock, Users, MessageCircle, Loader2 } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { fadeInUp } from '@/lib/animations';
import { WHATSAPP_URL } from '@/lib/constants';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
        throw new Error(errorData.error || 'Failed to submit form.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Let&apos;s build something great together.
            </h2>

            <p className="font-sans text-base text-slate-600 leading-relaxed">
              Have an idea or need a new website? Send us a message and we will get back to you within 24 hours with a clear plan, timeline, and free estimate.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Guaranteed response within 24 hours</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Users className="h-4 w-4" />
                </div>
                <span>Free project consultation &amp; cost estimate</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>100% private &amp; confidential</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div>
                <p className="font-sans text-xs text-slate-500 mb-1">Email inquiries:</p>
                <a
                  href="mailto:bayleafxtechnologies@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors underline underline-offset-4"
                >
                  <Mail className="h-4 w-4" />
                  <span>bayleafxtechnologies@gmail.com</span>
                </a>
              </div>
              <div>
                <p className="font-sans text-xs text-slate-500 mb-1">WhatsApp chat:</p>
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
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bl-card p-8 sm:p-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-slate-900">
                    Inquiry received &amp; confirmation sent!
                  </h3>
                  <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A confirmation copy of your message has been sent to <span className="font-semibold text-slate-800">{formData.email}</span>. Our team will review your project details and respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="text-xs font-semibold text-[#1B4332] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bl-card p-6 sm:p-8 space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                      {errorMessage}
                    </div>
                  )}

                  <Input
                    label="Your Name"
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

                  <Textarea
                    label="Project Details"
                    required
                    rows={4}
                    placeholder="Tell us what you are building, target timeline, and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <div className="pt-2">
                    {isSubmitting ? (
                      <button
                        type="button"
                        disabled
                        className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1B4332]/80 text-white py-3 px-6 text-sm font-semibold cursor-not-allowed"
                      >
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending inquiry...</span>
                      </button>
                    ) : (
                      <InteractiveHoverButton
                        type="submit"
                        text="Send project inquiry"
                        variant="solid"
                        className="w-full py-3 text-sm sm:text-base font-semibold"
                      />
                    )}
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
