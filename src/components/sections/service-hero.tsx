'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export interface ServiceHeroImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ServiceHeroProps {
  breadcrumbTitle: string;
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
  title,
  description,
  images,
  ctaPrimaryText = 'Discuss Your Project',
  ctaPrimaryHref = '#contact',
  ctaSecondaryText = 'Explore Deliverables',
  ctaSecondaryHref = '#deliverables',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Smooth continuous auto-advancing carousel
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, totalSlides]);

  return (
    <section className="relative w-full overflow-hidden bg-[#05110D] border-b border-slate-800/80">
      {/* Full-Width Background Images Carousel Stack */}
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
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Deep Dark Forest Multi-Stop Overlay for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040D0A]/95 via-[#06140F]/85 to-[#081B14]/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/60 to-transparent z-10" />

        {/* Subtle Ambient Brand Emerald Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[400px] bg-radial from-[#1B4332]/45 via-transparent to-transparent pointer-events-none z-10" />

        {/* Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content Container aligned with site grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] md:min-h-[540px]">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
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

        {/* Main Heading & Description */}
        <div className="my-auto py-8 sm:py-10 max-w-3xl">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08] drop-shadow-sm">
            {title}
          </h1>

          <p className="mt-4 sm:mt-5 font-body text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Action Buttons */}
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

        {/* Minimal Unobtrusive Auto-Carousel Progress Dots */}
        <div className="flex items-center gap-1.5 pt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to background slide ${idx + 1}`}
              className={`h-1 transition-all duration-500 rounded-full ${
                idx === currentSlide
                  ? 'w-8 bg-emerald-400'
                  : 'w-2 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
