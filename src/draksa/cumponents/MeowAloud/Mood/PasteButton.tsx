// src\draksa\cumponents\MeowAloud\Mood\PasteButton.tsx
'use client';

import { useEffect } from 'react';

import { afterPasteButtonClick } from '@/draksa/perf/club/afterPasteButtonClick';

export const PasteButton = () => {
  useEffect(() => afterPasteButtonClick.cancel, []);

  return (
    <button
      name="paste"
      type="button"
      className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-4xl font-bold whitespace-nowrap text-white transition-colors select-none hover:bg-pink-700"
      title="paste"
      onClick={afterPasteButtonClick}
    >
      Paste 📝
    </button>
  );
};
