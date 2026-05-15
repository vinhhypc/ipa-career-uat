'use client';

import { BriefcaseBusiness, Check, Clock3, MapPin } from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ApplyModal from './ApplyModal';
import { DETAIL_SECTIONS, OPPORTUNITIES, REQUIREMENTS } from './data';
import DetailCard from './DetailCard';
import JobInfoSidebar from './JobInfoSidebar';
import RelatedJobsSection from './RelatedJobsSection';

export default function JobDetail({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Professional force', href: '/' }, { label: 'Chi tiết vị trí' }]}
            />
          </div>
        </div>
      </div>

      <section
        className="section-padding relative overflow-hidden py-8! lg:py-12!"
        data-job-id={id}
        style={{
          backgroundImage:
            'linear-gradient(-15.98deg, rgb(255,255,255) 15.576%, rgb(254,246,235) 119.97%)',
        }}
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(13,63,119,0.08)_0%,rgba(255,255,255,0)_72%)] lg:-right-28 lg:h-[520px] lg:w-[520px]" />
        <div className="section-content relative">
          <div className="mb-5 inline-flex rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:mb-4 lg:text-[12px]">
            Chuyển đổi số
          </div>

          <h1 className="text-[28px] leading-[38px] font-bold tracking-[0.5px] text-[#292929] lg:text-[40px] lg:leading-[48px] lg:tracking-[1px]">
            Chuyên Viên Phân Tích Nghiệp Vụ (Digital BA)
          </h1>

          <div className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[22px] text-[#474747] lg:mt-2 lg:flex-row lg:items-center lg:gap-4 lg:text-[16px] lg:leading-[26px]">
            <div className="flex items-center gap-1">
              <BriefcaseBusiness className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Đơn vị:</span> IPAS - IPAG Group
              </p>
            </div>
            <span className="hidden size-1 rounded-full bg-black/25 lg:block" />
            <div className="flex items-center gap-1">
              <MapPin className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Địa điểm:</span> Hà Nội (Cầu Giấy)
              </p>
            </div>
            <span className="hidden size-1 rounded-full bg-black/25 lg:block" />
            <div className="flex items-center gap-1">
              <Clock3 className="size-[18px] text-[#707070] lg:size-5" />
              <p>
                <span className="font-semibold">Hạn chót:</span> 30/04/2026
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:mt-7 lg:grid-cols-[minmax(0,953px)_minmax(0,1fr)] lg:gap-5">
            <div className="space-y-6">
              <DetailCard title="Chi tiết vai trò & Trách nhiệm">
                <p className="text-[14px] leading-[24px] text-[#474747] lg:text-[18px] lg:leading-[28px]">
                  IPAS là trụ cột Công nghệ & Nền tảng của hệ sinh thái IPAG - dẫn dắt chuyển đổi số
                  và xây dựng sản phẩm số cho toàn hệ sinh thái: AnVie, VNDGo, PTICare.
                </p>
                <div className="mt-5 space-y-6 lg:space-y-8">
                  {DETAIL_SECTIONS.map((section, index) => (
                    <div key={section.title} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-[#d9e6f2] text-[14px] font-bold text-[#002b5b] lg:size-10 lg:text-[16px]">
                          {index + 1}
                        </div>
                        <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5 pl-6 text-[14px] leading-[24px] text-[#474747] lg:text-[16px] lg:leading-[28px]">
                        {section.items.map((item) => (
                          <li key={item} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Yêu cầu">
                <div className="space-y-6 lg:space-y-8">
                  {REQUIREMENTS.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                        {section.title}
                      </h3>
                      <ul className="mt-1.5 space-y-1 pl-0 text-[14px] leading-[24px] text-[#474747] lg:text-[16px] lg:leading-[28px]">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="mt-1 size-4 shrink-0 text-[#0d5ba8]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Cơ hội">
                <div className="space-y-5 lg:space-y-8">
                  {OPPORTUNITIES.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className={`rounded-full p-3 ${item.tone}`}>
                          <Icon className="size-5 text-[#002b5b]" />
                        </div>
                        <div>
                          <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
                            {item.title}
                          </h3>
                          <p className="text-[14px] leading-[22px] text-[#474747] lg:text-[16px] lg:leading-[22px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </DetailCard>
            </div>

            <JobInfoSidebar onApplyClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </section>

      <RelatedJobsSection />

      {isModalOpen && <ApplyModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
