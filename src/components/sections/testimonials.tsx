'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/layout/section-header';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { TESTIMONIALS } from '@/lib/constants';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="Executive Testimonials"
      className="relative w-full py-24 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#0B0E0C]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <SectionHeader
          overline="05 // PARTNERS"
          title="Endorsed by Technical Founders."
          description="We measure our success by long-term retention and the market valuation our engineering unlocks."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="min-h-[320px] sm:min-h-[260px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <TestimonialCard
                  quote={currentTestimonial.quote}
                  author={currentTestimonial.author}
                  title={currentTestimonial.title}
                  company={currentTestimonial.company}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? 'w-8 bg-[#52B788]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#131A16] text-[#9CA3AF] hover:border-[#2D6A4F] hover:text-white transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#131A16] text-[#9CA3AF] hover:border-[#2D6A4F] hover:text-white transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
