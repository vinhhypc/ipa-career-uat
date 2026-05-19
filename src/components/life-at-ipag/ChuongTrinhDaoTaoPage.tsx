'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Landmark,
} from 'lucide-react';
import { motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';

const KEY_FEATURES = [
  {
    title: 'MONTHLY GROWTH SESSIONS',
    body: 'Học tập là nhịp thở của vận hành. Mỗi tháng, ít nhất một chương trình đào tạo chuyên sâu được tổ chức bài bản, đảm bảo lộ trình phát triển năng lực diễn ra xuyên suốt và nhất quán.',
    icon: BookOpen,
    tone: 'blue',
  },
  {
    title: 'PERSONAL LEARNING BUDGET',
    body: 'Chúng tôi cấp ngân sách riêng hàng năm để bạn chủ động lựa chọn các khóa học, chứng chỉ và tài liệu chuyên môn. IPAG đầu tư vào sự ưu tiên biệt của mỗi cá nhân.',
    icon: Briefcase,
    tone: 'warm',
  },
  {
    title: 'IPAM RETREAT',
    body: 'Tái kết nối và khai phóng hành trình L&D thực thụ được thiết kế kỹ lưỡng để đội ngũ cùng tái tạo năng lượng, đồng bộ tầm nhìn và thắt chặt tư duy đồng hành.',
    icon: Landmark,
    tone: 'warm',
  },
  {
    title: 'PROFESSIONAL CERTIFICATION SUPPORT',
    body: 'Bảo trợ lộ trình chuyên gia. IPAG đồng hành toàn diện về cả tài chính và thời gian, giúp bạn chinh phục các chứng chỉ quốc tế uy tín, khẳng định vị thế chuyên môn trong hệ sinh thái.',
    icon: Award,
    tone: 'blue',
  },
] as const;

const EXPERTS = [
  {
    title: 'Chuyên gia chứng khoán',
    name: 'Ông Điêu Ngọc Tuấn',
    desc: 'Ông Tuấn tốt nghiệp thạc sĩ trường Đại học New South Wales chuyên ngành Kinh tế. Ông đã có hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/expert-1.png',
  },
  {
    title: 'Chuyên gia phân tích',
    name: 'Ông Điêu Ngọc Tuấn',
    desc: 'Ông Tuấn tốt nghiệp thạc sĩ trường Đại học New South Wales chuyên ngành Kinh tế. Ông đã có hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/expert-2.png',
  },
  {
    title: 'Chuyên gia đầu tư',
    name: 'Ông Điêu Ngọc Tuấn',
    desc: 'Ông Tuấn tốt nghiệp thạc sĩ trường Đại học New South Wales chuyên ngành Kinh tế. Ông đã có hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/expert-3.png',
  },
  {
    title: 'Chuyên gia bảo hiểm',
    name: 'Ông Điêu Ngọc Tuấn',
    desc: 'Ông Tuấn tốt nghiệp thạc sĩ trường Đại học New South Wales chuyên ngành Kinh tế. Ông đã có hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư.',
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/expert-4.png',
  },
] as const;

const PROGRAM_TABS = [
  'Retreat',
  'Leadership Academy',
  'Mentoring 1-1',
  'Rotation',
  'Domain Expert',
  'Self-paced',
] as const;

const PROGRAM_CONTENT: Record<
  (typeof PROGRAM_TABS)[number],
  { title: string; sub: string; bullets: string[]; image: string }
> = {
  Retreat: {
    title: 'IPAG RETREAT PROGRAMS',
    sub: 'Hàng năm 2-3 ngày (Flagship program)',
    bullets: [
      'Hành trình trở về với thiên nhiên (Yên Tử, Hoà Bình...) để làm mới tâm thế:',
      'Thực tậo sự hiện diện trọn vẹn trong từng hơi thở và quyết định.',
      'Chuyển hoá AnVie - PTI Care - VNDgo vào thực tết công việc cũng như cập nhật và thảo luận các chiến lược thay đổi mới nhất.',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-1.png',
  },
  'Leadership Academy': {
    title: 'IPAG LEADERSHIP ACADEMY',
    sub: 'Hàng tháng - 1 buổi/tháng (Enternal - c-level led)',
    bullets: [
      'Senior leaders và chuyên gia đầu ngành trong hệ sinh thái HWG trực tiếp dẫn dắt. Mỗi session là case study thật - người đã ra quyết điinhj ngồi lại, kể cả những lần sai. Không có giáo trình - chỉ có bài toán thật và kinh nghiệm thực chiến',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-2.png',
  },
  'Mentoring 1-1': {
    title: 'MENTORING 1-1 VỚI CLEVEL',
    sub: 'Mỗi 2 tuần - 60 phút (Personalized - Ongoing)',
    bullets: [
      'Mỗi MA và Executive được ghét cặp với mentor C - level trong hệ sinh thái. Không phải gặp một lần rồi thôi - đồng hành liên tục trong suốt hành trình. Mentor chia sẻ cả quyết định sai của họ, không chỉ thành công.',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-3.png',
  },
  Rotation: {
    title: 'CROSS-ECOSYSTEM ROTATION',
    sub: 'Theo giai đoạn - có cấu trúc (MA program - HWG)',
    bullets: [
      'Rotation có cấu trúc qua các đơn vị trong hệ sinh thái - từ VNDIRECT đến ANVIE đến IPAS. Mỗi rotation có metor, project cụ thể và kết quả bàn giao đo được. Không phải “đi tham quan" - là làm việc thật trong môi trường mới.',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-4.png',
  },
  'Domain Expert': {
    title: 'DOMAIN EXPERT SERIES',
    sub: 'Hàng quý - 1 sesion/quý (Per-Function - Specialist)',
    bullets: [
      'Mỗi domain có lịch học riêng với chuyên gia đầu ngành từ bên ngoài. Finance gặp portfolio manager, Tech gặp CTO từ tech unicorn, HR gặp CHRO quốc tế. Buổi chia sẻ nhỏ, chuyên sâu, có tương tác hai chiều - không phải hội thảo đại trà.',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-5.png',
  },
  'Self-paced': {
    title: 'SELF-PACED LEARNING PLATFORM',
    sub: 'Liên tục - truy cập 24/7 (Online - cá nhân hoá)',
    bullets: [
      'Mỗi nhân sự có tài khoản học tập cá nhân với ngân sách riêng - Coursera, Linkedln Learning, nền tảng nội bộ. Bạn tự thiết kế lộ trình học của mình và được quản lý trực tiếp hỗ trợ.',
    ],
    image: '/life-at-ipag/chuong-trinh-dao-tao/figma/program-6.png',
  },
};

export default function ChuongTrinhDaoTaoPage() {
  const [activeTab, setActiveTab] = useState<(typeof PROGRAM_TABS)[number]>('Retreat');
  const currentProgram = useMemo(() => PROGRAM_CONTENT[activeTab], [activeTab]);

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
        <div className="relative min-h-[320px] w-full md:min-h-[420px] lg:min-h-[520px]">
          <Image
            src="/life-at-ipag/chuong-trinh-dao-tao/figma/hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(39,60,77,0.22)_3%,rgba(11,26,39,0.7)_34%,rgba(7,29,49,0.84)_52%,rgba(8,24,39,0.68)_73%,rgba(96,111,134,0.2)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <motion.h1
              className="text-3xl font-extrabold uppercase tracking-[2px] text-white drop-shadow-md md:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Chương trình đào tạo
            </motion.h1>
            <motion.div
              className="mt-8 max-w-[660px] rounded-[20px] bg-[rgba(202,255,235,0.18)] px-5 py-6 text-base font-semibold leading-relaxed text-white backdrop-blur-sm md:px-10 md:py-9 md:text-2xl md:leading-[1.6]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tại IPAG, đào tạo và tự đào tạo là &ldquo;nếp sống&rdquo; được rèn luyện mỗi ngày để
              tri thức chuyển hóa thành năng lực thực thi vượt trội.
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="section-content">
          <h2 className="text-center text-2xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-[48px] md:leading-[60px]">
            Học từ các chuyên gia hàng đầu
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {KEY_FEATURES.map((item) => {
              const Icon = item.icon;
              const isBlue = item.tone === 'blue';
              return (
                <article
                  key={item.title}
                  className={`rounded-2xl px-4 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:px-7 md:py-7 ${
                    isBlue
                      ? 'border border-[#0c4a8a] bg-[linear-gradient(88deg,#013A72_-3%,#0C71C7_85%)] text-white'
                      : 'border border-[#f6dcb7] bg-[#fff2df] text-[#292929]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        isBlue ? 'bg-white/15 text-white' : 'bg-white text-[#145194]'
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide md:text-lg">
                        {item.title}
                      </p>
                      <p
                        className={`mt-2 text-sm leading-relaxed md:text-base ${isBlue ? 'text-white/90' : 'text-[#474747]'}`}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTS.map((expert) => (
              <article
                key={expert.title}
                className="overflow-hidden rounded-[18px] border border-[#edf1f5] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={expert.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#145194]">
                    {expert.title}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#292929]">{expert.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#474747]">
                    {expert.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#145194] transition duration-200 hover:scale-105 hover:text-[#0C71C7]"
                  >
                    Xem thêm <ChevronRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#7bc1ff]/10 blur-3xl" />
        <div className="section-content relative">
          <h2 className="text-center text-2xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-[48px] md:leading-[60px]">
            Các chương trình đào tạo dành cho nhân sự
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {PROGRAM_TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition md:text-base ${
                    active
                      ? 'border-[#145194] bg-white text-[#145194] shadow-[0_4px_10px_rgba(20,81,148,0.14)]'
                      : 'border-[#d7e0ea] bg-white text-[#707070] hover:border-[#145194]/45'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[22px] border border-[#e8edf3] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="grid gap-0 md:grid-cols-[1fr_1.08fr] md:min-h-[420px]">
              <div className="flex flex-col justify-center p-5 md:p-8">
                <h3 className="text-2xl font-extrabold uppercase text-[#145194]">
                  {currentProgram.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#f3a537] md:text-base">
                  {currentProgram.sub}
                </p>
                <ul className="mt-5 space-y-3">
                  {currentProgram.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#474747] md:text-base"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#145194]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[220px] md:h-full">
                <Image
                  src={currentProgram.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
