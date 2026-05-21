'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import type { BenefitBlock as BenefitBlockType } from '@/components/life-at-ipag/che-do-dai-ngo/data';
import BenefitRow from '@/components/life-at-ipag/che-do-dai-ngo/BenefitRow';
import TagLine from '@/components/life-at-ipag/che-do-dai-ngo/TagLine';

const BLOCK_VIEWPORT = { once: true, amount: 0.22 } as const;

const BLOCK_TITLE_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
} as const;

const BLOCK_IMAGE_VARIANTS = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1 },
} as const;

const BLOCK_CONTENT_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.05,
    },
  },
} as const;

const BLOCK_CONTENT_ITEM_VARIANTS = {
  hidden: (xOffset: number) => ({ opacity: 0, x: xOffset }),
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
} as const;

export default function BenefitBlock({ block }: { block: BenefitBlockType }) {
  return (
    <motion.div
      className="py-14 md:py-20"
      initial="hidden"
      whileInView="show"
      viewport={BLOCK_VIEWPORT}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        variants={BLOCK_TITLE_VARIANTS}
        className={block.reverseOnDesktop ? 'flex justify-end' : 'flex justify-start'}
      >
        <div
          className={`w-full max-w-[420px] sm:max-w-[520px] lg:w-[587px] ${
            block.reverseOnDesktop ? 'ml-auto' : 'mr-auto'
          }`}
        >
          {block.reverseOnDesktop ? (
            <div className="flex items-center justify-end gap-3">
              <p className="text-3xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-4xl md:leading-[56px]">
                {block.heading}
              </p>
              <span className="h-[1.5px] w-[72px] bg-[#002B5B]" aria-hidden />
            </div>
          ) : (
            <div className="flex items-center justify-start gap-3">
              <span className="h-[1.5px] w-[72px] bg-[#002B5B]" aria-hidden />
              <p className="text-3xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-4xl md:leading-[56px]">
                {block.heading}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <div
        className={
          block.reverseOnDesktop
            ? 'mt-5 grid gap-10 lg:grid-cols-[1fr_587px] lg:items-center lg:gap-[100px]'
            : 'mt-5 grid gap-10 lg:grid-cols-[587px_1fr] lg:items-center lg:gap-[100px]'
        }
      >
        <div className={block.reverseOnDesktop ? 'lg:order-2 lg:justify-self-end' : 'lg:order-1'}>
          <motion.div
            variants={BLOCK_IMAGE_VARIANTS}
            className={`relative w-full max-w-[420px] overflow-hidden rounded-[24px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] sm:max-w-[520px] lg:w-[587px] lg:max-w-none ${
              block.reverseOnDesktop ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <div className="relative aspect-square">
              <Image
                src={block.imageSrc}
                alt={block.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 587px"
              />
            </div>
          </motion.div>
        </div>

        <div className={block.reverseOnDesktop ? 'lg:order-1' : 'lg:order-2'}>
          <motion.div
            variants={BLOCK_CONTENT_CONTAINER_VARIANTS}
            className="lg:flex lg:min-h-[587px] lg:flex-col lg:justify-center"
          >
            <motion.div
              variants={BLOCK_CONTENT_ITEM_VARIANTS}
              custom={block.reverseOnDesktop ? -56 : 56}
            >
              <TagLine text={block.tag} />
            </motion.div>
            <motion.p
              variants={BLOCK_CONTENT_ITEM_VARIANTS}
              custom={block.reverseOnDesktop ? -56 : 56}
              className="mt-4 text-lg font-bold leading-[1.4] text-[#002B5B] md:text-2xl"
            >
              {block.quote}
            </motion.p>

            <div className="mt-8 space-y-6">
              {block.items.map((it) => (
                <motion.div
                  key={it.title}
                  variants={BLOCK_CONTENT_ITEM_VARIANTS}
                  custom={block.reverseOnDesktop ? -56 : 56}
                >
                  <BenefitRow {...it} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
