// src\draksa\cumponents\MeowAloud\Throat\Throat.tsx
'use client';

import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';

export const Throat = () => {
  const { sheMeows, throatRef } = useThroat();

  return (
    <textarea
      name="polyGlotka"
      ref={throatRef}
      className="container mx-auto flex h-64 w-full max-w-3xl gap-2 rounded-2xl border border-pink-600/30 bg-black/35 p-3 text-base"
      placeholder="Please feed me..."
      onChange={sheMeows}
    />
  );
};
