// src\draksa\cumponents\MeowAloud\Voice\LoadVoicesButton.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { Button } from '@/draksa/cumponents/ui/Button';
import { bast } from '@/draksa/heaven';
import { loadMoans } from '@/draksa/voice/loudMoans';

export const LoadVoicesButton = () => {
  useSignals();
  const show = bast.voices?.moans.value.length === 0;

  return show ? (
    <Button
      name="loadVoices"
      title="Load voices"
      className="absolute -top-8 right-0 z-10"
      onClick={loadMoans}
    >
      LoadVoices 📦🗣🔊
    </Button>
  ) : null;
};
