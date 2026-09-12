'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/layout/container';
import { NAV_LINKS } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const primaryLinks = NAV_LINKS.slice(0, 4);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E0C]/90 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 md:py-7'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-xs uppercase tracking-wider font-medium text-[#9CA3AF] hover:text-[#F5F7F5] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center Brand Name */}
          <div className="flex items-center justify-center">
            <Logo href="#" />
          </div>

          {/* Right Capsule Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-4 py-2 text-xs font-body tracking-wide text-[#F5F7F5] hover:border-[#2D6A4F] hover:bg-[#2D6A4F]/15 transition-all duration-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Get Started</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="group inline-flex items-center gap-2 rounded-full border border-[#2D6A4F] bg-[#2D6A4F] px-4 py-2 text-xs font-semibold font-body tracking-wide text-white hover:bg-[#40916C] hover:border-[#40916C] hover:shadow-[0_0_20px_rgba(45,106,79,0.45)] transition-all duration-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#9CA3AF] hover:text-white hover:bg-white/[0.05] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#F5F7F5]" />
              ) : (
                <Menu className="h-6 w-6 text-[#F5F7F5]" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between bg-[#0B0E0C]/98 backdrop-blur-2xl p-6 border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                  className="font-display text-2xl font-black uppercase tracking-tight text-[#F5F7F5] hover:text-[#52B788] transition-colors py-2 border-b border-white/[0.05]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-6 pb-8 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#2D6A4F] bg-[#2D6A4F] py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(45,106,79,0.35)] hover:bg-[#40916C] transition-all"
              >
                <span>Initiate Engagement</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
