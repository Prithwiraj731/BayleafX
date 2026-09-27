'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FileText, Users, Zap, Star, ArrowRight, Play, TrendingUp } from 'lucide-react';
import { Container } from '@/components/layout/container';

const TRUST_METRICS = [
  {
    icon: FileText,
    value: '150+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    icon: Zap,
    value: '3–4 Weeks',
    label: 'Fast Delivery',
  },
  {
    icon: Star,
    value: '4.9 / 5',
    label: 'Client Rating',
  },
];

// Left Light Card: "Websites that perform"
function LightWebCard({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_20px_45px_rgba(15,23,42,0.08),0_4px_16px_rgba(27,67,50,0.04)] text-left select-none transition-transform duration-300 hover:scale-[1.02] ${
        isMobile ? 'w-[255px] sm:w-[285px] p-3 sm:p-3.5' : 'w-[280px] xl:w-[315px] p-3.5 xl:p-4'
      }`}
    >
      {/* Top Bar with Logo & Menu */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border border-slate-400" />
          <span className="font-sans font-bold text-xs xl:text-[13px] text-slate-800 tracking-tight">
            BayleafX
          </span>
        </div>
        <div className="flex flex-col gap-1 w-3.5">
          <span className="h-[2px] w-full bg-slate-700 rounded-full" />
          <span className="h-[2px] w-full bg-slate-700 rounded-full" />
        </div>
      </div>

      {/* Main Content: Split layout with Text + Mountain visual */}
      <div className="pt-3 flex items-stretch gap-2.5 sm:gap-3">
        <div className="flex-1 flex flex-col justify-between py-0.5">
          <div>
            <h4 className="font-sans font-black text-sm sm:text-base xl:text-[17px] text-slate-900 leading-[1.18] tracking-tight">
              Beautiful<br />Web Experiences
            </h4>
            <div className="mt-2.5 sm:mt-3 space-y-1.5">
              <div className="h-1.5 w-14 sm:w-16 bg-slate-200/90 rounded-full" />
              <div className="h-1.5 w-9 sm:w-10 bg-slate-200/90 rounded-full" />
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <div className="w-10 h-5 sm:w-13 sm:h-6 rounded-full bg-[#1B4332] text-white flex items-center justify-center shadow-xs">
              <ArrowRight className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Scenic mountain imagery */}
        <div className="relative w-22 sm:w-26 xl:w-30 h-26 sm:h-30 xl:h-34 rounded-xl overflow-hidden shadow-inner bg-slate-800 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
            alt="Scenic Alpine Mountain Website Experience"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Badge: Higher Conversions */}
      <div className="absolute -bottom-3 sm:-bottom-4 -right-1 sm:-right-3 z-30 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-1.5 sm:p-2.5 flex items-center gap-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E8F5E9] text-[#1B4332] flex items-center justify-center shrink-0">
          <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B4332]" strokeWidth={2.5} />
        </div>
        <div className="pr-1">
          <div className="text-[9px] sm:text-[11px] font-semibold text-slate-800 leading-tight">
            Higher Conversions
          </div>
          <div className="text-[11px] sm:text-sm font-extrabold text-[#1B4332] leading-tight mt-0.5">
            +120%
          </div>
        </div>
      </div>
    </div>
  );
}

// Right Dark Card: "Apps that scale"
function DarkAppCard({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`relative bg-[#0E1713] rounded-2xl sm:rounded-3xl border border-[#2D6A4F]/30 shadow-[0_25px_60px_rgba(0,0,0,0.32),0_0_35px_rgba(45,106,79,0.12)] text-left select-none transition-transform duration-300 hover:scale-[1.02] ${
        isMobile ? 'w-[255px] sm:w-[285px] p-3 sm:p-3.5' : 'w-[280px] xl:w-[315px] p-3.5 xl:p-4'
      }`}
    >
      <div className="flex items-start gap-2.5">
        {/* Left mini sidebar navigation */}
        <div className="flex flex-col gap-1.5 sm:gap-2 pt-1 shrink-0">
          <div className="w-3.5 sm:w-4 h-1.5 rounded-full bg-[#2D6A4F]/60" />
          <div className="w-4.5 sm:w-5 h-1.5 rounded-full bg-[#34D399]" />
          <div className="w-3 sm:w-3.5 h-1.5 rounded-full bg-[#2D6A4F]/40" />
          <div className="w-3.5 sm:w-4 h-1.5 rounded-full bg-[#2D6A4F]/30" />
        </div>

        {/* Main dashboard body */}
        <div className="flex-1 min-w-0">
          {/* Top row with Growth badge */}
          <div className="flex items-center justify-end">
            <span className="bg-white/95 text-[#1B4332] text-[8px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded-full inline-flex items-center gap-0.5 shadow-2xs">
              Growth <span className="text-[#2D6A4F]">↑</span>
            </span>
          </div>

          {/* SVG Glowing Line Chart */}
          <div className="mt-1.5 sm:mt-2 w-full h-14 sm:h-18 relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 200 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="hero-chart-glow-dark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0.0" />
                </linearGradient>
                <filter id="hero-glow-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Area glow */}
              <path
                d="M 5 55 Q 35 20 70 45 T 130 18 T 195 28 L 195 65 L 5 65 Z"
                fill="url(#hero-chart-glow-dark)"
              />

              {/* Curve line */}
              <path
                d="M 5 55 Q 35 20 70 45 T 130 18 T 195 28"
                stroke="#34D399"
                strokeWidth="2.2"
                strokeLinecap="round"
                filter="url(#hero-glow-blur)"
              />

              {/* Glowing node dots */}
              <circle cx="70" cy="45" r="2.5" fill="#34D399" stroke="#0E1713" strokeWidth="1" />
              <circle cx="130" cy="18" r="3" fill="#A7F3D0" stroke="#0E1713" strokeWidth="1" />
              <circle cx="195" cy="28" r="2.5" fill="#34D399" stroke="#0E1713" strokeWidth="1" />
            </svg>
          </div>

          {/* Bottom circular metrics */}
          <div className="mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-[#2D6A4F]/25 flex items-center justify-between gap-1.5">
            <div className="flex flex-col items-center">
              <div className="w-4.5 sm:w-5 h-4.5 sm:h-5 rounded-full border-2 border-[#2DD4BF] border-t-transparent -rotate-45" />
              <div className="w-3.5 sm:w-4 h-1 bg-slate-700/60 rounded-full mt-1" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4.5 sm:w-5 h-4.5 sm:h-5 rounded-full border-2 border-[#34D399] border-r-transparent rotate-45" />
              <div className="w-3.5 sm:w-4 h-1 bg-slate-700/60 rounded-full mt-1" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4.5 sm:w-5 h-4.5 sm:h-5 rounded-full border-2 border-[#10B981] border-b-transparent" />
              <div className="w-3.5 sm:w-4 h-1 bg-slate-700/60 rounded-full mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge: Fast Performance */}
      <div className="absolute -bottom-3 sm:-bottom-4 -right-1 sm:-right-3 z-30 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.15)] px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2">
        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B4332] fill-[#1B4332] shrink-0" />
        <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight">
          Fast<br className="hidden sm:inline" /> Performance
        </span>
      </div>
    </div>
  );
}

const ROTATING_WORDS = [
  'modern',
  'powerful',
  'scalable',
  'impactful',
  'beautiful',
];

function HeroRotatingWord() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span
      className="relative inline-flex items-center justify-center overflow-hidden align-baseline rounded-md sm:rounded-lg px-[0.22em] py-[0.02em] bg-[#1B4332]/[0.07] border border-[#1B4332]/10 text-[#1B4332] text-[0.88em] min-[400px]:text-[0.92em] sm:text-[1em] min-w-[4.6em] sm:min-w-[4.8em] transition-[width] duration-300"
      style={{
        verticalAlign: 'baseline',
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: '-120%', opacity: 0 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 400,
          }}
          className="inline-flex items-center justify-center whitespace-nowrap text-[#1B4332]"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export const HeroSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#services';
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 bg-gradient-to-b from-[#F2F7F4]/60 via-white to-white overflow-hidden">
      {/* Background Soft Organic Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#E8F5E9]/50 via-[#E8F5E9]/20 to-transparent blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#E8F5E9]/35 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#E8F5E9]/35 blur-3xl rounded-full" />

      {/* Background Subtle Constellation Network Lines & Dots */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M 60 180 C 180 120, 240 260, 360 220 C 440 190, 520 280, 640 240"
          stroke="#2D6A4F"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
        <path
          d="M 820 160 C 940 220, 1060 140, 1180 210 C 1260 260, 1340 200, 1420 240"
          stroke="#2D6A4F"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
        <path
          d="M 100 480 C 240 420, 360 520, 500 460"
          stroke="#2D6A4F"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
        <path
          d="M 1000 440 C 1140 500, 1280 420, 1400 480"
          stroke="#2D6A4F"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Constellation Dots */}
      <div className="pointer-events-none absolute inset-0 max-w-[1400px] mx-auto overflow-hidden">
        <span className="absolute top-[16%] left-[8%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
        <span className="absolute top-[52%] left-[24%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
        <span className="absolute top-[68%] left-[7%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
        <span className="absolute top-[14%] right-[14%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
        <span className="absolute top-[58%] right-[26%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
        <span className="absolute top-[72%] right-[9%] w-2 h-2 rounded-full bg-[#1B4332] ring-4 ring-[#1B4332]/10" />
      </div>

      <Container className="relative z-10 max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Hero Container with Flanking Desktop Cards */}
        <div className="relative">
          {/* DESKTOP LEFT CARD: Websites that perform (Moved aside & lower to completely avoid heading) */}
          <div className="hidden lg:block absolute -left-10 xl:-left-16 2xl:-left-8 top-[58%] -translate-y-1/2 z-10 scale-[0.76] xl:scale-[0.88] 2xl:scale-100 origin-left">
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <LightWebCard />

              {/* Handwritten Note: Websites that perform */}
              <div className="absolute -bottom-16 -left-6 xl:-left-8 flex items-center gap-2 pointer-events-none select-none">
                <span className="font-handwriting text-slate-700 font-bold text-xl xl:text-2xl -rotate-6">
                  Websites that perform
                </span>
                <svg
                  className="w-10 h-10 text-slate-600 -rotate-12 translate-y-1"
                  viewBox="0 0 44 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 28 C12 34, 26 32, 34 14" />
                  <path d="M26 13 L35 13 L35 22" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP RIGHT CARD: Apps that scale (Moved aside & lower to completely avoid heading) */}
          <div className="hidden lg:block absolute -right-10 xl:-right-16 2xl:-right-8 top-[58%] -translate-y-1/2 z-10 scale-[0.76] xl:scale-[0.88] 2xl:scale-100 origin-right">
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Handwritten Note: Apps that scale */}
              <div className="absolute -top-16 -right-4 xl:-right-6 flex items-center gap-2 pointer-events-none select-none">
                <svg
                  className="w-10 h-10 text-slate-600 rotate-12 -translate-y-1"
                  viewBox="0 0 44 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10 C14 18, 24 24, 34 32" />
                  <path d="M25 32 L35 32 L34 22" />
                </svg>
                <span className="font-handwriting text-slate-700 font-bold text-xl xl:text-2xl rotate-3">
                  Apps that scale
                </span>
              </div>

              <DarkAppCard />
            </motion.div>
          </div>

          {/* CENTER HERO CONTENT: Badge, Headline, Subtitle, CTA */}
          <div className="flex flex-col items-center text-center max-w-xl xl:max-w-2xl mx-auto relative z-20">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-slate-200/80 bg-white/90 shadow-2xs backdrop-blur-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#1B4332]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
                IDEA <span className="text-slate-300 mx-1 sm:mx-1.5 font-normal">→</span>{' '}
                DESIGN <span className="text-slate-300 mx-1 sm:mx-1.5 font-normal">→</span>{' '}
                DEVELOP <span className="text-slate-300 mx-1 sm:mx-1.5 font-normal">→</span>{' '}
                GROW
              </span>
            </motion.div>

            {/* Main Headline: Prominent & larger on mobile, balanced on desktop */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 sm:mt-8 font-sans text-[32px] min-[390px]:text-[36px] sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[56px] font-black text-slate-900 leading-[1.12] sm:leading-[1.08] tracking-[-0.035em] lg:-mx-12 xl:-mx-20"
            >
              <span className="sr-only">
                We build modern, powerful, scalable, impactful, and beautiful websites &amp; apps that grow your business.
              </span>
              <span aria-hidden="true" className="block">
                <span>We build</span>
                <br />
                <HeroRotatingWord />{' '}
                <span className="inline-block text-[#1B4332]">websites &amp; apps</span>
                <br />
                <span>that grow your </span>
                <span className="relative inline-block">
                  business.
                  {/* Curved green underline swoosh */}
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3.5 pointer-events-none"
                    viewBox="0 0 160 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C45 3 115 3 157 10C115 4.5 45 4.5 3 10Z"
                      fill="#2D6A4F"
                    />
                  </svg>
                </span>
              </span>
            </motion.h1>

            {/* Subtitle: Smaller on mobile for clean hierarchy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3.5 sm:mt-6 font-body text-[13px] sm:text-base md:text-[17px] text-slate-500 sm:text-slate-600 leading-relaxed max-w-sm sm:max-w-xl mx-auto"
            >
              From custom websites and web applications to design and marketing, BayleafX helps you look world-class, load fast, and turn visitors into paying customers.
            </motion.p>

            {/* Premium CTA Buttons: Placed Side by Side on Mobile and Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            >
              {/* Primary Luxury Button: Apple/Linear-grade finish */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group relative inline-flex items-center justify-center px-3.5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-b from-[#24543F] via-[#1B4332] to-[#143526] text-white text-xs sm:text-base font-semibold tracking-[-0.01em] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_10px_25px_-5px_rgba(27,67,50,0.38),0_4px_10px_rgba(27,67,50,0.2)] hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_16px_32px_-5px_rgba(27,67,50,0.48),0_6px_14px_rgba(27,67,50,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-[#34D399]/25 transition-all duration-200 cursor-pointer overflow-hidden whitespace-nowrap"
              >
                {/* Subtle top chamfer highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent pointer-events-none" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Luxury Button: Frosted white with green play badge */}
              <a
                href="#services"
                onClick={scrollToServices}
                className="group inline-flex items-center justify-center px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs sm:text-base font-semibold tracking-[-0.01em] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:bg-slate-50/90 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#24543F] to-[#16382A] text-white flex items-center justify-center mr-1.5 sm:mr-2.5 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                  <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white ml-0.5" />
                </span>
                <span>See Our Services</span>
              </a>
            </motion.div>
          </div>

          {/* MOBILE & TABLET LAYERED CARDS: Shown directly below buttons on < lg */}
          <div className="block lg:hidden mt-8 sm:mt-10 relative w-full max-w-[340px] sm:max-w-[420px] mx-auto h-[320px] sm:h-[350px]">
            {/* Dark Card behind, shifted down-right, tilted +6deg */}
            <div className="absolute right-0 top-14 sm:top-16 z-10 rotate-[6deg]">
              <DarkAppCard isMobile />
            </div>

            {/* Light Card in front, shifted top-left, tilted -4deg */}
            <div className="absolute left-0 top-0 z-20 -rotate-[4deg]">
              <LightWebCard isMobile />
            </div>
          </div>
        </div>

        {/* TRUST METRICS SECTION */}
        {/* Desktop & Tablet: Horizontal Divider with Center Node + Grid */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-5xl mx-auto mt-16 lg:mt-24 mb-8 sm:mb-10">
            <div className="w-full h-px bg-slate-200/80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
          </div>

          <div className="grid grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="flex items-start gap-3">
                <metric.icon className="w-5 h-5 text-slate-800 mt-1 shrink-0" strokeWidth={1.8} />
                <div className="flex flex-col">
                  <span className="font-sans text-2xl lg:text-[28px] font-black text-slate-900 tracking-tight leading-none">
                    {metric.value}
                  </span>
                  <span className="font-body text-xs sm:text-[13px] font-medium text-slate-500 mt-1.5 leading-snug">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile (< md): Unified Floating White Card with 4 Columns & Vertical Dividers */}
        <div className="md:hidden mt-8 w-full max-w-sm mx-auto bg-white/95 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-4 px-2 grid grid-cols-4 divide-x divide-slate-100 backdrop-blur-xs">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center px-1">
              <metric.icon className="w-4 h-4 text-slate-800 mb-2 shrink-0" strokeWidth={1.8} />
              <span className="font-sans text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                {metric.value}
              </span>
              <span className="font-body text-[9px] sm:text-[10px] font-medium text-slate-500 leading-tight mt-1 line-clamp-2">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
