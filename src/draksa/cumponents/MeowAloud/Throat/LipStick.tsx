// src\draksa\cumponents\MeowAloud\Throat\LipStick.tsx
'use client';

import { Button } from '@/draksa/cumponents/ui/Button';
import { lanDyshy } from '@/draksa/voice/lanDyshy';

export const LipStick = () => {
  return (
    <Button
      name="lanDyshy"
      type="button"
      title="Clear"
      className="absolute contain-content -top-6 -right-1 text-xl"
      onClick={lanDyshy}
    >
      💄
    </Button>
  );
};
