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
            className="mb-1.5 block font-body text-xs font-semibold text-slate-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full resize-y rounded-[8px] border border-slate-200 bg-white px-3.5 py-2.5 font-body text-[14px] text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/10 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-60 ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
