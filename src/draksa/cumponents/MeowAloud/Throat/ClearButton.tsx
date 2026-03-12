// src\draksa\cumponents\MeowAloud\Throat\LanDyshy.tsx
'use client';

import { lanDyshy } from '@/draksa/voice/lanDyshy';

export const ClearButton = () => {
  return (
    <button
      name="lanDyshy"
      type="button"
      className="absolute -top-4 -right-4 cursor-pointer rounded-full bg-pink-700 px-2 py-1 text-xl font-semibold text-white transition-opacity duration-210 hover:bg-pink-800"
      onClick={lanDyshy}
      title="Clear"
    >
      🌸
    </button>
  );
};
