'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { GlassCard } from './glass-card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-full ${className}`}
    >
      <GlassCard hover={true} className="flex h-full flex-col justify-between group bg-gradient-to-b from-[#111714] to-[#0D120F] border-white/[0.08] hover:border-[#2D6A4F]/60 transition-all duration-300">
        <div>
          {/* Icon Badge */}
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#15201A]/70 text-[#9CA3AF] transition-all duration-300 group-hover:border-[#2D6A4F]/60 group-hover:bg-[#1B4332]/40 group-hover:text-[#52B788] group-hover:shadow-[0_0_20px_rgba(45,106,79,0.25)]">
            <Icon className="h-5 w-5 stroke-[1.5]" />
          </div>

          {/* Titles */}
          <h3 className="mb-2 font-display text-lg font-bold tracking-tight text-[#F5F7F5] transition-colors duration-200 group-hover:text-white md:text-xl">
            {title}
          </h3>

          <p className="font-body text-xs md:text-sm leading-relaxed text-[#9CA3AF]">
            {subtitle}
          </p>
        </div>

        {/* Hover Extended Description */}
        {description && (
          <div className="mt-5 pt-4 border-t border-white/[0.06]">
            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0.75,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-body text-xs leading-relaxed text-[#6C7A70] group-hover:text-[#9CA3AF] transition-colors duration-200">
                {description}
              </p>
            </motion.div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};
