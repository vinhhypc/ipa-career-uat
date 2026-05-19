'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

import { HABITS } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

const HABIT_CARD_STYLES = [
  {
    bgClass: 'bg-[#FFE4C4] text-[#292929]',
    titleClass: 'text-[#292929]',
    bodyClass: 'text-[#474747]',
    radiusClass: 'lg:rounded-tl-[32px]',
  },
  {
    bgClass: 'bg-[#013A72] text-white',
    titleClass: 'text-white',
    bodyClass: 'text-white',
    radiusClass: '',
  },
  {
    bgClass: 'bg-[#FFE4C4] text-[#292929]',
    titleClass: 'text-[#292929]',
    bodyClass: 'text-[#474747]',
    radiusClass: 'lg:rounded-tr-[32px]',
  },
  {
    bgClass: 'bg-[#0C71C7] text-white',
    titleClass: 'text-white',
    bodyClass: 'text-white',
    radiusClass: 'lg:rounded-bl-[32px]',
  },
  {
    bgClass: 'bg-[#FBBF76] text-[#292929]',
    titleClass: 'text-[#292929]',
    bodyClass: 'text-[#474747]',
    radiusClass: '',
  },
  {
    bgClass: 'bg-[#0C71C7] text-white',
    titleClass: 'text-white',
    bodyClass: 'text-white',
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

/** Renders the habits section with the updated 2x3 card composition from Figma. */
export default function HabitsSection() {
  return (
    <motion.section
      className="relative overflow-hidden px-4 py-14 md:px-12 md:py-20 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionReveal}
      style={{
        background: 'linear-gradient(180deg, #ffffff 8%, #fef6eb 100%)',
      }}
    >
      <Image
        src="/life-at-ipag/cay-nen-xay-nep/figma/habits-decoration.svg"
        alt=""
        width={986}
        height={653}
        className="pointer-events-none absolute left-[-180px] top-8 hidden opacity-[0.03] md:block lg:left-[-225px] lg:top-[30px]"
        aria-hidden
      />
      <div className="section-content relative z-[1]">
        <div className="mx-auto ml-0 grid w-full max-w-[1366px] gap-10 lg:grid-cols-[248px_minmax(0,1fr)] lg:items-start lg:gap-[52px]">
          <motion.div
            className="max-w-[248px]"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-[3px] text-[#292929] md:text-[40px] md:leading-[60px]">
              Xây nếp
            </h2>
            <motion.div
              className="mt-3 h-[2.5px] w-[159px] bg-[#2e5f97]"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            />
            <motion.p
              className="mt-6 whitespace-pre-line text-lg leading-8 text-[#474747] md:text-2xl md:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.42, delay: 0.14, ease: 'easeOut' }}
            >
              Năng lực chuyển hóa{'\n'}thành bản năng.
            </motion.p>
          </motion.div>

          <div className="relative">
            <HabitConnectorLayer />
            <motion.div
              className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0"
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
                    className={`relative flex min-h-[230px] flex-col gap-6 rounded-[28px] px-7 py-8 shadow-[0_4px_10px_rgba(0,0,0,0.18)] md:min-h-[250px] md:px-8 md:py-10 lg:min-h-[264px] lg:gap-[38px] lg:rounded-none ${cardStyle.bgClass} ${cardStyle.radiusClass}`}
                  >
                    <div className="flex items-start gap-3">
                      <Image width={60} height={60} src={h.icon} alt="" aria-hidden />
                      <h3
                        className={`whitespace-pre-line text-[22px] font-bold leading-[28px] md:text-2xl md:leading-[30px] ${cardStyle.titleClass}`}
                      >
                        {h.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm leading-6 md:text-base md:leading-6 ${cardStyle.bodyClass}`}
                    >
                      {h.body}
                    </p>
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
