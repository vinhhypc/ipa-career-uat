export default function FieldSelect({
  label,
  name,
  required,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  defaultValue?: string;
}) {
  const id = `contact-${name}`;
  const requiredSuffix = required ? '*' : '';
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold text-[#292929]">
        {label}
        {requiredSuffix}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className="mt-2 h-[40px] w-full rounded-[10px] border border-[#d6dbe3] bg-white px-3 text-sm text-[#292929] outline-none focus:border-[#145194]/60"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
