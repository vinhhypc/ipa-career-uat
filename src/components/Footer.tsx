import Link from 'next/link';
import {
  CircleDotDashed,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

const EXPLORE_LINKS = [
  { label: 'Về IPAG', href: '#' },
  { label: 'Cơ hội nghề nghiệp', href: '#we-look-for' },
  { label: 'Nếp sống IPAG', href: '#life-at-ipag' },
  { label: 'Liên hệ', href: '#contact' },
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
          backgroundImage: 'url(https://www.figma.com/api/mcp/asset/1bcb4b93-a2c3-4052-a462-9e81b609add6)',
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
            <p className="mb-6 max-w-[558px] text-base leading-[1.4] text-white">
              Kiến tạo hệ sinh thái năng lực, đồng hành cùng con người và doanh nghiệp trong hành trình chuyển đổi bền vững.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:text-white/80"
                aria-label="Facebook"
              >
                <Facebook className="size-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:text-white/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div className="min-w-[220px]">
            <h3 className="mb-4 text-base font-bold leading-[1.4] text-white">Khám phá</h3>
            <ul className="space-y-4">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-[1.4] text-white transition hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[350px] flex-1">
            <h3 className="mb-4 text-base font-bold leading-[1.4] text-white">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-white">
              <li className="flex items-center gap-2">
                <Mail className="size-5 shrink-0" strokeWidth={1.75} />
                <a href="mailto:nextgen@ipam.vn" className="leading-[1.4] hover:text-white/80">
                  nextgen@ipam.vn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0" strokeWidth={1.75} />
                <span className="leading-[1.4]">
                  HN: 95 Trần Thái Tông, Cầu Giấy, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0" strokeWidth={1.75} />
                <span className="leading-[1.4]">
                  HCM: 95 90 Pasteur, Quận 1, TP. Hồ Chí Minh
                </span>
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
