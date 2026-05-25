'use client';

import { Check, ChevronDown, Upload, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useId, useMemo, useRef, useState } from 'react';

import { PATHWAYS } from './constants';

type MaApplyModalProps = {
  onClose: () => void;
};

const LABEL_CLS = 'text-sm font-bold leading-[1.2] text-[#292929]';
const INPUT_CLS =
  'h-12 w-full rounded-lg border border-black/18 bg-white px-4 text-base leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] focus:border-[#00377c] focus:ring-1 focus:ring-[#00377c] transition-colors';

export default function MaApplyModal({ onClose }: MaApplyModalProps) {
  const titleId = useId();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    graduationYear: '',
    university: '',
    major: '',
    gpa: '',
    city: '',
    linkedin: '',
  });

  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  const [consent, setConsent] = useState({
    agreePrivacy: false,
    agreeNotify: false,
    confirmTruth: false,
  });

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const start = 1995;
    const end = currentYear + 1;
    const list: number[] = [];
    for (let y = end; y >= start; y -= 1) list.push(y);
    return list;
  }, []);

  const canSubmit = consent.agreePrivacy && consent.confirmTruth;

  function requestClose() {
    if (window.confirm('Bạn có muốn đóng modal không?')) onClose();
  }

  function togglePathway(n: number) {
    setSelectedPathways((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  }

  function handleCvFile(file: File | undefined) {
    if (!file) return;
    setCvFileName(file.name);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onClose();
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && requestClose()}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-[867px] overflow-y-auto rounded-[20px] bg-white p-6 shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:p-10"
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-[#474747] transition-colors hover:bg-black/8"
          aria-label="Đóng"
        >
          <X className="size-5" strokeWidth={2} />
        </button>

        <h2 id={titleId} className="text-2xl font-bold leading-[32px] text-black">
          Ứng tuyển ngay
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold leading-8 text-[#292929]">THÔNG TIN CỦA BẠN</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-name" className={LABEL_CLS}>
                  Họ tên*
                </label>
                <input
                  id="ma-apply-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Nhập họ tên"
                  className={INPUT_CLS}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-email" className={LABEL_CLS}>
                  Email*
                </label>
                <input
                  id="ma-apply-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="Nhập email"
                  className={INPUT_CLS}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-phone" className={LABEL_CLS}>
                  Số điện thoại*
                </label>
                <input
                  id="ma-apply-phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="Nhập số điện thoại"
                  className={INPUT_CLS}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-graduation-year" className={LABEL_CLS}>
                  Năm tốt nghiệp đại học*
                </label>
                <div className="relative">
                  <select
                    id="ma-apply-graduation-year"
                    required
                    value={form.graduationYear}
                    onChange={(e) => setForm((p) => ({ ...p, graduationYear: e.target.value }))}
                    className={`${INPUT_CLS} appearance-none pr-12`}
                  >
                    <option value="" disabled>
                      Chọn năm
                    </option>
                    {years.map((y) => (
                      <option key={y} value={String(y)}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 size-7 -translate-y-1/2 text-[#474747]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-university" className={LABEL_CLS}>
                  Trường đại học*
                </label>
                <input
                  id="ma-apply-university"
                  required
                  value={form.university}
                  onChange={(e) => setForm((p) => ({ ...p, university: e.target.value }))}
                  placeholder="Nhập tên trường đại học"
                  className={INPUT_CLS}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-major" className={LABEL_CLS}>
                  Chuyên ngành*
                </label>
                <input
                  id="ma-apply-major"
                  required
                  value={form.major}
                  onChange={(e) => setForm((p) => ({ ...p, major: e.target.value }))}
                  placeholder="Nhập tên ngành"
                  className={INPUT_CLS}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-gpa" className={LABEL_CLS}>
                  GPA / Xếp loại
                </label>
                <input
                  id="ma-apply-gpa"
                  value={form.gpa}
                  onChange={(e) => setForm((p) => ({ ...p, gpa: e.target.value }))}
                  placeholder="Ví dụ: 3.4/4.0 hoặc Giỏi"
                  className={INPUT_CLS}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-city" className={LABEL_CLS}>
                  Thành phố hiện tại*
                </label>
                <div className="relative">
                  <select
                    id="ma-apply-city"
                    required
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                    className={`${INPUT_CLS} appearance-none pr-12`}
                  >
                    <option value="" disabled>
                      Chọn thành phố
                    </option>
                    {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Khác'].map(
                      (c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ),
                    )}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 size-7 -translate-y-1/2 text-[#474747]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 rounded-[20px] px-7 py-5"
            style={{
              backgroundImage:
                'linear-gradient(189deg, rgba(246, 252, 255, 1) 0%, rgba(184, 221, 244, 1) 100%)',
            }}
          >
            <p className="text-lg font-semibold leading-8 text-[#292929]">Chọn pathways</p>
            <div className="flex flex-col gap-3">
              {PATHWAYS.map((p) => {
                const checked = selectedPathways.includes(p.n);
                const label = `Pathway_${String(p.n).padStart(2, '0')}: ${p.title}`;
                return (
                  <label key={p.n} className="flex cursor-pointer select-none items-center gap-2">
                    <span className="relative flex shrink-0">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => togglePathway(p.n)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden
                        className={`flex size-5 items-center justify-center rounded-[4px] border transition-colors ${
                          checked ? 'border-[#002b5b] bg-[#002b5b]' : 'border-black/18 bg-white'
                        }`}
                      >
                        {checked && <Check className="size-3 text-white" strokeWidth={3} />}
                      </span>
                    </span>
                    <span className="text-base leading-[1.4] text-[#474747]">{label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold leading-8 text-black">HỒ SƠ ỨNG TUYỂN</p>

            <div className="flex flex-col gap-4">
              <p className={LABEL_CLS}>CV của bạn*</p>
              <div
                className="flex h-[160px] cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed border-[#ccc] bg-white p-5 text-center transition-colors hover:border-[#00377c]"
                onClick={() => cvInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleCvFile(e.dataTransfer.files?.[0]);
                }}
              >
                <input
                  ref={cvInputRef}
                  id="ma-apply-cv"
                  type="file"
                  required
                  className="hidden"
                  accept=".pdf,.docx,.xlsx,.pptx,.jpg,.png"
                  onChange={(e) => handleCvFile(e.target.files?.[0])}
                />
                <Upload className="size-10 text-[#00377c]" aria-hidden />
                {cvFileName ? (
                  <p className="text-sm font-bold leading-[1.2] text-[#292929]">{cvFileName}</p>
                ) : (
                  <>
                    <p className="text-sm font-bold leading-[1.2] text-[#292929]">
                      Kéo thả hoặc chọn file
                    </p>
                    <p className="text-sm leading-[1.4] text-[#707070]">
                      Hỗ trợ các định dạng: PDF, DOCX, XLSX, PPTX, JPG, PNG (Tối đa 4MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-linkedin" className={LABEL_CLS}>
                  LinkedIn Profile
                </label>
                <input
                  id="ma-apply-linkedin"
                  type="url"
                  value={form.linkedin}
                  onChange={(e) => setForm((p) => ({ ...p, linkedin: e.target.value }))}
                  placeholder="linkedin.com/in/your-profile"
                  className={INPUT_CLS}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="ma-apply-city-2" className={LABEL_CLS}>
                  Thành phố hiện tại*
                </label>
                <div className="relative">
                  <select
                    id="ma-apply-city-2"
                    required
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                    className={`${INPUT_CLS} appearance-none pr-12`}
                  >
                    <option value="" disabled>
                      Chọn thành phố
                    </option>
                    {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Khác'].map(
                      (c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ),
                    )}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 size-7 -translate-y-1/2 text-[#474747]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {(
              [
                {
                  id: 'agreePrivacy',
                  required: true,
                  text: 'Tôi đồng ý để IPAG Group lưu trữ và xử lý thông tin cá nhân',
                },
                {
                  id: 'agreeNotify',
                  required: false,
                  text: 'Tôi muốn nhận thông báo khi IPAG mở đợt tuyển dụng MA tiếp theo (opt-in)',
                },
                {
                  id: 'confirmTruth',
                  required: true,
                  text: 'Tôi xác nhận tất cả thông tin cung cấp là chính xác và trung thực *',
                },
              ] as const
            ).map(({ id, required, text }) => {
              const checked = consent[id];
              return (
                <label
                  key={id}
                  htmlFor={`ma-apply-${id}`}
                  className="flex cursor-pointer select-none items-center gap-2"
                >
                  <span className="relative flex shrink-0">
                    <input
                      id={`ma-apply-${id}`}
                      type="checkbox"
                      required={required}
                      checked={checked}
                      onChange={() => setConsent((p) => ({ ...p, [id]: !p[id] }))}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden
                      className={`flex size-5 items-center justify-center rounded-[4px] border transition-colors ${
                        checked ? 'border-[#002b5b] bg-[#002b5b]' : 'border-black/18 bg-white'
                      }`}
                    >
                      {checked && <Check className="size-3 text-white" strokeWidth={3} />}
                    </span>
                  </span>
                  <span className="text-sm leading-[1.4] text-[#474747]">{text}</span>
                </label>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="h-12 w-full rounded-full text-lg font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-opacity disabled:opacity-50"
            style={{
              backgroundImage: 'linear-gradient(41deg, rgb(1, 58, 114) 0%, rgb(12, 113, 199) 100%)',
            }}
          >
            Nộp đơn
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
