export const NAV_LINKS = [
  { label: 'IPAG insight', href: '/ipag-insight' },
  { label: 'we look for', href: '/we-look-for' },
  { label: 'life at IPAG', href: '/life-at-ipag' },
  { label: 'CONTACT', href: '/contact' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export type NavMotionConfig = {
  tapTransition: { type: 'spring'; stiffness: number; damping: number };
  tapScale: { scale: number } | undefined;
  tapScaleSoft: { scale: number } | undefined;
  tapScalePill: { scale: number } | undefined;
  hoverScalePill: { scale: number } | undefined;
};
