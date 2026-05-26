'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import CheckboxRow from '../CheckboxRow';
import FieldInput from '../FieldInput';
import FieldSelect from '../FieldSelect';
import FormSectionTitle from '../FormSectionTitle';
import { ITEM_REVEAL, PERSONAL_FIELDS, STAGGER_CHILDREN } from '../constants';
import ContactSuccessModal from './ContactSuccessModal';

export default function ContactFormSection() {
  const [message, setMessage] = useState('');
  const [consentStore, setConsentStore] = useState(true);
  const [consentNotify, setConsentNotify] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const messageCount = useMemo(() => message.length, [message]);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <ContactSuccessModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <section className="relative isolate overflow-hidden px-4 pb-20 pt-10 md:px-12 lg:px-20 xl:px-[240px]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="absolute inset-0 bg-white" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(170, 231, 255, 0.15) 0%, rgba(0, 116, 162, 0.15) 100%)',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact/figma/contact-form-bg-left.png"
            alt=""
            width={566}
            height={308}
            className="absolute bottom-0 left-0 block h-auto w-[min(566px,50vw)] max-w-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact/figma/contact-form-bg-right.png"
            alt=""
            width={566}
            height={308}
            className="absolute bottom-0 right-0 block h-auto w-[min(566px,50vw)] max-w-none"
          />
        </div>

        <motion.div
          className="section-content relative z-10"
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.div className="mx-auto w-full max-w-[860px] text-center" variants={ITEM_REVEAL}>
            <p className="text-xs font-bold uppercase text-[#145194]">ĐỂ LẠI THÔNG TIN</p>
            <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-[1px] text-[#292929] md:text-3xl md:leading-[40px]">
              Chúng tôi sẽ liên hệ lại
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6b7280] md:text-base md:leading-7">
              Team IPAC đọc tất cả CV và phản hồi trong 2 ngày làm việc - không có CV nào bị bỏ qua.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 w-full max-w-[960px] overflow-hidden rounded-[18px] border border-[#d6dbe3] bg-white shadow-[0_10px_26px_rgba(0,0,0,0.10)]"
            variants={ITEM_REVEAL}
          >
            <form
              className="p-5 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            >
              <FormSectionTitle title="THÔNG TIN CỦA BẠN" />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {PERSONAL_FIELDS.map((f) => (
                  <FieldInput key={f.name} field={f} />
                ))}

                <FieldSelect
                  label="Thành phố hiện tại"
                  required
                  name="currentCity"
                  options={['Hà Nội', 'TP. Hồ Chí Minh']}
                  defaultValue="Hà Nội"
                />
              </div>

              <div className="mt-6">
                <FormSectionTitle title="THÔNG TIN NGHỀ NGHIỆP" />
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <FieldSelect
                    label="Lĩnh vực chuyên môn"
                    required
                    name="specialty"
                    options={['Chọn lĩnh vực', 'Finance', 'Technology', 'Operation', 'Other']}
                    defaultValue="Chọn lĩnh vực"
                  />
                  <FieldSelect
                    label="Số năm kinh nghiệm"
                    required
                    name="experience"
                    options={['Chọn', '0-1', '2-3', '4-6', '7+']}
                    defaultValue="Chọn"
                  />
                  <FieldInput
                    field={{
                      name: 'linkedin',
                      label: 'LinkedIn Profile',
                      required: true,
                      placeholder: 'linken.com/in/your-profile',
                      colSpan: 2,
                    }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-xs font-bold text-[#292929]">
                  Gửi tin nhắn cho chúng tôi
                </label>
                <div className="mt-3 rounded-[10px] border border-[#d6dbe3] bg-white px-3 py-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value.slice(0, 100))}
                    placeholder="Nhập văn bản..."
                    className="min-h-[40px] w-full resize-none bg-transparent text-sm leading-6 text-[#292929] outline-none placeholder:text-[#9aa3af]"
                  />
                  <div className="mt-2 text-right text-xs font-semibold text-[#8a97a6]">
                    ({messageCount}/100)
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <CheckboxRow
                  checked={consentStore}
                  onChange={setConsentStore}
                  label="Tôi đồng ý để IPAG Group lưu trữ và xử lý thông tin cá nhân theo Chính sách Bảo mật — chỉ dùng cho mục đích tuyển dụng."
                />
                <CheckboxRow
                  checked={consentNotify}
                  onChange={setConsentNotify}
                  label="Nhận thông báo khi có vị trí mới phù hợp với profile của tôi"
                />
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex h-[44px] w-full max-w-[240px] cursor-pointer items-center justify-center rounded-full bg-[#145194] px-6 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_10px_22px_rgba(20,81,148,0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:brightness-100 disabled:hover:shadow-[0_10px_22px_rgba(20,81,148,0.22)]"
                >
                  Gửi thông tin
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
