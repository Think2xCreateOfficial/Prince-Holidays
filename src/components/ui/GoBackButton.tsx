'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Undo2 } from 'lucide-react';

/**
 * Client island for the 404 page's "Go Back" action.
 * Uses browser history only (never redirects to an arbitrary path), so it is
 * safe to render on any unmatched route.
 */
export const GoBackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9D1C3] text-[#231A10] font-mono text-xs uppercase tracking-[0.18em] hover:border-[#FD6703] hover:text-[#FD6703] transition-colors cursor-pointer"
    >
      <Undo2 className="w-3.5 h-3.5" />
      Go Back
    </button>
  );
};
