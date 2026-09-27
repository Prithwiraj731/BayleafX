'use client';

import React, { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TiltedCardServiceItem } from '@/types';

interface TiltedCardProps {
  service: TiltedCardServiceItem;
  index?: number;
  isCenter?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  width?: number;
}

// Playful, modern vector illustrations matching the reference design
const ServiceIllustration: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'ecommerce':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Yellow Sparkles */}
          <path d="M18 42L20 37L22 42L27 44L22 46L20 51L18 46L13 44L18 42Z" fill="#F59E0B" />
          <circle cx="102" cy="30" r="2.5" fill="#F59E0B" />
          <path d="M96 22L97.5 18L99 22L103 23.5L99 25L97.5 29L96 25L92 23.5L96 22Z" fill="#F59E0B" />

          {/* Blue Shopping Bag */}
          <path
            d="M32 46C32 43.7909 33.7909 42 36 42H70C72.2091 42 74 43.7909 74 46L78 88C78 90.2091 76.2091 92 74 92H32C29.7909 92 28 90.2091 28 88L32 46Z"
            fill="#7DD3FC"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Bag Handles */}
          <path
            d="M44 42V32C44 27.5817 47.5817 24 52 24H54C58.4183 24 62 27.5817 62 32V42"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Shopping cart outline on bag */}
          <path
            d="M45 58H50L53 69H65L68 58"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="54" cy="74" r="2" fill="#0F172A" />
          <circle cx="63" cy="74" r="2" fill="#0F172A" />

          {/* Pink/Red Security Shield */}
          <path
            d="M80 50L93 55C93 67 85 75 80 78C75 75 67 67 67 55L80 50Z"
            fill="#FDA4AF"
            stroke="#0F172A"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Lock on shield */}
          <rect x="76" y="63" width="8" height="7" rx="1.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.2" />
          <path d="M78 63V60C78 58.8954 78.8954 58 80 58C81.1046 58 82 58.8954 82 60V63" stroke="#0F172A" strokeWidth="1.5" />

          {/* Red Credit Card */}
          <rect
            x="58"
            y="76"
            width="38"
            height="22"
            rx="4"
            fill="#F87171"
            stroke="#0F172A"
            strokeWidth="2"
          />
          <rect x="58" y="81" width="38" height="4" fill="#0F172A" />
          <rect x="63" y="88" width="6" height="5" rx="1" fill="#FEF08A" stroke="#0F172A" strokeWidth="1" />
        </svg>
      );

    case 'maintenance':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Cloud Behind */}
          <path
            d="M32 40C33 36 37 33 42 34C45 31 51 32 54 36C58 36 61 39 60 43C64 44 65 49 62 52H32C29 48 30 43 32 40Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Sparkles */}
          <path d="M22 68L23.5 64L25 68L29 69.5L25 71L23.5 75L22 71L18 69.5L22 68Z" fill="#F59E0B" />
          <circle cx="100" cy="42" r="2.5" fill="#F59E0B" />

          {/* Dark Navy Gear */}
          <g transform="translate(26, 42)">
            <path
              d="M26 12L29 10L32 12L34 16L39 18L43 16L45 19L44 24L47 28L51 28L52 32L49 36L50 41L47 44L43 43L39 46L39 50L35 52L32 49L27 50L25 53L21 51L22 47L18 43L14 44L12 41L15 37L13 32L10 32L9 28L12 24L12 19L15 16L19 18L24 16L26 12Z"
              fill="#1E293B"
              stroke="#0F172A"
              strokeWidth="2"
            />
            {/* Center cutout showing card color */}
            <circle cx="31" cy="32" r="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          </g>

          {/* Bright Cyan/Sky Wrench crossing through */}
          <path
            d="M38 78L62 54C61 51 63 47 66 45C69 43 73 44 75 46L71 50L74 53L78 49C80 51 81 55 79 58C77 61 73 63 70 62L46 86C44 88 40 88 38 86C36 84 36 80 38 78Z"
            fill="#38BDF8"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Pink Shield on Right */}
          <path
            d="M84 46L95 50C95 60 88 67 84 69C80 67 73 60 73 50L84 46Z"
            fill="#FDA4AF"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M79 57L82 60L89 53" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'uiux':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkle */}
          <path d="M30 25L32 20L34 25L39 27L34 29L32 34L30 29L25 27L30 25Z" fill="#F59E0B" />

          {/* Desktop Monitor */}
          <rect
            x="32"
            y="30"
            width="56"
            height="44"
            rx="6"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="2.5"
          />
          {/* Stand */}
          <path d="M52 74V82H68V74" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 82H74" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Top Window Bar */}
          <rect x="32" y="30" width="56" height="12" rx="6" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1" />
          <rect x="75" y="33" width="9" height="6" rx="1.5" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
          <path d="M77 34.5L81 37.5M81 34.5L77 37.5" stroke="#0F172A" strokeWidth="1.2" />

          {/* Screen Content Panels */}
          <rect x="38" y="47" width="22" height="18" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="63" y="47" width="19" height="8" rx="2" fill="#FDA4AF" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="63" y="58" width="19" height="7" rx="2" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1" />

          {/* Smiling Face Badge top-left */}
          <circle cx="30" cy="34" r="8" fill="#7DD3FC" stroke="#0F172A" strokeWidth="2" />
          <circle cx="28" cy="32" r="1.2" fill="#0F172A" />
          <circle cx="32" cy="32" r="1.2" fill="#0F172A" />
          <path d="M28 36C29 38 31 38 32 36" stroke="#0F172A" strokeWidth="1.4" strokeLinecap="round" />

          {/* Floating Pink Heart Bubble right */}
          <rect x="85" y="46" width="18" height="16" rx="4" fill="#FDA4AF" stroke="#0F172A" strokeWidth="1.8" />
          <path
            d="M91 53C91 51.5 92 50.5 93.5 50.5C94.5 50.5 95.5 51.5 95.5 53C95.5 54.5 94 56 94 56C94 56 92.5 54.5 92.5 53Z"
            fill="#E11D48"
          />

          {/* White Cursor Hand Pointing */}
          <g transform="translate(68, 54)">
            <path
              d="M8 8L16 16L12 18L18 25L15 27L9 20L5 23L8 8Z"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case 'webapp':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloud in background */}
          <path
            d="M28 42C29 38 33 35 38 36C41 32 47 33 50 37C54 37 57 40 56 44C60 45 61 50 58 53H28C25 49 26 45 28 42Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Sparkles */}
          <path d="M18 52L20 47L22 52L27 54L22 56L20 61L18 56L13 54L18 52Z" fill="#F59E0B" />
          <circle cx="102" cy="50" r="2.5" fill="#F59E0B" />

          {/* Large Sky Blue Shield */}
          <path
            d="M60 25L85 34C85 57 73 74 60 82C47 74 35 57 35 34L60 25Z"
            fill="#7DD3FC"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Circular Badge on Shield */}
          <circle cx="60" cy="52" r="15" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />

          {/* Padlock on Shield */}
          <rect x="54" y="50" width="12" height="10" rx="2.5" fill="#0284C7" stroke="#0F172A" strokeWidth="1.5" />
          <path
            d="M56 50V46C56 43.7909 57.7909 42 60 42C62.2091 42 64 43.7909 64 46V50"
            stroke="#0F172A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="60" cy="54" r="1.2" fill="#FFFFFF" />

          {/* Red/Coral Code Tag `< >` on Left */}
          <rect x="18" y="66" width="22" height="15" rx="3.5" fill="#FDA4AF" stroke="#0F172A" strokeWidth="1.8" />
          <path d="M24 71L22 73.5L24 76" stroke="#991B1B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 71L32 73.5L30 76" stroke="#991B1B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

          {/* Red/Coral Database / Chip Box on Right */}
          <rect x="80" y="64" width="20" height="17" rx="3.5" fill="#FDA4AF" stroke="#0F172A" strokeWidth="1.8" />
          <circle cx="85" cy="72.5" r="1.5" fill="#991B1B" />
          <circle cx="90" cy="72.5" r="1.5" fill="#991B1B" />
          <circle cx="95" cy="72.5" r="1.5" fill="#991B1B" />
        </svg>
      );

    case 'social':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkles */}
          <path d="M22 35L24 30L26 35L31 37L26 39L24 44L22 39L17 37L22 35Z" fill="#F59E0B" />
          <circle cx="98" cy="28" r="2.5" fill="#F59E0B" />

          {/* Purple/Pink Smartphone */}
          <rect
            x="40"
            y="22"
            width="44"
            height="76"
            rx="10"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="2.5"
          />
          {/* Speaker pill & screen */}
          <rect x="54" y="26" width="16" height="3" rx="1.5" fill="#E2E8F0" />
          <rect x="44" y="33" width="36" height="52" rx="4" fill="#FDF4FF" stroke="#0F172A" strokeWidth="1" />

          {/* Avatar Profile */}
          <circle cx="53" cy="43" r="5" fill="#C084FC" stroke="#0F172A" strokeWidth="1" />
          <rect x="61" y="41" width="15" height="4" rx="2" fill="#E9D5FF" />

          {/* Post Image & Rising Graph */}
          <rect x="48" y="52" width="28" height="20" rx="3" fill="#E0F2FE" stroke="#0F172A" strokeWidth="1" />
          <path
            d="M51 66L58 59L65 63L72 56"
            stroke="#0284C7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Floating Red Heart Reaction */}
          <g transform="translate(74, 38)">
            <circle cx="10" cy="10" r="10" fill="#FDA4AF" stroke="#0F172A" strokeWidth="1.8" />
            <path
              d="M6 10C6 8 8 7 10 9C12 7 14 8 14 10C14 13 10 15 10 15C10 15 6 13 6 10Z"
              fill="#E11D48"
            />
          </g>

          {/* Floating Green Chat Bubble on Left */}
          <g transform="translate(18, 55)">
            <rect width="22" height="16" rx="4" fill="#BBF7D0" stroke="#0F172A" strokeWidth="1.8" />
            <path d="M8 16L12 16L6 20V16" fill="#BBF7D0" stroke="#0F172A" strokeWidth="1.8" />
            <circle cx="6" cy="8" r="1.5" fill="#15803D" />
            <circle cx="11" cy="8" r="1.5" fill="#15803D" />
            <circle cx="16" cy="8" r="1.5" fill="#15803D" />
          </g>
        </svg>
      );

    case 'paidads':
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkles */}
          <path d="M20 30L22 25L24 30L29 32L24 34L22 39L20 34L15 32L20 30Z" fill="#F59E0B" />
          <circle cx="100" cy="35" r="2.5" fill="#F59E0B" />

          {/* Concentric Bullseye */}
          <circle cx="60" cy="60" r="34" fill="#FEE2E2" stroke="#0F172A" strokeWidth="2.5" />
          <circle cx="60" cy="60" r="24" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2" />
          <circle cx="60" cy="60" r="14" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <circle cx="60" cy="60" r="5" fill="#DC2626" />

          {/* Blue Dart / Arrow through bullseye */}
          <path
            d="M32 88L58 62"
            stroke="#0F172A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M26 86L34 94L36 86L26 86Z"
            fill="#0284C7"
            stroke="#0F172A"
            strokeWidth="1.5"
          />

          {/* Dollar Coin */}
          <g transform="translate(76, 26)">
            <circle cx="12" cy="12" r="12" fill="#FEF08A" stroke="#0F172A" strokeWidth="2" />
            <text x="12" y="17" fill="#854D0E" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              $
            </text>
          </g>
        </svg>
      );

    case 'seo':
    default:
      return (
        <svg
          className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkles */}
          <path d="M25 25L27 20L29 25L34 27L29 29L27 34L25 29L20 27L25 25Z" fill="#F59E0B" />
          <circle cx="95" cy="25" r="2.5" fill="#F59E0B" />

          {/* Bar Chart Behind */}
          <rect x="62" y="58" width="9" height="24" rx="2" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
          <rect x="74" y="46" width="9" height="36" rx="2" fill="#7DD3FC" stroke="#0F172A" strokeWidth="1.2" />
          <rect x="86" y="32" width="9" height="50" rx="2" fill="#34D399" stroke="#0F172A" strokeWidth="1.5" />

          {/* Large Sky Blue Magnifying Glass */}
          <circle cx="50" cy="52" r="22" fill="#E0F2FE" stroke="#0F172A" strokeWidth="3" />
          <circle cx="50" cy="52" r="14" fill="#FFFFFF" opacity="0.6" />
          <path
            d="M66 68L84 86"
            stroke="#0F172A"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Golden #1 Star Badge */}
          <g transform="translate(24, 60)">
            <circle cx="11" cy="11" r="11" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <text x="11" y="15" fill="#854D0E" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="monospace">
              #1
            </text>
          </g>
        </svg>
      );
  }
};

export const TiltedCard = forwardRef<HTMLDivElement, TiltedCardProps>(
  ({ service, index = 0, isCenter = false, onClick, onKeyDown, width }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        tabIndex={0}
        aria-roledescription="slide"
        aria-label={`${service.title} - ${service.label}`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className="flex flex-col items-center shrink-0 select-none cursor-pointer focus:outline-none group"
        style={{
          width: width ? `${width}px` : undefined,
        }}
      >
        {/* Modern Professional BayleafX Card */}
        <div
          className={`relative w-full h-[385px] sm:h-[400px] md:h-[410px] rounded-[24px] bg-white border transition-all duration-300 flex flex-col items-center justify-between text-center p-5 sm:p-6 overflow-hidden ${
            isCenter
              ? 'border-2 border-[#1B4332] shadow-[0_20px_45px_-8px_rgba(27,67,50,0.14),_0_6px_16px_-4px_rgba(15,23,42,0.04)] ring-4 ring-[#E8F5E9]/90'
              : 'border border-slate-200/90 shadow-[0_8px_25px_-6px_rgba(15,23,42,0.06),_0_2px_8px_-2px_rgba(15,23,42,0.02)] hover:border-[#2D6A4F]/40 hover:shadow-md'
          }`}
        >
          {/* Subtle Ambient Radial Highlight on Card */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F7F4]/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Card Metadata Bar */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold text-[#1B4332] tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
            {isCenter ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B4332] text-[10px] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F] animate-pulse" />
                Featured
              </span>
            ) : (
              <span className="font-mono text-[10px] font-medium text-slate-400">
                Capability
              </span>
            )}
          </div>

          {/* Center Friendly Illustration */}
          <div className="relative z-10 flex items-center justify-center my-auto py-2">
            <ServiceIllustration id={service.id} />
          </div>

          {/* Card Text Content */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Title */}
            <h3 className="font-sans font-bold text-slate-900 text-base sm:text-[17px] leading-snug tracking-tight max-w-[215px] group-hover:text-[#1B4332] transition-colors">
              {service.title}
            </h3>

            {/* Complete, Clean Description */}
            <p className="mt-2 font-body text-xs sm:text-[12px] leading-relaxed text-slate-500 max-w-[220px]">
              {service.description}
            </p>

            {/* Modern Subtle Explore Link */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-100 w-full flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                Explore service
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#1B4332] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Label Underneath the Card */}
        <span
          className={`mt-3 sm:mt-3.5 text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 text-center ${
            isCenter ? 'text-[#1B4332] font-bold' : 'text-slate-500 group-hover:text-slate-800'
          }`}
        >
          {service.label}
        </span>
      </div>
    );
  }
);

TiltedCard.displayName = 'TiltedCard';
