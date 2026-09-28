'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Server,
  Sparkles,
  Share2,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

export type ServiceHeroBadgeIcon =
  | 'ecommerce'
  | 'maintenance'
  | 'uiux'
  | 'social'
  | 'paidads'
  | 'seo'
  | 'webapp';

const ICON_MAP: Record<ServiceHeroBadgeIcon, React.ComponentType<{ className?: string }>> = {
  ecommerce: ShoppingBag,
  maintenance: Server,
  uiux: Sparkles,
  social: Share2,
  paidads: Target,
  seo: TrendingUp,
  webapp: Zap,
};

export interface ServiceHeroImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ServiceHeroProps {
  breadcrumbTitle: string;
  badgeText: string;
  badgeIconKey: ServiceHeroBadgeIcon;
  title: string;
  description: string;
  images: ServiceHeroImage[];
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  breadcrumbTitle,
  badgeText,
  badgeIconKey,
  title,
  description,
  images,
  ctaPrimaryText = 'Discuss Your Project',
  ctaPrimaryHref = '#contact',
  ctaSecondaryText = 'View Deliverables',
  ctaSecondaryHref = '#deliverables',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = images.length;
  const BadgeIcon = ICON_MAP[badgeIconKey] || Sparkles;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Smooth auto-advancing carousel
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, totalSlides]);

  return (
    <div className="relative w-full">
      {/* Outer Hero Container Card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full min-h-[500px] sm:min-h-[540px] md:min-h-[580px] rounded-3xl overflow-hidden bg-[#05110D] border border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(4,13,10,0.5)] flex flex-col justify-between p-6 sm:p-10 md:p-14"
      >
        {/* Background Images Carousel Stack with Ken-Burns Transition */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {images.map((img, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={img.url}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-0'
                    : 'opacity-0 scale-105 -z-10'
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center"
                />
              </div>
            );
          })}

          {/* Deep Dark Forest Multi-Stop Overlay for High-Contrast Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040D0A]/95 via-[#06140F]/85 to-[#081B14]/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/60 to-transparent z-10" />
          
          {/* Subtle Ambient Brand Emerald Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-radial from-[#1B4332]/45 via-transparent to-transparent pointer-events-none z-10" />
          
          {/* Subtle Grid Texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Foreground Top: Breadcrumbs Navigation */}
        <div className="relative z-20 flex items-center gap-2 text-xs font-semibold text-slate-300">
          <Link
            href="/"
            className="hover:text-white transition-colors text-slate-400"
          >
            Home
          </Link>
          <span className="text-slate-500">/</span>
          <Link
            href="/services"
            className="hover:text-white transition-colors text-slate-400"
          >
            Services
          </Link>
          <span className="text-slate-500">/</span>
          <span className="text-emerald-300 font-bold">{breadcrumbTitle}</span>
        </div>

        {/* Foreground Center: Badge, Main Heading & Description */}
        <div className="relative z-20 my-auto py-8 sm:py-10 max-w-3xl">
          {/* Frosted Glass Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 border border-white/15 mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <BadgeIcon className="h-3.5 w-3.5 text-emerald-300" />
            <span>{badgeText}</span>
          </div>

          {/* Impactful Heading with Crisp Contrast */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.08] drop-shadow-sm">
            {title}
          </h1>

          {/* Subheading / Description */}
          <p className="mt-4 sm:mt-5 font-body text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Direct CTA Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={ctaPrimaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold hover:bg-[#38805E] transition-all shadow-lg shadow-emerald-950/50 group/btn"
            >
              <span>{ctaPrimaryText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            {ctaSecondaryText && (
              <a
                href={ctaSecondaryHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all"
              >
                <span>{ctaSecondaryText}</span>
                <ChevronDown className="h-4 w-4 text-emerald-300" />
              </a>
            )}
          </div>
        </div>

        {/* Foreground Bottom Bar: Slide Tag, Slide Indicators & Arrow Controls */}
        <div className="relative z-20 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Active Image Focus Caption */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
            <span className="font-mono text-emerald-400 font-bold">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 truncate max-w-[280px] sm:max-w-sm">
              {images[currentSlide]?.caption || images[currentSlide]?.alt}
            </span>
          </div>

          {/* Interactive Slide Controls & Navigation Arrows */}
          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            {/* Slide Indicator Bars */}
            <div className="flex items-center gap-1.5 mr-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to background slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? 'w-7 bg-emerald-400'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Previous Slide Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous background image"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all focus:outline-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next Slide Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next background image"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all focus:outline-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
