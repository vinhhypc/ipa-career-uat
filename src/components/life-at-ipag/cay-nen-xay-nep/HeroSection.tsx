'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative -mt-2 overflow-hidden bg-[#0b1a27]">
      <div className="relative h-[320px] w-full md:h-[520px] lg:h-[636px]">
        <Image
          src="/life-at-ipag/cay-nen-xay-nep/figma/hero.png"
          alt="Cấy nền — Xây nếp"
          fill
          priority
          className="object-cover brightness-115 contrast-115"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(39,60,77,0)_0%,rgba(25,44,59,0.5)_16%,rgba(11,26,39,0.78)_32%,rgba(7,29,49,1)_50%,rgba(8,24,39,0.8)_68%,rgba(53,72,94,0.5)_82%,rgba(96,111,134,0)_100%)] opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 text-center md:px-10 lg:px-[240px]">
          <motion.h1
            className="text-3xl font-bold uppercase leading-[38px] tracking-[0.0385em] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] md:text-5xl md:leading-[70px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cấy nền — Xây nếp
          </motion.h1>
          <motion.div
            className="relative w-full max-w-[590px] rounded-[20px_80px_20px_20px] bg-[rgba(202,255,235,0.2)] px-6 py-8 text-center text-base font-semibold leading-[28px] tracking-[0.02em] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm md:px-10 md:py-12 md:text-2xl md:leading-[38px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <Image
              src="/life-at-ipag/cay-nen-xay-nep/figma/quote-top.svg"
              alt=""
              width={52}
              height={52}
              className="pointer-events-none absolute left-4 top-[-18px] md:left-[23px] md:top-[-26px]"
              aria-hidden
            />
            <Image
              src="/life-at-ipag/cay-nen-xay-nep/figma/quote-bottom.svg"
              alt=""
              width={52}
              height={52}
              className="pointer-events-none absolute bottom-[-18px] right-4 md:bottom-auto md:right-[27px] md:top-[143px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[-12px] top-[71px] h-[115px] w-[389px] rounded-bl-[24px] border-b-2 border-l-2 border-[rgba(251,193,123,0.6)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[-12px] top-[16px] h-[115px] w-[236px] rotate-180 rounded-bl-[24px] border-b-2 border-l-2 border-[rgba(251,193,123,0.6)]"
              aria-hidden
            />
            <p>
              Văn hóa tại IPAG hiện hữu trong cách
              <br />
              chúng tôi <span className="text-[#FBC17B]">suy nghĩ - hành động</span> mỗi ngày
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
