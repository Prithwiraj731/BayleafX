import React from 'react';
import { TestimonialCardProps } from '@/types';
import { GlassCard } from './glass-card';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  company,
  className = '',
}) => {
  return (
    <GlassCard hover={false} className={`relative p-8 md:p-12 bg-gradient-to-b from-[#111714] to-[#0D120F] border-white/10 ${className}`}>
      {/* Decorative Quotation Mark in Bayleaf Accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-6 font-display text-7xl md:text-8xl font-light text-[#2D6A4F]/25 select-none"
      >
        &ldquo;
      </span>

      <blockquote className="relative z-10">
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-[#F5F7F5] italic">
          &ldquo;{quote}&rdquo;
        </p>

        <footer className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
          <div className="h-10 w-10 rounded-full bg-[#1B4332]/40 border border-[#2D6A4F]/60 flex items-center justify-center font-display font-bold text-[#52B788] text-sm shadow-[0_0_12px_rgba(45,106,79,0.2)]">
            {author.charAt(0)}
          </div>
          <div>
            <cite className="not-italic font-display text-base font-semibold text-[#F5F7F5] block">
              {author}
            </cite>
            <span className="font-body text-xs md:text-sm text-[#9CA3AF]">
              {title} &mdash; <span className="text-[#52B788] font-medium">{company}</span>
            </span>
          </div>
        </footer>
      </blockquote>
    </GlassCard>
  );
};
