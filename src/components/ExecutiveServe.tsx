'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

import Breadcrumbs from '@/components/Breadcrumbs';
import mandateIcon from '@/assets/executive-serve/benefit-mandate.svg';
import rewardIcon from '@/assets/executive-serve/benefit-reward.svg';
import ecosystemIcon from '@/assets/executive-serve/benefit-ecosystem.svg';
import roadmapIcon from '@/assets/executive-serve/benefit-roadmap.svg';
import jobsBgLeft from '@/assets/executive-serve/jobs-bg-left.svg';
import bannerImg from '@/assets/executive-serve/banner.png';

const BENEFITS = [
  {
    label: 'Mandate',
    title: 'Trao quyền thực sự',
    body: 'Làm chủ chiến lược, dẫn dắt đội ngũ và chịu trách nhiệm cao nhất trên kết quả công việc của chính mình.',
    icon: mandateIcon,
  },
  {
    label: 'Phần thưởng',
    title: 'Thành quả xứng đáng',
    body: 'Bên cạnh sự ghi nhận, IPAG cam kết chia sẻ lợi ích tương xứng thành quả mà bạn đã dày công kiến tạo.',
    icon: rewardIcon,
  },
  {
    label: 'Hệ sinh thái',
    title: 'Sức mạnh từ hệ sinh thái',
    body: 'Nguồn lực từ VNDIRECT, PTI, ANVIE luôn sẵn sàng tiếp sức về khách hàng, công nghệ và đối tác, giúp bạn tập trung vào bài toán lớn.',
    icon: ecosystemIcon,
  },
  {
    label: 'Lộ trình',
    title: 'Vị thế cho cộng sự',
    body: 'Các vị trí điều hành luôn dành cho cộng sự tâm huyết và gắn bó lâu dài.',
    icon: roadmapIcon,
  },
] as const;

const OPEN_ROLES = [
  {
    title: 'CFO - CHIEF FINANCIAL OFFICER',
    summary:
      'Dẫn dắt chuyển đổi tài chính tại một đơn vị trong danh mục đầu tư của IPAG. P&L thuộc về bạn. Báo cáo trực tiếp Chairwoman.',
    tone: 'blue' as const,
    requirements: [
      '12+ năm tài chính, trong đó có kinh nghiệm M&A hoặc corporate restructuring',
      'Đã lãnh đạo finance team hơn 10 người',
      'Thành thạo đọc và trình bày báo cáo tài chính hợp nhất',
      'Tư duy chiến lược và khả năng ra quyết định dựa trên dữ liệu',
    ],
    benefits: ['Đơn vị: IPAG Group', 'Gói lương senior leadership + bonus hiệu suất theo P&L', 'Equity opportunity sau 12 tháng'],
  },
  {
    title: 'CHIEF TECHNOLOGY OFFICER (CTO)',
    summary:
      'Thiết kế và vận hành hạ tầng công nghệ số cho các đơn vị trong hệ sinh thái - từ ERP đến AI ứng dụng. Báo cáo trực tiếp Chairwoman.',
    tone: 'cream' as const,
    requirements: [
      '10+ năm technology, đã lead digital transformation cấp enterprise',
      'Kinh nghiệm với Cloud platforms và ERP implementation',
      'Có khả năng truyền đạt công nghệ cho non-technical stakeholders',
      'Tư duy sản phẩm và am hiểu về AI/ML',
    ],
    benefits: ['Đơn vị: IPAG Group / IPAS', 'Gói lương C-level + ESOP', 'Ngân sách công nghệ rõ ràng theo KPI', 'Remote-flexible arrangement'],
  },
  {
    title: 'CHIEF OPERATING OFFICER (COO)',
    summary:
      'Xây dựng mô hình vận hành xuất sắc cho HWG - tối ưu chuỗi giá trị từ nhà cung cấp đến khách hàng cuối. Báo cáo CEO.',
    tone: 'blue' as const,
    requirements: [
      '10+ năm operations / supply chain, đã vận hành quy mô hơn 500 nhân sự',
      'Tư duy hệ thống và kỷ luật số liệu cao',
      'Kinh nghiệm multi-unit management là lợi thế lớn',
      'Khả năng tối ưu hóa quy trình và quản trị P&L',
    ],
    benefits: ['Đơn vị: IPAG Group / HWG', 'Gói lương + Performance bonus theo EBITDA portfolio', 'Cơ hội Board seat sau 24 tháng nếu phù hợp', 'Ngân sách đào tạo team không bị giới hạn'],
  },
] as const;

export default function ExecutiveServe() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'Executive serve' }]}
            />
          </div>
        </div>
      </div>

      <section
        className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat max-md:py-10! md:py-20!"
        style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-85"
          style={{
            background:
              'radial-gradient(80% 120% at 90% 40%, rgba(10,119,204,0.36), transparent 60%), radial-gradient(70% 140% at 10% 60%, rgba(20,81,148,0.52), rgba(1,32,69,0.95))',
          }}
        />
        <div className="section-content relative z-10 flex items-center gap-5 md:gap-9">
          <div className="min-w-0 flex-1 text-center md:text-left">
            <h1 className="text-[20px] font-extrabold uppercase leading-[32px] tracking-[0.8px] text-white md:text-[40px] md:leading-[60px] md:tracking-[2px]">
              Beyond your legacy.
              <br />
              Let&apos;s co-build the <span className="text-[#fbc17b]">extraordinary</span>
            </h1>
            <div className="mt-5 md:mt-6 flex justify-center md:justify-start">
            <div className="h-px w-[120px] bg-[#fbc17b] md:w-[147px]" />
            </div>
            
            <p className="mt-5 max-w-[883px] text-[13px] font-medium leading-[21px] text-white md:mt-6 md:text-[20px] md:font-normal md:leading-[33px] md:tracking-[0.2px]">
              Tại IPAG, bạn được trao quyền tự chủ tối ưu để hoạch định chiến lược, quản lý ngân sách và dẫn dắt đội
              ngũ.
              <br/> Đây là lộ trình dành cho những nhà lãnh đạo tương lai muốn kiến tạo
              giá trị thực chất. Chúng tôi tìm kiếm đối tác đồng hành, không phải nhân sự thực thi đơn
              <br /> 
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding max-md:py-11! md:py-20!">
        <div className="section-content">
          <h2 className="text-center text-[20px] font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]">
            ĐIỀU IPAG TRAO CHO BẠN
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-[52px] md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] bg-white px-7 py-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]"
              >
                <Image src={item.icon} alt="" width={60} height={60} className="size-[60px]" />
                <p className="mt-5 text-[14px] font-semibold leading-[1.48] tracking-[0.14px] text-[#00377c]">{item.label}</p>
                <h3 className="mt-1 text-[20px] font-bold leading-[28px] text-[#070707] md:text-[24px] md:leading-[32px]">{item.title}</h3>
                <p className="mt-4 text-[14px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding relative overflow-hidden max-md:py-11! md:py-20!"
        style={{
          backgroundImage:
            'linear-gradient(160.3deg, rgba(170, 231, 255, 0.15) 4.3%, rgba(0, 116, 162, 0.15) 93.43%)',
        }}
      >
        <Image src={jobsBgLeft} alt="" className="absolute bottom-0 left-0 hidden w-[660px] opacity-70 xl:block" />
        <Image
          src={jobsBgLeft}
          alt=""
          className="absolute bottom-0 right-0 hidden w-[660px] -scale-x-100 opacity-70 xl:block"
        />

        <div className="section-content relative z-10">
          <h2 className="text-center text-[20px] font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]">
            CHÚNG TÔI ĐANG TÌM KIẾM
          </h2>
          <div className="mt-8 flex flex-col gap-6 md:mt-[52px]">
            {OPEN_ROLES.map((role) => {
              const isBlue = role.tone === 'blue';
              return (
                <article key={role.title} className="overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)]">
                  <div
                    className={`px-4 py-6 md:px-7 md:py-8 ${
                      isBlue
                        ? 'bg-linear-to-br from-[#3192e3] to-[#01386f] text-white'
                        : 'bg-linear-to-br from-[#ffe4c4] to-[#fbbf76] text-[#292929]'
                    }`}
                  >
                    <h3 className="text-[17px] font-bold uppercase leading-[26px] md:text-[24px] md:leading-[32px]">{role.title}</h3>
                    <p className="mt-2 text-[13px] font-medium leading-[20px] md:text-[18px] md:leading-[26px]">{role.summary}</p>
                  </div>
                  <div className="px-4 pb-6 pt-4 md:px-7 md:pb-8">
                    <div className="grid grid-cols-1 gap-6 border-b border-[#d5d5d5] pb-4 md:grid-cols-2 md:gap-5">
                      <div>
                        <p className="text-[13px] font-bold uppercase leading-[22px] text-[#474747] md:text-[16px]">YÊU CẦU CÔNG VIỆC</p>
                        <ul className="mt-2 space-y-1.5">
                          {role.requirements.map((line) => (
                            <li key={line} className="flex gap-2 text-[13px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[26px]">
                              <Check className="mt-1 size-[18px] shrink-0 text-[#00377c] md:size-5" strokeWidth={2} />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold uppercase leading-[22px] text-[#474747] md:text-[16px]">QUYỀN LỢI & CƠ HỘI</p>
                        <ul className="mt-2 space-y-1.5">
                          {role.benefits.map((line) => (
                            <li key={line} className="flex gap-2 text-[13px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[26px]">
                              <Check className="mt-1 size-[18px] shrink-0 text-[#00377c] md:size-5" strokeWidth={2} />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link href="/we-look-for" className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold leading-[1.4] text-[#002b5b] md:text-[16px]">
                      Xem chi tiết & Ứng tuyển
                      <ArrowRight className="size-4 md:size-5" strokeWidth={2} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:justify-center md:gap-5">
            <button className="h-12 w-full max-w-[276px] rounded-full border border-[#00377c] text-[16px] font-bold text-[#002b5b] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] md:text-[18px]">
              XEM THÊM VỊ TRÍ
            </button>
            <button className="h-12 w-full max-w-[276px] rounded-full bg-[linear-gradient(77deg,#013A72_3.48%,#0C71C7_83.47%)] text-[16px] font-bold text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] md:text-[18px]">
              ĐỂ LẠI THÔNG TIN
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

