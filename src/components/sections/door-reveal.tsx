'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const DoorRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullyOpen, setIsFullyOpen] = useState(false);

  // Track scroll position within this 180vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Door slide transforms (left slides -105%, right slides +105%)
  const leftDoorX = useTransform(scrollYProgress, [0.12, 0.82], ['0%', '-105%']);
  const rightDoorX = useTransform(scrollYProgress, [0.12, 0.82], ['0%', '105%']);

  // Central "Welcome to BayleafX" text scale and fade
  const textOpacity = useTransform(scrollYProgress, [0.12, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0.12, 0.5], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0.12, 0.5], ['0px', '-20px']);

  // Central crimson seam line glow & fade
  const seamOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

  // Chamber content behind the doors transforms
  const chamberOpacity = useTransform(scrollYProgress, [0.15, 0.7], [0.2, 1]);
  const chamberScale = useTransform(scrollYProgress, [0.15, 0.82], [0.92, 1]);

  // Update open state to release pointer events when doors are retracted
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.82 && !isFullyOpen) {
      setIsFullyOpen(true);
    } else if (latest < 0.82 && isFullyOpen) {
      setIsFullyOpen(false);
    }
  });

  // Optional click to open / scroll down smoothly
  const handleScrollToNext = () => {
    const nextElem = document.getElementById('services');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="welcome-gateway"
      aria-label="Welcome to BayleafX Reveal Gateway"
      className="relative w-full h-[175vh] sm:h-[190vh] md:h-[210vh] bg-[#0B0B0B]"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center select-none">
        
        {/* ─────────────────────────────────────────────────────────────
            CHAMBER LAYER (Directly Behind the Doors - Revealed as they open)
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{
            opacity: chamberOpacity,
            scale: chamberScale,
          }}
          className="absolute inset-0 z-0 flex flex-col items-center justify-center px-6 text-center bg-[#0B0B0B]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#8B0D1A]/20 blur-[130px]" />
          
          {/* Subtle Matrix / Circuit Line Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

          {/* Chamber Content */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            {/* Emblem Mark Icon */}
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 mb-6 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(139,13,26,0.3)] backdrop-blur-md">
              <Image
                src="/tab-logo.png"
                alt="BayleafX Emblem"
                width={80}
                height={80}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain filter drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
              />
            </div>

            {/* Status Telemetry */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E8B85] uppercase">
                SYSTEM ACCESS // UNLOCKED
              </span>
            </div>

            {/* Chamber Headline */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F5F2ED] leading-[1.08] mb-4">
              Step Into The <span className="text-[#E50914]">Intelligence</span> Layer.
            </h2>

            <p className="font-body text-xs sm:text-sm md:text-base text-[#9E9B95] max-w-lg leading-relaxed mb-8">
              Bespoke digital architecture and haute-couture experience engineering. 
              Explore our 15 specialized capabilities below.
            </p>

            {/* Quick Action Button */}
            <button
              onClick={handleScrollToNext}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#8B0D1A] bg-[#8B0D1A]/20 px-6 py-3 text-xs sm:text-sm font-semibold font-body tracking-wider uppercase text-[#F5F2ED] hover:bg-[#8B0D1A] hover:shadow-[0_0_25px_rgba(139,13,26,0.6)] transition-all duration-300"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bottom Down Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8E8B85]">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase">CONTINUE SCROLLING</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-[#E50914]" />
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            DOORS LAYER (Two Split Black Sliding Panels)
            ───────────────────────────────────────────────────────────── */}
        
        {/* LEFT DOOR (Slides to Left) */}
        <motion.div
          style={{ x: leftDoorX }}
          className={`absolute top-0 bottom-0 left-0 w-[50.5vw] z-20 bg-[#0B0B0B] border-r border-white/[0.08] shadow-[15px_0_50px_rgba(0,0,0,0.95)] overflow-hidden ${
            isFullyOpen ? 'pointer-events-none' : ''
          }`}
        >
          {/* Subtle Industrial Brushed Carbon Surface */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#0B0B0B] to-[#121212] opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Left Door Edge Ambient Crimson Accent */}
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B0D1A]/50 to-transparent" />

          {/* Top-Left Corner Telemetry */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex flex-col font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#6E6B66] uppercase">
            <span>DOOR // 01</span>
            <span className="text-[#8E8B85]">PORTAL_LEFT</span>
            <div className="w-6 h-[1px] bg-white/10 mt-1" />
          </div>

          {/* Bottom-Left Corner Status */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-[#6E6B66] uppercase">
            <span>BAYLEAFX // ATELIER</span>
          </div>
        </motion.div>

        {/* RIGHT DOOR (Slides to Right) */}
        <motion.div
          style={{ x: rightDoorX }}
          className={`absolute top-0 bottom-0 right-0 w-[50.5vw] z-20 bg-[#0B0B0B] border-l border-white/[0.08] shadow-[-15px_0_50px_rgba(0,0,0,0.95)] overflow-hidden ${
            isFullyOpen ? 'pointer-events-none' : ''
          }`}
        >
          {/* Subtle Industrial Brushed Carbon Surface */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#070707] via-[#0B0B0B] to-[#121212] opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Right Door Edge Ambient Crimson Accent */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B0D1A]/50 to-transparent" />

          {/* Top-Right Corner Telemetry */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex flex-col items-end font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#6E6B66] uppercase">
            <span>DOOR // 02</span>
            <span className="text-[#8E8B85]">PORTAL_RIGHT</span>
            <div className="w-6 h-[1px] bg-white/10 mt-1" />
          </div>

          {/* Bottom-Right Corner Status */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-[#6E6B66] uppercase text-right">
            <span>SEC_LEVEL // 00</span>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            CENTER SEAM LASER GLOW (Splits down the middle)
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: seamOpacity }}
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-25 flex flex-col items-center justify-center"
        >
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#E50914] to-transparent shadow-[0_0_16px_#E50914]" />
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            FOREGROUND TYPOGRAPHY ("Welcome to BayleafX")
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            y: textY,
          }}
          className={`relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-none ${
            isFullyOpen ? 'hidden' : 'flex'
          }`}
        >
          {/* Eyebrow Tag */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#8E8B85]">
              INITIATING SEQUENCE // 01
            </span>
          </div>

          {/* Monumental Headline */}
          <h2 className="font-display text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[84px] font-black uppercase tracking-tight text-[#F5F2ED] leading-[0.94] mb-4 sm:mb-6">
            <span className="block text-[#8E8B85] text-[20px] min-[400px]:text-[24px] sm:text-[32px] md:text-[40px] font-medium tracking-normal mb-1 sm:mb-2">
              WELCOME TO
            </span>
            <span>BAYLEAF</span>
            <span className="text-[#E50914] ml-1 sm:ml-2 inline-block drop-shadow-[0_0_24px_rgba(229,9,20,0.6)]">
              X
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm md:text-base text-[#9E9B95] tracking-[0.2em] uppercase max-w-md mb-8 sm:mb-10">
            THE ARCHITECTURAL INTELLIGENCE LAYER
          </p>

          {/* Scroll Prompt with Micro-Animation */}
          <div className="flex flex-col items-center gap-2 text-[#8E8B85]">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
              SCROLL TO REVEAL
            </span>
            <div className="relative h-9 w-5 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
