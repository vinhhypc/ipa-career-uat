'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Check,
  ChevronDown,
  Handshake,
  Link2,
  MessageSquare,
  Search,
  Tablet,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';

const IPAG_CORE = [
  {
    key: 'i',
    letter: 'I',
    en: 'Integration',
    vi: 'Năng lực tích hợp',
    body: 'Người IPAG có tư duy hệ thống, biết kết nối Con người, Công nghệ và Chuỗi giá trị để tạo ra sức mạnh cộng hưởng.',
  },
  {
    key: 'p',
    letter: 'P',
    en: 'Partnership',
    vi: 'Tư duy đối tác',
    body: 'Người IPAG là người đồng hành, cùng hiện diện, cùng thực thi và cùng kiến tạo giá trị với đối tác.',
  },
  {
    key: 'a',
    letter: 'A',
    en: 'Accountable',
    vi: 'Chuyển đổi có trách nhiệm',
    body: 'Người IPAG trực tiếp hành động, đo lường bằng kết quả thực chất và chịu trách nhiệm đến cùng cho những gì mình tạo ra.',
  },
  {
    key: 'g',
    letter: 'G',
    en: 'Greatness',
    vi: 'Kiến tạo giá trị lâu dài',
    body: 'Người IPAG nghĩ dài hạn, không thỏa hiệp với giá trị ngắn hạn và kiên định xây dựng những điều có ý nghĩa bền lâu.',
  },
] as const;

type HabitTone = 'warm' | 'blue';

const HABITS: {
  title: string;
  body: string;
  icon: LucideIcon;
  tone: HabitTone;
}[] = [
  {
    title: 'Thẳng thắn và tức thì',
    body: 'Chúng tôi không đợi đến kỳ đánh giá. Tại IPAG, feedback xảy ra ngay khi cần thiết với tinh thần xây dựng và mục đích rõ ràng: cùng nhau tiến bộ.',
    icon: MessageSquare,
    tone: 'warm',
  },
  {
    title: 'Đồng hành, không tự “bơi”',
    body: 'Mentor riêng biệt, Welcome kit tinh tế và lịch 1-1 sẵn sàng từ ngày đầu tiên. Bạn sẽ luôn được dẫn dắt để hòa nhập nhanh nhất với hệ sinh thái.',
    icon: Handshake,
    tone: 'warm',
  },
  {
    title: 'Học từ thực tế',
    body: 'Sau mỗi dự án là khoảng lặng để nhìn lại. Chúng tôi không truy cứu lỗi lầm, chúng tôi đúc rút bài học để không lặp lại sai lầm cũ.',
    icon: Tablet,
    tone: 'warm',
  },
  {
    title: 'Minh bạch tuyệt đối',
    body: 'Lãnh đạo chia sẻ trực diện về thực trạng tổ chức. Tại đây, không có câu hỏi nào là "không nên hỏi" — mọi thắc mắc đều được trân trọng.',
    icon: Search,
    tone: 'blue',
  },
  {
    title: 'Tái kết nối mục đích',
    body: 'Những chuyến đi về với thiên nhiên (Yên Tử, Hòa Bình...) không phải để team-building hình thức, mà để chúng ta tái kết nối với nhau và với mục đích lớn lao.',
    icon: Link2,
    tone: 'blue',
  },
  {
    title: 'Vinh danh bằng câu chuyện',
    body: 'Thành công tại IPAG được ghi nhận bằng những câu chuyện truyền cảm hứng. Điều bạn làm được cộng đồng ghi nhớ và trân trọng — không chỉ dừng lại ở phần thưởng.',
    icon: Award,
    tone: 'blue',
  },
];

const TAC_STEPS = [
  { title: 'Transform (Chuyển hóa)', body: 'Dám nhìn nhận để lột xác' },
  { title: 'Amplify (Khuếch đại)', body: 'Tập trung vào thế mạnh cốt lõi' },
  { title: 'Continuation (Tiếp nối)', body: 'Giữ gìn di sản bền vững' },
] as const;

const CAT_STEPS = [
  { title: 'Connect', body: 'Kết nối chân thành' },
  { title: 'Add Values', body: 'Cộng hưởng giá trị' },
  { title: 'Transfer Excellence', body: 'Truyền giao sự xuất sắc' },
] as const;

function LetterBadge({ letter, active }: { letter: string; active: boolean }) {
  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-sm"
      style={{
        background: active
          ? 'linear-gradient(145deg, #0c71c7 0%, #013a72 100%)'
          : 'linear-gradient(145deg, #6cb3ff 0%, #145194 100%)',
      }}
    >
      {letter}
    </div>
  );
}

function JourneyColumn({
  acronym,
  subtitle,
  steps,
}: {
  acronym: string;
  subtitle: string;
  steps: readonly { title: string; body: string }[];
}) {
  return (
    <div className="w-full max-w-[520px]">
      <div>
        <p className="text-lg font-normal tracking-wide text-[#fbc17b] md:text-xl">{acronym}</p>
        <p className="mt-1 text-xl font-bold text-white md:text-2xl">{subtitle}</p>
      </div>
      <div className="mt-6 space-y-4">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-[14px] border border-white/12 bg-white/10 px-5 py-4 shadow-[0_10px_26px_rgba(0,0,0,0.10)] backdrop-blur-sm"
          >
            <p className="text-sm font-bold text-[#fbc17b] md:text-base">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CayNenXayNepPage() {
  const [openKey, setOpenKey] = useState<string>('i');

  const toggle = useCallback((key: string) => {
    setOpenKey((prev) => (prev === key ? '' : key));
  }, []);

  const activeCore = useMemo(() => {
    return IPAG_CORE.find((x) => x.key === openKey) ?? IPAG_CORE[0];
  }, [openKey]);

  const detail = useMemo(() => {
    const base = {
      image: '' as string,
      lead: activeCore.body,
      bullets: [] as string[],
      question: '' as string,
    };

    if (activeCore.key === 'i') {
      return {
        ...base,
        image: '/life-at-ipag/cay-nen-xay-nep/figma/integration.png',
        lead: 'Tại IPAG, chúng tôi không làm việc trong "ốc đảo". Mỗi cộng sự thực hành 3 bước kết nối:',
        bullets: [
          'Chia sẻ: Ai cần biết thông tin này?',
          'Cộng hưởng: Nguồn lực nào có thể dùng chung?',
          'Khuếch đại: Kết quả này đóng góp gì cho hệ sinh thái?',
        ],
        question: 'Đã kết nối Con người — Công nghệ — Chuỗi giá trị chưa?',
      };
    }

    return base;
  }, [activeCore]);

  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Life at IPAG', href: '/life-at-ipag?tab=cay-nen-xay-nep' },
          { label: 'Cấy nền — Xây nếp' },
        ]}
      />

      <section className="relative -mt-2 overflow-hidden bg-[#0b1a27]">
        <div className="relative h-[260px] w-full md:h-[320px] lg:h-[380px]">
          <Image
            src="/life-at-ipag/cay-nen-xay-nep/figma/hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,30,0.45)_0%,rgba(3,16,30,0.62)_35%,rgba(3,16,30,0.45)_70%,rgba(3,16,30,0.25)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
              className="text-2xl font-extrabold uppercase tracking-[2px] text-white drop-shadow-md md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cấy nền — Xây nếp
            </motion.h1>
            <motion.div
              className="relative mt-6 max-w-[640px] rounded-[14px] border border-white/25 bg-white/10 px-5 py-5 text-sm font-semibold leading-6 text-white backdrop-blur-sm md:px-8 md:py-6 md:text-base md:leading-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Văn hóa tại IPAG hiện hữu trong cách chúng tôi suy nghĩ - hành động mỗi ngày
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fbf9f6_0%,#ffffff_70%)] px-4 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="section-content">
          <div className="mx-auto grid w-full max-w-[1115px] gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            <div>
              <p className="text-lg font-extrabold uppercase tracking-[2px] text-[#292929] md:text-xl">
                Cấynền
              </p>
              <p className="mt-5 text-sm leading-6 text-[#6b7280] md:text-base md:leading-7">
                Tại IPAG, những giá trị cốt lõi được cấy sâu để trở thành nếp sống
              </p>
            </div>

            <div className="rounded-[24px] bg-[#eaf4ff] p-4 shadow-[0_10px_26px_rgba(0,0,0,0.08)] md:p-5">
              <div className="space-y-4">
                {IPAG_CORE.map((item) => {
                  const isOpen = openKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className={`overflow-hidden rounded-[22px] border shadow-[0_12px_30px_rgba(0,0,0,0.10)] ${
                        isOpen ? 'border-[#145194]/18 bg-[#f6fbff]' : 'border-white/50 bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(item.key)}
                        className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5 md:py-5"
                      >
                        <LetterBadge letter={item.letter} active={isOpen} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-[#8a97a6]">{item.en}</p>
                          <p className="mt-0.5 text-xl font-extrabold text-[#292929] md:text-2xl">
                            {item.vi}
                          </p>
                        </div>
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d6dbe3] bg-white text-[#145194]">
                          <ChevronDown
                            className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </span>
                      </button>

                      {isOpen ? (
                        <div className="border-t border-black/5 px-4 pb-5 pt-4 md:px-5 md:pb-6">
                          {detail.image ? (
                            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                              <div className="relative aspect-[21/9]">
                                <Image
                                  src={detail.image}
                                  alt=""
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 720px"
                                />
                              </div>
                            </div>
                          ) : null}

                          <p className="mt-4 text-sm leading-6 text-[#6b7280] md:text-base md:leading-7">
                            {detail.lead}
                          </p>

                          {detail.bullets.length ? (
                            <div className="mt-4 space-y-2.5">
                              {detail.bullets.map((b) => (
                                <div key={b} className="flex items-start gap-3">
                                  <Check className="mt-0.5 size-4 shrink-0 text-[#145194]" />
                                  <p className="text-sm font-medium leading-6 text-[#292929] md:text-base">
                                    {b}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {detail.question ? (
                            <div className="mt-5 border-t border-black/5 pt-4">
                              <div className="flex items-start gap-3 text-[#145194]">
                                <Zap className="mt-0.5 size-4 shrink-0" />
                                <p className="text-sm font-semibold leading-6 md:text-base">
                                  {detail.question}
                                </p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Xây nếp — thói quen */}
      <section
        className="relative overflow-hidden px-4 py-14 md:px-12 md:py-20 lg:px-20"
        style={{
          background: 'linear-gradient(190deg, #ffffff 21%, #fef6eb 94%)',
        }}
      >
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#7bc1ff]/10 blur-3xl" />
        <div className="section-content relative grid gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-[3px] text-[#292929] md:text-[40px] md:leading-[60px]">
              Xây nếp
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#474747] md:text-2xl md:leading-8">
              Năng lực chuyển hóa thành bản năng.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HABITS.map((h) => {
              const Icon = h.icon;
              const warm =
                h.tone === 'warm'
                  ? 'border border-[#fde9cf] bg-[#fff7ed] text-[#292929]'
                  : 'border border-[#0c4a8a] bg-[linear-gradient(88deg,#013A72_-3%,#0C71C7_85%)] text-white';
              return (
                <article
                  key={h.title}
                  className={`flex flex-col rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-7 ${warm}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl md:size-[52px] ${
                        h.tone === 'warm'
                          ? 'bg-white text-[#0c71c7] shadow-sm'
                          : 'bg-white/15 text-white'
                      }`}
                    >
                      <Icon className="size-5 md:size-6" strokeWidth={2} />
                    </span>
                    <h3 className="text-base font-bold leading-snug md:text-lg">{h.title}</h3>
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed md:text-base ${
                      h.tone === 'warm' ? 'text-[#474747]' : 'text-white/95'
                    }`}
                  >
                    {h.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hành trình chuyển hoá */}
      <section className="relative overflow-hidden px-4 py-16 md:px-12 md:py-24 lg:px-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-61deg, #022a36 6%, #0a3b74 108%)',
          }}
        />
        <div className="section-content relative z-[1]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-[2px] text-white drop-shadow-sm md:text-[40px] md:leading-[60px]">
              Hành trình chuyển hoá
            </h2>
            <p className="mt-3 text-base text-white/90 md:text-xl">
              Sự trưởng thành không đo bằng chức danh, mà bằng tác động
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1115px] gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
            <JourneyColumn acronym="TAC" subtitle="Chuyển hoá bản thân" steps={TAC_STEPS} />
            <JourneyColumn acronym="CAT" subtitle="Lan toả hệ sinh thái" steps={CAT_STEPS} />
          </div>
        </div>
      </section>

      {/* Trích dẫn + tin tức */}
      <section
        className="relative overflow-hidden px-4 py-16 md:px-12 md:py-20 lg:px-20"
        style={{
          background: 'linear-gradient(-4deg, rgba(0,116,162,0.2) 12%, rgba(170,231,255,0.2) 94%)',
        }}
      >
        <div className="section-content relative">
          <div className="relative mx-auto max-w-3xl rounded-[20px] bg-white/55 px-4 py-10 text-center shadow-[0_10px_26px_rgba(0,0,0,0.08)] backdrop-blur-sm md:px-12">
            <span
              className="absolute left-2 top-4 text-4xl text-[#2e5f97] opacity-80 md:left-10 md:top-6 md:text-5xl"
              aria-hidden
            >
              “
            </span>
            <span
              className="absolute bottom-4 right-2 text-4xl text-[#2e5f97] opacity-80 md:bottom-6 md:right-10 md:text-5xl"
              aria-hidden
            >
              ”
            </span>
            <p className="text-xl font-bold italic leading-relaxed text-[#474747] md:text-[34px] md:leading-snug">
              Cấy nền vững thì nếp mới bền.
              <br />
              Nếp bền thì người mới lớn
            </p>
            <div
              className="pointer-events-none absolute inset-4 rounded-[16px] border border-[rgba(46,95,151,0.35)] md:inset-8"
              aria-hidden
            />
          </div>
        </div>
      </section>
    </div>
  );
}
