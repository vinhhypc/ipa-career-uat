'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-[60px] md:px-12 lg:px-20">
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,#F2FBFF_0%,#D7F1FF_100%)]"
        aria-hidden
      />
      <Image
        src="/life-at-ipag/che-do-dai-ngo/figma/cta-abstract-left.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute left-0 top-[8px] opacity-25"
        aria-hidden
      />
      <Image
        src="/life-at-ipag/che-do-dai-ngo/figma/cta-abstract-right.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute bottom-0 right-0 opacity-25"
        aria-hidden
      />

      <div className="section-content relative z-[1]">
        <div className="mx-auto w-full max-w-[1115px] text-center">
          <p className="text-xl font-bold uppercase text-[#002B5B] sm:text-2xl md:text-4xl md:leading-[60px]">
            Sẵn sàng kiến tạo di sản cùng IPAG?
          </p>
          <Link
            href="/jobs"
            className="group mt-6 inline-flex h-12 w-full max-w-[430px] cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-[0.02em] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] sm:text-base md:text-lg"
            style={{
              backgroundImage: 'linear-gradient(41deg, rgb(1, 58, 114) 0%, rgb(12, 113, 199) 100%)',
            }}
          >
            Khám phá cơ hội nghề nghiệp
            <ArrowRight
              className="size-5 shrink-0 text-white transition-transform duration-300 ease-out group-hover:translate-x-1 md:size-6"
              strokeWidth={2}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
