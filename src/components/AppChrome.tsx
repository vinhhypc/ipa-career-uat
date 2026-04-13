'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const forceLightNav =
    pathname === '/ipag-insight' || pathname === '/we-look-for' || pathname === '/ma-program';

  return (
    <>
      <Navbar forceLightNav={forceLightNav} />
      {children}
      <Footer />
    </>
  );
}
