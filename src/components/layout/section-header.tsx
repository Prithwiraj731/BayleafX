'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { SectionHeaderProps } from '@/types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {overline && (
        <div className={`mb-3.5 flex items-center gap-2.5 ${isCentered ? 'justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/15 border border-[#2D6A4F]/30 font-mono text-[11px] font-semibold tracking-[0.22em] uppercase text-[#52B788]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52B788]" />
            {overline}
          </span>
        </div>
      )}

      <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#F5F7F5] sm:text-4xl md:text-5xl leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 font-body text-sm md:text-base leading-relaxed text-[#9CA3AF] ${
            isCentered ? 'mx-auto' : ''
          } max-w-2xl`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
