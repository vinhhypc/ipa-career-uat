'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import homeCapChain from '@/assets/home/home-cap-chain.jpg';
import homeCapGrowth from '@/assets/home/home-cap-growth.jpg';
import homeCapHealth from '@/assets/home/home-cap-health.jpg';
import homeCapPeople from '@/assets/home/home-cap-people.jpg';
import homeCapTech from '@/assets/home/home-cap-tech.jpg';
import homeCapWealth from '@/assets/home/home-cap-wealth.jpg';
import homeIdentity1 from '@/assets/home/home-identity-1.jpg';
import homeIdentity2 from '@/assets/home/home-identity-2.jpg';
import homeIdentity3 from '@/assets/home/home-identity-3.jpg';
import homeIdentity4 from '@/assets/home/home-identity-4.jpg';
import homeJourney from '@/assets/home/home-journey.png';
import homeJourney2 from '@/assets/home/home-journey-2.png';
import homeBanner from '@/assets/home/banner.png';

const IMG = {
  identity1: homeIdentity1,
  identity2: homeIdentity2,
  identity3: homeIdentity3,
  identity4: homeIdentity4,
  capPeople: homeCapPeople,
  capTech: homeCapTech,
  capChain: homeCapChain,
  capHealth: homeCapHealth,
  capWealth: homeCapWealth,
  capGrowth: homeCapGrowth,
  banner: homeBanner,
  journey: homeJourney,
  journey2: homeJourney2,
};

const ECOSYSTEM = [
  { sub: 'hệ sinh thái', name: 'IPAM' },
  { sub: 'hệ sinh thái', name: 'IPAC' },
  { sub: 'hệ sinh thái', name: 'IPAS' },
  { sub: 'hệ sinh thái', name: 'HEALTH - AnVie' },
  { sub: 'hệ sinh thái', name: 'HEALTH - VNDGo' },
  { sub: 'hệ sinh thái', name: 'GROWTH - PTI Care' },
] as const;

const IDENTITY_PILLARS = [
  {
    title: 'Integration',
    subtitle: 'The Connector',
    body: 'Người IPAG có tư duy hệ thống, biết kết nối Con người, Công nghệ và Chuỗi giá trị để tạo ra sức mạnh cộng hưởng.',
    icon: Network,
  },
  {
    title: 'Partnership',
    subtitle: 'The Co-creator',
    body: 'Người IPAG là người đồng hành, cùng hiện diện, cùng thực thi và cùng kiến tạo giá trị với đối tác.',
    icon: Sparkles,
  },
  {
    title: 'Accountability',
    subtitle: 'The Owner',
    body: 'Người IPAG trực tiếp hành động, đo lường bằng kết quả thực chất và chịu trách nhiệm đến cùng cho những gì mình tạo ra.',
    icon: ShieldCheck,
  },
  {
    title: 'Greatness',
    subtitle: 'The Long-term Builder',
    body: 'Người IPAG nghĩ dài hạn, không thỏa hiệp với giá trị ngắn hạn và kiên định xây dựng những điều có ý nghĩa bền lâu.',
    icon: Star,
  },
] as const;

const CAPABILITIES = {
  nenTang: [
    {
      title: 'Năng lực con người',
      en: 'People & Organization',
      desc: 'Xây dựng và phát triển nguồn nhân lực - chiến lược nhân tài, đào tạo, văn hóa tổ chức.',
      img: IMG.capPeople,
    },
    {
      title: 'Năng lực công nghệ',
      en: 'The Technology Engine',
      desc: 'Hạ tầng kỹ thuật số, nền tảng ERP, AI, data - xương sống vận hành số của hệ sinh thái.',
      img: IMG.capTech,
    },
    {
      title: 'Năng lực chuỗi giá trị',
      en: 'The Value Chain Orchestrator',
      desc: 'Quản trị chuỗi cung ứng, logistics và giá trị xuyên suốt - tối ưu hóa dòng chảy hệ sinh thái.',
      img: IMG.capChain,
    },
  ],
  heSinhThai: [
    {
      title: 'Health - Sức khỏe',
      en: 'ANVIE',
      desc: 'Lối sống lành mạnh, tiêu dùng xanh, trải nghiệm sống cân bằng.',
      img: IMG.capHealth,
    },
    {
      title: 'Wealth - Thịnh vượng',
      en: 'VNDGO',
      desc: 'Nền tảng tài chính cho đại chúng từ chứng khoán đến quản lý tài sản số.',
      img: IMG.capWealth,
    },
    {
      title: 'Growth - Phát triển & bảo vệ',
      en: 'PTICARE',
      desc: 'Bảo hiểm, tương hỗ và giải pháp bảo vệ tài chính - đồng hành trên mọi chặng đường.',
      img: IMG.capGrowth,
    },
  ],
} as const;

function SectionDiamond() {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" aria-hidden>
      <path
        d="M10.4535 0C10.4535 0 10.0371 8.33346 0 11.933C0 11.933 8.21662 13.5586 10.4535 24C10.4535 24 11.5653 14.5768 21 11.933C21 11.933 12.0614 9.80275 10.4535 0Z"
        className="fill-[#59798f]"
      />
    </svg>
  );
}

export default function Home() {
  const [capTab, setCapTab] = useState<'nenTang' | 'heSinhThai'>('nenTang');

  return (
    <div className="bg-white">
      <HeroSection />
      <PotentialIdentitySection />
      <JourneySection />
      <CapabilitiesSection capTab={capTab} setCapTab={setCapTab} />
      <MidCtaBand />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="section-padding relative min-h-[800px] overflow-hidden bg-cover bg-center bg-no-repeat px-0! pb-0! pt-0! md:min-h-screen"
      style={{
        backgroundImage: `url(${homeBanner.src})`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(100.57deg, rgba(0, 21, 45, 0.42) 6.31%, rgba(20, 81, 148, 0.30) 83.68%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#145194]/8" />

      <div className="section-content relative z-10 flex flex-col gap-8 px-5 pb-8 pt-[120px] md:gap-12 md:px-12 md:pb-28 lg:min-h-[calc(800px-5rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
        
        <div id="apply" className="scroll-mt-28 text-center lg:max-w-[900px] lg:text-left">
          <h1 className="mb-5 text-2xl font-extrabold uppercase leading-[40px] tracking-[1px] text-[#fbc17b] drop-shadow-md md:mb-9 md:text-5xl md:leading-[1.15] md:tracking-[2px]">
            <span className="text-white">Khai phóng</span> năng lực,
            <br />
            <span className="text-white">kiến tạo </span>
            giá trị
            <span className="text-white"> bền vững</span>
          </h1>
          <p className="mb-5 text-sm leading-[22px] tracking-[0.14px] text-white md:mb-8 md:max-w-[747px] md:text-lg md:leading-[1.85]">
            <span className="font-medium">Tại IPAG, chúng tôi tìm kiếm những </span>
            <span className="font-bold">cộng sự</span>
            <span className="font-medium">
              {' '}
              sẵn sàng dấn thân vào những thử thách — để cùng{' '}
            </span>
            <span className="font-bold">trưởng thành</span>
            <span className="font-medium">, kiến tạo </span>
            <span className="font-bold">giá trị bền vững</span>
            <span className="font-medium"> cho chính mình, tổ chức và cộng đồng.</span>
          </p>
          <Link
            href="#news"
            className="inline-flex h-10 w-[197px] items-center justify-center gap-2 rounded-full px-3 text-sm font-bold text-[#474747] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:brightness-95 md:h-[52px] md:w-full md:max-w-[276px] md:text-lg"
            style={{
              background: 'linear-gradient(238deg, rgb(255,255,255) 34%, rgb(255,241,225) 103%)',
            }}
          >
            ỨNG TUYỂN NGAY
            <ArrowRight className="size-6" strokeWidth={2} />
          </Link>
        </div>

        <div className="flex w-full flex-col gap-3 md:max-w-[488px] md:gap-8">
          <ProgramGlassCard
            badge="Fresh — 2 năm"
            title="MA PROGRAM"
            deco={<GraduationCap className="size-8 text-white/90" />}
          />
          <ProgramGlassCard
            badge="Specialist 3–7 năm"
            title="PROFESSIONAL FORCE"
            deco={<Briefcase className="size-8 text-white/90" />}
          />
          <ProgramGlassCard
            badge="Senior 8+ năm - C-level"
            title="EXECUTIVE SERVE"
            deco={<Star className="size-8 text-white/90" />}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden overflow-hidden border-t border-white/40 py-6 md:block">
        <div className="section-content">
          <div className="animate-[ecosystem-scroll_24s_linear_infinite] flex w-max items-center whitespace-nowrap">
            {[...ECOSYSTEM, ...ECOSYSTEM].map((item, i) => (
              <div key={`${item.name}-${i}`} className="mr-10 flex items-center gap-4 lg:mr-[95px]">
                <span className="text-[10px] font-normal uppercase tracking-[0.36em] text-white/40">
                  {item.sub}
                </span>
                <span className="text-lg font-normal text-white md:text-xl">{item.name}</span>
                <span className="size-2 rounded-full bg-white/20" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramGlassCard({
  badge,
  title,
  deco,
}: {
  badge: string;
  title: string;
  deco: ReactNode;
}) {
  return (
    <div className="relative shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
      <div className="relative flex items-center gap-3 rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.25)] px-[25px] py-[9px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[12px] md:gap-7 md:rounded-[20px] md:px-6 md:py-7 md:backdrop-blur-md">
        <div className="hidden size-[60px] shrink-0 items-center justify-center rounded-full bg-white/10 md:flex">
          {deco}
        </div>
        <div className="w-full">
          <p className="mb-0.5 text-[8px] font-bold uppercase leading-4 tracking-[1.2px] text-[#fbc17b] md:mb-2 md:text-xs md:tracking-[0.12em]">
            {badge}
          </p>
          <p className="text-sm font-bold uppercase leading-5 tracking-[1px] text-white md:text-2xl md:font-extrabold md:leading-normal md:tracking-wide">
            {title}
          </p>
        </div>
        <div className="pointer-events-none absolute right-2 top-0 opacity-10 md:hidden" aria-hidden>
          <GraduationCap className="size-12 text-white" />
        </div>
      </div>
    </div>
  );
}

function PotentialIdentitySection() {
  const imageLabelClass =
    'rounded bg-black/45 px-2 py-1 text-[14px] font-bold uppercase leading-5 tracking-wide text-white backdrop-blur-sm lg:text-base lg:leading-6';

  return (
    <section
      id="life-at-ipag"
      className="section-padding max-md:px-5 max-md:py-[44px]"
      style={{
        background: 'linear-gradient(9deg, #FFF 11.86%, #FFF2DF 130.41%)',
      }}
    >
      <div className="section-content">
        <div className="mb-5 flex w-full flex-col items-center gap-5 lg:hidden">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[20px] font-bold leading-[26px] tracking-[1px] text-[#292929] uppercase">
              NHẬN DIỆN NĂNG LỰC
            </h2>
            <h2 className="text-[20px] font-bold leading-[26px] tracking-[1px] text-[#292929] uppercase">
              KHAI PHÓNG GIÁ TRỊ
            </h2>
          </div>
          <div className="relative flex size-[188px] shrink-0 items-center justify-center rounded-full border border-[#b8d2ea] bg-white text-[62px] font-black leading-none text-[#003b7a] shadow-[0_0_0_6px_rgba(188,214,238,0.28)]">
            IPAG
          </div>
        </div>

        <div
          id="we-look-for"
          className="mb-14 hidden flex-col items-center justify-between gap-8 lg:flex lg:flex-row lg:gap-8"
        >
          <div className="w-full text-center lg:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
              <SectionDiamond />
              <span className="h-px w-[125px] bg-[#59798f]" />
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-[1px] text-[#292929] uppercase md:text-[40px] md:leading-[60px]">
              NHẬN DIỆN NĂNG LỰC
            </h2>
          </div>

          <div className="relative flex size-[188px] shrink-0 items-center justify-center rounded-full border border-[#b8d2ea] bg-white text-[62px] font-black leading-none text-[#003b7a] shadow-[0_0_0_6px_rgba(188,214,238,0.28)] md:size-[256px] md:text-[72px]">
            IPAG
          </div>

          <div className="w-full text-center lg:text-right">
            <div className="mb-3 flex items-center justify-center gap-3 lg:justify-end">
              <span className="h-px w-[125px] bg-[#59798f]" />
              <SectionDiamond />
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-[1px] text-[#292929] uppercase md:text-[40px] md:leading-[60px]">
              KHAI PHÓNG GIÁ TRỊ
            </h2>
          </div>
        </div>

        <p className="text-center text-lg tracking-[0.48px] text-[#474747] max-md:text-[14px] max-md:leading-[22px] max-md:tracking-[0.28px] md:text-2xl">
          <span className="font-bold text-[#292929] max-md:leading-[22px] md:leading-[40px]">IPAG </span>
          <span className="font-medium text-[#707070] max-md:leading-[22px] md:leading-[40px]">
            đồng hành cùng bạn làm chủ lộ trình chuyển hóa tiềm năng
          </span>
          <span className="font-medium text-[#474747] max-md:leading-[22px] md:leading-[40px]">.</span>
        </p>
        <div className="mx-auto mb-20 mt-5 h-px max-w-full bg-gradient-to-r from-transparent via-[#d0d5dd] to-transparent max-md:mb-8 max-md:mt-5 md:mt-8" />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-5">
          <div className="relative flex w-full gap-4">
            <div className="flex min-w-0 flex-1 flex-col items-end gap-4">
              <div className="relative size-[160px] shrink-0 overflow-hidden rounded-xl lg:size-[240px] lg:rounded-2xl">
                <Image
                  src={IMG.identity1}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 160px, 240px"
                />
                <span className={`absolute bottom-2 left-3 lg:bottom-3 ${imageLabelClass}`}>Integration</span>
              </div>
              <div className="relative size-[140px] shrink-0 overflow-hidden rounded-xl lg:size-[210px] lg:rounded-2xl">
                <Image
                  src={IMG.identity3}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 140px, 210px"
                />
                <span className={`absolute bottom-2 left-3 lg:bottom-3 ${imageLabelClass}`}>Accountability</span>
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4 pt-4 lg:pt-6">
              <div className="relative size-[140px] shrink-0 overflow-hidden rounded-xl lg:size-[210px] lg:rounded-2xl">
                <Image
                  src={IMG.identity2}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 140px, 210px"
                />
                <span className={`absolute bottom-2 left-3 lg:bottom-3 ${imageLabelClass}`}>Partnership</span>
              </div>
              <div className="relative size-[160px] shrink-0 overflow-hidden rounded-xl lg:size-[240px] lg:rounded-2xl">
                <Image
                  src={IMG.identity4}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 160px, 240px"
                />
                <span className={`absolute bottom-2 left-3 lg:bottom-3 ${imageLabelClass}`}>Greatness</span>
              </div>
            </div>
          </div>
          <div className="text-center lg:pl-7 lg:text-left">
            <h2 className="mb-4 text-3xl font-bold tracking-[1px] text-[#292929] uppercase max-md:mb-2 max-md:text-center max-md:text-[20px] max-md:leading-8 md:text-[40px] md:leading-[60px]">
              BẢN SẮC IPAG
            </h2>
            <p className="mb-8 text-base leading-7 text-[#474747] max-md:text-center max-md:text-[14px] max-md:leading-5 md:text-[18px] md:leading-7">
              Tại IPAG, <span className="font-bold">mọi chuyển đổi</span> bắt đầu từ chính{' '}
              <span className="font-bold">phẩm chất</span> của con người IPAG
            </p>
            <ul className="space-y-4 md:space-y-6">
              {IDENTITY_PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex gap-2 md:gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] p-1.5 md:size-12 md:p-3">
                      <Icon className="size-4 text-[#145194] md:size-6" />
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="mb-1 flex flex-col items-start gap-0 uppercase md:flex-row md:flex-wrap md:items-center md:gap-2">
                        <span className="text-[16px] font-bold leading-[26px] text-[#292929] md:text-2xl md:leading-7">
                          {p.title}
                        </span>
                        <span className="text-[10px] leading-4 text-[#707070] normal-case md:text-xs">
                          <span className="md:hidden">{p.subtitle}</span>
                          <span className="hidden md:inline">• {p.subtitle}</span>
                        </span>
                      </div>
                      <p className="text-[14px] leading-[22px] text-[#474747] md:text-base md:leading-6">
                        {p.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section-padding">
      <div className="section-content">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight text-[#0a1628] md:text-4xl">
            HÀNH TRÌNH KHAI PHÓNG
          </h2>
          <p className="text-base text-[#334155]">
            Gia nhập IPAG, bạn bước vào một hành trình phát triển có định hướng
          </p>
        </div>
        <div className="flex justify-center">
         <Image src={homeJourney} alt="home journey" width={1024} className="hidden md:block object-cover w-[1024px]"  />
         <Image src={homeJourney2} alt="home journey" width={1024} className="block md:hidden object-cover w-full"  />
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection({
  capTab,
  setCapTab,
}: {
  capTab: 'nenTang' | 'heSinhThai';
  setCapTab: (t: 'nenTang' | 'heSinhThai') => void;
}) {
  const items = CAPABILITIES[capTab];
  return (
    <section className="section-padding bg-white">
      <div className="section-content">
        <div className="mb-13 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="w-full text-center md:w-auto md:text-left">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a1628] md:text-3xl">
              Nền tảng khai phóng
            </h2>
            <p className="mt-3 text-base text-[#334155]">Nơi năng lực hội tụ</p>
          </div>
          <div className="inline-flex shrink-0 rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-1">
            <button
              type="button"
              onClick={() => setCapTab('nenTang')}
              className={`rounded-full px-8 py-2 text-sm font-medium transition ${
                capTab === 'nenTang' ? 'bg-[#002b5b] text-white shadow' : 'text-[#475569]'
              }`}
            >
              Nền tảng
            </button>
            <button
              type="button"
              onClick={() => setCapTab('heSinhThai')}
              className={`rounded-full px-8 py-2 text-sm font-medium transition ${
                capTab === 'heSinhThai' ? 'bg-[#002b5b] text-white shadow' : 'text-[#475569]'
              }`}
            >
              Hệ sinh thái
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden bg-white transition rounded-[32px] shadow-[0_4px_16px_rgba(7,7,7,0.13)]"
            >
              <div className={`relative aspect-16/9`}>
                <Image src={c.img} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="px-7 pt-5 pb-10">
                <h3 className="font-bold text-2xl leading-8 text-[#292929]">
                  {c.title}
                </h3>
                <p
                  className="mt-2 text-sm tracking-[0.08em] font-light uppercase text-[#292929]"
                >
                  {c.en}
                </p>
                <p className="mt-5 leading-relaxed text-base text-[#474747]">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidCtaBand() {
  return (
   <>
      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(341deg, rgba(0, 116, 162, 0.20) 11.61%, rgba(170, 231, 255, 0.20) 94.37%)' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-35 blur-[1px]"
          style={{ background: 'radial-gradient(circle at center, rgba(125,188,228,0.5) 0%, rgba(125,188,228,0) 72%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-35 blur-[1px]"
          style={{ background: 'radial-gradient(circle at center, rgba(125,188,228,0.5) 0%, rgba(125,188,228,0) 72%)' }}
        />
        <div className="section-content flex flex-col items-center">
          <div className="text-center">
            <h2 className="font-bold tracking-[0.4px] text-[#002b5b] text-[28px] leading-[1.35] md:text-[40px] md:leading-[56px]">
              Chọn lĩnh vực phù hợp để bắt đầu
              <br />
              hành trình <span className="text-[#de8f10]">kiến tạo giá trị.</span>
            </h2>
          </div>
          <Link
            href="#news"
            className="mt-6 inline-flex h-12 w-full max-w-[276px] items-center justify-center gap-2 rounded-full px-3 text-[18px] leading-[1.4] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition hover:brightness-95 sm:w-[276px]"
            style={{ background: 'linear-gradient(76.71deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)' }}
          >
            ỨNG TUYỂN NGAY
            <ArrowRight className="size-6" strokeWidth={2.2} />
          </Link>
        </div>
      </section></>
  );
}

