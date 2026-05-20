'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

type EpicCard = { key: string; title: string; desc: string };

const EPIC_CARDS: EpicCard[] = [
  {
    key: 'E',
    title: 'Empowering',
    desc: 'Trao quyền để mỗi cá nhân chủ động phát triển và tạo ra kết quả vượt trội.',
  },
  {
    key: 'P',
    title: 'People',
    desc: 'Đặt con người làm trọng tâm trong cách kết nối và phát triển dài hạn.',
  },
  {
    key: 'I',
    title: 'Impact',
    desc: 'Hướng đến những kết quả mang giá trị thực tế có sức lan tỏa và tác động rộng.',
  },
  {
    key: 'C',
    title: 'Collaboration',
    desc: 'Tin vào sức mạnh cộng hưởng giữa con người và hệ sinh thái để tạo nên giá trị lớn.',
  },
];

const EPIC_SECTION_STYLE: CSSProperties = {
  backgroundImage:
    'linear-gradient(180deg, rgba(170,231,255,0.15) 0%, rgba(0,116,162,0.15) 134.87%)',
};

const EPIC_CARD_HOVER = { y: -6, transition: { duration: 0.25, ease: 'easeOut' as const } };

export default function EpicSection() {
  return (
    <section
      className="section-padding relative overflow-hidden !py-10 md:!py-14 md:!pt-10 lg:!py-20 2xl:!py-24"
      style={EPIC_SECTION_STYLE}
    >
      <Image
        src="/home/epic-abstract-left.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[308px] w-[566px] select-none lg:block"
      />
      <Image
        src="/home/epic-abstract-right.svg"
        alt=""
        width={566}
        height={308}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[308px] w-[566px] select-none lg:block"
      />
      <div className="section-content relative z-10 flex flex-col items-center gap-8 md:gap-[52px]">
        <motion.div
          className="flex w-full flex-col items-center gap-1 text-center md:gap-2"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          <p className="text-[12px] font-normal uppercase leading-[22px] tracking-[0.24px] text-[#707070] md:text-[14px] md:leading-[32px]">
            Văn hóa làm việc - EPIC
          </p>
          <h2 className="text-[24px] font-extrabold uppercase leading-[34px] tracking-[0.5px] text-[#292929] sm:text-[28px] sm:leading-[40px] md:text-[34px] md:leading-[48px] md:tracking-[0.9px] lg:text-[40px] lg:leading-[60px] lg:tracking-[1px] 2xl:text-[44px] 2xl:leading-[66px]">
            Cách chúng tôi làm việc và tạo giá trị mỗi ngày
          </h2>
        </motion.div>
        <motion.div
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {EPIC_CARDS.map((item) => (
            <motion.article
              key={item.key}
              variants={CARD_REVEAL_VARIANTS}
              whileHover={EPIC_CARD_HOVER}
              className="flex flex-col gap-4 rounded-[24px] bg-white px-5 py-5 shadow-[0_4px_6px_rgba(0,0,0,0.15)] sm:rounded-[28px] sm:px-6 sm:py-6 md:gap-8 md:rounded-[32px] md:px-7 md:py-7 lg:gap-12 lg:py-8"
            >
              <p className="text-[56px] font-extrabold leading-[56px] text-[#002b5b] md:text-[64px] md:leading-[64px] lg:text-[80px] lg:leading-[80px]">
                {item.key}
              </p>
              <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-4">
                <h3 className="text-[18px] font-bold leading-[26px] text-[#070707] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-normal leading-[21px] text-[#474747] sm:text-sm sm:leading-[22px] md:text-[15px] md:leading-[22px] lg:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
