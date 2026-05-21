'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

import { BENEFITS } from './constants';

export default function BenefitsSection() {
  return (
    <section className="section-padding max-md:py-11! md:py-20!">
      <div className="section-content">
        <motion.h2
          className="text-center text-xl font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-4xl md:leading-[48px] md:tracking-[1px]"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          ĐIỀU IPAG TRAO CHO BẠN
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-5 md:mt-[52px] md:grid-cols-2 lg:grid-cols-4"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {BENEFITS.map((item) => (
            <motion.article
              key={item.title}
              variants={CARD_REVEAL_VARIANTS}
              whileHover={{
                y: -4,
                transition: { type: 'tween', duration: 0.22, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="rounded-[32px] bg-white px-7 py-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
            >
              <Image src={item.icon} alt="" width={60} height={60} className="size-[60px]" />
              <p className="mt-5 text-sm font-semibold leading-[1.48] tracking-[0.14px] text-[#00377c]">
                {item.label}
              </p>
              <h3 className="mt-1 text-xl font-bold leading-[28px] text-[#070707] md:text-2xl md:leading-[32px]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[20px] text-[#474747] md:text-base md:leading-[22px]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
