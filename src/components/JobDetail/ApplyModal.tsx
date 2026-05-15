'use client';

import { BriefcaseBusiness, ChevronDown, Clock3, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import UploadField from './UploadField';

type ApplyModalProps = {
  onClose: () => void;
};

export default function ApplyModal({ onClose }: ApplyModalProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-[780px] flex-col rounded-xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1 text-[#474747] transition-colors hover:bg-[#f0f0f0]"
          aria-label="Đóng"
        >
          <X className="size-6" />
        </button>

        {/* Scrollable content */}
        <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-10 pt-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {/* Header */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit rounded bg-[#d9e6f2] px-2 py-1 text-[12px] font-semibold leading-[1.4] text-[#707070]">
              Chuyển đổi số
            </div>
            <h2 className="text-[24px] leading-[32px] font-bold text-black">
              Ứng tuyển - Chuyên viên phân tích nghiệp vụ (Digital BA)
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-[16px] leading-[26px] text-[#474747]">
              <span className="flex items-center gap-1">
                <BriefcaseBusiness className="size-5 text-[#707070]" />
                <span>
                  <span className="font-semibold">Đơn vị:</span> IPAS - IPAG Group
                </span>
              </span>
              <span className="size-1 rounded-full bg-black/25" />
              <span className="flex items-center gap-1">
                <MapPin className="size-5 text-[#707070]" />
                <span>
                  <span className="font-semibold">Địa điểm:</span> Hà Nội (Cầu Giấy)
                </span>
              </span>
              <span className="size-1 rounded-full bg-black/25" />
              <span className="flex items-center gap-1">
                <Clock3 className="size-5 text-[#707070]" />
                <span>
                  <span className="font-semibold">Hạn chót:</span> 30/04/2026
                </span>
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-8">
            {/* Thông tin cá nhân */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] leading-[32px] font-semibold text-black">
                THÔNG TIN CỦA BẠN
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="apply-name"
                    className="text-[14px] leading-[1.2] font-bold text-[#292929]"
                  >
                    Họ tên*
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    placeholder="Nhập họ tên"
                    className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-[16px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="apply-email"
                      className="text-[14px] leading-[1.2] font-bold text-[#292929]"
                    >
                      Email*
                    </label>
                    <input
                      id="apply-email"
                      type="email"
                      placeholder="Nhập email"
                      className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-[16px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="apply-phone"
                      className="text-[14px] leading-[1.2] font-bold text-[#292929]"
                    >
                      Số điện thoại*
                    </label>
                    <input
                      id="apply-phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-[16px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hồ sơ ứng tuyển */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] leading-[32px] font-semibold text-black">
                HỒ SƠ ỨNG TUYỂN
              </h3>
              <div className="flex flex-col gap-4">
                <UploadField
                  id="apply-cv"
                  label="CV của bạn*"
                  hint="Hỗ trợ các định dạng: PDF, DOCX, XLSX, PPTX, JPG, PNG (Tối đa 4MB)"
                />
                <UploadField
                  id="apply-cover"
                  label="Thư giới thiệu (nếu có)"
                  hint="Định dạng: PDF, DOCX, XLSX, PPTX, JPG, PNG (Tối đa 4MB)"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="apply-linkedin"
                      className="text-[14px] leading-[1.2] font-bold text-[#292929]"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      id="apply-linkedin"
                      type="url"
                      placeholder="linkedin.com/in/your-profile"
                      className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-[16px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="apply-source"
                      className="text-[14px] leading-[1.2] font-bold text-[#292929]"
                    >
                      Bạn biết đến IPAG qua đâu?
                    </label>
                    <div className="relative">
                      <select
                        id="apply-source"
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-black/18 bg-white px-4 py-[10px] text-[16px] leading-[1.4] text-[#474747] outline-none focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                      >
                        <option value="" disabled>
                          Chọn nguồn
                        </option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="facebook">Facebook</option>
                        <option value="friend">Bạn bè / Người thân</option>
                        <option value="website">Website IPAG</option>
                        <option value="other">Khác</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#474747]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox đồng ý */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="size-5 rounded border border-black/18 accent-[#0d5ba8]"
              />
              <span className="text-[14px] leading-[1.4] text-[#474747]">
                Tôi đã đọc và đồng ý với điều khoản tuyển dụng của IPAG
              </span>
            </label>
          </div>
        </div>

        {/* Footer cố định */}
        <div className="shrink-0 px-10 pb-10 pt-6">
          <button
            type="submit"
            disabled={!agreed}
            className="h-12 w-full rounded-full text-[18px] font-bold uppercase leading-[1.4] tracking-wide text-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)] transition-opacity disabled:opacity-50"
            style={{
              backgroundImage: 'linear-gradient(56deg, rgb(1,58,114) 3.48%, rgb(12,113,199) 83.47%)',
            }}
          >
            Nộp đơn
          </button>
        </div>
      </div>
    </div>
  );
}
