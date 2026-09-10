'use client';

import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion';
import { MetricCardProps } from '@/types';

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  suffix = '',
  label,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionVal = useMotionValue(0);

  const rounded = useTransform(motionVal, (latest) => {
    if (Number.isInteger(value)) {
      return Math.floor(latest).toString();
    }
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionVal, value]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#121212]/80 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#8B0D1A]/60 hover:shadow-[0_0_30px_rgba(139,13,26,0.2)] ${className}`}
    >
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F2ED]">
        <span className="tabular-nums">
          {isInView ? <AnimatedNumber value={rounded} /> : '0'}
        </span>
        {suffix && <span className="ml-1 text-[#8B0D1A] text-3xl sm:text-4xl md:text-5xl">{suffix}</span>}
      </div>

      <div className="mt-3 text-xs font-mono tracking-widest uppercase text-[#9E9B95]">
        {label}
      </div>

      <div className="mt-5 h-[2px] w-10 bg-gradient-to-r from-[#8B0D1A] to-transparent" />
    </div>
  );
};

const AnimatedNumber: React.FC<{ value: MotionValue<string> }> = ({ value }) => {
  const [display, setDisplay] = React.useState('0');

  useEffect(() => {
    return value.on('change', (latest: string) => {
      setDisplay(latest);
    });
  }, [value]);

  return <>{display}</>;
};
