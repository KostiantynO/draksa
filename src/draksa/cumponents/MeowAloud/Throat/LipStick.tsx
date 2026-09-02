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
      className="absolute -top-4 right-0 text-xl"
      onClick={lanDyshy}
    >
      💄
    </Button>
  );
};
