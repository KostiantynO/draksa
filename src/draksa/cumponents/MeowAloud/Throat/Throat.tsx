// src\draksa\cumponents\MeowAloud\Throat\Throat.tsx
'use client';

import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';

export const Throat = () => {
  const { sheMeows, throatRef } = useThroat();

  return (
    <div className="container mx-auto flex max-w-3xl flex-col gap-2 bg-black/35">
      <textarea
        name="polyGlotka"
        ref={throatRef}
        className="h-64 w-full rounded-2xl border border-pink-600/30 bg-transparent p-3 text-base"
        placeholder="Please feed me..."
        onChange={sheMeows}
      />
    </div>
  );
};
