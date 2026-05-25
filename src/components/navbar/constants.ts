export type NavChildLink = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: readonly NavChildLink[];
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'IPAG insight', href: '/ipag-insight' },
  {
    label: 'we look for',
    href: '/we-look-for',
    children: [
      { label: 'MA Program', href: '/we-look-for/ma-program' },
      { label: 'Specialist Track', href: '/we-look-for/specialist-track' },
      { label: 'Leadership Track', href: '/we-look-for/leadership-track' },
    ],
  },
  {
    label: 'life at IPAG',
    href: '/life-at-ipag',
    children: [
      { label: 'Cấy nền - Xây nếp', href: '/life-at-ipag/cay-nen-xay-nep' },
      { label: 'Chương trình đào tạo', href: '/life-at-ipag/chuong-trinh-dao-tao' },
      { label: 'Chế độ đãi ngộ', href: '/life-at-ipag/che-do-dai-ngo' },
      { label: 'Chuyện nhà IPAG', href: '/life-at-ipag/chuyen-nha-ipag' },
    ],
  },
  { label: 'CONTACT', href: '/contact' },
];

export type NavMotionConfig = {
  tapTransition: { type: 'spring'; stiffness: number; damping: number };
  tapScale: { scale: number } | undefined;
  tapScaleSoft: { scale: number } | undefined;
  tapScalePill: { scale: number } | undefined;
  hoverScalePill: { scale: number } | undefined;
};
