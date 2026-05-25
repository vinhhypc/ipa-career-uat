'use client';

import { AnimatePresence } from 'motion/react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import MaApplyModal from './MaApplyModal';

type MaApplyModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const MaApplyModalContext = createContext<MaApplyModalContextValue | null>(null);

export function useMaApplyModal() {
  const ctx = useContext(MaApplyModalContext);
  if (!ctx) {
    throw new Error('useMaApplyModal must be used within MaApplyModalProvider');
  }
  return ctx;
}

export default function MaApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<MaApplyModalContextValue>(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <MaApplyModalContext.Provider value={value}>
      {children}
      <AnimatePresence>{isOpen && <MaApplyModal onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </MaApplyModalContext.Provider>
  );
}

