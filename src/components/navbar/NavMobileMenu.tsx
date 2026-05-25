'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { NAV_LINKS, NavMotionConfig } from './constants';

const MotionLink = motion(Link);

type Props = {
  isOpen: boolean;
  pathname: string;
  isHome: boolean;
  applyHref: string;
  onClose: () => void;
  motionConfig: NavMotionConfig;
};

export default function NavMobileMenu({
  isOpen,
  pathname,
  isHome,
  applyHref,
  onClose,
  motionConfig,
}: Props) {
  const { tapTransition, tapScaleSoft, tapScalePill, hoverScalePill } = motionConfig;
  const [manualOpenGroupLabel, setManualOpenGroupLabel] = useState<string | null | undefined>(
    undefined,
  );

  const activeGroupLabel = useMemo(() => {
    const activeGroup = NAV_LINKS.find((item) =>
      item.children?.some(
        (child) => pathname === child.href || pathname.startsWith(child.href + '/'),
      ),
    );
    return activeGroup?.label ?? null;
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + '/') ||
                item.children?.some(
                  (child) => pathname === child.href || pathname.startsWith(child.href + '/'),
                ) ||
                false;
              const hasChildren = Boolean(item.children?.length);
              const effectiveOpenGroupLabel =
                manualOpenGroupLabel === undefined ? activeGroupLabel : manualOpenGroupLabel;
              const isGroupOpen = effectiveOpenGroupLabel === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center border-l-2 py-3 pl-3 text-sm uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'border-[#002b5b] font-bold text-[#002b5b]'
                        : 'border-transparent font-medium text-[#002b5b]/60'
                    }`}
                    onClick={onClose}
                  >
                    <motion.span
                      className="inline-block origin-center will-change-transform"
                      whileTap={tapScaleSoft}
                      transition={tapTransition}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className={`border-l-2 ${
                    isActive
                      ? 'border-[#002b5b] text-[#002b5b]'
                      : 'border-transparent text-[#002b5b]/60'
                  }`}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`flex-1 py-3 pl-3 text-sm uppercase tracking-widest transition-colors ${
                        isActive ? 'font-bold' : 'font-medium'
                      }`}
                      onClick={onClose}
                    >
                      <motion.span
                        className="inline-block origin-center will-change-transform"
                        whileTap={tapScaleSoft}
                        transition={tapTransition}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                    <button
                      type="button"
                      className="rounded-lg p-2"
                      aria-label="Mở danh sách con"
                      aria-expanded={isGroupOpen}
                      onClick={() => {
                        setManualOpenGroupLabel((curr) => {
                          const currentEffective = curr === undefined ? activeGroupLabel : curr;
                          return currentEffective === item.label ? null : item.label;
                        });
                      }}
                    >
                      <span
                        className={`block transition-transform duration-200 ${
                          isGroupOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isGroupOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-2 pl-6">
                          {item.children!.map((child) => {
                            const isChildActive =
                              pathname === child.href || pathname.startsWith(child.href + '/');
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                                  isChildActive
                                    ? 'text-neutral-900'
                                    : 'text-neutral-900/80 hover:text-neutral-900'
                                }`}
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <MotionLink
              href={applyHref}
              className="mt-2 rounded-full py-3 text-center text-sm font-bold uppercase text-white"
              style={
                isHome
                  ? { background: '#002b5b' }
                  : {
                      background:
                        'linear-gradient(262.75deg, rgb(12, 113, 199) 6.53%, rgb(1, 58, 114) 93.47%)',
                    }
              }
              whileHover={isHome ? undefined : hoverScalePill}
              whileTap={tapScalePill}
              transition={tapTransition}
              onClick={onClose}
            >
              {isHome ? 'apply now' : 'ứng tuyển ngay'}
            </MotionLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
