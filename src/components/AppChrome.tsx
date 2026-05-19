'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import ScrollToEdgeButtons from '@/components/ScrollToEdgeButtons';

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const forceLightNav = pathname !== '/';

  return (
    <>
      <Navbar forceLightNav={forceLightNav} />
      {children}
      <Footer />
      <ScrollToEdgeButtons />
    </>
  );
}
