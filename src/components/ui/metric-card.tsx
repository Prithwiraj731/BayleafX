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
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionVal, value]);

  return (
    <div
      ref={ref}
      className={`bl-card p-6 sm:p-7 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-[#2D6A4F]/40 transition-all text-left w-full ${className}`}
    >
      <div className="font-sans text-4xl sm:text-5xl font-extrabold text-[#1B4332] tracking-tight leading-none">
        <span className="tabular-nums">
          {isInView ? <AnimatedNumber value={rounded} /> : '0'}
        </span>
        {suffix && <span className="text-[#2D6A4F] ml-0.5">{suffix}</span>}
      </div>

      <div className="mt-3 font-body text-sm font-semibold text-slate-800">
        {label}
      </div>

      <div className="mt-4 h-1 w-8 rounded-full bg-[#2D6A4F]/20" />
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
