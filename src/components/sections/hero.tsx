'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { transitionEase } from '@/lib/animations';

/**
 * Mobile-Only Interactive Swipe-Right Button ("GET STARTED")
 * Allows users to swipe the red knob horizontally to trigger navigation to #contact
 */
const MobileSwipeButton: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(200);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateBounds = () => {
      if (trackRef.current && knobRef.current) {
        const trackWidth = trackRef.current.clientWidth;
        const knobWidth = knobRef.current.offsetWidth;
        // With p-1.5 (6px padding on left & right = 12px total)
        const pad = 6;
        const available = trackWidth - knobWidth - (pad * 2);
        setMaxDrag(Math.max(40, available));
      }
    };
    updateBounds();
    const t = setTimeout(updateBounds, 120);
    window.addEventListener('resize', updateBounds);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  const triggerAction = () => {
    if (unlocked) return;
    setUnlocked(true);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
    setTimeout(() => {
      setUnlocked(false);
      x.set(0);
    }, 2800);
  };

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX >= maxDrag * 0.5) {
      triggerAction();
    } else {
      x.set(0);
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full max-w-[310px] sm:max-w-[330px] h-[56px] rounded-full border border-[#8B0D1A]/55 bg-black/85 backdrop-blur-xl p-1.5 flex items-center shadow-[0_0_16px_rgba(139,13,26,0.25),inset_0_0_10px_rgba(139,13,26,0.1)] overflow-hidden select-none"
    >
      {/* Background Track Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pl-7 pr-3">
        <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#F5F2ED] uppercase transition-all duration-300">
          {unlocked ? 'REDIRECTING...' : 'GET STARTED'}
        </span>
      </div>

      {/* Swipe Progress Glow Fill */}
      <div
        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#8B0D1A]/20 to-transparent pointer-events-none transition-all duration-300"
        style={{ width: unlocked ? '100%' : '45%' }}
      />

      {/* Draggable Knob */}
      <motion.div
        ref={knobRef}
        drag="x"
        dragConstraints={{ left: 0, right: maxDrag }}
        dragElastic={0}
        dragMomentum={false}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={unlocked ? { x: maxDrag } : undefined}
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
        onClick={triggerAction}
        className="relative z-10 h-11 w-11 rounded-full bg-gradient-to-br from-[#D11827] via-[#A81324] to-[#8B0D1A] flex items-center justify-center text-white shadow-[0_0_12px_rgba(139,13,26,0.7)] cursor-grab active:cursor-grabbing touch-none select-none shrink-0"
        aria-label="Swipe right or tap to get started"
      >
        {unlocked ? (
          <Check className="h-5 w-5 text-white stroke-[2.5]" />
        ) : (
          <ArrowRight className="h-5 w-5 text-white stroke-[2.5]" />
        )}
      </motion.div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-[#0B0B0B]"
    >
      {/* ─────────────────────────────────────────────────────────────
          MOBILE HERO VIEW (Strictly < lg, matching user's custom mockup 1:1)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex lg:hidden min-h-[100dvh] w-full flex-col justify-between pt-20 pb-6 px-6 sm:px-8">
        
        {/* Mobile Background Artwork (Cyborg with softened crimson halo ring & dark rocky terrain) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/hero-mobile-bg.jpg"
            alt="BayleafX Mobile Intelligence Artwork"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          {/* Subtle vignette gradient overlays to ensure optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/90 via-transparent to-[#0B0B0B]/95 pointer-events-none" />
        </div>

        {/* Top Content Block: Eyebrow + Headline + Telemetry */}
        <div className="relative z-10 flex flex-col items-start w-full">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: transitionEase }}
            className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8E8B85] leading-relaxed mb-2 sm:mb-2.5"
          >
            <div>BEYOND AUTOMATION.</div>
            <div>BEYOND EXPECTATIONS.</div>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: transitionEase }}
            className="font-display text-[36px] min-[380px]:text-[41px] sm:text-[48px] font-black uppercase tracking-tight text-[#F5F2ED] leading-[0.96] mb-3.5 sm:mb-4"
          >
            <div>THE</div>
            <div>INTELLIGENCE</div>
            <div>LAYER FOR A</div>
            <div className="text-[#E50914]">NEW ERA.</div>
          </motion.h1>

          {/* Telemetry Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: transitionEase }}
            className="w-full flex justify-between items-start font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#8E8B85] uppercase"
          >
            {/* Left Telemetry */}
            <div className="flex flex-col items-start">
              <div>HUMAN</div>
              <div>POTENTIAL</div>
              <div>AMPLIFIED</div>
              <div className="w-6 h-[1px] bg-white/20 mt-1.5" />
            </div>

            {/* Right Telemetry */}
            <div className="flex flex-col items-end text-right">
              <div>01</div>
              <div className="text-[#8E8B85]/60">/</div>
              <div>04</div>
            </div>
          </motion.div>
        </div>

        {/* Center Breathing Space: Centers the cybernetic figure & red neon ring */}
        <div className="flex-1 min-h-[120px] sm:min-h-[150px]" />

        {/* Bottom Content Block: Swipe Button + Scroll to Explore */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: transitionEase }}
          className="relative z-10 flex flex-col items-center w-full"
        >
          {/* Swipe-to-Action "Get Started" Button */}
          <MobileSwipeButton />

          {/* Scroll to Explore Indicator */}
          <div className="flex flex-col items-center justify-center mt-4 sm:mt-5">
            <div className="relative h-9 w-[1px] bg-gradient-to-b from-[#8B0D1A]/70 via-[#8B0D1A] to-transparent flex items-center justify-center">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-[#8B0D1A] shadow-[0_0_6px_#8B0D1A]"
              />
            </div>
            <span className="mt-2 font-mono text-[9px] tracking-[0.28em] text-[#8E8B85] uppercase select-none">
              SCROLL TO EXPLORE
            </span>
          </div>
        </motion.div>

      </div>


      {/* ─────────────────────────────────────────────────────────────
          DESKTOP HERO VIEW (Strictly lg:, 100% UNTOUCHED original layout)
          ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex relative min-h-[100vh] w-full flex-col justify-between overflow-hidden pt-24 pb-12 sm:pb-14 md:pt-28 md:pb-10"
        style={{
          background:
            'radial-gradient(ellipse 95% 65% at 50% 36%, #1F1F25 0%, #111114 48%, #0B0B0B 88%)',
        }}
      >
        {/* Ambient Crimson Glow behind desktop character */}
        <div className="pointer-events-none absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[540px] w-[540px] rounded-full bg-[#8B0D1A]/[0.18] blur-[140px]" />

        {/* 1. LAYER 1: Giant Background Word */}
        <div className="pointer-events-none absolute top-[18%] inset-x-0 z-0 flex select-none justify-center px-4 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className="font-display text-[9.8vw] font-black uppercase tracking-[-0.01em] scale-y-110 leading-none text-white/[0.12] whitespace-nowrap text-center select-none"
          >
            BAYLEAF X
          </motion.span>
        </div>

        {/* 2. LAYER 2: Desktop Centerpiece Character */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: transitionEase }}
            className="relative h-[80vh] w-full max-w-xl flex items-end justify-center"
          >
            <Image
              src="/images/hero-character.png"
              alt="BayleafX Cybernetic Intelligence Figure"
              fill
              priority
              unoptimized
              className="object-contain object-bottom drop-shadow-[0_20px_70px_rgba(0,0,0,0.95)]"
            />
          </motion.div>
        </div>

        {/* 3. LAYER 3: Desktop Foreground Content Layer */}
        <div className="relative z-20 flex-1 flex flex-col justify-end w-full max-w-[1520px] mx-auto px-12 lg:px-16">
          <div className="flex flex-row justify-between items-end gap-6 pb-8">
            
            {/* Left Column: Eyebrow + Headline + Pill Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: transitionEase }}
              className="w-full max-w-[420px] xl:max-w-[460px] flex flex-col items-start"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.22em] uppercase text-[#9E9B95] mb-4">
                BEYOND AUTOMATION. BEYOND EXPECTATIONS.
              </span>

              <h1 className="font-display text-[3.2rem] xl:text-[3.6rem] font-black uppercase tracking-tight text-[#F5F2ED] leading-[1.02]">
                THE INTELLIGENCE
                <span className="block">LAYER FOR A</span>
                <span className="block text-white">NEW ERA.</span>
              </h1>

              {/* Pill Capsule Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/60 py-2.5 pl-6 pr-2.5 backdrop-blur-xl text-sm font-body font-semibold tracking-wide text-[#F5F2ED] hover:border-[#8B0D1A] hover:bg-[#8B0D1A]/15 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                >
                  <span>Get Started</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B0D1A] text-white transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 shadow-[0_0_15px_rgba(139,13,26,0.6)]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Left-aligned paragraph + Preview Card + Progress Track */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: transitionEase }}
              className="w-full max-w-[300px] xl:max-w-[320px] flex flex-col items-start"
            >
              <p className="font-body text-[13px] font-medium uppercase tracking-wider text-[#A8A5A0] leading-relaxed text-left">
                EMPOWER YOUR BUSINESS WITH ADVANCED AI SOLUTIONS THAT AUTOMATE WORKFLOWS, UNCOVER INSIGHTS, AND ACCELERATE GROWTH.
              </p>

              {/* Floating Mini Preview Widget with Progress Track Slider */}
              <div className="mt-8 flex flex-col items-start w-full max-w-[260px]">
                {/* Rounded Preview Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/70 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/images/hero-raven.jpg"
                    alt="BayleafX Atelier Telemetry Visual"
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-wider text-white/90 uppercase">
                    <span>ATELIER SPEC</span>
                    <span className="text-[#8B0D1A] font-bold">ACTIVE</span>
                  </div>
                </div>

                {/* Progress Slider: 01 ─────── 06 */}
                <div className="mt-3.5 flex w-full items-center justify-between gap-3 text-xs font-mono text-[#6E6B66]">
                  <span className="text-[#F5F2ED] font-semibold">01</span>
                  <div className="relative h-[2px] flex-1 bg-white/15 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '45%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#8B0D1A] to-[#F5F2ED]"
                    />
                  </div>
                  <span>06</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
