'use client';

import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function Error() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-brand-white px-6">
      <div className="relative text-center">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <h1 className="font-gotham text-9xl font-black tracking-tighter text-brand-black/5 md:text-[12rem]">
            500
          </h1>
          <div className="-mt-12 md:-mt-20">
            <h2 className="font-gotham text-2xl font-bold text-brand-black md:text-4xl">
              CÓ LỖI XẢY RA
            </h2>
            <p className="mt-4 text-brand-black/60 md:text-base">
              Rất tiếc, đang có gặp sự cố. Vui lòng thử lại sau.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-black px-8 py-4 text-white transition-all hover:bg-brand-black"
            >
              <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-gotham text-sm font-medium tracking-wide">
                TRỞ VỀ TRANG CHỦ
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
