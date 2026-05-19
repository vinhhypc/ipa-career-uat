'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useReducedMotion } from 'motion/react';

type ScrollState = {
  canScroll: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
};

export default function ScrollToEdgeButtons() {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<ScrollState>({
    canScroll: false,
    isAtTop: true,
    isAtBottom: false,
  });

  const frameRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY ?? doc.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollHeight = doc.scrollHeight;

    const canScroll = scrollHeight > viewportHeight + 24;
    const isAtTop = scrollTop <= 2;
    const isAtBottom = scrollTop + viewportHeight >= scrollHeight - 2;

    setState((prev) => {
      if (
        prev.canScroll === canScroll &&
        prev.isAtTop === isAtTop &&
        prev.isAtBottom === isAtBottom
      ) {
        return prev;
      }
      return { canScroll, isAtTop, isAtBottom };
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        measure();
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [reduceMotion]);

  const scrollToBottom = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [reduceMotion]);

  if (!state.canScroll) return null;

  const baseButtonClass =
    'grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/90 text-[#002b5b] shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur transition-transform transition-opacity duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002b5b]';

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      <button
        type="button"
        aria-label="Cuộn lên đầu trang"
        onClick={scrollToTop}
        className={`${baseButtonClass} ${state.isAtTop ? 'pointer-events-none cursor-pointer translate-y-1 opacity-0' : 'opacity-100'}`}
      >
        <ArrowUp size={18} />
      </button>

      <button
        type="button"
        aria-label="Cuộn xuống cuối trang"
        onClick={scrollToBottom}
        className={`${baseButtonClass} ${state.isAtBottom ? 'pointer-events-none cursor-pointer translate-y-1 opacity-0' : 'opacity-100'}`}
      >
        <ArrowDown size={18} />
      </button>
    </div>
  );
}
