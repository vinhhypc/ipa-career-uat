'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Heart, type LucideIcon, type LucideProps } from 'lucide-react';

const BookOpenFigma = forwardRef<SVGSVGElement, LucideProps>(
  ({ color, size = 24, className, style, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, color }}
        {...rest}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.33439 3.73438C5.34504 3.73438 5.35571 3.73438 5.36641 3.73438L6.57392 3.73438C7.84609 3.73437 8.85785 3.73436 9.67414 3.80106C10.51 3.86935 11.2228 4.01221 11.8754 4.34474C12.738 4.78425 13.4686 5.43808 13.9997 6.23886C14.5309 5.43808 15.2615 4.78425 16.1241 4.34474C16.7767 4.01221 17.4895 3.86935 18.3254 3.80106C19.1416 3.73436 20.1534 3.73437 21.4256 3.73438L22.6651 3.73438C22.9642 3.73435 23.2423 3.73433 23.4753 3.75337C23.7276 3.77398 24.0082 3.82147 24.2865 3.96326C24.6816 4.1646 25.0029 4.48586 25.2042 4.881C25.346 5.15928 25.3935 5.43985 25.4141 5.69211C25.4331 5.92516 25.4331 6.20319 25.4331 6.50229V19.1665C25.4331 19.4656 25.4331 19.7436 25.4141 19.9766C25.3935 20.2289 25.346 20.5095 25.2042 20.7878C25.0029 21.1829 24.6816 21.5042 24.2865 21.7055C24.0082 21.8473 23.7276 21.8948 23.4753 21.9154C23.2423 21.9344 22.9642 21.9344 22.6651 21.9344L19.1953 21.9344C18.5329 21.9344 18.3138 21.9377 18.109 21.9742C17.9107 22.0096 17.7172 22.0681 17.5326 22.1487C17.342 22.232 17.1578 22.3507 16.6067 22.7181L14.5175 24.111C14.204 24.32 13.7955 24.32 13.482 24.111L11.3928 22.7181C10.8417 22.3507 10.6575 22.232 10.4669 22.1487C10.2823 22.0681 10.0888 22.0096 9.89045 21.9742C9.68568 21.9377 9.46655 21.9344 8.8042 21.9344L5.33441 21.9344C5.03527 21.9344 4.75722 21.9344 4.52414 21.9154C4.27188 21.8948 3.99131 21.8473 3.71303 21.7055C3.31789 21.5042 2.99663 21.1829 2.7953 20.7878C2.6535 20.5095 2.60601 20.2289 2.5854 19.9766C2.56636 19.7436 2.56638 19.4655 2.56641 19.1664L2.56641 6.53438C2.56641 6.52368 2.56641 6.51301 2.56641 6.50236C2.56638 6.20323 2.56636 5.92518 2.5854 5.69211C2.60601 5.43985 2.6535 5.15928 2.7953 4.881C2.99663 4.48586 3.31789 4.1646 3.71303 3.96326C3.99131 3.82147 4.27188 3.77398 4.52414 3.75337C4.75721 3.73433 5.03526 3.73435 5.33439 3.73438ZM23.447 5.63075C23.4342 5.62752 23.3981 5.61995 23.3233 5.61384C23.1756 5.60177 22.9752 5.60105 22.6331 5.60105H21.4664C20.1442 5.60105 19.2087 5.60177 18.4774 5.66153C17.7569 5.72039 17.3171 5.83185 16.9715 6.00795C16.269 6.36588 15.6979 6.93701 15.34 7.63948C15.1639 7.98511 15.0524 8.42487 14.9936 9.14532C14.9338 9.87668 14.9331 10.8122 14.9331 12.1344V21.5904L15.5712 21.165C15.5925 21.1508 15.6136 21.1368 15.6343 21.1229C16.0981 20.8136 16.4252 20.5954 16.7858 20.438C17.1047 20.2988 17.4389 20.1976 17.7815 20.1365C18.1688 20.0675 18.562 20.0676 19.1195 20.0677C19.1444 20.0677 19.1697 20.0677 19.1953 20.0677H22.6331C22.9752 20.0677 23.1756 20.067 23.3233 20.0549C23.3981 20.0488 23.4342 20.0412 23.447 20.038C23.4846 20.017 23.5157 19.9859 23.5367 19.9483C23.5399 19.9355 23.5475 19.8994 23.5536 19.8246C23.5657 19.6769 23.5664 19.4765 23.5664 19.1344V6.53438C23.5664 6.19228 23.5657 5.99184 23.5536 5.84412C23.5475 5.76939 23.5399 5.73322 23.5367 5.72046C23.5157 5.68284 23.4846 5.65179 23.447 5.63075ZM23.5351 19.9539L23.5355 19.9526L23.5351 19.9539ZM13.0664 21.5904V12.1344C13.0664 10.8122 13.0657 9.87668 13.0059 9.14532C12.9471 8.42487 12.8356 7.98511 12.6595 7.63948C12.3016 6.93701 11.7304 6.36588 11.028 6.00795C10.6824 5.83185 10.2426 5.72039 9.52213 5.66153C8.79078 5.60177 7.85527 5.60105 6.53308 5.60105H5.36641C5.02431 5.60105 4.82387 5.60177 4.67615 5.61384C4.60141 5.61995 4.56524 5.62752 4.55248 5.63075C4.51487 5.65179 4.48382 5.68284 4.46278 5.72045C4.45955 5.73321 4.45198 5.76938 4.44587 5.84412C4.4338 5.99184 4.43308 6.19228 4.43308 6.53438V19.1344C4.43308 19.4765 4.4338 19.6769 4.44587 19.8246C4.45198 19.8994 4.45955 19.9355 4.46278 19.9483C4.48382 19.9859 4.51487 20.017 4.55248 20.038C4.56524 20.0412 4.60141 20.0488 4.67615 20.0549C4.82387 20.067 5.02431 20.0677 5.36641 20.0677H8.8042C8.82981 20.0677 8.85507 20.0677 8.88001 20.0677C9.43749 20.0676 9.83071 20.0675 10.218 20.1365C10.5606 20.1976 10.8948 20.2988 11.2137 20.438C11.5743 20.5954 11.9014 20.8136 12.3652 21.1229C12.3859 21.1368 12.4069 21.1508 12.4282 21.165L13.0664 21.5904ZM23.4513 5.63193L23.4526 5.63233L23.4513 5.63193Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);
BookOpenFigma.displayName = 'BookOpenFigma';

const GiftFigma = forwardRef<SVGSVGElement, LucideProps>(
  ({ color, size = 24, className, style, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, color }}
        {...rest}
      >
        <path
          d="M4.43263 20.766C4.43263 21.4347 4.43314 21.8809 4.46111 22.2231C4.48819 22.5542 4.53637 22.7059 4.58529 22.8019C4.71951 23.0653 4.93373 23.2795 5.19711 23.4137C5.29313 23.4627 5.4448 23.5108 5.77589 23.5379C6.11815 23.5659 6.56429 23.5664 7.23308 23.5664H20.766C21.4348 23.5664 21.8809 23.5659 22.2232 23.5379C22.5542 23.5108 22.7059 23.4627 22.8019 23.4137C23.0653 23.2795 23.2795 23.0653 23.4137 22.8019C23.4627 22.7059 23.5109 22.5542 23.5379 22.2231C23.5659 21.8809 23.5664 21.4347 23.5664 20.766H4.43263ZM23.5664 13.0664C23.5664 12.3976 23.5659 11.9515 23.5379 11.6092C23.5109 11.2781 23.4627 11.1265 23.4137 11.0304C23.2795 10.7671 23.0653 10.5528 22.8019 10.4186C22.7059 10.3697 22.5542 10.3215 22.2232 10.2944C21.8809 10.2665 21.4348 10.266 20.766 10.266H15.5091L17.168 13.5825L17.2056 13.6691C17.3737 14.1116 17.1823 14.6184 16.7498 14.8346C16.2889 15.0648 15.7282 14.8774 15.4977 14.4165L13.9995 11.4201L12.5013 14.4165C12.2709 14.8774 11.7102 15.0648 11.2492 14.8346C10.7883 14.6042 10.6009 14.0435 10.8311 13.5825L12.4899 10.266H7.23308C6.56429 10.266 6.11815 10.2665 5.77589 10.2944C5.4448 10.3215 5.29313 10.3697 5.19711 10.4186C4.93373 10.5528 4.71951 10.7671 4.58529 11.0304C4.53637 11.1265 4.48819 11.2781 4.46111 11.6092C4.43314 11.9515 4.43263 12.3976 4.43263 13.0664V18.8997H23.5664V13.0664ZM21.2331 6.41618C21.2331 5.89017 21.024 5.38562 20.652 5.01367C20.2801 4.64172 19.7755 4.43262 19.2495 4.43262C17.7269 4.43262 16.6588 5.50721 15.9113 6.86621C15.6169 7.40153 15.397 7.94293 15.238 8.39974H19.2495C19.7755 8.39974 20.2801 8.19063 20.652 7.81869C21.024 7.44674 21.2331 6.94219 21.2331 6.41618ZM6.77621 6.61214C6.82129 7.06619 7.02155 7.49322 7.34701 7.81869C7.71896 8.19063 8.22351 8.39974 8.74952 8.39974H12.7611C12.6021 7.94293 12.3822 7.40153 12.0877 6.86621C11.3403 5.50721 10.2722 4.43262 8.74952 4.43262C8.22351 4.43262 7.71896 4.64172 7.34701 5.01367C6.97507 5.38562 6.76596 5.89017 6.76596 6.41618L6.77621 6.61214ZM23.0993 6.41618C23.0993 7.14107 22.894 7.84421 22.5171 8.44987C22.9119 8.49149 23.2896 8.5718 23.6496 8.75521C24.2641 9.06837 24.764 9.56823 25.0772 10.1828C25.2825 10.5858 25.3619 11.0109 25.3984 11.4577C25.4341 11.8936 25.4326 12.4284 25.4326 13.0664V20.766C25.4326 21.4039 25.4341 21.9388 25.3984 22.3747C25.3619 22.8215 25.2825 23.2465 25.0772 23.6496C24.764 24.2641 24.2641 24.764 23.6496 25.0772C23.2465 25.2825 22.8215 25.3619 22.3747 25.3984C21.9388 25.434 21.4039 25.4326 20.766 25.4326H7.23308C6.59512 25.4326 6.06025 25.434 5.62436 25.3984C5.17755 25.3619 4.75252 25.2825 4.34945 25.0772C3.73491 24.764 3.23505 24.2641 2.92188 23.6496C2.71651 23.2465 2.6371 22.8215 2.60059 22.3747C2.56498 21.9388 2.56641 21.4039 2.56641 20.766V13.0664C2.56641 12.4284 2.56498 11.8936 2.60059 11.4577C2.6371 11.0109 2.71651 10.5858 2.92188 10.1828C3.23505 9.56823 3.73491 9.06838 4.34945 8.75521C4.70907 8.57198 5.08643 8.49153 5.4808 8.44987C5.13734 7.89779 4.93697 7.26435 4.9043 6.60758L4.89975 6.41618C4.89975 5.3951 5.30566 4.41635 6.02768 3.69434C6.74969 2.97232 7.72844 2.56641 8.74952 2.56641L8.9865 2.57096C11.4067 2.68043 12.8938 4.45714 13.7238 5.96615C13.8232 6.14683 13.9145 6.32753 13.9995 6.50505C14.0845 6.32753 14.1759 6.14683 14.2752 5.96615C15.132 4.4085 16.6889 2.56641 19.2495 2.56641C20.2706 2.56641 21.2493 2.97232 21.9714 3.69434C22.6934 4.41635 23.0993 5.3951 23.0993 6.41618Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);
GiftFigma.displayName = 'GiftFigma';

const PencilFigma = forwardRef<SVGSVGElement, LucideProps>(
  ({ color, size = 24, className, style, strokeWidth = 2, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ ...style, color }}
        {...rest}
      >
        <path
          d="M7.2 21C6.07989 21 5.51984 21 5.09202 20.782C4.71569 20.5903 4.40973 20.2843 4.21799 19.908C4 19.4802 4 18.9201 4 17.8V6.2C4 5.07989 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V7M8 7H14M8 15H9M8 11H12M11.1954 20.8945L12.5102 20.6347C13.2197 20.4945 13.5744 20.4244 13.9052 20.2952C14.1988 20.1806 14.4778 20.0317 14.7365 19.8516C15.0279 19.6486 15.2836 19.393 15.7949 18.8816L20.9434 13.7332C21.6306 13.0459 21.6306 11.9316 20.9434 11.2444C20.2561 10.5571 19.1418 10.5571 18.4546 11.2444L13.2182 16.4808C12.739 16.96 12.4994 17.1996 12.3059 17.4712C12.1341 17.7123 11.9896 17.9717 11.8751 18.2447C11.7461 18.5522 11.6686 18.882 11.5135 19.5417L11.1954 20.8945Z"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
PencilFigma.displayName = 'PencilFigma';

export type LifeAtIpagTabKey =
  | 'cay-nen-xay-nep'
  | 'chuong-trinh-dao-tao'
  | 'che-do-dai-ngo'
  | 'chuyen-nha-ipag';

const TAB_ITEMS: { key: LifeAtIpagTabKey; label: string; href: string; icon: LucideIcon }[] = [
  {
    key: 'cay-nen-xay-nep',
    label: 'Cấy nền - Xây nếp',
    href: '/life-at-ipag?tab=cay-nen-xay-nep',
    icon: Heart,
  },
  {
    key: 'chuong-trinh-dao-tao',
    label: 'Chương trình đào tạo',
    href: '/life-at-ipag?tab=chuong-trinh-dao-tao',
    icon: BookOpenFigma,
  },
  {
    key: 'che-do-dai-ngo',
    label: 'Chế độ đãi ngộ',
    href: '/life-at-ipag?tab=che-do-dai-ngo',
    icon: GiftFigma,
  },
  {
    key: 'chuyen-nha-ipag',
    label: 'Chuyện nhà IPAG',
    href: '/life-at-ipag?tab=chuyen-nha-ipag',
    icon: PencilFigma,
  },
];

export type LifeAtIpagTabsProps = {
  activeKey: LifeAtIpagTabKey;
  onChange?: (key: LifeAtIpagTabKey) => void;
  className?: string;
};

const ENABLED_KEYS: LifeAtIpagTabKey[] = [
  'cay-nen-xay-nep',
  'chuong-trinh-dao-tao',
  'che-do-dai-ngo',
  'chuyen-nha-ipag',
];

export default function LifeAtIpagTabs({ activeKey, onChange, className }: LifeAtIpagTabsProps) {
  return (
    <>
      <motion.div
        className={`mt-8 grid grid-cols-2 gap-2 md:hidden ${className ?? ''}`.trim()}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.05 },
          },
        }}
      >
        {TAB_ITEMS.map((t) => {
          const isActive = t.key === activeKey;
          const isEnabled = ENABLED_KEYS.includes(t.key);
          const active = isActive
            ? 'border-[#002b5b] bg-[#e7f0fa] text-[#002b5b]'
            : 'border-[#e5e7eb] bg-white text-[#707070]';

          const baseClassName = `flex h-10 items-center justify-center rounded-full border px-3 text-center text-[13px] font-medium transition-all duration-200 ease-out ${active} ${
            isEnabled ? 'hover:scale-[1.03] active:scale-100' : 'opacity-45'
          }`;

          if (onChange && isEnabled) {
            return (
              <motion.button
                key={`mob-${t.key}`}
                type="button"
                className={baseClassName}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onChange(t.key)}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
                }}
              >
                {t.label}
              </motion.button>
            );
          }

          return (
            <motion.div
              key={`mob-${t.key}`}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
            >
              <Link
                href={t.href}
                className={baseClassName}
                aria-current={isActive ? 'page' : undefined}
                aria-disabled={!isEnabled}
                tabIndex={isEnabled ? 0 : -1}
              >
                {t.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-10 hidden flex-wrap items-center justify-center gap-4 md:flex"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.08 },
          },
        }}
      >
        {TAB_ITEMS.map((t) => {
          const isActive = t.key === activeKey;
          const isEnabled = ENABLED_KEYS.includes(t.key);
          const Icon = t.icon;
          const active = isActive
            ? 'border-[#002b5b] bg-[#e7f0fa] text-[#002b5b]'
            : 'border-[#d0d5dd] bg-white text-[#707070] hover:bg-[#f8fafc]';
          const className = `inline-flex cursor-pointer h-10 items-center justify-center gap-2 rounded-full border px-6 text-sm font-medium transition-all duration-200 ease-out ${active} ${
            isEnabled ? 'hover:scale-[1.03] active:scale-100' : 'opacity-45'
          }`;

          if (onChange && isEnabled) {
            return (
              <motion.button
                key={`desk-${t.key}`}
                type="button"
                className={className}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onChange(t.key)}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
              >
                <Icon className="size-5" />
                {t.label}
              </motion.button>
            );
          }

          return (
            <motion.div
              key={`desk-${t.key}`}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              <Link
                href={t.href}
                className={className}
                aria-current={isActive ? 'page' : undefined}
                aria-disabled={!isEnabled}
                tabIndex={isEnabled ? 0 : -1}
              >
                <Icon className="size-4" />
                {t.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
