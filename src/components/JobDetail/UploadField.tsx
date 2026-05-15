'use client';

import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

type UploadFieldProps = {
  label: string;
  hint: string;
  id: string;
};

export default function UploadField({ label, hint, id }: UploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (file: File | undefined) => {
    if (file) setFileName(file.name);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] leading-[1.2] font-bold text-[#292929]">{label}</label>
      <div
        className="flex h-[160px] cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed border-[#ccc] bg-white p-5 text-center transition-colors hover:border-[#0d5ba8]"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files[0]);
        }}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          className="hidden"
          accept=".pdf,.docx,.xlsx,.pptx,.jpg,.png"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <Upload className="size-10 text-[#0d5ba8]" />
        {fileName ? (
          <p className="text-[14px] font-bold leading-[1.2] text-[#292929]">{fileName}</p>
        ) : (
          <>
            <p className="text-[14px] font-bold leading-[1.2] text-[#292929]">
              Kéo thả hoặc chọn file
            </p>
            <p className="text-[14px] leading-[1.4] text-[#707070]">{hint}</p>
          </>
        )}
      </div>
    </div>
  );
}
