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
    sm: 'h-6 sm:h-7 max-h-7 w-auto',
    default: 'h-7 sm:h-8 md:h-9 max-h-9 w-auto',
    lg: 'h-9 sm:h-11 md:h-12 max-h-12 w-auto',
  };

  const imageElement = (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <Image
        src="/logo-dark-text.svg"
        alt="BayleafX"
        width={1482}
        height={222}
        priority
        unoptimized
        className={`object-contain transition-opacity duration-200 hover:opacity-90 ${sizeClasses[size]}`}
      />
      <span className="sr-only">BayleafX</span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded-md transition-transform duration-200"
        aria-label="BayleafX Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
};
