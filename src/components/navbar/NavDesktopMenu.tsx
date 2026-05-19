import Link from 'next/link';
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
            pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`text-sm uppercase tracking-[0.14em] transition-opacity hover:opacity-80 ${
                  isActive
                    ? `font-bold ${onLight ? 'text-[#002b5b]' : 'text-white'}`
                    : `font-normal ${onLight ? 'text-neutral-900' : 'text-white/90'}`
                }`}
              >
                <motion.span
                  className="inline-block origin-center will-change-transform"
                  whileTap={tapScale}
                  transition={tapTransition}
                >
                  {item.label}
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>

      <MotionLink
        href={applyHref}
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
