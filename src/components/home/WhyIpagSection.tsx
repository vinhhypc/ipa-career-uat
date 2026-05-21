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
    <section
      className="section-padding relative lg:px-12 lg:py-12 xl:px-16 xl:py-16"
      style={WHY_IPAG_SECTION_STYLE}
    >
      <div className="section-content relative z-10">
        <div className="flex w-full flex-col gap-0 md:gap-8 xl:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="w-full 2xl:max-w-110 md:max-w-60 lg:max-w-62 xl:max-w-80"
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
            <p className="mt-7 text-sm font-normal leading-6 tracking-[0.28px] text-[#474747] uppercase">
              VÌ SAO LÀ IPAG?
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[0.8px] text-[#292929] uppercase md:leading-8 lg:text-3xl lg:leading-9 xl:text-4xl xl:leading-10">
              IPAG -<span className="md:hidden"> </span>
              <br className="hidden md:block" />
              Capability Bank
            </h2>
            <p className="mt-5 text-base leading-6 tracking-[0.32px] text-[#474747]">
              Không chỉ tạo cơ hội việc làm - IPAG xây dựng môi trường để năng lực của bạn được phát
              triển bền vững và tạo ra giá trị thực tế
            </p>
            <Link
              href="/ipag-insight"
              className="mt-7 inline-flex items-center gap-1 text-base font-semibold text-[#002b5b] transition duration-200 hover:scale-105 hover:text-[#0C71C7]"
            >
              Tìm hiểu thêm
              <ArrowRight className="size-5" />
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full min-w-0 flex-col items-center gap-0 md:flex-row md:items-center md:gap-10 lg:min-w-0 lg:flex-1 lg:flex-row lg:items-center lg:gap-10"
            variants={STAGGER_PARENT}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <motion.div
              variants={SCALE_IN_VARIANTS}
              className="w-full max-w-[min(100%,260px)] shrink-0 py-4 sm:max-w-60 md:w-auto md:max-w-64 md:py-0 xl:max-w-72 2xl:max-w-90 lg:px-0 lg:py-0"
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
              className="w-full min-w-0 max-w-[530px] space-y-6 md:ml-auto md:space-y-4 md:w-auto 2xl:space-y-10"
              variants={STAGGER_PARENT}
            >
              {WHY_IPAG_ITEMS.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={FADE_RIGHT_VARIANTS}
                  className={`w-full min-w-0 ${index === 1 ? 'lg:pl-10' : ''}`}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: 'tween', duration: 0.22, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                >
                  <div className="flex w-full min-w-0 items-start gap-2 md:gap-3 2xl:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[0px_4px_6px_rgba(0,0,0,0.15)] lg:size-20 lg:bg-transparent lg:p-0 lg:shadow-none">
                      <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(181.96deg,#fffaf0_85.9%,#ffc987_185.9%)] lg:size-20 lg:bg-none lg:overflow-visible">
                        <Image
                          src={item.icon}
                          alt=""
                          width={80}
                          height={80}
                          className="pointer-events-none block object-contain object-center absolute left-1/2 top-1/2 size-10 origin-center transform-[translate(-50%,calc(-50%+0.25rem))_scale(2.38)] lg:relative lg:left-auto lg:top-auto lg:size-full lg:transform-none lg:object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <h3 className="text-base font-bold leading-[26px] text-[#292929] lg:text-lg">
                        {item.title}
                      </h3>
                      <div className="h-px w-12 shrink-0 bg-[#fbc17b] lg:my-2" />
                      <p
                        className={
                          index === 0
                            ? 'text-sm leading-5 text-[#474747] lg:text-base lg:leading-[22px]'
                            : 'text-sm leading-[22px] text-[#474747] lg:text-base'
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
