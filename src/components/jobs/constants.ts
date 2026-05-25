import type { Variants } from 'motion/react';

export const ASSETS = {
  searchHeroTexture: '/we-look-for/search-hero-texture.png',
  sectionStar: '/we-look-for/section-star.svg',
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};
