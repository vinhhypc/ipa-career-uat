'use client';

import { motion } from 'motion/react';

import Breadcrumbs from '@/components/Breadcrumbs';

export type LifeAtIpagBreadcrumbsProps = {
  className?: string;
  /** Mặc định: Trang chủ / Life at IPAG */
  items?: { label: string; href?: string }[];
};

const DEFAULT_ITEMS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Life at IPAG', href: '/#life-at-ipag' },
] as const;

export default function LifeAtIpagBreadcrumbs({ className, items }: LifeAtIpagBreadcrumbsProps) {
  return (
    <section className="section-padding pt-30! md:pt-[180px]! pb-6!">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Breadcrumbs
            isLight
            className={className ?? 'text-sm'}
            items={items ?? [...DEFAULT_ITEMS]}
          />
        </motion.div>
      </div>
    </section>
  );
}
