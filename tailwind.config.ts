import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bl-void': '#0B0B0B',
        'bl-base': '#0B0B0B',
        'bl-elevated': '#131313',
        'bl-overlay': '#1A1A1A',
        'bl-subtle': '#222222',
        'bl-accent': {
          DEFAULT: '#8B0D1A',
          hover: '#A81324',
          bright: '#C91D32',
          muted: 'rgba(139, 13, 26, 0.22)',
          glow: 'rgba(139, 13, 26, 0.55)',
        },
        'bl-text': {
          primary: '#F5F2ED',
          secondary: '#9E9B95',
          tertiary: '#6E6B66',
          muted: '#3D3B38',
        },
        'bl-border': {
          subtle: 'rgba(245, 242, 237, 0.08)',
          default: 'rgba(245, 242, 237, 0.14)',
          hover: 'rgba(245, 242, 237, 0.28)',
          accent: 'rgba(139, 13, 26, 0.6)',
        },
        'bl-success': '#22C55E',
        'bl-error': '#EF4444',
        'bl-warning': '#EAB308',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'bl-sm': '4px',
        'bl-md': '8px',
        'bl-lg': '14px',
        'bl-xl': '20px',
      },
      backdropBlur: {
        glass: '16px',
        nav: '20px',
      },
      boxShadow: {
        'bl-glow': '0 0 28px rgba(139, 13, 26, 0.45)',
        'bl-glow-lg': '0 0 60px rgba(139, 13, 26, 0.6)',
        'bl-card': '0 16px 48px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
