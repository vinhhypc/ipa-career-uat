'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

import { CULTURE_TESTIMONIALS } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

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
  hover: {
    y: -8,
    boxShadow: '0 14px 28px rgba(0,0,0,0.16)',
    transition: { duration: 0.22, ease: 'easeOut' as const },
  },
};

export default function JourneySection() {
  return (
    <motion.section
      className="relative section overflow-hidden bg-[linear-gradient(-75deg,#fef6eb_27%,#ffffff_75%)] px-5 py-11 md:bg-[linear-gradient(-22deg,#fef6eb_27%,#ffffff_75%)] md:px-6 md:py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
    >
      <div className="section-content flex flex-col gap-8 md:gap-10 lg:gap-[52px]">
        <h2 className="text-center text-xl font-extrabold uppercase leading-8 tracking-[1px] text-[#292929] md:text-2xl md:leading-[60px] lg:text-[40px]">
          <span className="block md:inline">Chạm văn hóa cùng</span>{' '}
          <span className="block md:inline">IPAG-ers</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardListReveal}
        >
          {CULTURE_TESTIMONIALS.map((item) => (
            <motion.article
              key={item.name}
              variants={cardReveal}
              whileHover="hover"
              className="flex flex-col rounded-[20px] bg-white py-5 shadow-[0_4px_7.5px_rgba(0,0,0,0.15)] will-change-transform md:rounded-[32px] md:py-10"
            >
              <div className="flex flex-col items-center gap-6 px-4 text-center md:px-10 xl:px-6">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full md:size-40">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className={item.imageClassName}
                    sizes="(max-width: 768px) 80px, 160px"
                  />
                </div>

                <div className="flex w-full flex-col gap-5">
                  <p className="text-sm leading-[1.4] text-[#474747] md:text-base md:leading-[1.48]">
                    {item.quote}
                  </p>

                  <div className="flex w-full flex-col gap-2">
                    <p className="text-base font-bold leading-[1.4] text-[#292929] md:text-lg">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase leading-[1.4] text-[#002b5b] md:text-sm">
                      {item.department}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
