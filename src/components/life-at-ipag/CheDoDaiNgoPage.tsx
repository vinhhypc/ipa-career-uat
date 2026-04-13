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

      <section className="relative -mt-2 overflow-hidden bg-[#0b1a27]">
        <div className="relative h-[240px] w-full md:h-[320px] lg:h-[380px]">
          <Image
            src="/life-at-ipag/che-do-dai-ngo/figma/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,30,0.65)_0%,rgba(3,16,30,0.55)_38%,rgba(3,16,30,0.25)_70%,rgba(3,16,30,0.15)_100%)]" />
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
              className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm md:mt-6 md:px-7 md:py-3 md:text-base"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Trao năng lực - Nhận tương lai
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fbf9f6_0%,#ffffff_70%)]">
        <div className="section-padding">
          <div className="section-content">
            <div className="mx-auto w-full max-w-[1115px]">
              {BLOCKS.map((b) => (
                <div key={b.key} className="py-10 md:py-14">
                  <SectionTitle title={b.heading} />
                  <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[460px_1fr] lg:items-center lg:gap-14">
                    <div
                      className={`relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] sm:max-w-[520px] lg:max-w-none ${
                        b.reverseOnDesktop ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="relative aspect-square lg:aspect-[4/3]">
                        <Image
                          src={b.imageSrc}
                          alt={b.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 460px"
                        />
                      </div>
                    </div>

                    <div className={b.reverseOnDesktop ? 'lg:order-1' : 'lg:order-2'}>
                      <TagLine text={b.tag} />
                      <p className="mt-5 text-[15px] font-semibold leading-7 text-[#145194] md:text-[17px] md:leading-8">
                        {b.quote}
                      </p>

                      <div className="mt-7 space-y-4">
                        {b.items.map((it) => (
                          <BenefitRow key={it.title} {...it} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            <p className="text-lg font-extrabold uppercase tracking-[1px] text-[#145194] md:text-2xl">
              SẴN SÀNG KIẾN TẠO DI SẢN CÙNG IPAG?
            </p>
            <Link
              href="/#apply"
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

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-20 bg-[#d6dbe3] md:w-28" aria-hidden />
      <h2 className="text-base font-extrabold uppercase tracking-[2px] text-[#292929] md:text-lg">
        {title}
      </h2>
      <span className="h-px w-20 bg-[#d6dbe3] md:w-28" aria-hidden />
    </div>
  );
}

function TagLine({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center lg:justify-start lg:text-left">
      <span className="hidden h-px w-10 bg-[#d6dbe3] sm:block" aria-hidden />
      <p className="text-[13px] font-semibold text-[#8a97a6]">{text}</p>
      <span className="hidden h-px w-10 bg-[#d6dbe3] sm:block" aria-hidden />
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
