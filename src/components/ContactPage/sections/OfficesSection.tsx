'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import OfficeItem from '../OfficeItem';
import { ITEM_REVEAL, STAGGER_CHILDREN } from '../constants';

export default function OfficesSection() {
  return (
    <section className="bg-white px-4 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
      <motion.div
        className="section-content"
        variants={STAGGER_CHILDREN}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="mx-auto grid w-full max-w-[1115px] gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <motion.div className="grid gap-8 md:grid-cols-2" variants={ITEM_REVEAL}>
            <div>
              <p className="text-2xl font-extrabold uppercase text-[#145194] after:mt-2 after:block after:w-21 after:border-b-2 after:border-[#145194]">
                HÀ NỘI
              </p>
              <div className="mt-5 space-y-5">
                <OfficeItem
                  index="01"
                  title="HEADQUARTERS"
                  address="95 Trần Thái Tông, phường Dịch Vọng Hậu, Hà Nội"
                />
                <OfficeItem
                  index="02"
                  title="OFFICE"
                  address="01 Nguyễn Thượng Hiền, Hai Bà Trưng, Hà Nội"
                />
                <OfficeItem
                  index="03"
                  title="OFFICE"
                  address="43 Lê Văn Lương, Thanh Xuân, Hà Nội"
                />
                <OfficeItem index="04" title="OFFICE" address="19 Trúc Khê, Đống Đa, Hà Nội" />
              </div>
            </div>

            <div>
              <p className="text-2xl font-extrabold uppercase text-[#145194] after:mt-2 after:block after:w-21 after:border-b-2 after:border-[#145194]">
                HỒ CHÍ MINH
              </p>
              <div className="mt-5 space-y-5">
                <OfficeItem
                  index="05"
                  title="SOUTHERN OFFICE"
                  address="90 Pasteur, phường Sài Gòn, TP. Hồ Chí Minh"
                />
                <OfficeItem
                  index="06"
                  title="SOUTHERN OFFICE"
                  address="205 Nguyễn Xí, Bình Thạnh, TP. Hồ Chí Minh"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] lg:mx-0"
            variants={ITEM_REVEAL}
          >
            <div className="relative aspect-square">
              <Image
                src="/contact/figma/office.png"
                alt=""
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
