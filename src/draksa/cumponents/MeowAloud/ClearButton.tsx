// src\draksa\cumponents\MeowAloud\ClearButton.tsx
'use client';

import { lanDyshy } from '@/draksa/voice/lanDyshy';

export const ClearButton = () => {
  return (
    <button
      name="youMayBreatheForASec"
      type="button"
      className="absolute top-0 right-0 cursor-pointer self-end rounded-lg bg-pink-700 px-2 py-1 text-xl font-semibold text-white transition-opacity duration-210 hover:bg-pink-800"
      onClick={lanDyshy}
    >
      🧹
    </button>
  );
};
