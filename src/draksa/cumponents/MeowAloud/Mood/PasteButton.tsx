// src\draksa\cumponents\MeowAloud\Mood\PasteButton.tsx
'use client';

import { useEffect } from 'react';

import { paste } from '@/draksa/voice/paste';

export const PasteButton = () => {
  useEffect(() => paste.cancel, []);

  return (
    <div>
      <button
        name="paste"
        type="button"
        className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-4xl font-bold text-white transition-colors select-none hover:bg-pink-700"
        title="paste"
        onClick={paste}
      >
        Paste 📝
      </button>
    </div>
  );
};
