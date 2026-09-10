'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCardProps } from '@/types';

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      variants={
        hover
          ? {
              rest: {
                y: 0,
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
              },
              hover: {
                y: -4,
                borderColor: 'rgba(212, 168, 67, 0.4)',
                boxShadow:
                  '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 28px rgba(212, 168, 67, 0.12)',
              },
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 md:p-8 backdrop-blur-xl ${
        glow ? 'shadow-[0_0_32px_rgba(212,168,67,0.15)]' : ''
      } ${className}`}
    >
      {/* Subtle top hairline accent highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </motion.div>
  );
};
