// src\draksa\cumponents\MeowAloud\Throat\Throat.tsx
'use client';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';

export const Throat = () => {
  const { sheMeows, feedMeRef } = useThroat();

  return (
    <textarea
      name="feedMe"
      ref={feedMeRef}
      className="h-64 w-full rounded-2xl border border-pink-600/30 bg-transparent p-3 text-base"
      placeholder={draksaTells.pleaseFeedMe}
      onChange={sheMeows}
    />
  );
};
