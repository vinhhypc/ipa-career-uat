'use client';

import { BriefcaseBusiness, ChevronDown, Clock3, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import {
  isValidEmail,
  isValidFullName,
  isValidLinkedInProfileUrl,
  isValidPhoneNumber,
} from '@/lib/validation';
import UploadField from './UploadField';

type ApplyModalProps = {
  onClose: () => void;
};

export default function ApplyModal({ onClose }: ApplyModalProps) {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', linkedin: '' });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    linkedin: false,
  });
  const [files, setFiles] = useState<{ cv: File | null; cover: File | null }>({
    cv: null,
    cover: null,
  });
  const [filesTouched, setFilesTouched] = useState({ cv: false });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isNameValid = isValidFullName(form.name);
  const isEmailValid = isValidEmail(form.email);
  const isPhoneValid = isValidPhoneNumber(form.phone);
  const isLinkedInValid = !form.linkedin.trim() || isValidLinkedInProfileUrl(form.linkedin);
  const isCvValid = Boolean(files.cv);

  const nameError =
    submitAttempted || touched.name
      ? !form.name.trim()
        ? 'Vui lòng nhập họ tên.'
        : form.name.trim().length > 100
          ? 'Họ tên không được vượt quá 100 ký tự.'
          : isNameValid
            ? ''
            : 'Họ tên không được chứa ký tự đặc biệt.'
      : '';

  const emailError =
    submitAttempted || touched.email
      ? !form.email.trim()
        ? 'Vui lòng nhập email.'
        : isEmailValid
          ? ''
          : 'Email không hợp lệ.'
      : '';

  const phoneError =
    submitAttempted || touched.phone
      ? !form.phone.trim()
        ? 'Vui lòng nhập số điện thoại.'
        : isPhoneValid
          ? ''
          : 'Số điện thoại không hợp lệ.'
      : '';

  const linkedinError =
    submitAttempted || touched.linkedin
      ? form.linkedin.trim() && !isLinkedInValid
        ? 'LinkedIn Profile không hợp lệ.'
        : ''
      : '';

  const cvError =
    submitAttempted || filesTouched.cv ? (!files.cv ? 'Vui lòng tải lên CV của bạn.' : '') : '';

  const canSubmit =
    agreed && isNameValid && isEmailValid && isPhoneValid && isLinkedInValid && isCvValid;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (!canSubmit) return;
  }

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50 p-4"
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

        <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
          {/* Scrollable content */}
          <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-10 pt-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex w-fit rounded bg-[#d9e6f2] px-2 py-1 text-xs font-semibold leading-[1.4] text-[#707070]">
                Chuyển đổi số
              </div>
              <h2 className="text-2xl leading-[32px] font-bold text-black">
                Ứng tuyển - Chuyên viên phân tích nghiệp vụ (Digital BA)
              </h2>
              <div className="flex flex-nowrap items-center gap-3 overflow-x-auto text-sm leading-[22px] text-[#474747] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <BriefcaseBusiness className="size-5 text-[#707070]" />
                  <span>
                    <span className="font-semibold">Đơn vị:</span> IPAS - IPAG Group
                  </span>
                </span>
                <span className="size-1 rounded-full bg-black/25" />
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <MapPin className="size-5 text-[#707070]" />
                  <span>
                    <span className="font-semibold">Địa điểm:</span> Hà Nội (Cầu Giấy)
                  </span>
                </span>
                <span className="size-1 rounded-full bg-black/25" />
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <Clock3 className="size-5 text-[#707070]" />
                  <span>
                    <span className="font-semibold">Hạn chót:</span> 30/04/2026
                  </span>
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              {/* Thông tin cá nhân */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg leading-[32px] font-semibold text-black">
                  THÔNG TIN CỦA BẠN
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="apply-name"
                      className="text-sm leading-[1.2] font-bold text-[#292929]"
                    >
                      Họ tên*
                    </label>
                    <input
                      id="apply-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                      placeholder="Nhập họ tên"
                      aria-invalid={!!nameError}
                      aria-describedby={nameError ? 'apply-name-error' : undefined}
                      className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-base leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                    />
                    {nameError ? (
                      <p id="apply-name-error" className="text-sm leading-normal text-red-600">
                        {nameError}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="apply-email"
                        className="text-sm leading-[1.2] font-bold text-[#292929]"
                      >
                        Email*
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                        placeholder="Nhập email"
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? 'apply-email-error' : undefined}
                        className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-base leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                      />
                      {emailError ? (
                        <p id="apply-email-error" className="text-sm leading-normal text-red-600">
                          {emailError}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="apply-phone"
                        className="text-sm leading-[1.2] font-bold text-[#292929]"
                      >
                        Số điện thoại*
                      </label>
                      <input
                        id="apply-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                        placeholder="Nhập số điện thoại"
                        aria-invalid={!!phoneError}
                        aria-describedby={phoneError ? 'apply-phone-error' : undefined}
                        className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-base leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                      />
                      {phoneError ? (
                        <p id="apply-phone-error" className="text-sm leading-normal text-red-600">
                          {phoneError}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hồ sơ ứng tuyển */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg leading-[32px] font-semibold text-black">HỒ SƠ ỨNG TUYỂN</h3>
                <div className="flex flex-col gap-4">
                  <UploadField
                    id="apply-cv"
                    label="CV của bạn*"
                    hint="Hỗ trợ các định dạng: PDF, DOCX, XLSX, PPTX, JPG, PNG (Tối đa 4MB)"
                    file={files.cv}
                    error={cvError}
                    onFileChange={(file) => {
                      setFiles((p) => ({ ...p, cv: file }));
                      setFilesTouched((p) => ({ ...p, cv: true }));
                    }}
                  />
                  <UploadField
                    id="apply-cover"
                    label="Thư giới thiệu (nếu có)"
                    hint="Định dạng: PDF, DOCX, XLSX, PPTX, JPG, PNG (Tối đa 4MB)"
                    file={files.cover}
                    onFileChange={(file) => setFiles((p) => ({ ...p, cover: file }))}
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="apply-linkedin"
                        className="text-sm leading-[1.2] font-bold text-[#292929]"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        id="apply-linkedin"
                        type="url"
                        value={form.linkedin}
                        onChange={(e) => setForm((p) => ({ ...p, linkedin: e.target.value }))}
                        onBlur={() => setTouched((p) => ({ ...p, linkedin: true }))}
                        placeholder="linkedin.com/in/your-profile"
                        aria-invalid={!!linkedinError}
                        aria-describedby={linkedinError ? 'apply-linkedin-error' : undefined}
                        className="w-full rounded-lg border border-black/18 bg-white px-4 py-[10px] text-base leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
                      />
                      {linkedinError ? (
                        <p
                          id="apply-linkedin-error"
                          className="text-sm leading-normal text-red-600"
                        >
                          {linkedinError}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="apply-source"
                        className="text-sm leading-[1.2] font-bold text-[#292929]"
                      >
                        Bạn biết đến IPAG qua đâu?
                      </label>
                      <div className="relative">
                        <select
                          id="apply-source"
                          defaultValue=""
                          className="w-full appearance-none rounded-lg border border-black/18 bg-white px-4 py-[10px] text-base leading-[1.4] text-[#474747] outline-none focus:border-[#0d5ba8] focus:ring-1 focus:ring-[#0d5ba8]"
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
              <label className="mb-4 flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="size-5 rounded border border-black/18 accent-[#0d5ba8]"
                />
                <span className="text-sm leading-[1.4] text-[#474747]">
                  Tôi đã đọc và đồng ý với điều khoản tuyển dụng của IPAG
                </span>
              </label>
            </div>
          </div>

          {/* Footer cố định */}
          <div className="shrink-0 px-10 pb-10 pt-6">
            <button
              type="submit"
              disabled={!canSubmit}
              className="h-12 w-full cursor-pointer rounded-full text-lg font-bold uppercase leading-[1.4] tracking-wide text-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg enabled:active:translate-y-0 enabled:active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5ba8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(56deg, rgb(1,58,114) 3.48%, rgb(12,113,199) 83.47%)',
              }}
            >
              Nộp đơn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
