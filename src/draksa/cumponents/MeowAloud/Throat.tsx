// src\draksa\cumponents\MeowAloud\Throat.tsx
'use client';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';

export const Throat = () => {
  const { sheMeows } = useThroat();

  return (
    <textarea
      name="prettyLips"
      className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
      placeholder={draksaTells.pweaseFeedMeDaddy}
      onChange={sheMeows}
    />
  );
};
