'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftRight, ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

import homeBanner from '@/assets/home/banner.png';
import insightAbout from '@/assets/ipag-insight/about.jpg';
import insightMission from '@/assets/ipag-insight/mission.jpg';
import phamMinhHuong from '@/assets/ipag-insight/pham-minh-huong.png';
import Breadcrumbs from '@/components/Breadcrumbs';

function SectionStar() {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      aria-hidden
      className="h-4 w-[14px] shrink-0 md:h-6 md:w-[21px]"
    >
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
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'IPAG Insight' }]}
            />
          </div>
        </div>
      </div>

      <section
        className="section-padding relative overflow-hidden bg-cover bg-center bg-no-repeat"
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

        <div className="section-content relative z-10 flex flex-col items-center gap-5 text-center md:gap-6">
          <div className="flex max-w-[900px] flex-col items-center gap-3 md:gap-4">
            <p className="w-full max-w-[812px] text-[12px] font-medium leading-[22px] text-white md:text-[16px] md:leading-[32px]">
              IPAG GROUP - CAPABILITY BANK
            </p>
            <div className="text-[0px] uppercase tracking-[2px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-[24px] md:text-[52px]">
                <span className="font-bold leading-[40px] text-[#fbc17b] md:leading-[70px]">
                  Ngân hàng Năng lực
                  <br aria-hidden />
                </span>
                <span className="font-normal leading-[40px] text-white md:leading-[70px]">
                  đầu tiên tại Việt Nam
                </span>
              </p>
            </div>
          </div>
          <p className="max-w-[900px] text-[14px] font-medium leading-[22px] text-white md:text-[18px] md:leading-[32px] md:tracking-[0.18px]">
            IPAG phát triển mô hình Capability Bank – mô hình đầu tư kết hợp vốn tài chính với ba năng lực
            vận hành cốt lõi: Con người, Công nghệ và Chuỗi giá trị. IPAG giúp doanh nghiệp khai phóng tiềm
            năng tăng trưởng, nâng cao hiệu quả vận hành và kiến tạo giá trị bền vững trong dài hạn.
          </p>
        </div>
      </section>

      <section className="section-padding relative max-md:py-11 overflow-hidden bg-gradient-to-b from-[#fef6eb] to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 70% 20%, #fff 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 20% 80%, #fff 0%, transparent 50%)`,
          }}
        />

        <div className="section-content relative flex flex-col gap-8 md:gap-[52px]">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <p className="w-full max-w-[812px] text-[14px] font-normal leading-[22px] text-[#707070] md:leading-[32px]">
              OUR PURPOSE
            </p>
            <h2 className="text-[20px] font-extrabold uppercase leading-[26px] tracking-[1px] text-[#292929] md:text-[40px] md:leading-[60px]">
              Kiến tạo di sản bền vững
            </h2>
          </div>

          <div className="flex w-full flex-col gap-7 md:gap-10">
            <div className="flex flex-col gap-5 md:gap-5">
              <div className="flex items-center gap-2 md:gap-3">
                <SectionStar />
                <h3 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] md:text-[30px] md:tracking-[0.3px]">
                  Về IPAG
                </h3>
                <div className="relative h-px w-[60px] shrink-0 bg-[#002b5b]/30" aria-hidden />
              </div>

              <div className="flex flex-col gap-6 lg:flex-row lg:gap-[100px]">
                <div className="relative w-full shrink-0 overflow-hidden rounded-[20px] lg:rounded-[32px] lg:w-[588px] lg:max-w-[50%]">
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
                <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <p className="text-[16px] font-bold leading-[1.2] text-[#292929] md:text-[24px]">
                      Trở thành Capability Bank hàng đầu Đông Nam Á.
                    </p>
                    <p className="text-[14px] font-normal leading-[1.4] tracking-[0.14px] text-[#474747] md:text-[16px] md:leading-[1.48] md:tracking-[0.16px]">
                      Nơi hội tụ nguồn lực để khai phóng tiềm năng con người và doanh nghiệp — kiến tạo những
                      câu chuyện thành công bền vững cho xã hội.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-4 md:gap-5">
                    <li className="flex gap-2 md:gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] md:size-auto md:p-3">
                        <Users className="size-5 text-[#002b5b] md:size-6" strokeWidth={1.75} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1 text-[14px] leading-[1.32] md:text-[16px] md:leading-normal">
                        <p className="font-bold text-[#292929] md:leading-[1.4]">Tái tạo Con người</p>
                        <p className="font-normal tracking-[0.14px] text-[#474747] md:leading-[1.4] md:tracking-[0.16px]">
                          Biến nhân tài tiềm năng thành những người dẫn dắt thay đổi.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ffeeda] md:size-auto md:p-3">
                        <TrendingUp className="size-5 text-[#c45a12] md:size-6" strokeWidth={1.75} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1 text-[14px] leading-[1.32] md:text-[16px] md:leading-normal">
                        <p className="font-bold text-[#292929] md:leading-[1.4]">Tái cấu trúc Doanh nghiệp</p>
                        <p className="font-normal tracking-[0.14px] text-[#474747] md:leading-[1.4] md:tracking-[0.16px]">
                          Giúp doanh nghiệp trở nên phát triển hơn.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2 md:gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#d9e6f2] md:size-auto md:p-3">
                        <Sparkles className="size-5 text-[#002b5b] md:size-6" strokeWidth={1.75} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1 text-[14px] leading-[1.32] md:text-[16px] md:leading-normal">
                        <p className="font-bold text-[#292929] md:leading-[1.4]">Tái định nghĩa Thành công</p>
                        <p className="font-normal tracking-[0.14px] text-[#474747] md:leading-[1.4] md:tracking-[0.16px]">
                          Chứng minh lợi nhuận và phụng sự có thể cùng tồn tại.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-[#002b5b]/15" aria-hidden />

            <div className="flex flex-col gap-5 md:gap-5">
              <div className="flex items-center justify-end gap-3 md:gap-3">
                <div className="relative h-px w-[60px] shrink-0 bg-[#002b5b]/30" aria-hidden />
                <h3 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] md:text-[30px] md:tracking-[0.3px]">
                  Sứ mệnh{' '}
                </h3>
                <SectionStar />
              </div>

              <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-[100px]">
                <div className="relative w-full shrink-0 overflow-hidden rounded-[20px] lg:rounded-[32px] lg:w-[588px] lg:max-w-[50%]">
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
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <p className="text-[16px] font-bold leading-[1.4] text-[#292929] md:text-[24px]">
                      Vận hành mô hình Capability Bank — kết hợp vốn tài chính với năng lực thực thi.
                    </p>
                    <p className="text-[14px] font-normal leading-[1.4] tracking-[0.14px] text-[#474747] md:text-[16px] md:leading-[1.48] md:tracking-[0.16px]">
                      Chúng tôi đầu tư vào tiềm năng và thực thi tái cấu trúc toàn diện — để biến những doanh
                      nghiệp tốt thành những doanh nghiệp xuất sắc.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 md:gap-5">
                    <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-4">
                      <div className="flex flex-1 flex-col gap-2 rounded-[12px] border-l-[3px] border-[#002b5b] bg-[#e9f6ff] px-4 py-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] md:rounded-[20px] md:px-6">
                        <p className="text-center text-[16px] font-bold uppercase leading-[1.4] text-[#002b5b] md:text-[20px]">
                          TAC
                        </p>
                        <p className="text-center text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-[#474747] md:text-[16px] md:leading-[1.48] md:tracking-[0.32px]">
                          Transform – Amplify – Continuation
                        </p>
                      </div>
                      <ArrowLeftRight
                        className="mx-auto size-6 shrink-0 text-[#002b5b] md:mx-0 md:size-7"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <div className="flex flex-1 flex-col gap-2 rounded-[12px] border-l-[3px] border-[#002b5b] bg-[#e9f6ff] px-4 py-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] md:rounded-[20px] md:px-6">
                        <p className="text-center text-[16px] font-bold uppercase leading-[1.4] text-[#002b5b] md:text-[20px]">
                          CAT
                        </p>
                        <p className="text-center text-[14px] font-normal leading-[1.4] tracking-[0.28px] text-[#474747] md:text-[16px] md:leading-[1.48] md:tracking-[0.32px]">
                          Connect with Heart – Add Values – Transfer with Excellence
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 text-[12px] md:flex-row md:gap-[62px] md:text-base">
                      <div className="flex flex-1 flex-col gap-0.5 sm:gap-1">
                        <p className="font-semibold leading-[1.4] text-[#292929] md:text-[16px]">
                          TAC: TỐI ƯU NỘI LỰC
                        </p>
                        <p className="font-normal leading-[1.4] text-[#474747] md:text-[14px]">
                          Nhận diện - Khuếch đại - Tiếp nối
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col gap-0.5 sm:gap-1">
                        <p className="font-semibold leading-[1.4] text-[#292929] md:text-[16px]">
                          CAT: CỘNG HƯỞNG HỆ SINH THÁI
                        </p>
                        <p className="font-normal leading-[1.4] text-[#474747] md:text-[14px]">
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

      <section className="section-padding max-md:py-11 bg-[#faf8f4]">
        <div className="section-content flex flex-col items-center gap-8 md:gap-[52px]">
          <h2 className="text-center text-[20px] font-extrabold uppercase leading-8 tracking-[1px] text-[#292929] md:text-[40px] md:leading-[60px]">
            Thông điệp từ ipag
          </h2>

          <div className="flex w-full flex-col gap-8 overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] md:gap-10 lg:flex-row lg:items-center lg:gap-[68px] lg:p-0">
            <div className="relative flex shrink-0 px-4 pt-8 lg:pl-0 lg:pt-0">
              <div
                className="hidden h-[502px] w-[155px] rounded-tl-[12px] rounded-tr-[32px] lg:mr-[-112px] lg:block"
                style={{
                  backgroundImage:
                    'linear-gradient(172.97deg, rgb(255, 218, 177) 1.17%, rgb(236, 131, 70) 103.94%)',
                }}
                aria-hidden
              />
              <div
                className="absolute hidden h-[271px] w-[155px] rounded-tr-[32px] lg:left-[400px] lg:top-[231px] lg:block"
                style={{
                  backgroundImage:
                    'linear-gradient(201.18deg, rgb(2, 100, 179) 6.27%, rgb(0, 43, 91) 95.18%)',
                }}
                aria-hidden
              />
              <div className="relative z-10 mx-auto size-[min(100%,466px)] max-h-[466px] min-h-[280px] min-w-[280px] self-end overflow-hidden rounded-tl-[32px] rounded-tr-[40px] lg:mr-[-112px] lg:mx-0 lg:rounded-tr-[100px]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-tl-[32px] rounded-tr-[40px] lg:rounded-tr-[100px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(153.91deg, rgb(255, 255, 255) 24.99%, rgb(255, 238, 218) 84.93%)',
                  }}
                />
                <Image
                  src={phamMinhHuong}
                  alt="Phạm Minh Hương"
                  width={466}
                  height={466}
                  className="relative z-1 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col gap-3 px-6 pb-10 md:gap-7 lg:py-3 lg:pr-16 lg:pl-0">
              <div className="relative z-1 flex flex-col gap-3 pt-10 md:gap-7 lg:pt-4">
                <p className="mx-auto max-w-[600px] text-center text-[16px] font-bold leading-[1.52] tracking-[0.16px] text-[#474747] md:text-[24px] md:leading-[1.6] md:tracking-[0.24px]">
                  Tại IPAG, chúng tôi không chỉ rót vốn, chúng tôi{' '}
                  <br className="hidden md:block" />
                  <span className="font-extrabold text-[#de8f10]">đầu tư năng lực</span>.
                  Chúng tôi không chỉ xây dựng doanh nghiệp, chúng tôi{' '}
                  <span className="font-extrabold text-[#de8f10]">kiến tạo tầm vóc.</span>
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-[47px] shrink-0 bg-[#002b5b]/35 md:w-[60px]" aria-hidden />
                  <div className="flex flex-col gap-0.5 leading-[1.4] md:gap-1">
                    <p className="text-center text-[14px] font-bold uppercase leading-[1.4] text-[#002b5b] md:text-[20px] lg:text-left">
                      Phạm minh hương
                    </p>
                    <p className="text-center text-[12px] font-normal leading-[1.32] text-[#474747] md:text-[16px] md:leading-normal lg:text-left">
                      Thành viên sáng lập IPAG
                    </p>
                  </div>
                  <div className="h-px w-[47px] shrink-0 bg-[#002b5b]/35 md:w-[60px]" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-7 md:py-20"
        style={{
          background:
            'linear-gradient(341deg, rgba(0, 116, 162, 0.20) 11.61%, rgba(170, 231, 255, 0.20) 94.37%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-72 opacity-45"
          style={{
            background:
              'radial-gradient(circle at 0% 100%, rgba(125,188,228,0.35) 0%, rgba(125,188,228,0) 72%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-64 w-72 opacity-45"
          style={{
            background:
              'radial-gradient(circle at 100% 100%, rgba(125,188,228,0.35) 0%, rgba(125,188,228,0) 72%)',
          }}
        />

        <div className="section-content px-5 md:px-0">
          <div className="mx-auto flex max-w-[920px] flex-col items-center gap-4 text-center md:gap-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-[16px] font-bold leading-6 tracking-[0.16px] text-[#002b5b] uppercase md:text-[40px] md:leading-[56px] md:tracking-[0.4px]">
                Khám phá hệ sinh thái IPAG
              </h2>
              <p className="text-[14px] font-medium leading-5 tracking-[0.14px] text-[#474747] md:mt-2 md:text-[20px] md:leading-7 md:tracking-[0.2px]">
                Tìm hiểu thêm về tầm nhìn, sứ mệnh và các lĩnh vực hoạt động của tập đoàn IPA.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-9 w-[208px] max-w-full items-center justify-center gap-2 rounded-full px-3 text-[14px] leading-[1.4] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition hover:brightness-95 md:mt-6 md:h-12 md:w-full md:max-w-[276px] md:text-[18px]"
              style={{
                background: 'linear-gradient(76.71deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
              }}
            >
              TÌM HIỂU THÊM
              <ArrowRight className="size-5 md:size-6" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
