'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  icon,
  children,
  href,
  className = '',
  disabled,
  onClick,
  type = 'button',
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase transition-all duration-300 rounded-[6px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] select-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none';

  const sizeStyles = {
    default: 'text-xs py-3 px-6 gap-2',
    lg: 'text-sm py-4 px-8 gap-2.5 tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-[#2D6A4F] text-white font-bold hover:bg-[#40916C] hover:shadow-[0_0_24px_rgba(45,106,79,0.45)] border border-[#2D6A4F] active:bg-[#1B4332]',
    ghost:
      'bg-transparent text-[#F5F7F5] border border-white/15 hover:border-[#2D6A4F] hover:bg-[#2D6A4F]/15 hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={combinedClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          <span>{children}</span>
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={combinedClasses}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300">{icon}</span>}
    </motion.button>
  );
};
