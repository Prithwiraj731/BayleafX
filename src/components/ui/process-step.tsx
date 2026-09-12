import React from 'react';
import { ProcessStepProps } from '@/types';

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isLast = false,
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col items-start ${className}`}>
      {/* Top Header Row with Circle and Connector */}
      <div className="flex w-full items-center mb-5">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2D6A4F]/50 bg-[#1B4332]/40 font-mono text-xs font-bold text-[#52B788] shadow-[0_0_16px_rgba(45,106,79,0.25)]">
          0{number}
        </div>

        {!isLast && (
          <div className="hidden md:block ml-4 h-[1px] flex-1 bg-gradient-to-r from-[#2D6A4F]/60 via-white/10 to-transparent" />
        )}
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight text-[#F5F7F5] mb-2">
        {title}
      </h3>

      <p className="font-body text-xs md:text-sm leading-relaxed text-[#9CA3AF]">
        {description}
      </p>
    </div>
  );
};
