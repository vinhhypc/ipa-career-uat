'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Breadcrumbs from '@/components/Breadcrumbs';

import CheckboxRow from './CheckboxRow';
import FieldInput from './FieldInput';
import FieldSelect from './FieldSelect';
import FormSectionTitle from './FormSectionTitle';
import InfoCard from './InfoCard';
import OfficeItem from './OfficeItem';
import { FAQ_ITEMS, ITEM_REVEAL, PERSONAL_FIELDS, STAGGER_CHILDREN } from './constants';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [consentStore, setConsentStore] = useState(true);
  const [consentNotify, setConsentNotify] = useState(true);
  const [openFaq, setOpenFaq] = useState<number>(0);

  const messageCount = useMemo(() => message.length, [message]);

  return (
    <div className="bg-white">
      <section className="section-padding pt-30! md:pt-[120px]! pb-6!">
        <div className="section-content">
          <Breadcrumbs
            className="text-sm"
            items={[{ label: 'Trang chủ', href: '/' }, { label: 'Contact' }]}
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2fbff]">
        <div className="relative h-72 w-full sm:h-80 md:h-96 lg:h-[580px]">
          <Image
            src="/contact/figma/hero.png"
            alt="Contact IPAG"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00152d] to-[#06213f] opacity-85" />
          <motion.div
            className="section-content absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center"
            variants={STAGGER_CHILDREN}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="max-w-4xl text-3xl font-extrabold uppercase tracking-wider text-white drop-shadow md:text-4xl md:leading-snug lg:text-5xl"
              variants={ITEM_REVEAL}
            >
              CONTACT IPAG
            </motion.h1>
            <motion.div className="h-1 w-36 bg-[#fbc17b]" variants={ITEM_REVEAL} />
            <motion.p
              className="max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl"
              variants={ITEM_REVEAL}
            >
              Chúng tôi luôn sẵn sàng lắng nghe — dù bạn đang tìm kiếm cơ hội, muốn hỏi về chương
              trình, hay chỉ đơn giản là muốn biết thêm về IPAG.
            </motion.p>
          </motion.div>
        </div>

        <div className="section-padding relative -mt-16 pt-0 pb-14 md:-mt-24 lg:-mt-28">
          <motion.div
            className="section-content mx-auto grid w-full max-w-5xl items-stretch gap-5 md:grid-cols-2 md:gap-6"
            variants={STAGGER_CHILDREN}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={ITEM_REVEAL} className="h-full">
              <InfoCard
                icon={<Image src="/contact/figma/mail.svg" alt="Email" width={60} height={60} />}
                label="EMAIL TUYỂN DỤNG"
                title="nextgen@ipam.vn"
                desc="Mọi liên hệ tuyển dụng: gửi CV, hỏi thông tin chương trình, đặt lịch phỏng vấn."
              />
            </motion.div>
            <motion.div variants={ITEM_REVEAL} className="h-full">
              <InfoCard
                icon={<Image src="/contact/figma/clock.svg" alt="Clock" width={60} height={60} />}
                label="GIỜ LÀM VIỆC"
                title="Thứ Hai – Thứ Sáu"
                desc="08:30 – 17:30"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eaf4ff] px-4 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-14 h-[520px] w-[520px] rounded-full bg-[#7bc1ff]/15 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-[#fbc17b]/12 blur-3xl" />
        </div>

        <motion.div
          className="section-content relative"
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
                  className="inline-flex h-[44px] w-full max-w-[240px] items-center justify-center rounded-full bg-[#145194] px-6 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_10px_22px_rgba(20,81,148,0.22)] transition hover:brightness-95"
                >
                  Gửi thông tin
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white px-4 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <motion.div
          className="section-content"
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <div className="mx-auto grid w-full max-w-[1115px] gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <motion.div className="grid gap-8 md:grid-cols-2" variants={ITEM_REVEAL}>
              <div>
                <p className="text-2xl font-extrabold uppercase text-[#145194] after:mt-2 after:block after:w-21 after:border-b-2 after:border-[#145194]">
                  HÀ NỘI
                </p>
                <div className="mt-5 space-y-5">
                  <OfficeItem
                    index="01"
                    title="HEADQUARTERS"
                    address="95 Trần Thái Tông, phường Dịch Vọng Hậu, Hà Nội"
                  />
                  <OfficeItem
                    index="02"
                    title="OFFICE"
                    address="01 Nguyễn Thượng Hiền, Hai Bà Trưng, Hà Nội"
                  />
                  <OfficeItem
                    index="03"
                    title="OFFICE"
                    address="43 Lê Văn Lương, Thanh Xuân, Hà Nội"
                  />
                  <OfficeItem index="04" title="OFFICE" address="19 Trúc Khê, Đống Đa, Hà Nội" />
                </div>
              </div>

              <div>
                <p className="text-2xl font-extrabold uppercase text-[#145194] after:mt-2 after:block after:w-21 after:border-b-2 after:border-[#145194]">
                  HỒ CHÍ MINH
                </p>
                <div className="mt-5 space-y-5">
                  <OfficeItem
                    index="05"
                    title="SOUTHERN OFFICE"
                    address="90 Pasteur, phường Sài Gòn, TP. Hồ Chí Minh"
                  />
                  <OfficeItem
                    index="06"
                    title="SOUTHERN OFFICE"
                    address="205 Nguyễn Xí, Bình Thạnh, TP. Hồ Chí Minh"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] lg:mx-0"
              variants={ITEM_REVEAL}
            >
              <div className="relative aspect-square">
                <Image
                  src="/contact/figma/office.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#00152d] px-4 py-16 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#145194]/35 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#fbc17b]/12 blur-3xl" />
        </div>

        <motion.div
          className="section-content relative"
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto w-full max-w-[1115px]">
            <motion.div variants={ITEM_REVEAL}>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-white/85">
                CÂU HỎI THƯỜNG GẶP
              </p>
              <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-[1px] text-white md:text-3xl md:leading-[40px]">
                Bạn có thắc mắc?
              </h2>
            </motion.div>

            <motion.div className="mt-8 space-y-3" variants={STAGGER_CHILDREN}>
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = idx === openFaq;
                return (
                  <motion.div
                    key={item.q}
                    className="rounded-[14px] border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm"
                    variants={ITEM_REVEAL}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 text-left"
                      onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}
                    >
                      <span className="text-sm font-semibold text-white md:text-base">
                        {item.q}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <Plus
                          className={`size-4 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && item.a ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm leading-6 text-white/75 md:leading-7">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
