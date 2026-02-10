// src\cumponents\Draksa\Throat.tsx
'use client';

import { draksaTells } from './draksaTells';
import { useThroatLogic } from './useThroatLogic';

export const Throat = () => {
  const { polyGlotka, sheMeows } = useThroatLogic();

  return (
    <textarea
      name="prettyLips"
      className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
      placeholder={draksaTells.pweaseFeedMeDaddy}
      onChange={sheMeows}
      value={polyGlotka.value}
    />
  );
};
