'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'default',
  className = '',
  href = '#',
}) => {
  const sizeClasses = {
    sm: 'text-lg tracking-tight',
    default: 'text-xl tracking-tight md:text-2xl',
    lg: 'text-3xl tracking-tight md:text-4xl',
  };

  const content = (
    <span
      className={`inline-flex items-center font-display font-black tracking-[-0.04em] uppercase select-none transition-all duration-300 hover:opacity-90 ${sizeClasses[size]} ${className}`}
    >
      <span className="text-[#F5F2ED]">BAYLEAF</span>
      <span className="text-[#8B0D1A] ml-0.5 inline-block transition-transform duration-300 group-hover:scale-110">
        X
      </span>
      <span className="sr-only">BayleafX</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B0D1A]">
        {content}
      </Link>
    );
  }

  return content;
};
