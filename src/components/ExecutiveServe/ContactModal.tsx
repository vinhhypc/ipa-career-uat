'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

import { EXPERTISE_OPTIONS, MAX_EXPERTISE } from './constants';

interface ContactModalProps {
  onClose: () => void;
}

const INPUT_CLS =
  'h-12 w-full rounded-lg border border-black/18 px-4 text-[16px] text-[#292929] placeholder:text-[#707070] outline-none focus:border-[#00377c] transition-colors bg-white';

const LABEL_CLS = 'text-[14px] font-bold leading-[1.2] text-[#292929]';

export default function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    expertise: [] as string[],
    otherExpertise: '',
    linkedin: '',
    agreePrivacy: false,
    agreeNotify: false,
  });

  function toggleExpertise(id: string) {
    setForm((prev) => {
      const has = prev.expertise.includes(id);
      if (has) return { ...prev, expertise: prev.expertise.filter((e) => e !== id) };
      if (prev.expertise.length >= MAX_EXPERTISE) return prev;
      return { ...prev, expertise: [...prev.expertise, id] };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onClose();
  }

  const hasOther = form.expertise.includes('other');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />

      {/* Panel */}
      <motion.div
        className="relative z-10 flex w-full max-w-[660px] max-h-[90vh] flex-col overflow-y-auto rounded-[12px] bg-white p-8 md:p-10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-[#474747] transition-colors hover:bg-black/8"
          aria-label="Đóng"
        >
          <X className="size-5" strokeWidth={2} />
        </button>

        <h2 className="text-[24px] font-bold leading-[32px] text-black">Để lại thông tin</h2>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
          {/* ── Họ tên + Số điện thoại ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="modal-name" className={LABEL_CLS}>
                Họ tên*
              </label>
              <input
                id="modal-name"
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Nhập họ tên"
                className={INPUT_CLS}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="modal-phone" className={LABEL_CLS}>
                Số điện thoại*
              </label>
              <input
                id="modal-phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Nhập số điện thoại"
                className={INPUT_CLS}
              />
            </div>
          </div>

          {/* ── Lĩnh vực chuyên môn ── */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-[16px] font-semibold text-black">Lĩnh vực chuyên môn*</span>
              <span className="text-[14px] italic text-[#707070]">
                (Bắt buộc · Tối đa {MAX_EXPERTISE} lựa chọn)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {EXPERTISE_OPTIONS.map((opt) => {
                const checked = form.expertise.includes(opt.id);
                const disabled = !checked && form.expertise.length >= MAX_EXPERTISE;
                return (
                  <label
                    key={opt.id}
                    htmlFor={`expertise-${opt.id}`}
                    className={`flex cursor-pointer select-none items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-40' : ''}`}
                  >
                    <span className="relative flex shrink-0">
                      <input
                        id={`expertise-${opt.id}`}
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => toggleExpertise(opt.id)}
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
                    <span className="text-[16px] leading-[1.4] text-[#474747]">{opt.label}</span>
                  </label>
                );
              })}
            </div>

            <input
              value={form.otherExpertise}
              onChange={(e) => setForm((p) => ({ ...p, otherExpertise: e.target.value }))}
              placeholder="Ghi rõ nếu chọn khác"
              disabled={!hasOther}
              className={`${INPUT_CLS} disabled:cursor-not-allowed disabled:opacity-50`}
            />
          </div>

          {/* ── LinkedIn ── */}
          <div className="flex flex-col gap-2">
            <label htmlFor="modal-linkedin" className={LABEL_CLS}>
              LinkedIn Profile
            </label>
            <input
              id="modal-linkedin"
              type="url"
              value={form.linkedin}
              onChange={(e) => setForm((p) => ({ ...p, linkedin: e.target.value }))}
              placeholder="linkedin.com/in/your-profile"
              className={INPUT_CLS}
            />
          </div>

          {/* ── Consent ── */}
          <div className="flex flex-col gap-3">
            {(
              [
                {
                  id: 'agreePrivacy',
                  text: 'Tôi đồng ý để IPAG Group lưu trữ thông tin cá nhân theo Chính sách Bảo mật.',
                },
                {
                  id: 'agreeNotify',
                  text: 'Tôi muốn nhận thông báo khi có vị trí Executive phù hợp mới (opt-in)',
                },
              ] as const
            ).map(({ id, text }) => {
              const checked = form[id];
              return (
                <label
                  key={id}
                  htmlFor={`modal-${id}`}
                  className="flex cursor-pointer select-none items-start gap-3"
                >
                  <span className="relative mt-0.5 flex shrink-0">
                    <input
                      id={`modal-${id}`}
                      type="checkbox"
                      checked={checked}
                      onChange={() => setForm((p) => ({ ...p, [id]: !p[id] }))}
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
                  <span className="text-[14px] leading-normal text-[#474747]">{text}</span>
                </label>
              );
            })}
          </div>

          {/* ── Submit ── */}
          <button
            type="submit"
            className="h-12 w-full cursor-pointer rounded-full bg-[linear-gradient(56deg,#013A72_3.48%,#0C71C7_83.47%)] text-[18px] font-bold uppercase tracking-wide text-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-90"
          >
            Gửi thông tin
          </button>
        </form>
      </motion.div>
    </div>
  );
}
