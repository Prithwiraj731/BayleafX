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
          <span className="font-mono text-[11px] font-semibold tracking-[0.24em] uppercase text-[#8B0D1A]">
            {overline}
          </span>
        </div>
      )}

      <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-[#F5F2ED] sm:text-4xl md:text-5xl leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 font-body text-sm md:text-base leading-relaxed text-[#9E9B95] ${
            isCentered ? 'mx-auto' : ''
          } max-w-2xl`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
