import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9E9B95]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full resize-y rounded-[6px] border border-white/10 bg-[#141414] px-3.5 sm:px-4 py-3 font-body text-base sm:text-sm text-[#F5F2ED] placeholder:text-[#54524F] transition-all duration-200 focus:border-[#8B0D1A] focus:outline-none focus:ring-1 focus:ring-[#8B0D1A] disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
