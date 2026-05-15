'use client';

import { motion } from 'motion/react';

import {
  CARD_REVEAL_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

const ICONS = {
  skills: '/specialist-track/icons/icon-skills.png',
  diversity: '/specialist-track/icons/icon-diversity.png',
  calendar: '/specialist-track/icons/icon-calendar.png',
} as const;

const COMMITMENTS = [
  {
    icon: ICONS.skills,
    title: 'Tối ưu hóa năng lực chuyên sâu',
    body: 'Bạn được toàn quyền làm chủ lĩnh vực của mình, loại bỏ những tác vụ không liên quan để tập trung hoàn toàn vào việc tạo ra những giải pháp chuyên môn có giá trị cao nhất.',
  },
  {
    icon: ICONS.diversity,
    title: 'Hệ sinh thái và nguồn lực cộng hưởng',
    body: 'Năng lực cá nhân được chắp cánh bởi hệ thống nền tảng vững chắc: IPAS (Nâng tầm công nghệ), IPAC (Kết nối mạng lưới) và IPAM (Chuẩn hóa quy trình).',
  },
  {
    icon: ICONS.calendar,
    title: 'Lộ trình phát triển chuyên sâu',
    body: 'Tại IPAG, giá trị chuyên môn được tôn vinh tương đương với năng lực quản lý, các chuyên gia được phát triển lên các cấp bậc cao nhất như Principal hay Domain Lead.',
  },
];

export default function CommitmentsSection() {
  return (
    <section
      className="section-padding max-md:py-11! md:py-20!"
      style={{
        backgroundImage:
          'linear-gradient(178.49deg, rgb(254, 246, 235) 5.08%, rgb(255, 255, 255) 98.46%)',
      }}
    >
      <div className="section-content">
        <motion.h2
          className="text-center text-[20px] font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          3 CAM KẾT VỚI CHUYÊN GIA
        </motion.h2>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-5 md:mt-[52px] md:grid-cols-3"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {COMMITMENTS.map((item) => (
            <motion.article
              key={item.title}
              variants={CARD_REVEAL_VARIANTS}
              whileHover={{
                y: -4,
                transition: { type: 'tween', duration: 0.22, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="flex flex-col gap-5 rounded-[32px] bg-white px-7 py-10 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.15)]"
            >
              <img src={item.icon} alt="" className="size-[60px] object-contain" />
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] font-bold leading-[28px] text-[#070707] md:text-[24px] md:leading-[32px]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
