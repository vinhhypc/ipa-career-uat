'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Coins,
  HeartPulse,
  PiggyBank,
  Plane,
  ShieldCheck,
  UtensilsCrossed,
  LaptopMinimal,
} from 'lucide-react';
import { motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';

type BenefitItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type BenefitBlock = {
  key: string;
  heading: string;
  tag: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  reverseOnDesktop?: boolean;
  items: BenefitItem[];
};

const BLOCKS: BenefitBlock[] = [
  {
    key: 'song-khoe',
    heading: 'SỐNG KHỎE',
    tag: 'Sống khỏe - Healthy & Well-being',
    quote:
      '"IPAG đầu tư vào sức khỏe toàn diện của bạn - nền tảng cốt lõi để kiến tạo giá trị lâu dài."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-khoe.png',
    imageAlt: '',
    items: [
      {
        title: 'Thực phẩm sạch — Gobio Retail',
        desc: 'Ưu đãi mua sắm thực phẩm hữu cơ và xanh sạch',
        icon: UtensilsCrossed,
      },
      {
        title: 'Trải nghiệm du lịch — CBX Travel',
        desc: 'Chương trình gắn kết, và Retreat tại địa điểm thiên nhiên',
        icon: Plane,
      },
      {
        title: 'Ẩm thực — GSF F&B',
        desc: 'Ưu đãi tại chuỗi nhà hàng xanh sạch GSF',
        icon: UtensilsCrossed,
      },
      {
        title: 'Flexible working',
        desc: 'Kết quả là thước đo — không phải số giờ ngồi tại bàn.',
        icon: LaptopMinimal,
      },
    ],
  },
  {
    key: 'song-giau',
    heading: 'SỐNG GIÀU',
    tag: 'Sống giàu - Financial prosperity',
    quote:
      '"IPAG đồng hành cùng bạn kiến tạo sự thịnh vượng bền vững, đạt tới tự do tài chính để toàn tâm tập trung phát triển sự nghiệp."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-giau.png',
    imageAlt: '',
    reverseOnDesktop: true,
    items: [
      {
        title: 'Lương cạnh tranh + Profit Sharing',
        desc: 'Thu nhập cơ bản cạnh tranh với thị trường',
        icon: Coins,
      },
      {
        title: 'Đầu tư ưu đãi',
        desc: 'Tài khoản chứng khoán ưu đãi, tư vấn đầu tư cá nhân và quyền tiếp cận sản phẩm tài chính đặc quyền từ VNDirect',
        icon: PiggyBank,
      },
      {
        title: 'Quản lý tài sản',
        desc: 'PAG đồng đóng góp cùng nhân viên vào quỹ hưu trí dài hạn',
        icon: BriefcaseBusiness,
      },
      {
        title: 'Quỹ tích sản hưu trí CBNV',
        desc: 'Phần thưởng đặc biệt vào các cột mốc 5/10/15/20 năm',
        icon: ShieldCheck,
      },
      {
        title: 'Tri ân thâm niên',
        desc: 'Phần thưởng đặc biệt vào các cột mốc 5/10/15/20 năm',
        icon: BadgeCheck,
      },
    ],
  },
  {
    key: 'song-an',
    heading: 'SỐNG AN',
    tag: 'Sống an - Holistic security',
    quote:
      '"IPAG cam kết bảo vệ bạn và những người bạn yêu thương qua dịch vụ chăm sóc sức khỏe toàn diện."',
    imageSrc: '/life-at-ipag/che-do-dai-ngo/figma/song-an.png',
    imageAlt: '',
    items: [
      {
        title: 'Bảo hiểm sức khỏe nâng cao',
        desc: 'Gói bảo hiểm toàn diện PTI Care bao gồm bản thân và người thân trực tiếp.',
        icon: ShieldCheck,
      },
      {
        title: 'PTICare Platform',
        desc: 'Đặt lịch khám, theo dõi hồ sơ sức khỏe và kết nối mạng lưới y tế ngay trên điện thoại',
        icon: HeartPulse,
      },
      {
        title: 'Hỗ trợ khi khó khăn',
        desc: 'Partnership Mindset của IPAG không dừng lại ở giờ làm việc, mà còn đồng hành khi bạn hoặc gia đình gặp khủng hoảng.',
        icon: BadgeCheck,
      },
    ],
  },
];

const BLOCK_VIEWPORT = { once: true, amount: 0.22 } as const;

const BLOCK_TITLE_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
} as const;

const BLOCK_IMAGE_VARIANTS = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1 },
} as const;

const BLOCK_CONTENT_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.05,
    },
  },
} as const;

const BLOCK_CONTENT_ITEM_VARIANTS = {
  hidden: (xOffset: number) => ({ opacity: 0, x: xOffset }),
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
} as const;

export default function CheDoDaiNgoPage() {
  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Life at IPAG', href: '/life-at-ipag?tab=che-do-dai-ngo' },
          { label: 'Chế độ đãi ngộ' },
        ]}
      />

      <section className="relative -mt-2 overflow-hidden ">
        <div className="relative h-[420px] w-full sm:h-[460px] md:h-[480px] lg:h-[640px]">
          <Image
            src="/life-at-ipag/che-do-dai-ngo/figma/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center] md:object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
              className="text-2xl font-extrabold uppercase tracking-[2px] text-white drop-shadow-md md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Chế độ đãi ngộ
            </motion.h1>
            <motion.div
              className="relative mt-5 h-[64px] w-full max-w-[860px] md:mt-6 md:h-[78px] lg:h-[92px]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/life-at-ipag/che-do-dai-ngo/hero-header.png"
                alt="Trao năng lực - Nhận tương lai"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 720px, 860px"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fbf9f6_0%,#ffffff_70%)]">
        <div className="section-padding pt-0">
          <div className="section-content">
            <div className="mx-auto w-full max-w-[1115px]">
              {BLOCKS.map((b) => (
                <motion.div
                  key={b.key}
                  className="py-6 md:py-14"
                  initial="hidden"
                  whileInView="show"
                  viewport={BLOCK_VIEWPORT}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                  <motion.div
                    variants={BLOCK_TITLE_VARIANTS}
                    className={b.reverseOnDesktop ? 'flex justify-end' : 'flex justify-start'}
                  >
                    <div
                      className={`w-full max-w-[420px] sm:max-w-[520px] lg:w-[587px] ${
                        b.reverseOnDesktop ? 'ml-auto' : 'mr-auto'
                      }`}
                    >
                      {b.reverseOnDesktop ? (
                        <div className="flex items-center justify-end gap-3">
                          <p className="text-[20px] font-extrabold uppercase tracking-[1px] text-[#292929] md:text-4xl">
                            {b.heading}
                          </p>
                          <span className="h-[2px] w-14 bg-[#145194]" aria-hidden />
                        </div>
                      ) : (
                        <div className="flex items-center justify-start gap-3">
                          <span className="h-[2px] w-14 bg-[#145194]" aria-hidden />
                          <p className="text-[20px] font-extrabold uppercase tracking-[1px] text-[#292929] md:text-4xl">
                            {b.heading}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <div
                    className={
                      b.reverseOnDesktop
                        ? 'mt-5 grid gap-8 lg:grid-cols-[1fr_587px] lg:items-center lg:gap-14'
                        : 'mt-5 grid gap-8 lg:grid-cols-[587px_1fr] lg:items-center lg:gap-14'
                    }
                  >
                    <div
                      className={
                        b.reverseOnDesktop ? 'lg:order-2 lg:justify-self-end' : 'lg:order-1'
                      }
                    >
                      <motion.div
                        variants={BLOCK_IMAGE_VARIANTS}
                        className={`relative w-full max-w-[420px] overflow-hidden rounded-[24px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] sm:max-w-[520px] lg:w-[587px] lg:max-w-none ${
                          b.reverseOnDesktop ? 'ml-auto' : 'mr-auto'
                        }`}
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={b.imageSrc}
                            alt={b.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 587px"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <div className={b.reverseOnDesktop ? 'lg:order-1' : 'lg:order-2'}>
                      <motion.div
                        variants={BLOCK_CONTENT_CONTAINER_VARIANTS}
                        className="lg:flex lg:min-h-[587px] lg:flex-col lg:justify-center"
                      >
                        <motion.div
                          variants={BLOCK_CONTENT_ITEM_VARIANTS}
                          custom={b.reverseOnDesktop ? -56 : 56}
                        >
                          <TagLine text={b.tag} />
                        </motion.div>
                        <motion.p
                          variants={BLOCK_CONTENT_ITEM_VARIANTS}
                          custom={b.reverseOnDesktop ? -56 : 56}
                          className="mt-5 text-[15px] font-semibold leading-7 text-[#145194] md:text-[17px] md:leading-8"
                        >
                          {b.quote}
                        </motion.p>

                        <div className="mt-7 space-y-4">
                          {b.items.map((it) => (
                            <motion.div
                              key={it.title}
                              variants={BLOCK_CONTENT_ITEM_VARIANTS}
                              custom={b.reverseOnDesktop ? -56 : 56}
                            >
                              <BenefitRow {...it} />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eaf4ff] px-4 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#7bc1ff]/22 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#fbc17b]/16 blur-3xl" />
        </div>
        <div className="section-content relative">
          <div className="mx-auto w-full max-w-[1115px] text-center">
            <p className="text-base font-extrabold uppercase  text-[#145194] md:text-2xl">
              SẴN SÀNG KIẾN TẠO DI SẢN CÙNG IPAG?
            </p>
            <Link
              href="/jobs"
              className="mt-6 inline-flex w-full max-w-[360px] items-center justify-center gap-2 rounded-full bg-[#145194] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_10px_22px_rgba(20,81,148,0.22)] transition hover:brightness-95 sm:text-base"
            >
              Khám phá cơ hội nghề nghiệp
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function TagLine({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <span className="inline-flex w-fit items-center rounded-[8px] bg-[#d9e6f2] px-4 py-2 text-[14px] font-semibold text-[#707070]">
        {text}
      </span>
    </div>
  );
}

function BenefitRow({ title, desc, icon: Icon }: BenefitItem) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#145194]/10 text-[#145194]">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-extrabold uppercase tracking-wide text-[#145194] md:text-[15px]">
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-[#707070] md:text-[15px] md:leading-6">{desc}</p>
      </div>
    </div>
  );
}
