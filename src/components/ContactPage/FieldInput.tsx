import type { ContactField } from './constants';

export default function FieldInput({ field }: { field: ContactField }) {
  const id = `contact-${field.name}`;
  const requiredSuffix = field.required ? '*' : '';
  return (
    <div className={field.colSpan === 2 ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className="text-xs font-bold text-[#292929]">
        {field.label}
        {requiredSuffix}
      </label>
      <input
        id={id}
        name={field.name}
        type={field.type ?? 'text'}
        placeholder={field.placeholder}
        className="mt-2 h-[40px] w-full rounded-[10px] border border-[#d6dbe3] bg-white px-3 text-sm text-[#292929] outline-none placeholder:text-[#9aa3af] focus:border-[#145194]/60"
      />
    </div>
  );
}
