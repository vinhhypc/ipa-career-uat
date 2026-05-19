import Link from 'next/link';

type Props = {
  onLight: boolean;
  onClick: () => void;
};

export default function NavLogo({ onLight, onClick }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2" onClick={onClick}>
      <span
        className={`flex size-10 items-center justify-center rounded-lg text-xl font-bold ${
          onLight ? 'bg-[#002b5b] text-white' : 'bg-white text-[#002b5b]'
        }`}
      >
        I
      </span>
      <span
        className={`text-xl font-bold tracking-tight md:text-2xl ${
          onLight ? 'text-[#002b5b]' : 'text-white'
        }`}
      >
        IPAG Career
      </span>
    </Link>
  );
}
