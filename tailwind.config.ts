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
        'bl-void': '#0B0E0C',
        'bl-base': '#0B0E0C',
        'bl-elevated': '#111714',
        'bl-overlay': '#16201B',
        'bl-subtle': '#1D2A24',
        'bl-accent': {
          DEFAULT: '#2D6A4F',
          hover: '#40916C',
          bright: '#52B788',
          muted: 'rgba(45, 106, 79, 0.18)',
          glow: 'rgba(45, 106, 79, 0.35)',
        },
        'bl-text': {
          primary: '#F5F7F5',
          secondary: '#9CA3AF',
          tertiary: '#6C7A70',
          muted: '#4B554F',
        },
        'bl-border': {
          subtle: 'rgba(245, 247, 245, 0.08)',
          default: 'rgba(245, 247, 245, 0.14)',
          hover: 'rgba(82, 183, 136, 0.3)',
          accent: 'rgba(45, 106, 79, 0.6)',
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
        'bl-glow': '0 0 28px rgba(45, 106, 79, 0.35)',
        'bl-glow-lg': '0 0 60px rgba(45, 106, 79, 0.45)',
        'bl-card': '0 16px 48px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
