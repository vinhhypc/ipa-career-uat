'use client';

import { type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

type CareerGroupItem = {
  title: string;
  desc: string;
  tag: string;
  iconSrc: string;
  iconSizeClass?: string;
  iconScaleClass?: string;
  iconFitClass?: string;
  iconHasOwnBackground?: boolean;
  /** Trang “Tìm hiểu thêm” tương ứng từng nhóm */
  learnMoreHref: string;
};

const CAREER_GROUP_ITEMS: CareerGroupItem[] = [
  {
    title: 'MA Program',
    desc: 'Khởi đầu hành trình nghề nghiệp với lộ trình đào tạo bài bản cùng sự dẫn dắt từ đội ngũ nhân sự cấp cao và chuyên gia trong tổ chức.',
    tag: 'FRESH',
    iconSrc: '/home/career-icon-ma.svg',
    iconHasOwnBackground: true,
    learnMoreHref: '/ma-program',
  },
  {
    title: 'Specialist Track',
    desc: 'Mở rộng năng lực chuyên môn và tạo dấu ấn trong các dự án có quy mô, tác động thực tiễn với tổ chức.',
    tag: 'SENIOR',
    iconSrc: '/home/briefcase.png',
    iconHasOwnBackground: true,
    learnMoreHref: '/we-look-for',
  },
  {
    title: 'Leadership Track',
    desc: 'Đồng hành xây dựng tổ chức, phát triển đội ngũ và tạo giá trị dài hạn cho hệ sinh thái.',
    tag: 'C-level',
    iconSrc: '/home/career-icon-leadership.svg',
    iconHasOwnBackground: true,
    learnMoreHref: '/executive-serve',
  },
];

const CAREER_GROUP_SECTION_STYLE: CSSProperties = {
  background: 'linear-gradient(95deg, #f6fbff 0%, #dcebfa 100%)',
};

const CAREER_GROUP_CTA_STYLE: CSSProperties = {
  background: 'linear-gradient(74deg, #013a72 3.48%, #0c71c7 83.47%)',
};

function ProgramGlassCard({
  title,
  desc,
  tag,
  iconSrc,
  iconSizeClass,
  iconScaleClass,
  iconFitClass,
  iconHasOwnBackground,
  revealVariants,
  learnMoreHref,
}: {
  title: string;
  desc: string;
  tag: string;
  iconSrc: string;
  iconSizeClass?: string;
  iconScaleClass?: string;
  iconFitClass?: string;
  iconHasOwnBackground?: boolean;
  revealVariants?: Variants;
  learnMoreHref: string;
}) {
  return (
    <motion.article
      variants={revealVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group rounded-[32px] border border-[#7bc1ff] bg-linear-to-b from-white via-white to-[#edf7ff] px-7 py-10 shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-[box-shadow,border-color] duration-300 ease-out will-change-transform hover:border-[#5aadff] hover:shadow-[0_16px_40px_rgba(1,58,114,0.14)]"
    >
      <div className="flex items-start justify-between">
        <div
          className={`inline-flex size-[56px] items-center justify-center rounded-full ${
            iconHasOwnBackground ? '' : 'bg-[#4b9cf2] text-white'
          }`}
        >
          <img
            src={iconSrc}
            alt=""
            className={`${iconSizeClass ?? 'size-[56px]'} ${iconScaleClass ?? ''} ${iconFitClass ?? 'object-contain'}`}
          />
        </div>
        <span className="rounded bg-[#d9e6f2] px-2 py-1 text-[12px] font-semibold leading-[1.4] text-[#002b5b]">
          {tag}
        </span>
      </div>
      <h3 className="mt-5 text-[32px] font-bold leading-[1.2] text-[#070707] md:text-[24px]">
        {title}
      </h3>
      <div className="mt-4 h-[2px] w-20 bg-[#fbc17b]" />
      <p className="mt-4 min-h-[66px] text-base leading-[22px] text-[#474747]">{desc}</p>
      <Link
        href={learnMoreHref}
        className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-[#002b5b] transition hover:opacity-80"
      >
        Tìm hiểu thêm
        <ArrowRight className="size-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}

export default function CareerGroupsSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={CAREER_GROUP_SECTION_STYLE}
    >
      <Image
        src="/home/job-groups-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-55"
        sizes="100vw"
      />
      <div className="section-content relative z-10 text-[#292929]">
        <motion.div
          className="mx-auto max-w-[1109px] text-center"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          <p className="text-[12px] font-normal uppercase leading-[22px] tracking-[0.24px] text-[#707070] md:text-[14px] md:leading-[32px]">
            Các nhóm nghề nghiệp tại IPAG
          </p>
          <h2 className="mt-2 text-[28px] font-extrabold uppercase leading-[40px] tracking-[0.7px] text-[#292929] md:text-[40px] md:leading-[60px] md:tracking-[1px]">
            Chọn nhóm cơ hội phù hợp với bạn
          </h2>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-3"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {CAREER_GROUP_ITEMS.map((item) => (
            <ProgramGlassCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              tag={item.tag}
              iconSrc={item.iconSrc}
              iconSizeClass={item.iconSizeClass}
              iconScaleClass={item.iconScaleClass}
              iconFitClass={item.iconFitClass}
              iconHasOwnBackground={item.iconHasOwnBackground}
              revealVariants={CARD_REVEAL_VARIANTS}
              learnMoreHref={item.learnMoreHref}
            />
          ))}
        </motion.div>
        <motion.div
          className="mt-10 text-center"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          <Link
            href="/jobs"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-6 text-[16px] font-bold uppercase text-white shadow-[0_4px_4px_rgba(0,0,0,0.15)] transition hover:brightness-95 md:w-[356px] md:text-[18px]"
            style={CAREER_GROUP_CTA_STYLE}
          >
            Khám phá tất cả cơ hội
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
