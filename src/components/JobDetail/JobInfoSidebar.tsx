import { ArrowRight, Award, BriefcaseBusiness, DollarSign, Star } from 'lucide-react';
import { BENEFITS } from './data';
import InfoCard from './InfoCard';

type JobInfoSidebarProps = {
  onApplyClick: () => void;
};

export default function JobInfoSidebar({ onApplyClick }: JobInfoSidebarProps) {
  return (
    <aside className="space-y-[23px]">
      <div
        className="rounded-[20px] px-5 py-6 text-center shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8"
        style={{
          backgroundImage:
            'linear-gradient(177.48deg, rgb(36,128,204) 5.171%, rgb(1,57,112) 107.5%)',
        }}
      >
        <h2 className="text-[22px] leading-[34px] font-extrabold tracking-[0.5px] text-white lg:text-[24px] lg:leading-[38px] lg:tracking-[1px]">
          Bạn phù hợp với vị trí này?
        </h2>
        <button
          type="button"
          onClick={onApplyClick}
          className="mx-auto cursor-pointer mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-3 text-[15px] leading-[21px] font-bold text-[#474747] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-0 active:scale-100 active:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:mt-6 lg:h-[52px] lg:w-[276px] lg:text-[18px] lg:leading-[25px]"
        >
          ỨNG TUYỂN NGAY
          <ArrowRight className="size-5" />
        </button>
      </div>

      <section className="rounded-[20px] bg-white px-5 py-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:rounded-[32px] lg:px-10 lg:py-8">
        <h2 className="text-[20px] leading-[28px] font-bold text-[#292929] lg:text-[24px] lg:leading-[28px]">
          Thông tin
        </h2>
        <div className="my-4 border-b border-black/10 lg:my-4" />

        <div className="space-y-4 lg:space-y-5">
          <InfoCard icon={Award} label="Cấp bậc" value="Nhân viên" />
          <InfoCard icon={Star} label="Kinh nghiệm" value="3-5 năm" />
          <InfoCard icon={DollarSign} label="Mức lương" value="Thoả thuận" />
          <InfoCard
            icon={BriefcaseBusiness}
            label="Ngành nghề"
            value="CNTT - Phần mềm, Tài chính / Đầu tư, Chuyển đổi số"
          />
        </div>

        <div className="my-4 border-b border-black/10 lg:my-4" />
        <h3 className="text-[16px] leading-[24px] font-bold text-[#292929] lg:text-[18px] lg:leading-[28px]">
          Phúc lợi
        </h3>
        <div className="mt-3 flex flex-wrap gap-2 lg:mt-4 lg:gap-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#f0f0f0] px-2.5 py-1 text-[13px] leading-[20px] font-medium text-[#474747] lg:px-3 lg:text-[16px] lg:leading-[28px]"
              >
                <Icon className="size-4 lg:size-5" />
                {benefit.label}
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
