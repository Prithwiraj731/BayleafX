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
    <GlassCard hover={false} className={`relative p-8 md:p-12 bg-[#121212] border-white/10 ${className}`}>
      {/* Decorative Quotation Mark in Crimson Accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-6 font-display text-7xl md:text-8xl font-light text-[#8B0D1A]/20 select-none"
      >
        &ldquo;
      </span>

      <blockquote className="relative z-10">
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-[#F5F2ED] italic">
          &ldquo;{quote}&rdquo;
        </p>

        <footer className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
          <div className="h-10 w-10 rounded-full bg-[#8B0D1A]/20 border border-[#8B0D1A]/50 flex items-center justify-center font-display font-bold text-[#F5F2ED] text-sm">
            {author.charAt(0)}
          </div>
          <div>
            <cite className="not-italic font-display text-base font-semibold text-[#F5F2ED] block">
              {author}
            </cite>
            <span className="font-body text-xs md:text-sm text-[#9E9B95]">
              {title} &mdash; <span className="text-[#8B0D1A] font-medium">{company}</span>
            </span>
          </div>
        </footer>
      </blockquote>
    </GlassCard>
  );
};
