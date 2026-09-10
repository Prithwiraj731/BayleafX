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
    <footer className="border-t border-white/[0.08] bg-[#0B0B0B] py-14 text-[#9E9B95]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Logo href="/" />
            <p className="mt-3.5 max-w-sm font-body text-xs text-[#6E6B66] leading-relaxed">
              Bespoke digital architecture and haute-couture experience engineering.
              Clean. Premium. Timeless.
            </p>
            <div className="mt-4">
              <a
                href="mailto:hello@bayleafx.com"
                className="font-mono text-xs text-[#9E9B95] hover:text-[#F5F2ED] transition-colors"
              >
                hello@bayleafx.com
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F2ED] font-bold mb-3.5">
              Atelier
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-xs text-[#6E6B66] transition-colors duration-200 hover:text-[#F5F2ED]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F2ED] font-bold mb-3.5">
              Legal & Governance
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-[#6E6B66] transition-colors duration-200 hover:text-[#F5F2ED]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-[#54524F]">
            &copy; {new Date().getFullYear()} BAYLEAFX ATELIER. ARCHITECTED TO SCALE.
          </p>

          <div className="flex items-center gap-3 text-xs text-[#6E6B66]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#8B0D1A] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#9E9B95]">
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
