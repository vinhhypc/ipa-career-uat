'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTypewriter, type TypewriterSegment } from '@/lib/useTypewriter';

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
} as const;

const QUOTE_TYPEWRITER_SEGMENTS: TypewriterSegment[] = [
  { kind: 'text', text: 'Cấy nền vững thì nếp mới bền.' },
  { kind: 'br' },
  { kind: 'text', text: 'Nếp bền thì người mới lớn' },
];

const QUOTE_TYPEWRITER_SPEED_MS = 30;
const QUOTE_TYPEWRITER_START_DELAY_MS = 200;

export default function QuoteSection() {
  const { content: quoteContent, caret: quoteCaret } = useTypewriter(
    QUOTE_TYPEWRITER_SEGMENTS,
    QUOTE_TYPEWRITER_SPEED_MS,
    QUOTE_TYPEWRITER_START_DELAY_MS,
  );

  return (
    <motion.section
      className="relative overflow-hidden px-4 py-20 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={SECTION_VARIANTS}
    >
      <div className="absolute inset-0 bg-[#E9F6FF]" aria-hidden />
      <Image
        src="/life-at-ipag/cay-nen-xay-nep/figma/quote-abstract-left.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute left-0 top-[18px] opacity-20"
        aria-hidden
      />
      <Image
        src="/life-at-ipag/cay-nen-xay-nep/figma/quote-abstract-right.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute bottom-0 right-0 opacity-20"
        aria-hidden
      />

      <div className="section-content relative z-[1]">
        <div className="mx-auto flex w-full max-w-[1366px] justify-center">
          <div className="relative w-full max-w-[800px] px-4 md:px-[100px]">
            <div className="relative flex justify-center py-2">
              <Image
                src="/life-at-ipag/cay-nen-xay-nep/bracket-2.svg"
                alt=""
                width={474}
                height={94}
                className="pointer-events-none absolute right-0 top-0 hidden md:block"
                aria-hidden
              />
              <Image
                src="/life-at-ipag/cay-nen-xay-nep/bracket-1.svg"
                alt=""
                width={516}
                height={103}
                className="pointer-events-none absolute bottom-0 left-0 hidden md:block"
                aria-hidden
              />
              <Image
                src="/life-at-ipag/cay-nen-xay-nep/figma/quote-section-icon-top.svg"
                alt=""
                width={60}
                height={60}
                className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 md:-translate-x-[60%]"
                aria-hidden
              />
              <Image
                src="/life-at-ipag/cay-nen-xay-nep/figma/quote-section-icon-bottom.svg"
                alt=""
                width={60}
                height={60}
                className="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 md:translate-x-[60%]"
                aria-hidden
              />
              <div className="relative flex w-full max-w-[760px] justify-center rounded-[32px] bg-transparent px-2 py-6">
                <p
                  className="w-full max-w-[614px] text-center text-xl font-bold italic leading-[1.6] tracking-[0.01em] text-[#474747] md:text-3xl"
                  aria-label="Cấy nền vững thì nếp mới bền. Nếp bền thì người mới lớn"
                >
                  {quoteContent}
                  {quoteCaret}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
