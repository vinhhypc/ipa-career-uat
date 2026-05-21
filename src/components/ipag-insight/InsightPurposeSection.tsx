'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

export default function InsightPurposeSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-[#fef6eb] to-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 70% 20%, #fff 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 20% 80%, #fff 0%, transparent 50%)`,
        }}
      />

      <div className="section-content relative flex flex-col gap-8 md:gap-[52px]">
        <motion.div
          className="flex w-full flex-col items-center gap-2 text-center"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ ...REVEAL_VIEWPORT, margin: '0px 0px -12% 0px' }}
        >
          <p className="w-full max-w-[812px] text-sm font-normal leading-[22px] text-[#707070] md:leading-[32px]">
            OUR PURPOSE
          </p>
          <h2 className="text-xl font-extrabold uppercase leading-[26px] tracking-[1px] text-[#292929] md:text-4xl md:leading-[60px]">
            Kiến tạo di sản bền vững
          </h2>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={{ ...REVEAL_VIEWPORT, margin: '0px 0px -12% 0px' }}
        >
          <motion.article
            variants={CARD_REVEAL_VARIANTS}
            className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-[0px_2px_8px_rgba(7,7,7,0.06),0px_8px_24px_rgba(0,43,91,0.06)] ring-1 ring-black/4"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[280px]">
              <Image
                src="/ipag-insight/about.jpg"
                alt=""
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pt-6 2xl:px-7">
              <div className="flex flex-col gap-3 pb-5">
                <h3 className="text-left text-2xl font-bold leading-8 text-[#070707]">Tầm nhìn</h3>
                <p className="text-left text-base font-normal leading-[22px] text-[#474747]">
                  Trở thành Ngân hàng Năng lực (Capability Bank) - Nơi hội tụ các nguồn lực để khai
                  phóng tiềm năng con người và doanh nghiệp, kiến tạo những câu chuyện thành công
                  đột phá và tạo ra giá trị bền vững cho xã hội.
                </p>
              </div>

              <div className="h-2 shrink-0" aria-hidden />
            </div>
          </motion.article>

          <motion.article
            variants={CARD_REVEAL_VARIANTS}
            className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-[0px_2px_8px_rgba(7,7,7,0.06),0px_8px_24px_rgba(0,43,91,0.06)] ring-1 ring-black/4"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[280px]">
              <Image
                src="/ipag-insight/mission-card.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pt-6 2xl:px-7">
              <div className="flex flex-col gap-3 pb-5">
                <h3 className="text-left text-2xl font-bold leading-8 text-[#070707]">Sứ mệnh</h3>
                <p className="text-left text-base font-normal leading-[22px] text-[#474747]">
                  Vận hành mô hình Ngân hàng Năng lực, kết nối cộng sinh Con người - Công nghệ -
                  Chuỗi giá trị để dẫn vốn hiệu quả và phụng sự cuộc sống trọn vẹn.
                </p>
              </div>

              <div className="h-2 shrink-0" aria-hidden />
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
