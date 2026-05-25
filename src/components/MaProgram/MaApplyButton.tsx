'use client';

import { ArrowRight } from 'lucide-react';

import { useMaApplyModal } from './MaApplyModalProvider';

export default function MaApplyButton({ className }: { className?: string }) {
  const { open } = useMaApplyModal();

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] ${className ?? ''}`.trim()}
      style={{
        backgroundImage:
          'linear-gradient(77.7deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
      }}
      aria-haspopup="dialog"
    >
      NỘP HỒ SƠ NGAY
      <ArrowRight className="size-5 shrink-0 text-white md:size-6" strokeWidth={2} aria-hidden />
    </button>
  );
}
