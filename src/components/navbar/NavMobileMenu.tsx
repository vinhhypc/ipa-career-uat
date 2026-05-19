import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_LINKS, NavMotionConfig } from './constants';

const MotionLink = motion(Link);

type Props = {
  isOpen: boolean;
  pathname: string;
  isHome: boolean;
  applyHref: string;
  onClose: () => void;
  motionConfig: NavMotionConfig;
};

export default function NavMobileMenu({
  isOpen,
  pathname,
  isHome,
  applyHref,
  onClose,
  motionConfig,
}: Props) {
  const { tapTransition, tapScaleSoft, tapScalePill, hoverScalePill } = motionConfig;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center border-l-2 py-3 pl-3 text-sm uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'border-[#002b5b] font-bold text-[#002b5b]'
                      : 'border-transparent font-medium text-[#002b5b]/60'
                  }`}
                  onClick={onClose}
                >
                  <motion.span
                    className="inline-block origin-center will-change-transform"
                    whileTap={tapScaleSoft}
                    transition={tapTransition}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              );
            })}

            <MotionLink
              href={applyHref}
              className="mt-2 rounded-full py-3 text-center text-sm font-bold uppercase text-white"
              style={
                isHome
                  ? { background: '#002b5b' }
                  : {
                      background:
                        'linear-gradient(262.75deg, rgb(12, 113, 199) 6.53%, rgb(1, 58, 114) 93.47%)',
                    }
              }
              whileHover={isHome ? undefined : hoverScalePill}
              whileTap={tapScalePill}
              transition={tapTransition}
              onClick={onClose}
            >
              {isHome ? 'apply now' : 'ứng tuyển ngay'}
            </MotionLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
