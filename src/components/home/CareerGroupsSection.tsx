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
  learnMoreHref: string;
};

const CAREER_GROUP_ITEMS: CareerGroupItem[] = [
  {
    title: 'MA Program',
    desc: 'Trải nghiệm "khởi nghiệp" trong lòng doanh nghiệp - dành cho những ai khao khát thử thách bản thân, chủ động kiến tạo sự nghiệp của riêng mình.',
    tag: 'FRESH',
    iconSrc: '/home/career-icon-ma.svg',
    iconHasOwnBackground: true,
    learnMoreHref: '/we-look-for/ma-program',
  },
  {
    title: 'Specialist Track',
    desc: 'Mở rộng năng lực chuyên môn và tạo dấu ấn trong các dự án có quy mô, tác động thực tiễn với tổ chức.',
    tag: 'SENIOR',
    iconSrc: '/home/briefcase.png',
    iconHasOwnBackground: true,
    learnMoreHref: '/we-look-for/specialist-track',
  },
  {
    title: 'Leadership Track',
    desc: 'Đồng hành xây dựng chiến lược cho tổ chức, phát triển đội ngũ và tạo giá trị dài hạn cho hệ sinh thái.',
    tag: 'C-level',
    iconSrc: '/home/star.png',
    iconHasOwnBackground: true,
    learnMoreHref: '/we-look-for/leadership-track',
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
        scale: 1.03,
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group flex h-full flex-col rounded-[24px] border border-transparent bg-white px-5 py-7 shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-[box-shadow,border-color,background] duration-300 ease-out will-change-transform hover:border-[#5aadff] hover:bg-linear-to-b hover:from-white hover:via-white hover:to-[#edf7ff] hover:shadow-[0_16px_40px_rgba(1,58,114,0.14)] sm:rounded-[28px] sm:px-6 sm:py-8 lg:rounded-[32px] lg:px-7 lg:py-10"
    >
      <div className="flex items-start justify-between">
        <div
          className={`inline-flex size-[56px] items-center justify-center rounded-full ${
            iconHasOwnBackground ? '' : 'bg-[#4b9cf2] text-white'
          }`}
        >
          <Image
            src={iconSrc}
            alt=""
            width={56}
            height={56}
            sizes="56px"
            className={`${iconSizeClass ?? 'size-[56px]'} ${iconScaleClass ?? ''} ${iconFitClass ?? 'object-contain'}`}
          />
        </div>
        <span className="rounded bg-[#d9e6f2] px-2 py-1 text-xs font-semibold leading-[1.4] text-[#002b5b]">
          {tag}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-bold leading-[1.2] text-[#070707]  2xl:text-3xl">
        {title}
      </h3>
      <div className="mt-4 h-[2px] w-20 bg-[#fbc17b]" />
      <p className="mt-4 min-h-[66px] text-sm leading-[22px] text-[#474747] xl:text-base">{desc}</p>
      <Link
        href={learnMoreHref}
        className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#002b5b] transition duration-200 hover:text-[#0C71C7] sm:text-base"
      >
        Tìm hiểu thêm
        <ArrowRight className="size-5 transition-transform duration-300 ease-out" />
      </Link>
    </motion.article>
  );
}

export default function CareerGroupsSection() {
  return (
    <section
      className="section-padding relative overflow-hidden lg:px-12 lg:py-12 xl:px-16 xl:py-16"
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
          <p className="text-xs font-normal uppercase leading-[22px] tracking-[0.24px] text-[#707070] md:text-sm md:leading-[32px]">
            Các nhóm nghề nghiệp tại IPAG
          </p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase leading-[36px] tracking-[0.6px] text-[#292929] sm:text-3xl sm:leading-[40px] md:text-4xl md:leading-[48px] md:tracking-[0.9px] lg:text-4xl lg:leading-[60px] lg:tracking-[1px] xl:text-5xl xl:leading-[66px]">
            Chọn nhóm cơ hội phù hợp với bạn
          </h2>
        </motion.div>
        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7"
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
            className="inline-flex h-[52px] w-full max-w-[356px] items-center justify-center gap-2 rounded-full px-6 text-base font-bold uppercase text-white shadow-[0_4px_4px_rgba(0,0,0,0.15)] transition duration-200 hover:brightness-110 hover:scale-105 sm:w-[320px] md:w-[356px] md:text-lg"
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
