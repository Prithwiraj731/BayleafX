'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith('#')) {
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        // We are on a subpage, navigate to home with hash
        return;
      }
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 h-16 flex items-center ${
          mobileMenuOpen
            ? 'bg-white border-b border-slate-200'
            : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/50'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo href="/" />
            </div>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const targetHref =
                  typeof window !== 'undefined' && window.location.pathname !== '/' && link.href.startsWith('#')
                    ? `/${link.href}`
                    : link.href;

                return (
                  <a
                    key={link.label}
                    href={targetHref}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center">
              <Button
                variant="primary"
                size="default"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Start a project
              </Button>
            </div>

            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 p-6 flex flex-col justify-between md:hidden shadow-2xl overflow-y-auto"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xl font-bold tracking-tight text-slate-900 hover:text-emerald-700 transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pb-8 pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
