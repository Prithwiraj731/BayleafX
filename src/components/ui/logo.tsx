'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    sm: 'h-5 sm:h-6 max-h-6 w-auto',
    default: 'h-6 sm:h-7 md:h-8 max-h-8 w-auto',
    lg: 'h-8 sm:h-10 md:h-11 max-h-11 w-auto',
  };

  const imageElement = (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <Image
        src="/logo.svg"
        alt="BayleafX"
        width={1482}
        height={222}
        priority
        unoptimized
        className={`object-contain transition-all duration-300 group-hover:opacity-95 group-hover:brightness-110 ${sizeClasses[size]}`}
      />
      <span className="sr-only">BayleafX</span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B0D1A] rounded-sm transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label="BayleafX Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
};

