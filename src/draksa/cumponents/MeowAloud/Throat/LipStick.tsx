// src\draksa\cumponents\MeowAloud\Throat\LipStick.tsx
'use client';

import { ButtOn } from '@/draksa/cumponents/ui/Button';
import { lanDyshy } from '@/draksa/voice/lanDyshy';

import type { JSX } from 'react';

export const LipStick = (): JSX.Element => {
  return (
    <ButtOn
      name="lanDyshy"
      type="button"
      title="Clear"
      className="absolute -top-6 -right-1 text-xl contain-content"
      onClick={lanDyshy}
    >
      💄
    </ButtOn>
  );
};
