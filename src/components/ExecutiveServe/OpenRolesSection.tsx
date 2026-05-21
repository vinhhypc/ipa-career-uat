'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

import {
  FADE_LEFT_VARIANTS,
  FADE_RIGHT_VARIANTS,
  FADE_UP_VARIANTS,
  REVEAL_VIEWPORT,
  STAGGER_PARENT,
} from '@/components/home/home-motion';

import { OPEN_ROLES } from './constants';

interface OpenRolesSectionProps {
  onOpenModal: () => void;
}

export default function OpenRolesSection({ onOpenModal }: OpenRolesSectionProps) {
  return (
    <section
      className="section-padding relative overflow-hidden max-md:py-11! md:py-20!"
      style={{
        backgroundImage:
          'linear-gradient(160.3deg, rgba(170, 231, 255, 0.15) 4.3%, rgba(0, 116, 162, 0.15) 93.43%)',
      }}
    >
      <Image
        src="/executive-serve/jobs-bg-left.svg"
        alt=""
        width={660}
        height={660}
        className="absolute bottom-0 left-0 hidden w-[660px] opacity-70 xl:block"
      />
      <Image
        src="/executive-serve/jobs-bg-left.svg"
        alt=""
        width={660}
        height={660}
        className="absolute bottom-0 right-0 hidden w-[660px] -scale-x-100 opacity-70 xl:block"
      />

      <div className="section-content relative z-10">
        <motion.h2
          className="text-center text-xl font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-4xl md:leading-[48px] md:tracking-[1px]"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          CHÚNG TÔI ĐANG TÌM KIẾM
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-col gap-6 md:mt-[52px]"
          variants={STAGGER_PARENT}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          {OPEN_ROLES.map((role) => {
            const isBlue = role.tone === 'blue';
            return (
              <motion.article
                key={role.title}
                variants={FADE_UP_VARIANTS}
                className="overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)]"
              >
                <div
                  className={`px-4 py-6 md:px-7 md:py-8 ${
                    isBlue
                      ? 'bg-linear-to-br from-[#3192e3] to-[#01386f] text-white'
                      : 'bg-linear-to-br from-[#ffe4c4] to-[#fbbf76] text-[#292929]'
                  }`}
                >
                  <h3 className="text-lg font-bold uppercase leading-[26px] md:text-2xl md:leading-[32px]">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-[20px] md:text-lg md:leading-[26px]">
                    {role.summary}
                  </p>
                </div>
                <div className="px-4 pb-6 pt-4 md:px-7">
                  <div className="grid grid-cols-1 gap-6 border-b border-[#d5d5d5] pb-4 md:grid-cols-2 md:gap-5">
                    <div>
                      <motion.p
                        className="text-xs font-bold uppercase leading-[22px] text-[#474747] md:text-base"
                        variants={FADE_LEFT_VARIANTS}
                      >
                        YÊU CẦU CÔNG VIỆC
                      </motion.p>
                      <motion.ul className="mt-2 space-y-1.5" variants={STAGGER_PARENT}>
                        {role.requirements.map((line) => (
                          <motion.li
                            key={line}
                            className="flex gap-2 text-xs leading-[20px] text-[#474747] md:text-base md:leading-[26px]"
                            variants={FADE_LEFT_VARIANTS}
                          >
                            <Check
                              className="mt-1 size-[18px] shrink-0 text-[#00377c] md:size-5"
                              strokeWidth={2}
                            />
                            <span>{line}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <div>
                      <motion.p
                        className="text-xs font-bold uppercase leading-[22px] text-[#474747] md:text-base"
                        variants={FADE_RIGHT_VARIANTS}
                      >
                        QUYỀN LỢI & CƠ HỘI
                      </motion.p>
                      <motion.ul className="mt-2 space-y-1.5" variants={STAGGER_PARENT}>
                        {role.benefits.map((line) => (
                          <motion.li
                            key={line}
                            className="flex gap-2 text-xs leading-[20px] text-[#474747] md:text-base md:leading-[26px]"
                            variants={FADE_RIGHT_VARIANTS}
                          >
                            <Check
                              className="mt-1 size-[18px] shrink-0 text-[#00377c] md:size-5"
                              strokeWidth={2}
                            />
                            <span>{line}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                  <Link
                    href="/we-look-for"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold leading-[1.4] text-[#002b5b] transition duration-200 hover:scale-105 hover:text-[#0C71C7] md:text-base"
                  >
                    Xem chi tiết & Ứng tuyển
                    <ArrowRight className="size-4 md:size-5" strokeWidth={2} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:justify-center md:gap-5"
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
        >
          <Link
            href="/jobs"
            className="flex h-12 w-full max-w-[276px] items-center justify-center rounded-full border border-[#00377c] text-base font-bold text-[#002b5b] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] md:text-lg md:hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
          >
            XEM THÊM VỊ TRÍ
          </Link>
          <button
            onClick={onOpenModal}
            className="h-12 w-full max-w-[276px] cursor-pointer rounded-full bg-[linear-gradient(77deg,#013A72_3.48%,#0C71C7_83.47%)] text-base font-bold text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] md:text-lg md:hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)]"
          >
            ĐỂ LẠI THÔNG TIN
          </button>
        </motion.div>
      </div>
    </section>
  );
}
