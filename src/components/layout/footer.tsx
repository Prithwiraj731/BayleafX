import React from 'react';
import Link from 'next/link';
import { Container } from './container';
import { Logo } from '@/components/ui/logo';
import { NAV_LINKS } from '@/lib/constants';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Refund & Cancellation', href: '/refunds' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-[#F8FAF9] py-16 text-slate-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Logo href="/" />
            <p className="max-w-sm font-sans text-sm text-slate-600 leading-relaxed">
              We design and build fast websites, custom web applications, and digital marketing that helps your business grow.
            </p>
            <div>
              <a
                href="mailto:bayleafxtechnologies@gmail.com"
                className="font-mono text-xs text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
              >
                bayleafxtechnologies@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] text-slate-900 font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.16em] text-slate-900 font-bold mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BayleafX. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Engineered by{' '}
            <a
              href="https://prithwiportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#1B4332] underline underline-offset-2 transition-colors font-medium"
            >
              Prithwiraj
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
