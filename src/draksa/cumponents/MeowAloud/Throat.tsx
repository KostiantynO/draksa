// src\draksa\cumponents\MeowAloud\Throat.tsx
'use client';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';

export const Throat = () => {
  const { sheMeows } = useThroat();

  return (
    <textarea
      name="prettyLips"
      className="text-foreground placeholder:text-secondary-foreground/60 min-h-64 w-full grow bg-transparent text-base leading-6 disabled:opacity-0"
      placeholder={draksaTells.pweaseFeedMeDaddy}
      onChange={sheMeows}
    />
  );
};
