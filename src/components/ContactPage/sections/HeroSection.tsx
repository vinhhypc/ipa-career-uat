'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import InfoCard from '../InfoCard';
import { ITEM_REVEAL, STAGGER_CHILDREN } from '../constants';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2fbff]">
      <div className="relative h-72 w-full sm:h-80 md:h-96 lg:h-[580px]">
        <Image
          src="/contact/figma/hero.png"
          alt="Contact IPAG"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00152d] to-[#06213f] opacity-85" />
        <motion.div
          className="section-content absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center"
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="max-w-4xl text-3xl font-extrabold uppercase tracking-wider text-white drop-shadow md:text-4xl md:leading-snug lg:text-5xl"
            variants={ITEM_REVEAL}
          >
            CONTACT IPAG
          </motion.h1>
          <motion.div className="h-1 w-36 bg-[#fbc17b]" variants={ITEM_REVEAL} />
          <motion.p
            className="max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl"
            variants={ITEM_REVEAL}
          >
            Chúng tôi luôn sẵn sàng lắng nghe — dù bạn đang tìm kiếm cơ hội, muốn hỏi về chương
            trình, hay chỉ đơn giản là muốn biết thêm về IPAG.
          </motion.p>
        </motion.div>
      </div>

      <div className="section-padding relative -mt-16 pt-0 pb-14 md:-mt-24 lg:-mt-28">
        <motion.div
          className="section-content mx-auto grid w-full max-w-5xl items-stretch gap-5 md:grid-cols-2 md:gap-6"
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={ITEM_REVEAL} className="h-full">
            <InfoCard
              icon={<Image src="/contact/figma/mail.svg" alt="Email" width={60} height={60} />}
              label="EMAIL TUYỂN DỤNG"
              title="nextgen@ipam.vn"
              desc="Mọi liên hệ tuyển dụng: gửi CV, hỏi thông tin chương trình, đặt lịch phỏng vấn."
            />
          </motion.div>
          <motion.div variants={ITEM_REVEAL} className="h-full">
            <InfoCard
              icon={<Image src="/contact/figma/clock.svg" alt="Clock" width={60} height={60} />}
              label="GIỜ LÀM VIỆC"
              title="Thứ Hai – Thứ Sáu"
              desc="08:30 – 17:30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

