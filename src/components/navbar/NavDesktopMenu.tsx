import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_LINKS, NavMotionConfig } from './constants';

const MotionLink = motion(Link);

type Props = {
  pathname: string;
  onLight: boolean;
  isHome: boolean;
  applyHref: string;
  motionConfig: NavMotionConfig;
};

export default function NavDesktopMenu({
  pathname,
  onLight,
  isHome,
  applyHref,
  motionConfig,
}: Props) {
  const { tapTransition, tapScale, tapScaleSoft, hoverScalePill } = motionConfig;

  return (
    <nav className="hidden items-center gap-8 lg:flex lg:gap-10">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + '/') ||
            item.children?.some(
              (child) => pathname === child.href || pathname.startsWith(child.href + '/'),
            ) ||
            false;
          const hasChildren = Boolean(item.children?.length);
          return (
            <li key={item.label} className={hasChildren ? 'relative group' : undefined}>
              <Link
                href={item.href}
                prefetch={false}
                className={`inline-flex items-center gap-1 text-sm uppercase tracking-[0.14em] transition-opacity hover:opacity-80 ${
                  isActive
                    ? `font-bold ${onLight ? 'text-[#002b5b]' : 'text-white'}`
                    : `font-normal ${onLight ? 'text-neutral-900' : 'text-white/90'}`
                }`}
                aria-haspopup={hasChildren ? 'menu' : undefined}
              >
                <motion.span
                  className="inline-block origin-center will-change-transform"
                  whileTap={tapScale}
                  transition={tapTransition}
                >
                  {item.label}
                </motion.span>
                {hasChildren && (
                  <span
                    className={`transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180 ${
                      onLight ? 'text-[#002b5b]' : 'text-white'
                    }`}
                    aria-hidden
                  >
                    <ChevronDown size={16} />
                  </span>
                )}
              </Link>

              {hasChildren && (
                <div
                  className="absolute top-full left-0 z-50 w-60 pt-3 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                  role="menu"
                >
                  <div className="rounded-2xl border border-black/5 bg-white p-2 shadow-lg">
                    <ul className="flex flex-col">
                      {item.children!.map((child) => {
                        const isChildActive =
                          pathname === child.href || pathname.startsWith(child.href + '/');
                        return (
                          <li key={child.label} role="none">
                            <Link
                              href={child.href}
                              prefetch={false}
                              role="menuitem"
                              className={`block rounded-xl px-4 py-2 text-sm transition-colors ${
                                isChildActive
                                  ? 'bg-black/5 font-bold text-neutral-900'
                                  : 'font-medium text-neutral-900/80 hover:bg-black/5 hover:text-neutral-900'
                              }`}
                              onClick={(e) => {
                                e.currentTarget.blur();
                              }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <MotionLink
        href={applyHref}
        prefetch={false}
        className={
          isHome
            ? 'rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#070707] transition hover:bg-[#fbc17b]/90'
            : 'rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition'
        }
        style={
          isHome
            ? undefined
            : {
                background:
                  'linear-gradient(262.75deg, rgb(12, 113, 199) 6.53%, rgb(1, 58, 114) 93.47%)',
              }
        }
        whileHover={isHome ? undefined : hoverScalePill}
        whileTap={tapScaleSoft}
        transition={tapTransition}
      >
        {isHome ? 'apply now' : 'ứng tuyển ngay'}
      </MotionLink>
    </nav>
  );
}
