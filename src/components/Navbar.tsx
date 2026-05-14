'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export type NavbarProps = {
  forceLightNav?: boolean;
};

export default function Navbar({ forceLightNav = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onLight = forceLightNav || isScrolled;
  const isHome = pathname === '/';

  const navLinks = [
    { label: 'IPAG insight', href: '/ipag-insight' },
    { label: 'we look for', href: '/we-look-for' },
    { label: 'life at IPAG', href: '/life-at-ipag' },
    { label: 'CONTACT', href: '/contact' },
  ] as const;

  const applyHref = isHome ? '/jobs' : '/jobs';

  const navTapTransition = { type: 'spring' as const, stiffness: 520, damping: 28 };
  const navTapScale = reduceMotion ? undefined : ({ scale: 0.92 } as const);
  const navTapScaleSoft = reduceMotion ? undefined : ({ scale: 0.94 } as const);
  const navTapScalePill = reduceMotion ? undefined : ({ scale: 0.95 } as const);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-12 md:py-14 lg:px-20 lg:py-7 ${
        forceLightNav
          ? 'border-b border-black/5 bg-white shadow-sm'
          : `transition-colors duration-300 ${onLight ? 'border-b border-black/5 bg-white shadow-sm' : 'bg-transparent'}`
      }`}
    >
      <div className="section-content max-w-[1440px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span
            className={`flex size-10 items-center justify-center rounded-lg text-xl font-bold ${
              onLight ? 'bg-[#002b5b] text-white' : 'bg-white text-[#002b5b]'
            }`}
          >
            I
          </span>
          <span
            className={`text-xl font-bold tracking-tight md:text-2xl ${
              onLight ? 'text-[#002b5b]' : 'text-white'
            }`}
          >
            IPAG Career
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex lg:gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm font-normal uppercase tracking-[0.14em] transition-opacity hover:opacity-80 ${
                    onLight ? 'text-neutral-800' : 'text-white'
                  }`}
                >
                  <motion.span
                    className="inline-block origin-center will-change-transform"
                    whileTap={navTapScale}
                    transition={navTapTransition}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={applyHref}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#070707] transition hover:bg-[#fbc17b]/90"
          >
            <motion.span
              className="inline-block origin-center will-change-transform"
              whileTap={navTapScaleSoft}
              transition={navTapTransition}
            >
              apply now
            </motion.span>
          </Link>
        </nav>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${onLight ? 'text-[#002b5b]' : 'text-white'}`}
          aria-label="Mở menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-[#002b5b]"
                  onClick={() => setMobileOpen(false)}
                >
                  <motion.span
                    className="inline-block origin-center will-change-transform"
                    whileTap={navTapScaleSoft}
                    transition={navTapTransition}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <Link
                href={applyHref}
                className="mt-2 rounded-full bg-[#002b5b] py-3 text-center text-sm font-bold uppercase text-white"
                onClick={() => setMobileOpen(false)}
              >
                <motion.span
                  className="inline-block origin-center will-change-transform"
                  whileTap={navTapScalePill}
                  transition={navTapTransition}
                >
                  apply now
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
