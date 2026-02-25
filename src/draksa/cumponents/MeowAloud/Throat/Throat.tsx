// src\draksa\cumponents\MeowAloud\Throat\Throat.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { useThroat } from '@/draksa/cumponents/MeowAloud/useThroat';
import { mood } from '@/draksa/perf/mood/mood';

export const Throat = () => {
  useSignals();
  const { sheMeows } = useThroat();

  return (
    <textarea
      name="feedMe"
      className="h-64 w-full rounded-2xl border border-pink-600/30 bg-transparent p-3 text-base"
      placeholder={draksaTells.pleaseFeedMe}
      value={mood.throat.polyGlotka.value}
      onChange={sheMeows}
      // onPaste={}
      // onKeyUp={}
    />
  );
};
