'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

type ContactSuccessModalProps = {
  onClose: () => void;
};

export default function ContactSuccessModal({ onClose }: ContactSuccessModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />

      <motion.div
        className="relative z-10 flex w-full max-w-[620px] flex-col gap-10 rounded-[20px] bg-white p-6 shadow-2xl sm:p-8 md:p-10"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-[#292929] transition-colors hover:bg-black/5"
          aria-label="Đóng"
        >
          <X className="size-5" strokeWidth={2} />
        </button>

        <div className="flex flex-col items-center gap-7">
          <Image
            src="/contact/figma/contact-success-illustration.svg"
            alt="Gửi thông tin thành công"
            width={138}
            height={128}
            priority
          />

          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-bold leading-8 text-black">Cảm ơn bạn đã liên hệ!</h2>
            <p className="text-base leading-[22px] text-black">
              Thông tin của bạn đã được tiếp nhận thành công
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-[32px_1fr] gap-x-4 gap-y-5">
            <div className="relative flex justify-center">
              <div className="flex size-8 items-center justify-center rounded-[4px] bg-gradient-to-b from-[#3192E3] to-[#01386F] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),0px_20px_25px_-5px_rgba(0,0,0,0.10)]">
                <span className="text-base font-extrabold leading-8 text-white">1</span>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-8 -bottom-5 -translate-x-1/2 border-l border-dashed border-[#002B5B]/70" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold leading-6 text-[#292929]">
                Đội ngũ nhân sự xem xét
              </p>
              <p className="text-sm leading-5 text-[#474747]">
                Chúng tôi sẽ rà soát thông tin và đối chiếu với các vị trí đang tuyển phù hợp.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex size-8 items-center justify-center rounded-[4px] bg-gradient-to-b from-[#3192E3] to-[#01386F] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),0px_20px_25px_-5px_rgba(0,0,0,0.10)]">
                <span className="text-base font-extrabold leading-8 text-white">2</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-bold leading-6 text-[#292929]">
                Mời phỏng vấn nếu phù hợp
              </p>
              <p className="text-sm leading-5 text-[#474747]">
                IPAG sẽ hẹn lịch phỏng vấn online hoặc trực tiếp nếu có vị trí phù hợp.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full border border-[#00377C] text-base font-bold text-[#002B5B] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#00377C]/5"
          >
            ĐÃ HIỂU
          </button>
          <Link
            href="/jobs"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(41deg,#013A72_0%,#0C71C7_100%)] text-base font-bold uppercase text-white shadow-[0px_4px_8px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-90"
            onClick={onClose}
          >
            XEM VỊ TRÍ TUYỂN DỤNG
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
