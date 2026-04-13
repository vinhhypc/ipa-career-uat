import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';

export type BreadcrumbItem = {
  label: string;
  /** Route nội bộ (Next.js Link) hoặc URL tuyệt đối. Trang hiện tại thường không có `href`. */
  href?: string;
  onClick?: () => void;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  /**
   * `surface`: nền sáng — theo design Figma (phụ #707070, current semibold #070707).
   * `inverse`: nền tối — chữ sáng cho hero / banner.
   */
  tone?: 'surface' | 'inverse';
  'aria-label'?: string;
};

const textBase = 'text-[12px] leading-[1.4]';

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function Breadcrumbs({
  items,
  className = '',
  tone = 'surface',
  'aria-label': ariaLabel = 'Breadcrumb',
}: BreadcrumbsProps) {
  const separatorClass =
    tone === 'surface' ? `${textBase} text-[#707070]` : `${textBase} text-white/70`;

  const linkClass =
    tone === 'surface'
      ? `${textBase} text-[#707070] transition-colors hover:text-[#070707]`
      : `${textBase} text-white/70 transition-colors hover:text-white`;

  const currentClass =
    tone === 'surface'
      ? `${textBase} font-semibold text-[#070707]`
      : `${textBase} font-semibold text-white`;

  const renderSegment = (item: BreadcrumbItem, isLast: boolean): ReactNode => {
    if (isLast) {
      return (
        <span
          className={currentClass}
          onClick={item.onClick}
          onKeyDown={
            item.onClick
              ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.onClick?.();
                  }
                }
              : undefined
          }
          role={item.onClick ? 'button' : undefined}
          tabIndex={item.onClick ? 0 : undefined}
        >
          {item.label}
        </span>
      );
    }

    if (item.href) {
      if (isInternalHref(item.href)) {
        return (
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
        );
      }
      return (
        <a href={item.href} className={linkClass}>
          {item.label}
        </a>
      );
    }

    return <span className={linkClass}>{item.label}</span>;
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={`flex flex-wrap items-center gap-1 animate-[fade-right_0.8s] ${className}`.trim()}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Fragment key={`${item.label}-${index}`}>
            {index > 0 ? <span className={separatorClass}>/</span> : null}
            {renderSegment(item, isLast)}
          </Fragment>
        );
      })}
    </nav>
  );
}
