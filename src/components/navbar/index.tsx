'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useReducedMotion } from 'motion/react';

import NavLogo from './NavLogo';
import NavDesktopMenu from './NavDesktopMenu';
import NavMobileMenu from './NavMobileMenu';
import type { NavMotionConfig } from './constants';

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
  const applyHref = '/jobs';

  const motionConfig: NavMotionConfig = {
    tapTransition: { type: 'spring', stiffness: 520, damping: 28 },
    tapScale: reduceMotion ? undefined : { scale: 0.92 },
    tapScaleSoft: reduceMotion ? undefined : { scale: 0.94 },
    tapScalePill: reduceMotion ? undefined : { scale: 0.95 },
    hoverScalePill: reduceMotion ? undefined : { scale: 1.05 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-12 md:py-14 lg:px-12 lg:py-7 xl:px-16 2xl:px-20 ${
        forceLightNav
          ? 'border-b border-black/5 bg-white shadow-sm'
          : `transition-colors duration-300 ${onLight ? 'border-b border-black/5 bg-white shadow-sm' : 'bg-transparent'}`
      }`}
    >
      <div className="section-content max-w-[1440px] flex items-center justify-between">
        <NavLogo onLight={onLight} onClick={() => setMobileOpen(false)} />

        <NavDesktopMenu
          pathname={pathname}
          onLight={onLight}
          isHome={isHome}
          applyHref={applyHref}
          motionConfig={motionConfig}
        />

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${onLight ? 'text-[#002b5b]' : 'text-white'}`}
          aria-label="Mở menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <NavMobileMenu
        isOpen={mobileOpen}
        pathname={pathname}
        isHome={isHome}
        applyHref={applyHref}
        onClose={() => setMobileOpen(false)}
        motionConfig={motionConfig}
      />
    </header>
  );
}
