'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { TiltedCardServiceItem } from '@/types';
import { TiltedCard } from '@/components/ui/tilted-card';

interface TiltedCardCarouselProps {
  items: TiltedCardServiceItem[];
  className?: string;
}

export const TiltedCardCarousel: React.FC<TiltedCardCarouselProps> = ({
  items,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();
  const N = items.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Animation & interaction refs
  const currentProgressRef = useRef(0);
  const activeIndexRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const lastInteractionTimeRef = useRef(Date.now());
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  // Responsive circular arc geometry parameters with guaranteed card gaps
  const [geometry, setGeometry] = useState({
    R: 900,
    step: 18.0,
    cardWidth: 252,
    stageHeight: 570,
    dragSensitivity: 180,
  });

  const updateGeometry = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width < 640) {
      setGeometry({
        R: 500,
        step: 26.0,
        cardWidth: 200,
        stageHeight: 480,
        dragSensitivity: 120,
      });
    } else if (width < 1024) {
      setGeometry({
        R: 750,
        step: 20.0,
        cardWidth: 230,
        stageHeight: 530,
        dragSensitivity: 150,
      });
    } else {
      setGeometry({
        R: 900,
        step: 18.0,
        cardWidth: 252,
        stageHeight: 570,
        dragSensitivity: 180,
      });
    }
  }, []);

  // Update card positions along the true circular arc
  const updateCards = useCallback(
    (progress: number) => {
      const { R, step } = geometry;

      for (let i = 0; i < N; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Calculate angular difference relative to progress
        let diff = (i - progress) % N;
        if (diff > N / 2) diff -= N;
        if (diff < -N / 2) diff += N;

        const angleDeg = diff * step;
        const rad = (angleDeg * Math.PI) / 180;

        // Circular coordinates: Center apex is at (0, 0)
        const x = R * Math.sin(rad);
        const y = R * (1 - Math.cos(rad));
        const absAngle = Math.abs(angleDeg);

        // Gentle scale reduction on outer cards
        const scale = Math.max(0.75, 1.0 - (absAngle / 50.0) * 0.22);

        // Smooth opacity falloff towards the horizon (beyond 38°)
        let opacity = 1.0;
        if (absAngle > 38) {
          opacity = Math.max(0.0, 1.0 - (absAngle - 38) / 18);
        }

        // Center card gets highest z-index
        const zIndex = Math.max(1, Math.round(50 - absAngle));

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${angleDeg.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = zIndex.toString();
        el.style.pointerEvents = opacity < 0.2 ? 'none' : 'auto';
      }
    },
    [N, geometry]
  );

  // Smoothly animate progress with GSAP spring/easing
  const animateToProgress = useCallback(
    (targetProgress: number) => {
      if (activeTweenRef.current) {
        activeTweenRef.current.kill();
      }

      const animObj = { val: currentProgressRef.current };
      activeTweenRef.current = gsap.to(animObj, {
        val: targetProgress,
        duration: 0.65,
        ease: 'power2.out',
        onUpdate: () => {
          currentProgressRef.current = animObj.val;
          updateCards(animObj.val);
        },
        onComplete: () => {
          const normalized = ((Math.round(targetProgress) % N) + N) % N;
          setActiveIndex(normalized);
          activeIndexRef.current = normalized;
        },
      });
    },
    [N, updateCards]
  );

  // Initial setup & resize listener
  useEffect(() => {
    updateGeometry();
    const handleResize = () => {
      updateGeometry();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (activeTweenRef.current) activeTweenRef.current.kill();
    };
  }, [updateGeometry]);

  // Update cards when geometry or N changes
  useEffect(() => {
    updateCards(currentProgressRef.current);
  }, [geometry, updateCards]);

  // Silky smooth continuous auto-glide rotation
  useEffect(() => {
    let rafId: number;

    const driftStep = () => {
      const now = Date.now();
      const timeSinceInteraction = now - lastInteractionTimeRef.current;

      if (
        isAutoPlaying &&
        !isDraggingRef.current &&
        !isHoveredRef.current &&
        timeSinceInteraction > 1800
      ) {
        currentProgressRef.current += 0.0022; // subtle continuous circular rotation
        updateCards(currentProgressRef.current);

        const normalized = ((Math.round(currentProgressRef.current) % N) + N) % N;
        if (normalized !== activeIndexRef.current) {
          activeIndexRef.current = normalized;
          setActiveIndex(normalized);
        }
      }

      rafId = requestAnimationFrame(driftStep);
    };

    rafId = requestAnimationFrame(driftStep);
    return () => cancelAnimationFrame(rafId);
  }, [isAutoPlaying, N, updateCards]);

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (activeTweenRef.current) activeTweenRef.current.kill();

    isDraggingRef.current = true;
    setIsDragging(true);
    lastInteractionTimeRef.current = Date.now();
    dragStartXRef.current = e.clientX;
    dragStartProgressRef.current = currentProgressRef.current;
    dragDistanceRef.current = 0;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - dragStartXRef.current;
    dragDistanceRef.current += Math.abs(deltaX);
    lastInteractionTimeRef.current = Date.now();

    const progressDelta = deltaX / geometry.dragSensitivity;
    currentProgressRef.current = dragStartProgressRef.current - progressDelta;
    updateCards(currentProgressRef.current);

    const normalized = ((Math.round(currentProgressRef.current) % N) + N) % N;
    if (normalized !== activeIndexRef.current) {
      activeIndexRef.current = normalized;
      setActiveIndex(normalized);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    lastInteractionTimeRef.current = Date.now();

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }

    setTimeout(() => {
      setIsDragging(false);
      dragDistanceRef.current = 0;
    }, 50);

    // Snap to the closest card
    const targetProgress = Math.round(currentProgressRef.current);
    animateToProgress(targetProgress);
  };

  // Click any card to rotate it directly to the center apex, or navigate if already active
  const handleCardClick = (itemIdx: number) => {
    if (dragDistanceRef.current > 8) return;
    lastInteractionTimeRef.current = Date.now();

    // If card is already in the center apex, navigate directly to its dedicated page
    if (itemIdx === activeIndexRef.current) {
      if (items[itemIdx].ctaHref) {
        router.push(items[itemIdx].ctaHref!);
      }
      return;
    }

    let diff = (itemIdx - currentProgressRef.current) % N;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;

    const target = currentProgressRef.current + diff;
    animateToProgress(target);
  };

  // Navigation handlers
  const handlePrev = () => {
    lastInteractionTimeRef.current = Date.now();
    const target = Math.round(currentProgressRef.current) - 1;
    animateToProgress(target);
  };

  const handleNext = () => {
    lastInteractionTimeRef.current = Date.now();
    const target = Math.round(currentProgressRef.current) + 1;
    animateToProgress(target);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    lastInteractionTimeRef.current = Date.now();
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Half-circle curved services carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        lastInteractionTimeRef.current = Date.now();
      }}
      className={`relative w-full select-none outline-none ${className}`}
    >
      {/* Top Controls: Active Index Indicator, Navigation & Pause */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] font-mono text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A4F] animate-pulse" />
            <span>
              {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Previous, Next & Auto-Glide Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying);
              lastInteractionTimeRef.current = Date.now();
            }}
            aria-label={isAutoPlaying ? 'Pause circular rotation' : 'Resume circular rotation'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
            title={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
          >
            {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous service"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next service"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* True Half-Circle Curved Arc Stage */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full overflow-hidden select-none touch-pan-y ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          height: `${geometry.stageHeight}px`,
        }}
      >
        {/* Subtle Brand Emerald Ambient Halo at Apex */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-emerald-100/40 via-transparent to-transparent pointer-events-none -z-10" />

        {/* Circular Curved Guide Line in Background */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10 overflow-visible"
          width="1200"
          height={geometry.stageHeight}
          viewBox={`0 0 1200 ${geometry.stageHeight}`}
          fill="none"
        >
          <path
            d={`M 0 ${geometry.stageHeight} Q 600 -40 1200 ${geometry.stageHeight}`}
            stroke="#CBD5E1"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.45"
          />
        </svg>

        {/* All 7 Service Cards Positioned on the True Half-Circle Arc */}
        {items.map((service, index) => {
          const isCenter = index === activeIndex;

          return (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                marginLeft: `-${geometry.cardWidth / 2}px`,
                width: `${geometry.cardWidth}px`,
                willChange: 'transform, opacity',
                transformOrigin: '50% 85%',
              }}
            >
              <TiltedCard
                service={service}
                index={index}
                isCenter={isCenter}
                width={geometry.cardWidth}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Dots Indicator */}
      <div className="mt-2 sm:mt-4 flex items-center justify-center gap-1.5">
        {items.map((service, idx) => (
          <button
            key={service.id}
            type="button"
            onClick={() => {
              let diff = (idx - currentProgressRef.current) % N;
              if (diff > N / 2) diff -= N;
              if (diff < -N / 2) diff += N;
              animateToProgress(currentProgressRef.current + diff);
            }}
            aria-label={`Go to ${service.title}`}
            className={`transition-all duration-300 rounded-full h-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] ${
              idx === activeIndex
                ? 'w-7 bg-[#1B4332]'
                : 'w-1.5 bg-slate-200 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
