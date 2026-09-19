'use client';

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "ghost" | "solid";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, children, className, href, variant = "primary", ...props }, ref) => {
  const content = text || (typeof children === "string" ? children : "Button");

  // Variant styling to ensure exact color theme matching
  const variantStyles = {
    // Solid signature BayleafX forest green button
    solid:
      "border-[#1B4332] bg-[#1B4332] text-white shadow-sm hover:border-[#2D6A4F] [&_.dot-bg]:bg-[#2D6A4F] [&_.hover-text]:text-white",
    // Clean modern white button that expands into BayleafX forest green
    primary:
      "border-slate-300/80 bg-white text-slate-800 shadow-2xs hover:border-[#1B4332] [&_.dot-bg]:bg-[#1B4332] [&_.hover-text]:text-white",
    // Outline button with emerald hover
    outline:
      "border-slate-200 bg-white text-slate-700 hover:border-[#2D6A4F] [&_.dot-bg]:bg-[#2D6A4F] [&_.hover-text]:text-white",
    // Dark mode button for black/frosted sections
    dark:
      "border-white/20 bg-white/10 text-white hover:border-white/40 [&_.dot-bg]:bg-white [&_.hover-text]:text-slate-900",
    // Ghost
    ghost:
      "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 [&_.dot-bg]:bg-[#1B4332] [&_.hover-text]:text-white",
  };

  const buttonElement = (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full border px-6 py-2.5 text-center text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {content}
      </span>
      <div className="hover-text absolute inset-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{content}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="dot-bg absolute left-[12%] top-[42%] h-2 w-2 scale-[1] rounded-full transition-all duration-400 ease-out group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[2.2]" />
    </button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
