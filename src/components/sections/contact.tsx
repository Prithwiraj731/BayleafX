'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Mail, ShieldCheck, Clock, Users } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Copy & Trust Points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/60">
              Get In Touch
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Ready to build something real?
            </h2>

            <p className="font-sans text-base text-slate-600 leading-relaxed">
              Tell us about your project. A founding partner will review your requirements and respond within 24 hours with an actionable technical and design assessment.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Response within 24 hours guarantee</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Users className="h-4 w-4" />
                </div>
                <span>Direct consultation with principal engineers</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Mutual NDA executed prior to deep scoping</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="font-sans text-xs text-slate-500 mb-1">Direct inquiries:</p>
              <a
                href="mailto:hello@bayleafx.com"
                className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors underline underline-offset-4"
              >
                <Mail className="h-4 w-4" />
                <span>hello@bayleafx.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Form Container */}
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
                    Message received.
                  </h3>
                  <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. We will review your project details and get in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bl-card p-6 sm:p-8 space-y-5">
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
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Send project inquiry
                    </Button>
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
