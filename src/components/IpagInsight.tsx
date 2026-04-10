'use client';

import Image from 'next/image';
import { ArrowLeftRight, Sparkles, TrendingUp, Users } from 'lucide-react';

import homeBanner from '@/assets/home/banner.png';
import insightAbout from '@/assets/ipag-insight/about.jpg';
import insightMission from '@/assets/ipag-insight/mission.jpg';
import Breadcrumbs from '@/components/Breadcrumbs';

function SectionStar() {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" aria-hidden>
      <path
        d="M10.4535 0C10.4535 0 10.0371 8.33346 0 11.933C0 11.933 8.21662 13.5586 10.4535 24C10.4535 24 11.5653 14.5768 21 11.933C21 11.933 12.0614 9.80275 10.4535 0Z"
        className="fill-[#59798f]"
      />
    </svg>
  );
}

export default function IpagInsight() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-content section-padding !py-5">
          <Breadcrumbs
            tone="surface"
            items={[{ label: 'Trang chủ', href: '/' }, { label: 'IPAG Insight' }]}
          />
        </div>
      </div>

      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBanner.src})` }}
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

        <div className="section-content section-padding relative z-10 flex flex-col items-center gap-6 text-center md:gap-6">
          <div className="flex max-w-[900px] flex-col items-center gap-4">
            <p className="w-full max-w-[812px] text-[16px] font-medium leading-[32px] text-white">
              IPAG GROUP - CAPABILITY BANK
            </p>
            <div className="text-[0px] uppercase tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-[52px]">
                <span className="font-bold leading-[70px] text-[#fbc17b]">
                  Ngân hàng Năng lực
                  <br aria-hidden />
                </span>
                <span className="font-normal leading-[70px] text-white">
                  đầu tiên tại Việt Nam
                </span>
              </p>
            </div>
          </div>
          <p className="max-w-[900px] text-[18px] font-medium leading-[32px] tracking-[0.18px] text-white">
            IPAG phát triển mô hình Capability Bank – mô hình đầu tư kết hợp vốn tài chính với ba năng lực
            vận hành cốt lõi: Con người, Công nghệ và Chuỗi giá trị. IPAG giúp doanh nghiệp khai phóng tiềm
            năng tăng trưởng, nâng cao hiệu quả vận hành và kiến tạo giá trị bền vững trong dài hạn.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fef6eb] to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 70% 20%, #fff 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 20% 80%, #fff 0%, transparent 50%)`,
          }}
        />

        <div className="section-content section-padding relative flex flex-col gap-[52px]">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <p className="w-full max-w-[812px] text-[14px] font-normal leading-[32px] text-[#707070]">
              OUR PURPOSE
            </p>
            <h2 className="text-[40px] font-extrabold uppercase leading-[60px] tracking-[1px] text-[#292929]">
              Kiến tạo di sản bền vững
            </h2>
          </div>

          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <SectionStar />
                <h3 className="text-[30px] font-bold uppercase leading-[1.4] tracking-[0.3px] text-[#002b5b]">
                  Về IPAG
                </h3>
                <div className="relative h-px w-[60px] shrink-0 bg-[#002b5b]/30" aria-hidden />
              </div>

              <div className="flex flex-col gap-10 lg:flex-row lg:gap-[100px]">
                <div className="relative w-full shrink-0 overflow-hidden rounded-[32px] lg:w-[588px] lg:max-w-[50%]">
                  <div className="relative aspect-[588/331] w-full">
                    <Image
                      src={insightAbout}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 588px"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-[24px] font-bold leading-[1.2] text-[#292929]">
                      Trở thành Capability Bank hàng đầu Đông Nam Á.
                    </p>
                    <p className="text-[16px] font-normal leading-[1.48] tracking-[0.16px] text-[#474747]">
                      Nơi hội tụ nguồn lực để khai phóng tiềm năng con người và doanh nghiệp — kiến tạo những
                      câu chuyện thành công bền vững cho xã hội.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-5">
                    <li className="flex gap-3">
                      <div className="shrink-0 rounded-full bg-[#d9e6f2] p-3">
                        <Users className="size-6 text-[#002b5b]" strokeWidth={1.75} />
                      </div>
                      <div className="flex flex-col gap-1 text-[16px]">
                        <p className="font-bold leading-[1.4] text-[#292929]">Tái tạo Con người</p>
                        <p className="font-normal leading-[1.4] tracking-[0.16px] text-[#474747]">
                          Biến nhân tài tiềm năng thành những người dẫn dắt thay đổi.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="shrink-0 rounded-full bg-[#ffeeda] p-3">
                        <TrendingUp className="size-6 text-[#c45a12]" strokeWidth={1.75} />
                      </div>
                      <div className="flex flex-col gap-1 text-[16px]">
                        <p className="font-bold leading-[1.4] text-[#292929]">Tái cấu trúc Doanh nghiệp</p>
                        <p className="font-normal leading-[1.4] tracking-[0.16px] text-[#474747]">
                          Giúp doanh nghiệp trở nên phát triển hơn.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="shrink-0 rounded-full bg-[#d9e6f2] p-3">
                        <Sparkles className="size-6 text-[#002b5b]" strokeWidth={1.75} />
                      </div>
                      <div className="flex flex-col gap-1 text-[16px]">
                        <p className="font-bold leading-[1.4] text-[#292929]">Tái định nghĩa Thành công</p>
                        <p className="font-normal leading-[1.4] tracking-[0.16px] text-[#474747]">
                          Chứng minh lợi nhuận và phụng sự có thể cùng tồn tại.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-[#002b5b]/15" aria-hidden />

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-end gap-3">
                <div className="relative h-px w-[60px] shrink-0 bg-[#002b5b]/30" aria-hidden />
                <h3 className="text-[30px] font-bold uppercase leading-[1.4] tracking-[0.3px] text-[#002b5b]">
                  Sứ mệnh{' '}
                </h3>
                <SectionStar />
              </div>

              <div className="flex flex-col gap-10 lg:flex-row-reverse lg:gap-[100px]">
                <div className="relative w-full shrink-0 overflow-hidden rounded-[32px] lg:w-[588px] lg:max-w-[50%]">
                  <div className="relative aspect-[588/331] w-full">
                    <Image
                      src={insightMission}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 588px"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-[24px] font-bold leading-[1.4] text-[#292929]">
                      Vận hành mô hình Capability Bank — kết hợp vốn tài chính với năng lực thực thi.
                    </p>
                    <p className="text-[16px] font-normal leading-[1.48] tracking-[0.16px] text-[#474747]">
                      Chúng tôi đầu tư vào tiềm năng và thực thi tái cấu trúc toàn diện — để biến những doanh
                      nghiệp tốt thành những doanh nghiệp xuất sắc.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                      <div className="flex flex-1 flex-col gap-2 rounded-[20px] border-l-[3px] border-[#002b5b] bg-[#e9f6ff] px-6 py-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
                        <p className="text-center text-[20px] font-bold uppercase leading-[1.4] text-[#002b5b]">
                          TAC
                        </p>
                        <p className="text-center text-[16px] font-normal leading-[1.48] tracking-[0.32px] text-[#474747]">
                          Transform – Amplify – Continuation
                        </p>
                      </div>
                      <ArrowLeftRight
                        className="mx-auto size-7 shrink-0 text-[#002b5b] sm:mx-0"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <div className="flex flex-1 flex-col gap-2 rounded-[20px] border-l-[3px] border-[#002b5b] bg-[#e9f6ff] px-6 py-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
                        <p className="text-center text-[20px] font-bold uppercase leading-[1.4] text-[#002b5b]">
                          CAT
                        </p>
                        <p className="text-center text-[16px] font-normal leading-[1.48] tracking-[0.32px] text-[#474747]">
                          Connect with Heart – Add Values – Transfer with Excellence
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 sm:flex-row sm:gap-[62px]">
                      <div className="flex max-w-[343px] flex-col gap-1">
                        <p className="text-[16px] font-semibold leading-[1.4] text-[#292929]">
                          TAC: TỐI ƯU NỘI LỰC
                        </p>
                        <p className="text-[14px] font-normal leading-[1.4] text-[#474747]">
                          Nhận diện - Khuếch đại - Tiếp nối
                        </p>
                      </div>
                      <div className="flex max-w-[343px] flex-col gap-1">
                        <p className="text-[16px] font-semibold leading-[1.4] text-[#292929]">
                          CAT: CỘNG HƯỞNG HỆ SINH THÁI
                        </p>
                        <p className="text-[14px] font-normal leading-[1.4] text-[#474747]">
                          Kết nối - Gia tăng - Chuyển giao
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f4]">
        <div className="section-content section-padding flex flex-col items-center gap-[52px]">
          <h2 className="text-center text-[40px] font-extrabold uppercase leading-[60px] tracking-[1px] text-[#292929]">
            Thông điệp từ ipag
          </h2>

          <div className="flex w-full flex-col gap-10 overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] lg:flex-row lg:items-center lg:gap-[68px] lg:p-0">
            <div className="relative flex shrink-0 justify-center pl-4 pt-8 lg:pl-0 lg:pt-0">
              <div
                className="absolute left-2 top-16 hidden h-[271px] w-[155px] rounded-tr-[32px] lg:block"
                style={{
                  backgroundImage:
                    'linear-gradient(201.18deg, rgb(2, 100, 179) 6.27%, rgb(0, 43, 91) 95.18%)',
                }}
                aria-hidden
              />
              <div
                className="absolute -left-1 bottom-0 hidden h-[502px] w-[155px] rounded-tl-[12px] rounded-tr-[32px] lg:block"
                style={{
                  backgroundImage:
                    'linear-gradient(172.97deg, rgb(255, 218, 177) 1.17%, rgb(236, 131, 70) 103.94%)',
                }}
                aria-hidden
              />
              <div className="relative z-10 mx-auto flex size-[min(100%,466px)] max-h-[466px] min-h-[280px] min-w-[280px] items-center justify-center overflow-hidden rounded-tl-[32px] rounded-tr-[100px] bg-gradient-to-br from-white to-[#ffeeda] lg:mx-0">
                <span
                  className="select-none font-serif text-[clamp(3.5rem,16vw,8.5rem)] font-bold leading-none tracking-tight text-[#002b5b]/20"
                  aria-hidden
                >
                  PMH
                </span>
                <span className="sr-only">Phạm Minh Hương</span>
              </div>
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col gap-7 px-6 pb-10 lg:py-3 lg:pr-16 lg:pl-0">
              <span
                className="pointer-events-none absolute left-4 top-0 font-serif text-[clamp(4rem,12vw,7rem)] leading-[0.75] text-[#de8f10] lg:left-2"
                aria-hidden
              >
                &ldquo;
              </span>
              <span
                className="pointer-events-none absolute bottom-24 right-4 font-serif text-[clamp(4rem,12vw,7rem)] leading-[0.75] text-[#de8f10] lg:bottom-20 lg:right-10"
                aria-hidden
              >
                &rdquo;
              </span>

              <div className="relative z-1 flex flex-col gap-7 pt-10 lg:pt-4">
                <div className="text-center text-[24px] font-bold leading-[1.6] tracking-[0.24px] text-[#474747] lg:text-left">
                  <p>       <span
                className="pointer-events-none absolute left-4 top-0 font-serif text-[clamp(4rem,12vw,7rem)] leading-[0.75] text-[#de8f10] lg:left-2"
                aria-hidden
              >
                &ldquo;
              </span>Tại IPAG, chúng tôi không chỉ rót vốn, chúng tôi</p>
                  <p>
                    <span className="font-extrabold text-[#de8f10]">đầu tư năng lực</span>
                    <span>. Chúng tôi không chỉ xây dựng</span>
                  </p>
                  <p>
                    <span>doanh nghiệp, chúng tôi </span>
                    <span className="font-extrabold text-[#de8f10]">kiến tạo tầm vóc.</span>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className="h-px w-[60px] shrink-0 bg-[#002b5b]/35" aria-hidden />
                  <div className="flex flex-col gap-1 leading-[1.4]">
                    <p className="text-center text-[20px] font-bold uppercase text-[#002b5b] lg:text-left">
                      Phạm minh hương
                    </p>
                    <p className="text-center text-[16px] font-normal text-[#474747] lg:text-left">
                      Thành viên sáng lập IPAG
                    </p>
                  </div>
                  <div className="h-px w-[60px] shrink-0 bg-[#002b5b]/35" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
