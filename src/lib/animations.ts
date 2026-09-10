import { Variants } from 'framer-motion';

// Primary easing curve: Apple-grade smooth deceleration
export const transitionEase = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: transitionEase,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: transitionEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: transitionEase,
    },
  },
};

export const hoverCardGlow = {
  rest: {
    y: 0,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  hover: {
    y: -3,
    borderColor: 'rgba(212, 168, 67, 0.4)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(212, 168, 67, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
