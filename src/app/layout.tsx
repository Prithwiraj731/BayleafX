import type { Metadata, Viewport } from 'next';
import { plusJakartaSans, inter, jetbrainsMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'BayleafX — Enterprise Software & Digital Product Studio',
  description:
    'BayleafX is an independent design and engineering studio building high-performance web applications, scalable platforms, and bespoke digital experiences for modern enterprises.',
  keywords: [
    'web application engineering',
    'enterprise software studio',
    'bespoke web design',
    'Next.js development',
    'UI/UX design systems',
    'high-performance engineering',
  ],
  authors: [{ name: 'BayleafX' }],
  metadataBase: new URL('https://www.bayleafx.com'),
  openGraph: {
    title: 'BayleafX — Enterprise Software & Digital Product Studio',
    description:
      'Independent design and engineering studio building high-performance web applications, scalable platforms, and bespoke digital experiences for modern enterprises.',
    url: 'https://www.bayleafx.com',
    siteName: 'BayleafX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayleafX — Enterprise Software & Digital Product Studio',
    description:
      'Independent design and engineering studio building high-performance web applications and digital platforms.',
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
  themeColor: '#FFFFFF',
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
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#0F172A] font-body antialiased selection:bg-[#2D6A4F]/15 selection:text-[#1B4332]">
        {children}
      </body>
    </html>
  );
}
