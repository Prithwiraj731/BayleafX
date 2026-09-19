'use client';

import React from 'react';

interface TechItem {
  name: string;
  svg: React.ReactNode;
}

const TECH_LOGOS: TechItem[] = [
  {
    name: 'Next.js',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 180 180" aria-label="Next.js">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" fill="black" r="90" />
          <path
            d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
            fill="url(#paint0_linear)"
          />
          <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="Tailwind CSS">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.287 1.624 1.177 1.194 2.538 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg className="h-7 w-7" viewBox="0 0 115.3 100" fill="currentColor" aria-label="React">
        <ellipse cx="57.65" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="6" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 57.65 50)" />
        <circle cx="57.65" cy="50" r="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="Node.js">
        <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm0 2.3l6.5 3.7-6.5 3.8-6.5-3.8L12 4.3zm-7 5.2l6 3.5v7.2L5 16.7V9.5zm8 10.7v-7.2l6-3.5v7.2l-6 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="Docker">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.714h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m0 2.716h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.955-2.716h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m0 2.716h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.074a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.165a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m21.804 1.782a5.418 5.418 0 00-2.94-2.87 5.753 5.753 0 00-.63-.223c-.22-.058-.45-.095-.68-.112-.47-.035-.94-.01-1.39.076-.23.044-.45.109-.67.19a4.852 4.852 0 00-2.31 2.378H1.637c-.36 0-.68.217-.81.554a.89.89 0 00.22.958c1.37 1.34 2.97 2.39 4.73 3.1 1.95.79 4.02 1.19 6.12 1.19 2.55 0 5.05-.59 7.31-1.72 2.1-1.05 3.86-2.6 5.1-4.52.12-.19.14-.42.06-.63a.874.874 0 00-.4-.482z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="GitHub">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Vite / Supabase',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="Vite / Fast Engine">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" aria-label="TypeScript">
        <rect width="24" height="24" rx="4" fill="currentColor" />
        <path
          d="M7 10h6v2H10.5v6h-2v-6H7v-2zm7.5 4.5c.5.5 1.2.7 1.9.7.8 0 1.2-.3 1.2-.7 0-.5-.4-.7-1.3-1-1.3-.4-2.1-.9-2.1-2 0-1.2 1-2 2.5-2 1 0 1.8.3 2.3.8l-.8 1.4c-.4-.4-.9-.6-1.5-.6-.6 0-1 .3-1 .6 0 .4.4.6 1.2.9 1.4.5 2.2 1 2.2 2.1 0 1.3-1 2.1-2.6 2.1-1.2 0-2.1-.4-2.7-1l.8-1.3z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-label="Vercel">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
];

export const TechStackCarousel: React.FC = () => {
  // Duplicate array 3 times for completely seamless infinite looping
  const duplicatedLogos = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <div className="relative w-full border-y border-slate-200/70 bg-[#FAFCFB] py-7 overflow-hidden">
      {/* Left and Right Fade Gradient Masks matching Image 1 */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-r from-[#FAFCFB] via-[#FAFCFB]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-40 bg-gradient-to-l from-[#FAFCFB] via-[#FAFCFB]/80 to-transparent" />

      {/* Infinite scrolling row */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-14 sm:gap-20">
          {duplicatedLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group flex shrink-0 items-center justify-center text-slate-800 transition-transform duration-200 hover:scale-110 hover:text-[#1B4332]"
              title={item.name}
            >
              <div className="flex h-10 w-10 items-center justify-center opacity-85 transition-opacity group-hover:opacity-100">
                {item.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
