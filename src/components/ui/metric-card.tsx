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
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#111714] to-[#0D120F] p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#2D6A4F]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(45,106,79,0.18)] ${className}`}
    >
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F7F5]">
        <span className="tabular-nums">
          {isInView ? <AnimatedNumber value={rounded} /> : '0'}
        </span>
        {suffix && <span className="ml-1 text-[#52B788] text-3xl sm:text-4xl md:text-5xl font-extrabold">{suffix}</span>}
      </div>

      <div className="mt-3 text-xs font-mono tracking-widest uppercase text-[#9CA3AF]">
        {label}
      </div>

      <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-[#52B788] via-[#2D6A4F] to-transparent" />
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
