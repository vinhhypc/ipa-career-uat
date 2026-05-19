import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const EXPLORE_LINKS_COL1 = [
  { label: 'IPAG Insight', href: '/ipag-insight' },
  { label: 'Life at IPAG', href: '#life-at-ipag' },
];

const EXPLORE_LINKS_COL2 = [
  { label: 'We look for', href: '/we-look-for' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(1.08deg, #031E3B 4.22%, #002B5B 100.56%)' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[370px] w-full max-w-[1115px] -translate-x-1/2 opacity-20"
        style={{
          backgroundImage: 'url(/footer-bg.png)',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="section-padding">
        <div className="section-content relative">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="max-w-[730px]">
              <div className="mb-6 flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white text-xl font-bold text-[#002B5B]">
                  I
                </span>
                <span className="text-2xl font-bold tracking-[-0.05em]">IPAG Career</span>
              </div>

              <p className="mb-6 max-w-[558px] text-base leading-[1.4] text-white lg:hidden">
                Kiến tạo hệ sinh thái năng lực, đồng hành cùng con người và doanh nghiệp trong hành
                trình chuyển đổi bền vững.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.ipag.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-100 transition hover:opacity-80"
                  aria-label="Website IPAG"
                >
                  <Image src="/icons/globe.svg" alt="Website" width={24} height={24} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-100 transition hover:opacity-80"
                  aria-label="Facebook"
                >
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-100 transition hover:opacity-80"
                  aria-label="LinkedIn"
                >
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </a>
              </div>
            </div>

            <div className="min-w-[220px]">
              <h3 className="mb-4 text-base font-bold leading-[1.4] text-white">Khám phá</h3>
              <div className="flex gap-7 text-sm text-white">
                <ul className="flex flex-col gap-4 uppercase">
                  {EXPLORE_LINKS_COL1.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="leading-[1.4] transition hover:text-white/80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-4 uppercase">
                  {EXPLORE_LINKS_COL2.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="leading-[1.4] transition hover:text-white/80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-[350px] flex-1">
              <h3 className="mb-4 text-base font-bold leading-[1.4] text-white">Liên hệ</h3>
              <ul className="space-y-4 text-sm text-white">
                <li className="flex items-center gap-2">
                  <Mail className="size-5 shrink-0" strokeWidth={1.75} />
                  <a
                    href="mailto:nextgen@ipam.vn"
                    className="leading-[1.4] hover:text-white/80 transition-colors"
                  >
                    nextgen@ipam.vn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=95%20Tr%E1%BA%A7n%20Th%C3%A1i%20T%C3%B4ng%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 leading-[1.4] transition-colors hover:text-white/80"
                    aria-label="Mở bản đồ Google Maps: Hà Nội"
                  >
                    <MapPin className="size-5 shrink-0" strokeWidth={1.75} />
                    <span>HN: 95 Trần Thái Tông, Cầu Giấy, Hà Nội</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=90%20Pasteur%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 leading-[1.4] transition-colors hover:text-white/80"
                    aria-label="Mở bản đồ Google Maps: Hồ Chí Minh"
                  >
                    <MapPin className="size-5 shrink-0" strokeWidth={1.75} />
                    <span>HCM: 95 90 Pasteur, Quận 1, TP. Hồ Chí Minh</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/50 pt-6 text-sm leading-[1.4] md:flex-row md:items-center md:justify-between">
            <p>© 2026 IPAG. All rights reserved.</p>
            <Link href="#" className="text-left hover:text-white/80 md:text-right">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
