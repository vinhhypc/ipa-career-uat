import Link from 'next/link';
import BrandLogo from '@/components/common/BrandLogo';

type Props = {
  onLight: boolean;
  onClick: () => void;
};

export default function NavLogo({ onLight, onClick }: Props) {
  return (
    <Link href="/" prefetch={false} className="flex items-center" onClick={onClick}>
      <BrandLogo textColor={onLight ? '#002b5b' : 'white'} className="h-9 w-auto md:h-11" />
    </Link>
  );
}
