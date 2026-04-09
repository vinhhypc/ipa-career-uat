'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function generatePageNumbers(currentPage: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();

  if (totalPages <= 1) return null;

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const buildHref = (page: number) => {
    if (page === 1) return pathname;
    return `${pathname}?page=${page}`;
  };

  return (
    <nav aria-label="Phân trang" className="flex items-center justify-center gap-1 mt-10">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1)}
          className="flex items-center justify-center w-9 h-9 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Trang trước"
        >
          <ChevronLeft size={18} />
        </Link>
      ) : (
        <span className="flex items-center justify-center w-9 h-9 rounded-md text-gray-300 cursor-not-allowed">
          <ChevronLeft size={18} />
        </span>
      )}

      {/* Page numbers */}
      {pageNumbers.map((page, idx) =>
        page === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex items-center justify-center w-9 h-9 text-sm text-gray-400"
          >
            …
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            className={`flex items-center justify-center w-9 h-9 rounded-md text-sm font-medium transition-colors
              ${page === currentPage ? 'bg-brand-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Link>
        ),
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1)}
          className="flex items-center justify-center w-9 h-9 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Trang sau"
        >
          <ChevronRight size={18} />
        </Link>
      ) : (
        <span className="flex items-center justify-center w-9 h-9 rounded-md text-gray-300 cursor-not-allowed">
          <ChevronRight size={18} />
        </span>
      )}
    </nav>
  );
}
