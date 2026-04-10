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
  const forceLightNav = pathname === '/ipag-insight';

  return (
    <>
      <Navbar forceLightNav={forceLightNav} />
      {children}
      <Footer />
    </>
  );
}
