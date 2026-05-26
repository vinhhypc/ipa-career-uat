'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[999] lg:hidden" role="dialog" aria-modal="true">
          <motion.button
            type="button"
            aria-label="Đóng menu"
            className="absolute inset-0 bg-black/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeMenu}
          />

          <motion.div
            className="absolute inset-y-0 right-0 w-[82vw] max-w-[360px] border-l border-black/10 bg-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-end border-b border-black/5 px-4 py-3">
                <button
                  type="button"
                  className="rounded-lg p-2 text-[#002b5b]"
                  aria-label="Đóng menu"
                  onClick={closeMenu}
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col">
                  {NAV_LINKS.map((item, index) => {
                    const isActive =
                      pathname === item.href ||
                      pathname.startsWith(item.href + '/') ||
                      item.children?.some(
                        (child) => pathname === child.href || pathname.startsWith(child.href + '/'),
                      ) ||
                      false;
                    const hasChildren = Boolean(item.children?.length);
                    const isLast = index === NAV_LINKS.length - 1;

                    if (!hasChildren) {
                      return (
                        <div
                          key={item.label}
                          className={`py-3 ${isLast ? '' : 'border-b border-black/10'}`}
                        >
                          <Link
                            href={item.href}
                            prefetch={false}
                            className={`block border-l-2 py-2 pl-3 text-sm uppercase tracking-widest transition-colors ${
                              isActive
                                ? 'border-[#002b5b] font-bold text-[#002b5b]'
                                : 'border-transparent font-medium text-[#002b5b]/70'
                            }`}
                            onClick={closeMenu}
                          >
                            <motion.span
                              className="inline-block origin-center will-change-transform"
                              whileTap={tapScaleSoft}
                              transition={tapTransition}
                            >
                              {item.label}
                            </motion.span>
                          </Link>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.label}
                        className={`py-3 ${isLast ? '' : 'border-b border-black/10'}`}
                      >
                        <Link
                          href={item.href}
                          prefetch={false}
                          className={`block border-l-2 py-2 pl-3 text-sm uppercase tracking-widest transition-colors ${
                            isActive
                              ? 'border-[#002b5b] font-bold text-[#002b5b]'
                              : 'border-transparent font-semibold text-[#002b5b]/70'
                          }`}
                          onClick={closeMenu}
                        >
                          <motion.span
                            className="inline-block origin-center will-change-transform"
                            whileTap={tapScaleSoft}
                            transition={tapTransition}
                          >
                            {item.label}
                          </motion.span>
                        </Link>

                        <div className="mt-1 flex flex-col gap-1 pl-6">
                          {item.children!.map((child) => {
                            const isChildActive =
                              pathname === child.href || pathname.startsWith(child.href + '/');
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                prefetch={false}
                                className={`py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                                  isChildActive
                                    ? 'text-neutral-900'
                                    : 'text-neutral-900/80 hover:text-neutral-900'
                                }`}
                                onClick={closeMenu}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6">
                  <MotionLink
                    href={applyHref}
                    prefetch={false}
                    className="block w-full rounded-full py-3 text-center text-sm font-bold uppercase text-white"
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
                    onClick={closeMenu}
                  >
                    {isHome ? 'apply now' : 'ứng tuyển ngay'}
                  </MotionLink>
                </div>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
