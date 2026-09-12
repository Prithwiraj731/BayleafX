import type { Metadata, Viewport } from 'next';
import { outfit, inter, jetbrainsMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'BayleafX — Architectural Software & Haute-Couture Digital Design',
  description:
    'BayleafX is an independent digital atelier fusing architectural software engineering with luxury brand elevation. Clean. Premium. Timeless.',
  keywords: [
    'web application engineering',
    'bespoke software architecture',
    'luxury digital design',
    'high-performance web apps',
    'growth engineering',
  ],
  authors: [{ name: 'BayleafX Atelier' }],
  metadataBase: new URL('https://bayleafx.com'),
  openGraph: {
    title: 'BayleafX — Architectural Software & Haute-Couture Digital Design',
    description:
      'Independent digital atelier fusing architectural software engineering with luxury brand elevation. Clean. Premium. Timeless.',
    url: 'https://bayleafx.com',
    siteName: 'BayleafX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayleafX — Architectural Software & Haute-Couture Digital Design',
    description:
      'Independent digital atelier fusing architectural software engineering with luxury brand elevation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/tab-logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/tab-logo.png', type: 'image/png' },
    ],
    shortcut: ['/tab-logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0E0C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0E0C] text-[#F5F7F5] antialiased selection:bg-[#2D6A4F]/40 selection:text-[#F5F7F5]">
        {children}
      </body>
    </html>
  );
}
