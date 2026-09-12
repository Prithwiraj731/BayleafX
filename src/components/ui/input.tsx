import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-[6px] border border-white/10 bg-[#131A16] px-3.5 sm:px-4 py-3 font-body text-base sm:text-sm text-[#F5F7F5] placeholder:text-[#4B554F] transition-all duration-200 focus:border-[#2D6A4F] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]/40 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
