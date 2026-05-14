import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MaApplyButton({ className }: { className?: string }) {
  return (
    <Link
      href="/we-look-for"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition hover:brightness-95 ${className ?? ''}`.trim()}
      style={{
        backgroundImage:
          'linear-gradient(77.7deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
      }}
    >
      NỘP HỒ SƠ NGAY
      <ArrowRight className="size-5 shrink-0 text-white md:size-6" strokeWidth={2} aria-hidden />
    </Link>
  );
}
