'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const NAV_LINKS = [
  { label: 'IPAG insight', href: '/ipag-insight' },
  { label: 'we look for', href: '/we-look-for' },
  { label: 'life at IPAG', href: '/#life-at-ipag' },
  { label: 'CONTACT', href: '/#contact' },
] as const;

export type NavbarProps = {
  forceLightNav?: boolean;
};

export default function Navbar({ forceLightNav = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onLight = forceLightNav || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-12 md:py-14 lg:px-20 lg:py-7 ${
        forceLightNav
          ? 'border-b border-black/5 bg-white shadow-sm'
          : `transition-colors duration-300 ${onLight ? 'border-b border-black/5 bg-white shadow-sm' : 'bg-transparent'}`
      }`}
    >
      <div className="section-content max-w-[1440px] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
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
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-xs font-normal uppercase tracking-[0.14em] transition-opacity hover:opacity-80 ${
                    onLight ? 'text-neutral-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#apply"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#070707] transition hover:bg-[#fbc17b]/90"
          >
            apply now
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
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-[#002b5b]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#apply"
                className="mt-2 rounded-full bg-[#002b5b] py-3 text-center text-sm font-bold uppercase text-white"
                onClick={() => setMobileOpen(false)}
              >
                apply now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
