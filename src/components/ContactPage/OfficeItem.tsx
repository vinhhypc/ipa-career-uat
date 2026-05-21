import { MapPin } from 'lucide-react';

export default function OfficeItem({
  index,
  title,
  address,
}: {
  index: string;
  title: string;
  address: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase text-[#002B5B]">
        {index} · {title}
      </p>
      <div className="flex items-start gap-1">
        <MapPin size={16} className="mt-1 font-light text-gray-700" />
        <p className="text-sm leading-6 text-gray-700">{address}</p>
      </div>
    </div>
  );
}
