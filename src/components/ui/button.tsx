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
    'relative inline-flex items-center justify-center font-body font-semibold tracking-[-0.01em] transition-all duration-200 rounded-[8px] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#2D6A4F] focus-visible:outline-offset-[3px] select-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none';

  const sizeStyles = {
    default: 'text-sm py-2.5 px-5 gap-2',
    lg: 'text-sm sm:text-base py-3 px-6 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#1B4332] text-white hover:bg-[#2D6A4F] active:bg-[#143526] shadow-sm hover:shadow border border-transparent',
    ghost:
      'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-xs active:bg-slate-100',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={combinedClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          <span>{children}</span>
          {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      className={combinedClasses}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200">{icon}</span>}
    </motion.button>
  );
};
