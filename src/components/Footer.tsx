import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

const EXPLORE_LINKS = [
  { label: 'Về IPAG', href: '#' },
  { label: 'We look for', href: '#we-look-for' },
  { label: 'Life at IPAG', href: '#life-at-ipag' },
  { label: 'Tin tức', href: '#news' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#00152d] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(20,81,148,0.45), transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(251,193,123,0.12), transparent 50%)',
        }}
      />
      <div className="section-content relative px-4 py-12 md:px-12 lg:px-24 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white text-xl font-bold text-[#002b5b]">
                I
              </span>
              <span className="text-2xl font-bold tracking-tight">IPAG Career</span>
            </div>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/80">
              Kết nối tài năng với hành trình phát triển bền vững — nơi bạn đồng hành cùng IPAG kiến tạo
              giá trị dài hạn cho cộng đồng và hệ sinh thái.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition hover:text-[#fbc17b]"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition hover:text-[#fbc17b]"
                aria-label="Facebook"
              >
                <Facebook className="size-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc17b]">
              Khám phá
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 transition hover:text-[#fbc17b]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fbc17b]">
              Liên hệ
            </h3>
            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-[#fbc17b]" />
                <a href="mailto:career@ipag.com.vn" className="hover:text-white">
                  career@ipag.com.vn
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#fbc17b]" />
                <span>
                  Tầng 12, tòa nhà IPAG — Quận Cầu Giấy, Hà Nội
                  <br />
                  Chi nhánh: TP. Hồ Chí Minh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">© 2026 IPAG. All rights reserved.</p>
          <Link href="#" className="text-sm text-[#fbc17b] hover:underline">
            Điều khoản sử dụng
          </Link>
        </div>
      </div>
    </footer>
  );
}
