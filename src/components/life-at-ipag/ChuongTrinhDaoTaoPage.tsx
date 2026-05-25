'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';

const TRAINING_STATS = [
  { value: 110, suffix: '+', label: 'Chương trình đào tạo trong năm 2025' },
  { value: 18200, suffix: '+', label: 'Lượt CBNV tham gia' },
  { value: 60, suffix: '+', label: 'Đội ngũ giảng viên và chuyên gia nội bộ' },
  { value: 100, suffix: '%', label: 'Nhân sự mới được đào tạo hội nhập trong tuần đầu tiên' },
] as const;

const TRAINING_PROGRAM_TABS = [
  'Hội nhập',
  'Leadership',
  'Chuyên môn',
  'AI Ready',
  'Retreat',
] as const;

const TRAINING_PROGRAM_CONTENT: Record<
  (typeof TRAINING_PROGRAM_TABS)[number],
  { title: string; subtitle: string; body: string; image: string; imageAlt: string }
> = {
  'Hội nhập': {
    title: 'Đào tạo hội nhập',
    subtitle: 'Khởi đầu vững chắc · Kiến tạo tư duy nền tảng',
    body: 'Gia nhập IPAG không chỉ là bắt đầu một công việc mới, mà còn là\nbước vào một hệ sinh thái với những đặc trưng riêng biệt về tư duy,\nvăn hóa và cách vận hành.\n\nVì vậy, chương trình đào tạo hội nhập được xây dựng nhằm hỗ trợ các\nnhân sự mới nhanh chóng hòa nhập vào dòng chảy chung của tổ chức, thống nhất về tư duy, đồng thuận về tầm nhìn và hiểu đúng cách thức\nvận hành xuyên suốt toàn hệ sinh thái.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-tab-hoi-nhap.png',
    imageAlt: 'Đào tạo hội nhập tại IPAG',
  },
  Leadership: {
    title: 'Phát triển năng lực lãnh đạo',
    subtitle: 'Khơi dậy bản lĩnh · Kiến tạo tư duy chuyển hóa',
    body: 'Tại IPAG, chúng tôi chú trọng phát triển đội ngũ lãnh đạo không chỉ vững vàng về năng lực quản trị mà còn sâu sắc trong tư duy, đặc biệt là tư duy tỉnh thức — một yếu tố ngày càng quan trọng trong bối cảnh hiện nay.\n\nThông qua các chương trình đào tạo Leadership, chúng tôi đang từng bước xây dựng đội ngũ lãnh đạo có nền tảng kỹ năng vững chắc, có\nkhả năng gìn giữ và lan tỏa văn hóa tổ chức, dẫn dắt sự thay đổi và\nphát triển nhân tài bền vững trong dài hạn.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-tab-leadership.png',
    imageAlt: 'Chương trình đào tạo Leadership tại IPAG',
  },
  'Chuyên môn': {
    title: 'Đào tạo chuyên môn nghiệp vụ',
    subtitle: 'Nâng cao năng lực thực thi của tổ chức',
    body: 'Trong năm 2025, 60+ chương trình đào tạo chuyên môn nghiệp vụ,\ncác workshop & talkshow thực chiến đã được triển khai, với sự tham dự của hơn 2.820 cán bộ nhân viên tại các công ty trong hệ sinh thái.\nCác chương trình bao phủ nhiều lĩnh vực chức năng, góp phần củng cố năng lực thực thi, chuẩn hóa phương pháp làm việc và nâng cao\nchất lượng đầu ra ở từng bộ phận.\n\nỞ góc độ quản trị tri thức, đào tạo chuyên môn không chỉ lấp đầy\nkhoảng trống kỹ năng hiện tại mà còn tạo điều kiện để tri thức được\ntích lũy có hệ thống, lan tỏa ngang hàng và kế thừa qua các thế hệ nhân sự.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-tab-chuyen-mon.png',
    imageAlt: 'Đào tạo chuyên môn nghiệp vụ tại IPAG',
  },
  'AI Ready': {
    title: 'Định hướng AI Ready',
    subtitle: 'Sẵn sàng cho kỷ nguyên mới',
    body: 'Nhìn về tương lai, IPAG chủ động triển khai định hướng AI Ready nhằm giúp đội ngũ cán bộ nhân viên từng bước hình thành năng lực ứng dụng trí tuệ nhân tạo vào công việc một cách hiệu quả và có trách nhiệm.\n\nĐây không đơn thuần là một chương trình kỹ thuật, mà còn phản ánh\ncách nhìn chiến lược của Tập đoàn: AI là một năng lực mới của lực lượng lao động trong kỷ nguyên sắp tới. Vì vậy, việc trang bị năng lực này cho\nđội ngũ ngay từ hôm nay chính là một khoản đầu tư dài hạn, thể hiện\ntầm nhìn và khả năng chuẩn bị cho tương lai của tổ chức.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-tab-ai-ready.png',
    imageAlt: 'Định hướng AI Ready tại IPAG',
  },
  Retreat: {
    title: 'Chương trình Retreat',
    subtitle: 'Học sâu bằng cách sống trong đó',
    body: 'Có những chuyển đổi về tư duy và năng lực chỉ thực sự diễn ra khi con người có đủ không gian để dừng lại, tập trung và nhìn sâu.\n\nCác chương trình Retreat của IPAG được thiết kế như những \"khoảng lặng có chủ đích\", nơi mỗi thành viên tạm rời khỏi nhịp công việc thường ngày để cùng nhau đi sâu vào các chủ đề chiến lược trọng điểm trong 2–3 ngày.\n\nĐây là trải nghiệm học tập có chiều sâu, giúp đội ngũ trở về với tư duy mới, tầm nhìn mới và sự rõ ràng hơn cho những bước phát triển tiếp theo.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-tab-retreat.png',
    imageAlt: 'Chương trình Retreat tại IPAG',
  },
};

const VISION_PILLARS = [
  {
    number: '01',
    title: 'Hệ thống chương trình đào tạo toàn diện',
    description:
      'Theo nhiều lớp mục tiêu: từ xây dựng tư duy làm chủ sự nghiệp, đồng bộ nhận thức chung về tổ chức, nâng cao năng lực chuyên môn nghiệp vụ, phát triển năng lực lãnh đạo đến chuẩn bị cho những yêu cầu mới của tương lai..',
    diamond: 'bg-[#fba741]',
    blur: 'bg-[#faa243]',
  },
  {
    number: '02',
    title: 'Mô hình COE — Trung tâm Nguồn lực Xuất sắc',
    description:
      'Môi trường phụng sự nuôi dưỡng con người trưởng thành, nơi tri thức tập thể được tích lũy, kinh nghiệm được trao truyền, và các mối quan hệ nghề nghiệp được chuyển hóa thành năng lực tổ chức.',
    diamond: 'bg-[#ee8247]',
    blur: 'bg-[#ec8346]',
  },
] as const;

const COE_RESOURCE_CARDS = [
  {
    title: 'Sách hay',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/coe-open-book.svg',
    description:
      'Nguồn tri thức chất lượng cao, được chắt lọc từ\nthực tiễn tổ chức, bảo đảm tính ứng dụng, dễ tiếp cận và liên tục được cập nhật.',
  },
  {
    title: 'Thầy giỏi',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/coe-teacher.svg',
    description:
      'Những người có năng lực đồng hành, định hướng và nâng đỡ quá trình phát triển của người học, không chỉ dừng lại ở việc truyền đạt kiến thức.',
  },
  {
    title: 'Bạn tốt',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/coe-handshake.svg',
    description:
      'Một cộng đồng thực hành gần gũi, nơi mỗi cá nhân nhận được sự phản hồi chân thành, hỗ trợ đúng lúc và cùng nhau gìn giữ những giá trị chung.',
  },
] as const;

const IPAG_IDENTITY_CARDS = [
  {
    label: 'họ là ai',
    title: 'Đội ngũ giảng viên nội bộ',
    description:
      'Đội ngũ trực tiếp kiến tạo giá trị và dẫn dắt sự phát triển tại tập đoàn mỗi ngày.',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-identity-diversity.svg',
    bullets: [
      { strong: 'Lãnh đạo & Quản lý', rest: ' dày dạn kinh nghiệm.' },
      { strong: 'Gần 60 chuyên gia', rest: ' nội bộ tâm huyết.' },
      { strong: 'Người thực chiến', rest: ' tham gia vào các dự án tổ chức.' },
    ],
  },
  {
    label: 'Vai trò & hình thức đồng hành',
    title: 'Người đồng hành — Lan tỏa\ntinh thần học tập',
    description:
      'Đóng vai trò là người kết nối và lan tỏa tri thức thông qua các hình thức đào tạo đa dạng.',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-identity-handshake.svg',
    bullets: [
      { strong: 'Đào tạo', rest: ' tập trung' },
      { strong: 'Workshop', rest: ' chuyên sâu' },
      { strong: 'Coaching', rest: ' (khai vấn)' },
      { strong: 'Learning by Sharing', rest: ' (Chia sẻ).' },
    ],
  },
  {
    label: 'Giá trị mang lại cho người học',
    title: 'Truyền cảm hứng — Rút ngắn khoảng cách',
    description:
      'Nơi giúp người học khai phóng tư duy và chuyển hóa\nlý thuyết thành năng lực thực tế.',
    icon: '/life-at-ipag/chuong-trinh-dao-tao/figma/training-identity-tablet.svg',
    bullets: [
      { strong: 'Tư duy làm chủ & Bản lĩnh nghề nghiệp.', rest: '' },
      { strong: 'Thấu hiểu bối cảnh', rest: ' tổ chức sâu sắc.' },
      { strong: 'Giúp rút ngắn khoảng cách', rest: ' với thực tiễn.' },
      { strong: 'Bứt phá sự nghiệp', rest: ' cá nhân.' },
    ],
  },
] as const;

function DiamondStep({
  n,
  bg,
  blur,
  className,
}: {
  n: string;
  bg: string;
  blur: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex size-[56px] items-center justify-center md:size-[72px]">
        <div className="flex size-10 rotate-45 items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] md:size-12">
          <div
            className={`relative flex size-10 items-center justify-center rounded-xl md:size-12 ${bg}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-sm md:blur-[4px] ${blur}`}
              aria-hidden
            />
            <span className="-rotate-45 text-base font-extrabold leading-6 text-white md:text-lg md:leading-7">
              {n}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const TRAINING_STATS_OBSERVER_THRESHOLD = 0.35;
const TRAINING_COUNT_DURATION_MS = 2200;

// Renders the training programs landing page with a Figma-aligned hero and tabbed program content.
export default function ChuongTrinhDaoTaoPage() {
  const [activeTab, setActiveTab] = useState<(typeof TRAINING_PROGRAM_TABS)[number]>('Hội nhập');
  const currentProgram = useMemo(() => TRAINING_PROGRAM_CONTENT[activeTab], [activeTab]);
  const trainingStatsRef = useRef<HTMLDivElement | null>(null);
  const [hasStartedTrainingStats, setHasStartedTrainingStats] = useState(false);
  const [trainingStatsProgress, setTrainingStatsProgress] = useState(0);
  const numberFormatter = useMemo(() => new Intl.NumberFormat('vi-VN'), []);
  const animatedTrainingValues = useMemo(
    () => TRAINING_STATS.map((item) => Math.round(item.value * trainingStatsProgress)),
    [trainingStatsProgress],
  );

  useEffect(() => {
    const element = trainingStatsRef.current;
    if (!element || hasStartedTrainingStats) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setHasStartedTrainingStats(true);
        observer.disconnect();
      },
      { threshold: TRAINING_STATS_OBSERVER_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStartedTrainingStats]);

  useEffect(() => {
    if (!hasStartedTrainingStats) return;

    const durationMs = TRAINING_COUNT_DURATION_MS;
    const startAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 5;
      setTrainingStatsProgress(eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasStartedTrainingStats]);

  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Life at IPAG', href: '/life-at-ipag?tab=chuong-trinh-dao-tao' },
          { label: 'Chương trình đào tạo' },
        ]}
      />

      <section className="relative -mt-2 overflow-hidden">
        <div className="relative min-h-[360px] w-full md:min-h-[520px] lg:min-h-[636px]">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/hero-banner-45e0aa.png"
            alt="Đội ngũ IPAG trong chương trình đào tạo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(39,60,77,0)_0%,rgba(25,44,59,0.5)_7%,rgba(11,26,39,0.78)_24%,rgba(7,29,49,1)_51%,rgba(8,24,39,0.8)_76%,rgba(53,72,94,0.5)_96%,rgba(96,111,134,0)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 py-12 text-center md:gap-10 md:px-10 ">
            <motion.h1
              className="text-3xl font-bold uppercase leading-tight tracking-[0.04em] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:text-5xl lg:text-5xl lg:leading-[70px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline">Build People.</span>{' '}
              <span className="inline text-[#FBC17B]">Build Value</span>
            </motion.h1>
            <motion.div
              className="relative w-full max-w-[820px] rounded-[20px_80px_20px_20px] bg-[rgba(202,255,235,0.2)] px-5 py-6 backdrop-blur-sm md:px-10 md:py-12"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="pointer-events-none absolute bottom-[-2px] left-[-16px] hidden h-[166px] w-[527px] rounded-bl-[24px] border-b-2 border-l-2 border-[#FBC17B]/60 md:block" />
              <span className="pointer-events-none absolute right-[-16px] top-6 hidden h-[166px] w-[320px] rounded-tr-[24px] border-r-2 border-t-2 border-[#FBC17B]/60 md:block" />
              <span className="pointer-events-none absolute bottom-[-2px] left-0 h-[88px] w-[48%] rounded-bl-[18px] border-b-2 border-l-2 border-[#FBC17B]/60 md:hidden" />
              <span className="pointer-events-none absolute right-0 top-4 h-[72px] w-[35%] rounded-tr-[18px] border-r-2 border-t-2 border-[#FBC17B]/60 md:hidden" />
              <span className="relative mx-auto block max-w-[820px] whitespace-pre-line text-sm font-medium leading-7 tracking-[0.02em] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:text-xl md:leading-9 lg:text-2xl lg:leading-[38px]">
                IPAG không chỉ xây dựng một không gian học hỏi, mà đang từng bước kiến tạo một hệ
                sinh thái phát triển con người, nơi tri thức được tích lũy, sự dẫn dắt được tiếp nối
                và các mối quan hệ nghề nghiệp được chuyển hóa thành năng lực tổ chức.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(-56deg,rgba(2,42,54,1)_0%,rgba(10,59,116,1)_100%)] py-16 md:py-20">
        <div className="relative mx-auto xl:mx-0 px-4 md:px-12">
          <div
            ref={trainingStatsRef}
            className="mx-auto grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-[repeat(4,184px)] xl:justify-center xl:gap-16 2xl:gap-20"
          >
            {TRAINING_STATS.map((item, index) => (
              <article key={item.label} className="flex w-[184px] flex-col items-center gap-3">
                <div className="text-center text-3xl font-extrabold uppercase leading-[132%] text-[#FBC17B] tabular-nums md:text-4xl">
                  <span className="inline-flex items-baseline justify-center whitespace-nowrap">
                    <span>{numberFormatter.format(animatedTrainingValues[index] ?? 0)}</span>
                    <span>{item.suffix}</span>
                  </span>
                </div>
                <div
                  className={`whitespace-pre-line text-sm font-normal leading-[140%] tracking-[0.01em] text-white md:text-base ${
                    index === 1 ? 'text-left' : 'text-center'
                  }`}
                >
                  {item.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative  overflow-hidden bg-[linear-gradient(188deg,#FEF6EB_0%,#FFFFFF_97%)] py-16 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[380px] w-[980px] -translate-x-[68%] opacity-80 md:h-[480px] md:w-[1279px] md:-translate-x-[62%]">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/vision-decoration.svg"
            alt=""
            fill
            className="object-contain"
            sizes="(min-width: 768px) 1279px, 980px"
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-12 ">
          <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
            <motion.p
              className="text-sm uppercase tracking-[0.12em] text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45 }}
            >
              Tầm nhìn &amp; Mục tiêu
            </motion.p>
            <motion.h2
              className="mt-4 text-2xl font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-[#292929] md:text-5xl md:leading-[60px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="block md:mb-3">Phát triển nguồn nhân lực:</span>
              <span className="block xl:whitespace-nowrap">Xây nền tảng năng lực từ con người</span>
            </motion.h2>
            <motion.p
              className="mt-6 max-w-[1060px] text-sm leading-7 tracking-[0.01em] text-[#474747] md:text-base md:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Tại IPAG, chúng tôi kiên định theo đuổi triết lý{' '}
              <strong className="text-[#145194]">
                &quot;Empowering People to create Impact through Collaboration and Innovation&quot;
              </strong>{' '}
              — coi phát triển con người là một <strong>lựa chọn chiến lược</strong>, điều kiện để
              tăng trưởng bền vững xảy ra.
            </motion.p>
            <div className="mt-8 h-0.5 w-[120px] rounded-full bg-[#145194]" />
            <motion.p
              className="mt-6 text-sm  leading-7 tracking-[0.01em] text-gray-600 "
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Triết lý này được hiện thực hóa thông qua hai trụ cột trọng yếu:
            </motion.p>
          </div>

          <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {VISION_PILLARS.map((pillar, index) => (
              <motion.article
                key={pillar.number}
                className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_18px_40px_rgba(18,38,63,0.10)] ring-1 ring-black/5 md:rounded-[32px]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[6px] bg-[#145194]"
                  aria-hidden
                />
                <DiamondStep
                  n={pillar.number}
                  bg={pillar.diamond}
                  blur={pillar.blur}
                  className="absolute left-6 top-6 z-10 md:left-8 md:top-8"
                />

                <div className="flex flex-col gap-3 px-6 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28">
                  <h3 className="text-lg font-extrabold leading-snug text-[#292929] md:text-2xl md:leading-[34px]">
                    {pillar.title}
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-6 text-[#474747] md:text-base md:leading-7">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f9fc] py-14 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center opacity-[0.06] md:top-2">
          <div className="relative h-[420px] w-[980px] md:h-[520px] md:w-[1279px]">
            <Image
              src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-programs-decoration.svg"
              alt=""
              fill
              className="object-contain"
              sizes="(min-width: 768px) 1279px, 980px"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">
          <motion.h2
            className="text-center text-2xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-5xl md:leading-[60px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Hệ thống chương trình đào tạo toàn diện
          </motion.h2>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4"
            role="tablist"
            aria-label="Hệ thống chương trình đào tạo toàn diện"
          >
            {TRAINING_PROGRAM_TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition md:px-8 md:py-3 md:text-base ${
                    active
                      ? 'border-[#145194] bg-white text-[#145194] shadow-[0_10px_24px_rgba(20,81,148,0.12)]'
                      : 'border-[#d8e1ec] bg-white text-[#6b7280] shadow-[0_8px_18px_rgba(0,0,0,0.06)] hover:border-[#145194]/45 hover:text-[#145194]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeTab}
            className="mt-8 overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(18,38,63,0.12)] ring-1 ring-black/5 md:rounded-[32px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            role="tabpanel"
            aria-label={currentProgram.title}
          >
            <div className="grid lg:grid-cols-[1fr_1.06fr]">
              <div className="flex flex-col justify-center px-5 py-8 md:px-10 md:py-12 lg:px-12">
                <h3 className="text-xl font-extrabold leading-snug text-[#292929] md:text-3xl md:leading-[42px]">
                  {currentProgram.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#145194] md:text-base md:leading-7">
                  {currentProgram.subtitle}
                </p>
                <p className="mt-6 whitespace-pre-line text-sm leading-7 text-[#474747] md:text-base md:leading-8">
                  {currentProgram.body}
                </p>
              </div>
              <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[460px]">
                <Image
                  src={currentProgram.image}
                  alt={currentProgram.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={95}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/coe-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
            priority={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(-56deg,rgba(2,42,54,0.92)_0%,rgba(10,59,116,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
            <motion.p
              className="text-sm uppercase leading-8 tracking-[0.12em] text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              Mô hình COE
            </motion.p>
            <motion.h2
              className="mt-2 text-2xl font-extrabold uppercase leading-snug tracking-[0.02em] text-white md:text-4xl md:leading-[56px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Trung tâm Nguồn lực Xuất sắc
            </motion.h2>
            <motion.p
              className="mt-6 max-w-[1040px] whitespace-pre-line text-sm leading-7 text-white/90 md:text-lg md:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Nếu đào tạo là con đường, thì COE chính là môi trường nuôi dưỡng để mỗi cá nhân tại
              IPAG từng bước trưởng thành và phát triển bền vững.
              {'\n'}
              Tại đây, chúng tôi kiến tạo mô hình{' '}
              <strong className="font-bold text-[#FBC17B]">
                &quot;Sách hay – Thầy giỏi – Bạn tốt&quot;
              </strong>{' '}
              như một nền tảng phát triển toàn diện, giúp mỗi cá nhân có điều kiện
              {'\n'}
              thuận lợi nhất để học hỏi, thực hành, thử nghiệm và phụng sự.
            </motion.p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1280px] gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {COE_RESOURCE_CARDS.map((card, index) => (
              <motion.article
                key={card.title}
                className="flex flex-col gap-5 rounded-[32px] border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.15)] px-7 py-10 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.06 + index * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <Image src={card.icon} alt="" width={60} height={60} />
                  <h3 className="text-left text-xl font-extrabold leading-8 text-white md:text-2xl">
                    {card.title}
                  </h3>
                </div>
                <p className="whitespace-pre-line text-left text-sm leading-6 text-white/90 md:text-base md:leading-[22px]">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-identity-decoration.svg"
            alt=""
            fill
            className="object-cover opacity-[0.03]"
            sizes="100vw"
            quality={95}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
            <motion.h2
              className="text-2xl font-extrabold leading-snug text-[#292929] md:text-4xl md:leading-[52px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Đội ngũ giảng viên &amp; chuyên gia nội bộ tại IPAG
            </motion.h2>
            <motion.p
              className="mt-4 max-w-[920px] text-sm leading-7 text-[#474747] md:text-base md:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Tại IPAG, tri thức không nằm trên trang giấy mà sống động trong từng trải nghiệm thực
              tế.
            </motion.p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1280px] gap-6 md:mt-12 xl:grid-cols-3">
            {IPAG_IDENTITY_CARDS.map((card, index) => (
              <motion.article
                key={card.title}
                className={[
                  'group flex flex-col gap-5 rounded-[32px] border border-transparent bg-white px-7 py-10 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:border-[#7BC1FF] hover:bg-[linear-gradient(178deg,rgba(255,255,255,1)_31%,rgba(237,247,255,1)_100%)] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)]',
                ].join(' ')}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.06 + index * 0.05 }}
              >
                <Image src={card.icon} alt="" width={60} height={60} />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium uppercase leading-6 tracking-[0.01em] text-[#00377C]">
                      {card.label}
                    </p>
                    <h3 className="whitespace-pre-line text-left text-xl font-extrabold leading-8 text-[#070707] md:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="whitespace-pre-line text-sm leading-7 text-[#474747] md:text-base md:leading-8">
                      {card.description}
                    </p>
                    <ul className="mt-2 flex flex-col gap-2">
                      {card.bullets.map((bullet) => (
                        <li
                          key={`${bullet.strong}${bullet.rest}`}
                          className="flex items-start gap-2 text-sm leading-6 text-[#474747] md:text-base"
                        >
                          <Image
                            src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-identity-check.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="mt-[3px] shrink-0"
                          />
                          <span>
                            <strong className="font-bold">{bullet.strong}</strong>
                            {bullet.rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(170,231,255,0.15) 0%, rgba(0,116,162,0.15) 134.87%)',
        }}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 h-[150px] w-[260px] select-none opacity-40 md:h-[220px] md:w-[380px] md:opacity-60 lg:h-[308px] lg:w-[566px] lg:opacity-100">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-quote-abstract-left.svg"
            alt=""
            fill
            className="object-contain object-left-bottom"
            sizes="(min-width: 1024px) 566px, (min-width: 768px) 380px, 260px"
            quality={95}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-[150px] w-[260px] select-none opacity-40 md:h-[220px] md:w-[380px] md:opacity-60 lg:h-[308px] lg:w-[566px] lg:opacity-100">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-quote-abstract-right.svg"
            alt=""
            fill
            className="object-contain object-right-bottom"
            sizes="(min-width: 1024px) 566px, (min-width: 768px) 380px, 260px"
            quality={95}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">
          <div className="mx-auto max-w-[1240px]">
            <motion.div
              className="relative rounded-[32px] py-8 md:py-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mx-auto max-w-[1226px] px-4 md:px-[100px]">
                <div className="relative mx-auto flex max-w-[636px] flex-col items-center gap-7">
                  <div className="pointer-events-none absolute left-[-8px] top-[-24px] size-[40px] md:left-[-24px] md:top-[-32px] md:size-[50px] lg:left-[-73px] lg:top-[-27px] lg:size-[60px]">
                    <Image
                      src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-quote-icon.svg"
                      alt=""
                      fill
                      className="object-contain rotate-180"
                      sizes="(min-width: 1024px) 60px, (min-width: 768px) 50px, 40px"
                    />
                  </div>
                  <div className="pointer-events-none absolute bottom-[-24px] right-[-8px] size-[40px] md:bottom-[-32px] md:right-[-24px] md:size-[50px] lg:bottom-auto lg:right-[3px] lg:top-[140px] lg:size-[60px]">
                    <Image
                      src="/life-at-ipag/chuong-trinh-dao-tao/figma/training-quote-icon.svg"
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 60px, (min-width: 768px) 50px, 40px"
                    />
                  </div>

                  <div
                    className="pointer-events-none absolute bottom-[-16px] left-[-4px] h-[60%] w-[45%] rounded-bl-[16px] border-b-2 border-l-2 border-[rgba(46,95,151,0.6)] md:bottom-[-20px] md:left-[-12px] lg:bottom-auto lg:left-[-71px] lg:top-[92px] lg:h-[115px] lg:w-[516px] lg:rounded-bl-[24px]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute right-[-4px] top-[-16px] h-[60%] w-[45%] rounded-tr-[16px] border-r-2 border-t-2 border-[rgba(46,95,151,0.6)] md:right-[-12px] md:top-[-20px] lg:left-[210px] lg:right-auto lg:top-[-8px] lg:h-[115px] lg:w-[474px] lg:rounded-tr-[24px]"
                    aria-hidden
                  />

                  <p className="relative z-10 text-center text-lg italic leading-[1.6] tracking-[0.01em] text-[#474747] md:text-2xl">
                    Khi con người được <strong className="font-bold italic">trao quyền</strong>,
                    được <strong className="font-bold italic">nuôi dưỡng</strong> trong một môi
                    trường đủ tốt để trưởng thành,{' '}
                    <strong className="font-bold italic">tăng trưởng bền vững</strong> không còn là
                    mục tiêu phải theo đuổi — mà trở thành{' '}
                    <strong className="font-bold italic">kết quả tất yếu</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
