'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

import { HABITS } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

const HABIT_CARD_STYLES = [
  {
    bgClass: 'bg-[#FFE4C4] text-[#292929]',
    titleClass: 'text-[#292929]',
    mobileRadiusClass: 'rounded-tl-[20px] rounded-tr-[20px]',
    radiusClass: 'lg:rounded-tl-[32px]',
  },
  {
    bgClass: 'bg-[#013A72] text-white',
    titleClass: 'text-white',
    mobileRadiusClass: '',
    radiusClass: '',
  },
  {
    bgClass: 'bg-[#FFE4C4] text-[#292929]',
    titleClass: 'text-[#292929]',
    mobileRadiusClass: '',
    radiusClass: 'lg:rounded-tr-[32px]',
  },
  {
    bgClass: 'bg-[#0C71C7] text-white',
    titleClass: 'text-white',
    mobileRadiusClass: '',
    radiusClass: 'lg:rounded-bl-[32px]',
  },
  {
    bgClass: 'bg-[#FBBF76] text-[#292929]',
    titleClass: 'text-[#292929]',
    mobileRadiusClass: '',
    radiusClass: '',
  },
  {
    bgClass: 'bg-[#0C71C7] text-white',
    titleClass: 'text-white',
    mobileRadiusClass: 'rounded-bl-[20px] rounded-br-[20px]',
    radiusClass: 'lg:rounded-br-[32px]',
  },
] as const;

const HABIT_CONNECTORS = [
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-1.svg',
    alt: '',
    width: 23,
    height: 35,
    className: 'left-[calc(33.333%-11px)] top-[25%] -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-3.svg',
    alt: '',
    width: 23,
    height: 35,
    className: 'left-[calc(66.666%-11px)] top-[25%] -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-6.svg',
    alt: '',
    width: 23,
    height: 35,
    className: 'left-[calc(33.333%-11px)] top-[75%] -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-5.svg',
    alt: '',
    width: 23,
    height: 35,
    className: 'left-[calc(66.666%-11px)] top-[75%] -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-4.svg',
    alt: '',
    width: 35,
    height: 23,
    className: 'left-[16.666%] top-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-7.svg',
    alt: '',
    width: 35,
    height: 23,
    className: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    src: '/life-at-ipag/cay-nen-xay-nep/figma/polygon-2.svg',
    alt: '',
    width: 35,
    height: 23,
    className: 'left-[83.333%] top-1/2 -translate-x-1/2 -translate-y-1/2',
  },
] as const;

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

const cardGridReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

/** Renders the connector polygons that join the desktop cards like the Figma layout. */
function HabitConnectorLayer() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
      aria-hidden
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
    >
      {HABIT_CONNECTORS.map((connector) => (
        <Image
          key={connector.src}
          src={connector.src}
          alt={connector.alt}
          width={connector.width}
          height={connector.height}
          className={`absolute scale-110 ${connector.className}`}
        />
      ))}
    </motion.div>
  );
}

export default function HabitsSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-white px-5 py-11 md:px-16 md:py-10 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionReveal}
    >
      <div
        className="pointer-events-none absolute z-0 flex items-center justify-center"
        style={{
          top: '7.14%',
          right: '54.41%',
          bottom: '-36.93%',
          left: '-11.72%',
        }}
        aria-hidden
      >
        <Image
          src="/life-at-ipag/cay-nen-xay-nep/figma/habits-decoration.svg"
          alt=""
          width={986}
          height={653}
          className="h-full w-full max-w-none object-contain"
          aria-hidden
        />
      </div>
      <div className="section-content relative z-1">
        <div className="mx-auto ml-0 grid w-full max-w-350 gap-5 2xl:gap-12 xl:grid-cols-[320px_1fr] 2xl:items-start xl:gap-16 lg:gap-8">
          <motion.div
            className="flex max-w-full flex-col gap-2 2xl:max-w-[248px] lg:gap-0"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
          >
            <h2 className="text-xl font-extrabold uppercase leading-8 tracking-[3px] text-[#292929] lg:mt-0 lg:text-3xl 2xl:text-4xl 2xl:leading-[60px]">
              Xây nếp
            </h2>
            <motion.div
              className="h-0.75 w-[154px] bg-[#2e5f97] lg:mt-3 lg:w-40"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            />
            <motion.p
              className="text-sm leading-[22px] text-[#474747] lg:mt-6 lg:text-lg lg:leading-8 2xl:text-xl 2xl:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.42, delay: 0.14, ease: 'easeOut' }}
            >
              Năng lực chuyển hóa thành bản năng.
            </motion.p>
          </motion.div>

          <div className="relative">
            <HabitConnectorLayer />
            <motion.div
              className="flex flex-col drop-shadow-[0_4px_5px_rgba(0,0,0,0.18)] lg:grid lg:auto-rows-fr lg:grid-cols-3 lg:gap-0 lg:drop-shadow-none"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              variants={cardGridReveal}
            >
              {HABITS.map((h, index) => {
                const cardStyle = HABIT_CARD_STYLES[index];
                return (
                  <motion.article
                    key={h.title}
                    variants={cardReveal}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.26, ease: 'easeOut' }}
                    className={`relative flex flex-row items-center gap-2 px-4 py-5 lg:min-h-[240px] lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:rounded-none lg:px-5 lg:py-10 lg:shadow-[0_4px_10px_rgba(0,0,0,0.18)] ${cardStyle.bgClass} ${cardStyle.mobileRadiusClass} ${cardStyle.radiusClass}`}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={h.icon}
                      alt=""
                      aria-hidden
                      className="size-10 shrink-0 lg:size-[60px]"
                    />
                    <h3
                      className={`min-w-0 flex-1 text-base font-bold leading-[22px] lg:flex-none lg:whitespace-pre-line lg:text-center lg:text-xl lg:leading-8 2xl:text-2xl 2xl:leading-8 ${cardStyle.titleClass}`}
                    >
                      {h.title}
                    </h3>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
