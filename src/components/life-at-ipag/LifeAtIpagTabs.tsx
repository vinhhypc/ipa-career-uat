'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { BookOpen, Gift, Heart, Pencil } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type LifeAtIpagTabKey =
  | 'cay-nen-xay-nep'
  | 'chuong-trinh-dao-tao'
  | 'che-do-dai-ngo'
  | 'chuyen-nha-ipag';

const TAB_ITEMS: { key: LifeAtIpagTabKey; label: string; href: string; icon: LucideIcon }[] = [
  {
    key: 'cay-nen-xay-nep',
    label: 'Cấy nền - Xây nếp',
    href: '/life-at-ipag?tab=cay-nen-xay-nep',
    icon: Heart,
  },
  {
    key: 'chuong-trinh-dao-tao',
    label: 'Chương trình đào tạo',
    href: '/life-at-ipag?tab=chuong-trinh-dao-tao',
    icon: BookOpen,
  },
  {
    key: 'che-do-dai-ngo',
    label: 'Chế độ đãi ngộ',
    href: '/life-at-ipag?tab=che-do-dai-ngo',
    icon: Gift,
  },
  {
    key: 'chuyen-nha-ipag',
    label: 'Chuyện nhà IPAG',
    href: '/life-at-ipag?tab=chuyen-nha-ipag',
    icon: Pencil,
  },
];

export type LifeAtIpagTabsProps = {
  activeKey: LifeAtIpagTabKey;
  onChange?: (key: LifeAtIpagTabKey) => void;
  className?: string;
};

const ENABLED_KEYS: LifeAtIpagTabKey[] = [
  'cay-nen-xay-nep',
  'chuong-trinh-dao-tao',
  'che-do-dai-ngo',
  'chuyen-nha-ipag',
];

export default function LifeAtIpagTabs({ activeKey, onChange, className }: LifeAtIpagTabsProps) {
  return (
    <>
      <motion.div
        className={`mt-8 grid grid-cols-2 gap-2 md:hidden ${className ?? ''}`.trim()}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.05 },
          },
        }}
      >
        {TAB_ITEMS.map((t) => {
          const isActive = t.key === activeKey;
          const isEnabled = ENABLED_KEYS.includes(t.key);
          const active = isActive
            ? 'border-[#002b5b] bg-[#e7f0fa] text-[#002b5b]'
            : 'border-[#e5e7eb] bg-white text-[#707070]';

          const baseClassName = `flex h-10 items-center justify-center rounded-full border px-3 text-center text-[13px] font-medium transition ${active} ${
            isEnabled ? '' : 'opacity-45'
          }`;

          if (onChange && isEnabled) {
            return (
              <motion.button
                key={`mob-${t.key}`}
                type="button"
                className={baseClassName}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onChange(t.key)}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
                }}
              >
                {t.label}
              </motion.button>
            );
          }

          return (
            <motion.div
              key={`mob-${t.key}`}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
            >
              <Link
                href={t.href}
                className={baseClassName}
                aria-current={isActive ? 'page' : undefined}
                aria-disabled={!isEnabled}
                tabIndex={isEnabled ? 0 : -1}
              >
                {t.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-10 hidden flex-wrap items-center justify-center gap-4 md:flex"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.08 },
          },
        }}
      >
        {TAB_ITEMS.map((t) => {
          const isActive = t.key === activeKey;
          const isEnabled = ENABLED_KEYS.includes(t.key);
          const Icon = t.icon;
          const active = isActive
            ? 'border-[#002b5b] bg-[#e7f0fa] text-[#002b5b]'
            : 'border-[#d0d5dd] bg-white text-[#707070] hover:bg-[#f8fafc]';
          const className = `inline-flex h-8 items-center justify-center gap-2 rounded-full border px-4 text-sm font-medium transition ${active} ${
            isEnabled ? '' : 'opacity-45'
          }`;

          if (onChange && isEnabled) {
            return (
              <motion.button
                key={`desk-${t.key}`}
                type="button"
                className={className}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onChange(t.key)}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
              >
                <Icon className="size-4" />
                {t.label}
              </motion.button>
            );
          }

          return (
            <motion.div
              key={`desk-${t.key}`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              <Link
                href={t.href}
                className={className}
                aria-current={isActive ? 'page' : undefined}
                aria-disabled={!isEnabled}
                tabIndex={isEnabled ? 0 : -1}
              >
                <Icon className="size-4" />
                {t.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
