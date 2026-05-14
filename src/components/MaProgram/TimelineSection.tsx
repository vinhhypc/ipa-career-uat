import { TIMELINE } from './constants';

export default function TimelineSection() {
  return (
    <section className="section-padding max-md:!py-11 bg-white md:!pb-14 md:!pt-20">
      <div className="section-content flex flex-col gap-8 md:gap-[52px]">
        <div className="flex w-full flex-col items-center gap-2 text-center md:gap-2">
          <p className="w-full text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
            THE JOURNEY
          </p>
          <h2 className="text-[20px] font-bold uppercase leading-[26px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]">
            Timeline 24 tháng
          </h2>
        </div>

        <div className="relative flex flex-col gap-6 rounded-[20px] md:flex-row md:gap-5">
          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            return (
              <div
                key={item.n}
                className={`relative z-[1] flex flex-col items-center gap-4 md:flex-1 md:gap-7 ${
                  isLast
                    ? ''
                    : "md:after:absolute md:after:left-1/2 md:after:top-[30px] md:after:z-[-1] md:after:w-[calc(100%+1.25rem)] md:after:border-t-2 md:after:border-dashed md:after:border-[#7b93c7] md:after:opacity-80 md:after:content-['']"
                }`}
              >
                <div className="relative flex size-10 items-center justify-center rounded-bl-[12px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[12px] bg-gradient-to-b from-[#3192e3] to-[#01386f] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] md:size-[60px]">
                  <span className="text-[18px] font-extrabold leading-[32px] text-white md:text-[24px]">
                    {item.n}
                  </span>
                </div>
                <div className="flex w-full flex-col items-center gap-1 text-center md:gap-1">
                  <p className="text-[14px] font-semibold leading-[1.48] tracking-[0.14px] text-[#00377c] md:text-[18px] md:tracking-[0.18px]">
                    {item.period}
                  </p>
                  <div className="flex w-full flex-col gap-2 md:gap-4">
                    <p className="text-[16px] font-bold leading-[22px] text-[#292929] md:text-[24px] md:leading-[32px]">
                      {item.title}
                    </p>
                    <div className="text-[14px] font-normal leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]">
                      {item.body}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
