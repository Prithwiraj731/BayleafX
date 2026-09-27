'use client';

import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_URL } from '@/lib/constants';

export interface SocialDockItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
  tooltipBg?: string;
  tooltipTextColor?: string;
  ariaLabel?: string;
}

export interface SocialDockProps {
  items?: SocialDockItem[];
  className?: string;
  tooltipPosition?: 'top' | 'bottom';
  size?: 'default' | 'large';
}

const DEFAULT_SOCIAL_ITEMS: SocialDockItem[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bayleafx',
    label: 'LinkedIn',
    color: '#0A66C2',
    tooltipBg: '#0A66C2',
    tooltipTextColor: '#FFFFFF',
    ariaLabel: 'Connect with BayleafX on LinkedIn',
    icon: (
      <svg className="w-6 h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Prithwiraj731/BayleafX',
    label: 'GitHub',
    color: '#24292F',
    tooltipBg: '#181717',
    tooltipTextColor: '#FFFFFF',
    ariaLabel: 'View BayleafX on GitHub',
    icon: (
      <svg className="w-6 h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: WHATSAPP_URL,
    label: '@ WhatsApp',
    color: '#25D366',
    tooltipBg: '#128C7E',
    tooltipTextColor: '#FFFFFF',
    ariaLabel: 'Chat with BayleafX on WhatsApp',
    icon: (
      <svg className="w-6 h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/bayleafx',
    label: '@ Instagram',
    color: '#E1306C',
    tooltipBg: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)',
    tooltipTextColor: '#FFFFFF',
    ariaLabel: 'Follow BayleafX on Instagram',
    icon: (
      <svg className="w-6 h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:bayleafxtechnologies@gmail.com',
    label: 'Email Us',
    color: '#1B4332',
    tooltipBg: '#1B4332',
    tooltipTextColor: '#FFFFFF',
    ariaLabel: 'Send an email to BayleafX',
    icon: (
      <svg className="w-6 h-6 sm:w-[26px] sm:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export const SocialDock: React.FC<SocialDockProps> = ({
  items = DEFAULT_SOCIAL_ITEMS,
  className = '',
  tooltipPosition = 'top',
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, opacity: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Update floating tooltip horizontal coordinate smoothly to center on active icon
  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex] && dockRef.current) {
      const activeEl = itemRefs.current[activeIndex];
      const dockEl = dockRef.current;
      const activeRect = activeEl.getBoundingClientRect();
      const dockRect = dockEl.getBoundingClientRect();

      const left = activeRect.left - dockRect.left + activeRect.width / 2;
      setTooltipPos({ left, opacity: 1 });
    } else {
      setTooltipPos((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeIndex]);

  // Close active on touch outside
  useEffect(() => {
    const handleGlobalTouch = (e: MouseEvent | TouchEvent) => {
      if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('click', handleGlobalTouch);
    document.addEventListener('touchstart', handleGlobalTouch);
    return () => {
      document.removeEventListener('click', handleGlobalTouch);
      document.removeEventListener('touchstart', handleGlobalTouch);
    };
  }, []);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Floating Contextual Label Tooltip with Smooth Horizontal Glide */}
      <div
        role="tooltip"
        aria-hidden={activeIndex === null}
        className={`pointer-events-none absolute z-30 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          tooltipPosition === 'top' ? 'bottom-[calc(100%+16px)]' : 'top-[calc(100%+16px)]'
        }`}
        style={{
          left: `${tooltipPos.left}px`,
          transform: prefersReducedMotion
            ? 'translateX(-50%)'
            : `translateX(-50%) translateY(${
                tooltipPos.opacity ? '0px' : tooltipPosition === 'top' ? '6px' : '-6px'
              }) scale(${tooltipPos.opacity ? 1 : 0.95})`,
          opacity: tooltipPos.opacity,
          visibility: tooltipPos.opacity ? 'visible' : 'hidden',
          transition: prefersReducedMotion
            ? 'opacity 150ms ease'
            : 'left 200ms cubic-bezier(0.22,1,0.36,1), transform 200ms cubic-bezier(0.22,1,0.36,1), opacity 180ms ease, background 200ms ease',
        }}
      >
        {activeItem && (
          <div
            className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[11px] text-[13px] sm:text-[14px] font-semibold tracking-normal shadow-[0_8px_25px_rgba(0,0,0,0.16)] whitespace-nowrap transition-colors duration-200"
            style={{
              background: activeItem.tooltipBg || activeItem.color,
              color: activeItem.tooltipTextColor || '#FFFFFF',
            }}
          >
            <span>{activeItem.label}</span>

            {/* Tiny 7px Triangular Pointer Connecting to Active Icon */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent ${
                tooltipPosition === 'top'
                  ? '-bottom-[7px] border-t-[7px]'
                  : '-top-[7px] border-b-[7px]'
              }`}
              style={{
                [tooltipPosition === 'top' ? 'borderTopColor' : 'borderBottomColor']:
                  activeItem.tooltipBg?.startsWith('linear-gradient')
                    ? '#DD2A7B'
                    : activeItem.tooltipBg || activeItem.color,
              }}
            />
          </div>
        )}
      </div>

      {/* Modern, Generously Sized Floating Control Dock */}
      <nav
        ref={dockRef}
        aria-label="Social and Direct Contact Channels"
        onMouseLeave={() => setActiveIndex(null)}
        className="relative flex items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 h-[68px] sm:h-[78px] md:h-[86px] px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full bg-white/75 backdrop-blur-[20px] border border-[rgba(20,20,30,0.10)] shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
      >
        {items.map((item, index) => {
          const isHovered = activeIndex === index;
          const isAnyHovered = activeIndex !== null;
          const isInactive = isAnyHovered && !isHovered;
          const isLeftNeighbor = activeIndex !== null && index === activeIndex - 1;
          const isRightNeighbor = activeIndex !== null && index === activeIndex + 1;

          // Subtle physical translation and scaling
          let transformStyle = 'scale(0.95) translateY(0)';
          if (prefersReducedMotion) {
            transformStyle = 'none';
          } else if (isHovered) {
            transformStyle = 'scale(1.12) translateY(-4px)';
          } else if (isLeftNeighbor) {
            transformStyle = 'scale(0.94) translateX(-3px)';
          } else if (isRightNeighbor) {
            transformStyle = 'scale(0.94) translateX(3px)';
          } else if (isInactive) {
            transformStyle = 'scale(0.92) translateY(0)';
          }

          return (
            <a
              key={item.name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={item.ariaLabel || item.name}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              onClick={(e) => {
                // On touch devices, first tap activates icon + label, second tap follows link
                if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches && activeIndex !== index) {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              className="group relative flex items-center justify-center w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] md:w-[56px] md:h-[56px] rounded-[14px] sm:rounded-[15px] md:rounded-[16px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D6A4F] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: transformStyle,
                // Opacity: 1 when active, 0.38 when another is hovered, 0.65 default
                opacity: isHovered ? 1 : isInactive ? 0.38 : 0.65,
                // Filter: clear when active; slight blur (1.5px) & grayscale (45%) when inactive; 20% grayscale default
                filter: isHovered
                  ? 'none'
                  : isInactive
                  ? 'blur(1.5px) grayscale(45%)'
                  : 'grayscale(20%)',
                // Subtle brand-colored halo on active focus
                boxShadow: isHovered
                  ? `0 0 0 5px ${item.color}18, 0 10px 24px ${item.color}28`
                  : 'none',
                // Icon color: brand color when active, subtle slate when resting
                color: isHovered ? item.color : '#334155',
                // Background surface
                backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.45)',
              }}
            >
              <div className="transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {item.icon}
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
