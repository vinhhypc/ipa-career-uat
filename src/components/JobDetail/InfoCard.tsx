import type { ComponentType } from 'react';

type InfoCardProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export default function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-[#d9e6f2] p-2.5 lg:p-2">
        <Icon className="size-5 text-[#002b5b] lg:size-[18px] xl:size-5" />
      </div>
      <div className="space-y-1">
        <p className="text-xs leading-[20px] text-[#474747] lg:text-sm lg:leading-[20px] xl:text-base xl:leading-[22px]">
          {label}
        </p>
        <p className="text-sm leading-[24px] font-bold text-[#292929] lg:text-base lg:leading-[24px] xl:text-lg xl:leading-[28px]">
          {value}
        </p>
      </div>
    </div>
  );
}
