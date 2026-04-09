'use client';

import { useState, type ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import homeCapChain from '@/assets/home/home-cap-chain.jpg';
import homeCapPeople from '@/assets/home/home-cap-people.jpg';
import homeCapTech from '@/assets/home/home-cap-tech.jpg';
import homeIdentity1 from '@/assets/home/home-identity-1.jpg';
import homeIdentity2 from '@/assets/home/home-identity-2.jpg';
import homeIdentity3 from '@/assets/home/home-identity-3.jpg';
import homeIdentity4 from '@/assets/home/home-identity-4.jpg';
import homeNews1 from '@/assets/home/home-news-1.jpg';
import homeNews2 from '@/assets/home/home-news-2.jpg';
import homeNews3 from '@/assets/home/home-news-3.jpg';
import homeNews4 from '@/assets/home/home-news-4.jpg';
import homeJourney from '@/assets/home/home-journey.png';

const IMG = {
  identity1: homeIdentity1,
  identity2: homeIdentity2,
  identity3: homeIdentity3,
  identity4: homeIdentity4,
  capPeople: homeCapPeople,
  capTech: homeCapTech,
  capChain: homeCapChain,
};

const ECOSYSTEM = [
  { sub: 'hệ sinh thái', name: 'IPAM' },
  { sub: 'hệ sinh thái', name: 'IPAC' },
  { sub: 'hệ sinh thái', name: 'IPAS' },
  { sub: 'hệ sinh thái', name: 'HEALTH – AnVie' },
  { sub: 'hệ sinh thái', name: 'HEALTH – VNDGo' },
  { sub: 'hệ sinh thái', name: 'GROWTH – PTI Care' },
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
      title: 'Năng lực con người',
      en: 'People & Organization',
      desc: 'Đồng bộ nhân tài xuyên các công ty thành viên, chia sẻ chuẩn mực văn hóa và lộ trình phát triển.',
      img: IMG.capPeople,
    },
    {
      title: 'Năng lực công nghệ',
      en: 'The Technology Engine',
      desc: 'Nền tảng dữ liệu và công cụ số dùng chung, giúp các đơn vị phối hợp liền mạch.',
      img: IMG.capTech,
    },
    {
      title: 'Năng lực chuỗi giá trị',
      en: 'The Value Chain Orchestrator',
      desc: 'Phối hợp chuỗi giá trị đa lĩnh vực tài chính, sức khỏe và phát triển bền vững.',
      img: IMG.capChain,
    },
  ],
} as const;

const NEWS: {
  id: number;
  title: string;
  cat: string;
  date: string;
  thumb: StaticImageData;
}[] = [
  {
    id: 1,
    title: 'IPAG mở rộng chương trình phát triển nhân tài 2026',
    cat: 'Tin nội bộ',
    date: '2026-03-12',
    thumb: homeNews1,
  },
  {
    id: 2,
    title: 'Góc nhìn thị trường: Xu hướng đầu tư và bảo vệ tài sản',
    cat: 'Kinh tế',
    date: '2026-02-28',
    thumb: homeNews2,
  },
  {
    id: 3,
    title: 'Văn hóa học hỏi và chia sẻ tại IPAG',
    cat: 'Văn hóa',
    date: '2026-02-05',
    thumb: homeNews3,
  },
  {
    id: 4,
    title: 'Hội thảo: Kiến tạo giá trị bền vững trong kỷ nguyên số',
    cat: 'Sự kiện',
    date: '2026-01-18',
    thumb: homeNews4,
  },
];

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
      <NewsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="section-padding relative min-h-screen overflow-hidden pb-0! pt-24!"
      style={{
        background: 'linear-gradient(126deg, rgb(0, 21, 45) 6%, rgb(20, 81, 148) 84%)',
      }}
    >
      {/* <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <div className="section-content relative z-10 flex flex-col gap-12 pb-28 lg:min-h-[calc(800px-5rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pb-28">
        <div id="apply" className="max-w-[900px] scroll-mt-28">
          <h1 className="mb-9 text-3xl font-extrabold uppercase leading-tight tracking-wide text-[#fbc17b] drop-shadow-md md:text-5xl md:leading-[1.15] md:tracking-[2px]">
            <span className="text-white">Khai phóng</span> năng lực,
            <br />
            <span className="text-white">kiến tạo </span>
            giá trị
            <span className="text-white"> bền vững</span>
          </h1>
          <p className="mb-8 max-w-[747px] text-base leading-[1.85] text-white md:text-lg">
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
            className="inline-flex h-[52px] w-full max-w-[276px] items-center justify-center gap-2 rounded-full px-3 text-lg font-bold text-[#474747] shadow-md transition hover:brightness-95 sm:w-[276px]"
            style={{
              background: 'linear-gradient(238deg, rgb(255,255,255) 34%, rgb(255,241,225) 103%)',
            }}
          >
            ỨNG TUYỂN NGAY
            <ArrowRight className="size-6" strokeWidth={2} />
          </Link>
        </div>

        <div className="flex w-full max-w-[488px] flex-col gap-8">
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
    <div className="relative shadow-lg shadow-black/15">
      <div className="flex items-center gap-7 rounded-[20px] border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.25)] px-6 py-7 backdrop-blur-md">
        <div className="flex size-[60px] shrink-0 items-center justify-center rounded-full bg-white/10">
          {deco}
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#fbc17b]">{badge}</p>
          <p className="text-2xl font-extrabold uppercase tracking-wide text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}

function PotentialIdentitySection() {
  return (
    <section
      id="life-at-ipag"
      className="scroll-mt-24 bg-[linear-gradient(6deg,#ffffff_12%,#fff2df_130%)] px-4 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="section-content">
        <div id="we-look-for" className="mb-14 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-8">
          <div className="w-full max-w-[420px] text-center lg:text-left">
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

          <div className="w-full max-w-[420px] text-center lg:text-right">
            <div className="mb-3 flex items-center justify-center gap-3 lg:justify-end">
              <span className="h-px w-[125px] bg-[#59798f]" />
              <SectionDiamond />
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-[1px] text-[#292929] uppercase md:text-[40px] md:leading-[60px]">
              KHAI PHÓNG GIÁ TRỊ
            </h2>
          </div>
        </div>

        <p className="text-center text-lg tracking-[0.48px] text-[#474747] md:text-2xl">
          <span className="font-bold leading-[40px] text-[#292929]">IPAG </span>
          <span className="font-medium leading-[40px] text-[#707070]">
            đồng hành cùng bạn làm chủ lộ trình chuyển hóa tiềm năng
          </span>
          <span className="font-medium leading-[40px] text-[#474747]">.</span>
        </p>
        <div className="mx-auto mb-20 mt-8 h-px max-w-full bg-gradient-to-r from-transparent via-[#d0d5dd] to-transparent" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={IMG.identity1} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              <span className="absolute bottom-3 left-3 rounded bg-black/45 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Integration
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={IMG.identity2} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              <span className="absolute bottom-3 left-3 rounded bg-black/45 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Partnership
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={IMG.identity3} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              <span className="absolute bottom-3 left-3 rounded bg-black/45 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Accountability
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={IMG.identity4} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              <span className="absolute bottom-3 left-3 rounded bg-black/45 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                Greatness
              </span>
            </div>
          </div>
          <div className="lg:pl-7">
            <h2 className="mb-4 text-3xl font-bold tracking-[1px] text-[#292929] uppercase md:text-[40px] md:leading-[60px]">
              BẢN SẮC IPAG
            </h2>
            <p className="mb-8 text-base leading-7 text-[#474747] md:text-[18px] md:leading-7">
              Tại IPAG, <span className="font-bold">mọi chuyển đổi</span> bắt đầu từ chính{' '}
              <span className="font-bold">phẩm chất</span> của con người IPAG
            </p>
            <ul className="space-y-6">
              {IDENTITY_PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] p-3">
                      <Icon className="size-6 text-[#145194]" />
                    </div>
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2 uppercase">
                        <span className="text-xl font-bold leading-7 text-[#292929] md:text-2xl">{p.title}</span>
                        <span className="text-xs text-[#707070]">• {p.subtitle}</span>
                      </div>
                      <p className="text-sm leading-6 text-[#474747] md:text-base">{p.body}</p>
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
    <section className="section-padding bg-[#f8fafc]">
      <div className="section-content">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight text-[#0a1628] md:text-4xl">
            THE IPAG IDENTITY
          </h2>
          <p className="text-base text-[#334155]">
            Gia nhập IPAG, bạn bước vào một hành trình phát triển có định hướng
          </p>
        </div>
        <div className="mx-auto max-w-5xl relative">
         <Image src={homeJourney} alt="home journey" width={200} className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
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
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a1628] md:text-3xl">
              THE IPAG IDENTITY
            </h2>
            <p className="mt-3 text-base text-[#334155]">Nơi năng lực hội tụ</p>
          </div>
          <div className="inline-flex rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-1">
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
              className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image src={c.img} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold text-[#0a1628]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#59798f]">{c.en}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#475569]">{c.desc}</p>
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
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #00152d 0%, #145194 55%, #0a2540 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#fbc17b]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#7bc1ff]/10 blur-3xl" />
      </div>
      <div className="section-content relative text-center">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-snug text-white md:text-4xl">
          Sẵn sàng đồng hành cùng IPAG trên hành trình kiến tạo giá trị?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
          Khám phá vị trí phù hợp với bạn và kết nối với đội ngũ tuyển dụng.
        </p>
        <Link
          href="#apply"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold uppercase tracking-wide text-[#002b5b] transition hover:bg-[#fbc17b]"
        >
          ỨNG TUYỂN NGAY
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="section-padding scroll-mt-24 bg-bg-primary">
      <div className="section-content">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl md:leading-tight">
            Tin tức
            <br className="md:hidden" /> kinh tế
          </h2>
          <Link
            href="#apply"
            className="mx-auto mt-8 inline-flex h-12 w-full max-w-[276px] items-center justify-center gap-2 rounded-full text-lg font-bold text-[#474747] shadow-md sm:w-[276px]"
            style={{
              background: 'linear-gradient(238deg, rgb(255,255,255) 34%, rgb(255,241,225) 103%)',
            }}
          >
            ỨNG TUYỂN NGAY
            <ArrowRight className="size-6" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((n) => (
            <Link
              key={n.id}
              href="#"
              className="group block overflow-hidden rounded-lg bg-white/5 transition hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={n.thumb}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex justify-between gap-2 text-xs text-[#59798f]">
                  <span className="rounded bg-[#59798f]/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#9cc4d8]">
                    {n.cat}
                  </span>
                  <span className="text-white/50">{n.date}</span>
                </div>
                <h3 className="text-sm font-medium leading-snug text-white group-hover:text-[#fbc17b] md:text-base">
                  {n.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-[#fbc17b]">
                  Xem chi tiết <ArrowRight className="ml-1 inline size-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
