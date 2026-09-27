'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SocialDock } from '@/components/ui/social-dock';
import { fadeInUp } from '@/lib/animations';

export const SocialDockSection: React.FC = () => {
  return (
    <section
      id="connect"
      className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#F8FAF9] via-white to-white border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-emerald-50/70 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
        >
          {/* Main Section Heading - No overline */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-[1.2] tracking-tight mb-8 sm:mb-10">
            Connect with us directly.
          </h2>

          {/* Enlarged Modern Floating Social Dock */}
          <div className="pt-2 pb-1">
            <SocialDock tooltipPosition="top" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
