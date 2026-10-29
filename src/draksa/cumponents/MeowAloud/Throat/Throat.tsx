// src\draksa\cumponents\MeowAloud\Throat\Throat.tsx
'use client';

import { useThroat } from '@/draksa/cumponents/MeowAloud/Throat/useThroat';

import type { JSX } from 'react';

export const Throat = (): JSX.Element => {
  const { sheMeows, cumPuted } = useThroat();

  return (
    <textarea
      name="polyGlotka"
      value={cumPuted.value}
      className="container mx-auto flex h-57 w-full max-w-3xl rounded-2xl border bg-[linear-gradient(#faefae05_1px,transparent_3px),linear-gradient(90deg,#baebae05_1px,transparent_1px)] bg-size-[21px_21px] p-3 text-base"
      placeholder="Please feed me..."
      onChange={sheMeows}
    />
  );
};
