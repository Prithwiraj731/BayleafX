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
      className={`mb-10 md:mb-12 ${isCentered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {overline && (
        <div className={`mb-3 flex items-center ${isCentered ? 'justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] border border-[#C8E6C9] font-mono text-[11px] font-semibold tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F]" />
            {overline}
          </span>
        </div>
      )}

      <h2 className="font-sans text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.15] tracking-[-0.02em]">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3.5 font-body text-base sm:text-lg leading-relaxed text-slate-600 ${
            isCentered ? 'mx-auto' : ''
          } max-w-[620px]`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
