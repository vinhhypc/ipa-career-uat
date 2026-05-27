'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

import LetterBadge from '@/components/life-at-ipag/cay-nen-xay-nep/LetterBadge';
import { IPAG_CORE } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const cardListReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function CoreValuesSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[linear-gradient(-15.4deg,#ffffff_28.5%,#fef6eb_98.75%)] px-4 py-12 md:px-16 md:py-20 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
    >
      <div
        className="pointer-events-none absolute z-0 flex items-center justify-center"
        style={{
          top: '-6.45%',
          right: '-13.17%',
          bottom: '31%',
          left: '61.82%',
        }}
        aria-hidden
      >
        <Image
          src="/life-at-ipag/cay-nen-xay-nep/figma/core-values-bg.svg"
          alt=""
          width={986}
          height={772}
          className="h-full w-full max-w-none object-contain"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-px bg-black/8"
        aria-hidden
      />
      <div className="section-content relative z-1">
        <div className="mx-auto ml-0 grid  w-full max-w-350 gap-8 2xl:gap-12 xl:grid-cols-[320px_1fr] 2xl:items-start xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-[3px] text-[#292929] 2xl:text-4xl 2xl:leading-[60px]">
              Cấy nền
            </h2>
            <motion.div
              className="mt-3 h-0.75 w-40 bg-[#2e5f97]"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            />
            <motion.p
              className="mt-6 text-lg leading-8 text-[#474747] 2xl:text-xl 2xl:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
            >
              Tại IPAG, những giá trị cốt lõi được cấy sâu để trở thành nếp sống
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardListReveal}
          >
            {IPAG_CORE.map((item) => (
              <motion.div
                key={item.key}
                variants={cardReveal}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="overflow-hidden rounded-[20px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(20,81,148,0.15)]"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-[20px] bg-white">
                  <Image
                    src={item.imageSrc}
                    alt={item.vi}
                    fill
                    className="object-cover -translate-y-px scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 480px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-t-[20px] ring-1 ring-inset ring-white"
                    aria-hidden
                  />
                </div>

                <div className="px-7 py-5">
                  <div className="flex items-center gap-4">
                    <LetterBadge letter={item.letter} active={false} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-normal leading-snug text-[#8c9199]">{item.en}</p>
                      <p className="mt-0.5 text-xl font-extrabold leading-tight text-[#1a1a1a] 2xl:text-2xl 2xl:leading-7">
                        {item.vi}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5f6672]">{item.tagline}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
