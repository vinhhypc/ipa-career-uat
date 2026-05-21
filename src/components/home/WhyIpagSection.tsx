'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  FADE_LEFT_VARIANTS,
  FADE_RIGHT_VARIANTS,
  REVEAL_VIEWPORT,
  SCALE_IN_VARIANTS,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

const WHY_IPAG_ITEMS = [
  {
    title: 'Con người',
    desc: 'Trao quyền và tạo điều kiện để mỗi cá nhân phát huy năng lực và kiến tạo ảnh hưởng thực tiễn.',
    icon: '/home/why-ipag-icon-human.png',
  },
  {
    title: 'Công nghệ',
    desc: 'Ứng dụng công nghệ và dữ liệu như đòn bẩy thúc đẩy hiệu quả vận hành và đổi mới.',
    icon: '/home/why-ipag-icon-tech.png',
  },
  {
    title: 'Chuỗi giá trị',
    desc: 'Kết nối và cộng hưởng hệ sinh thái để tạo nên giá trị bền vững và lan tỏa dài hạn.',
    icon: '/home/why-ipag-icon-chain.png',
  },
] as const;

const WHY_IPAG_SECTION_STYLE: CSSProperties = {
  background: 'linear-gradient(5deg, #fff 21.88%, #fff2df 171.54%)',
};

export default function WhyIpagSection() {
  return (
    <section className="section-padding relative" style={WHY_IPAG_SECTION_STYLE}>
      <div className="section-content relative z-10">
        <div className="flex w-full flex-col gap-0 md:gap-10 2xl:flex-row 2xl:items-center 2xl:justify-between">
          <motion.div
            className="w-full 2xl:max-w-[465px]"
            variants={FADE_LEFT_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <Image
              src="/home/why-ipag-heading-deco.svg"
              alt=""
              width={125}
              height={24}
              className="h-6 w-auto"
            />
            <p className="mt-7 text-[14px] font-normal leading-6 tracking-[0.28px] text-[#474747] uppercase">
              VÌ SAO LÀ IPAG?
            </p>
            <h2 className="mt-2 text-[32px] font-bold leading-tight tracking-[0.8px] text-[#292929] uppercase md:text-[34px] md:leading-[48px] lg:text-[40px] lg:leading-[60px] 2xl:text-[44px]">
              IPAG -<span className="hidden md:inline"> </span>
              <br className="md:hidden" />
              Capability Bank
            </h2>
            <p className="mt-5 text-[16px] leading-6 tracking-[0.32px] text-[#474747]">
              Không chỉ tạo cơ hội việc làm - IPAG xây dựng môi trường để năng lực của bạn được phát
              triển bền vững và tạo ra giá trị thực tế
            </p>
            <Link
              href="/ipag-insight"
              className="mt-7 inline-flex items-center gap-1 text-[16px] font-semibold text-[#002b5b] transition duration-200 hover:scale-105 hover:text-[#0C71C7]"
            >
              Tìm hiểu thêm
              <ArrowRight className="size-5" />
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full min-w-0 flex-col items-center gap-0 md:flex-row md:items-center md:gap-10 2xl:min-w-0 2xl:flex-1 2xl:flex-row 2xl:items-center 2xl:gap-10"
            variants={STAGGER_PARENT}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <motion.div
              variants={SCALE_IN_VARIANTS}
              className="w-full max-w-[min(100%,300px)] shrink-0 py-4 sm:max-w-[360px] md:w-auto md:max-w-[380px] md:py-0 2xl:max-w-[420px] 2xl:px-0 2xl:py-0"
            >
              <Image
                src="/home/why-ipag-capability-bank.png"
                alt="IPAG capability bank"
                width={382}
                height={380}
                quality={100}
                unoptimized
                sizes="(min-width: 1024px) 382px, 300px"
                className="h-auto w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="w-full min-w-0 max-w-[530px] space-y-6 md:ml-auto md:w-auto 2xl:space-y-10"
              variants={STAGGER_PARENT}
            >
              {WHY_IPAG_ITEMS.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={FADE_RIGHT_VARIANTS}
                  className={`w-full min-w-0 ${index === 1 ? '2xl:pl-10' : ''}`}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: 'tween', duration: 0.22, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                >
                  <div className="flex w-full min-w-0 items-start gap-3 2xl:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[0px_4px_6px_rgba(0,0,0,0.15)] 2xl:size-20 2xl:bg-transparent 2xl:p-0 2xl:shadow-none">
                      <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(181.96deg,#fffaf0_85.9%,#ffc987_185.9%)] 2xl:size-20 2xl:bg-none 2xl:overflow-visible">
                        <Image
                          src={item.icon}
                          alt=""
                          width={80}
                          height={80}
                          className="pointer-events-none block object-contain object-center max-2xl:absolute max-2xl:left-1/2 max-2xl:top-1/2 max-2xl:size-10 max-2xl:origin-center max-2xl:transform-[translate(-50%,calc(-50%+0.25rem))_scale(2.38)] 2xl:relative 2xl:left-auto 2xl:top-auto 2xl:size-full 2xl:transform-none 2xl:object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <h3 className="text-base font-bold leading-[26px] text-[#292929] 2xl:text-[18px]">
                        {item.title}
                      </h3>
                      <div className="h-px w-12 shrink-0 bg-[#fbc17b] 2xl:my-2" />
                      <p
                        className={
                          index === 0
                            ? 'text-sm leading-5 text-[#474747] 2xl:text-[16px] 2xl:leading-[22px]'
                            : 'text-sm leading-[22px] text-[#474747] 2xl:text-[16px]'
                        }
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
