// src\draksa\cumponents\MeowAloud\Mood\FeedHer.tsx
'use client';

import { useEffect } from 'react';

import { afterPasteButtonClick } from '@/draksa/perf/club/afterPasteButtonClick';

export const FeedHer = () => {
  useEffect(() => afterPasteButtonClick.cancel, []);

  return (
    <button
      name="feedHer"
      type="button"
      className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-4xl font-bold whitespace-nowrap text-white transition-colors select-none hover:bg-pink-700"
      title="paste"
      onClick={afterPasteButtonClick}
    >
      FeedHer 📝
    </button>
  );
};
