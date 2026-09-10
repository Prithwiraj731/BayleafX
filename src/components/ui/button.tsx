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
    'relative inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase transition-all duration-300 rounded-[6px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B0D1A] select-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none';

  const sizeStyles = {
    default: 'text-xs py-3 px-6 gap-2',
    lg: 'text-sm py-4 px-8 gap-2.5 tracking-wider',
  };

  const variantStyles = {
    primary:
      'bg-[#8B0D1A] text-[#F5F2ED] font-bold hover:bg-[#A81324] hover:shadow-[0_0_30px_rgba(139,13,26,0.55)] border border-[#8B0D1A] active:bg-[#700A15]',
    ghost:
      'bg-transparent text-[#F5F2ED] border border-white/15 hover:border-[#8B0D1A] hover:bg-[#8B0D1A]/10 hover:text-white',
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
