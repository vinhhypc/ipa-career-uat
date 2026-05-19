'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import JourneyColumn from '@/components/life-at-ipag/cay-nen-xay-nep/JourneyColumn';
import { CAT_STEPS, TAC_STEPS } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

const JOURNEY_VIEWPORT = { once: true, amount: 0.3 } as const;

const JOURNEY_HEADER_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
} as const;

const JOURNEY_COLUMN_VARIANTS = {
  hidden: (x: number) => ({ opacity: 0, x }),
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const;

const JOURNEY_DIVIDER_VARIANTS = {
  hidden: { opacity: 0, scaleX: 0.65 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.45, ease: 'easeOut', delay: 0.18 },
  },
} as const;

/** Renders the transformation journey section with the Figma background treatment and divider. */
export default function JourneySection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-12 md:py-20 lg:px-20 lg:py-[80px]">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-56deg, #022a36 0%, #0a3b74 100%)',
        }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(161,210,255,0.14),transparent_42%)]"
        aria-hidden
      />
      <Image
        src="/life-at-ipag/cay-nen-xay-nep/figma/journey-overlay.png"
        alt=""
        fill
        className="pointer-events-none absolute inset-0 object-cover object-top opacity-30"
        sizes="100vw"
        aria-hidden
      />
      <div className="section-content relative z-[1]">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={JOURNEY_VIEWPORT}
          variants={JOURNEY_HEADER_VARIANTS}
        >
          <h2 className="text-2xl font-extrabold uppercase tracking-[2px] text-white drop-shadow-sm md:text-[40px] md:leading-[60px]">
            Hành trình chuyển hoá
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-xl md:leading-[33px]">
            Sự trưởng thành không đo bằng chức danh, mà bằng tác động
          </p>
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-[1040px] flex-col items-stretch gap-12 lg:mt-[52px] lg:flex-row lg:items-center lg:justify-center lg:gap-10">
          <motion.div
            className="w-full max-w-[400px]"
            initial="hidden"
            whileInView="show"
            viewport={JOURNEY_VIEWPORT}
            variants={JOURNEY_COLUMN_VARIANTS}
            custom={-48}
          >
            <JourneyColumn acronym="TAC" subtitle="Chuyển hoá bản thân" steps={TAC_STEPS} />
          </motion.div>
          <motion.div
            className="hidden shrink-0 origin-center lg:block"
            initial="hidden"
            whileInView="show"
            viewport={JOURNEY_VIEWPORT}
            variants={JOURNEY_DIVIDER_VARIANTS}
          >
            <Image
              src="/life-at-ipag/cay-nen-xay-nep/figma/journey-divider.svg"
              alt=""
              width={42}
              height={15}
              aria-hidden
            />
          </motion.div>
          <div className="flex items-center justify-center lg:hidden" aria-hidden>
            <div className="h-px w-28 bg-gradient-to-r from-transparent via-[rgba(254,179,122,0.55)] to-transparent" />
          </div>
          <motion.div
            className="w-full max-w-[400px]"
            initial="hidden"
            whileInView="show"
            viewport={JOURNEY_VIEWPORT}
            variants={JOURNEY_COLUMN_VARIANTS}
            custom={48}
          >
            <JourneyColumn acronym="CAT" subtitle="Lan toả hệ sinh thái" steps={CAT_STEPS} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
