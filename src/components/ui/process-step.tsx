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
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#8B0D1A]/50 bg-[#8B0D1A]/15 font-mono text-xs font-bold text-[#F5F2ED] shadow-[0_0_16px_rgba(139,13,26,0.3)]">
          0{number}
        </div>

        {!isLast && (
          <div className="hidden md:block ml-4 h-[1px] flex-1 bg-gradient-to-r from-[#8B0D1A]/40 via-white/10 to-transparent" />
        )}
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight text-[#F5F2ED] mb-2">
        {title}
      </h3>

      <p className="font-body text-xs md:text-sm leading-relaxed text-[#9E9B95]">
        {description}
      </p>
    </div>
  );
};
