// src\draksa\cumponents\MeowAloud\Pitch.tsx
import { useTransition } from 'react';

import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';

import type { ChangeEvent } from 'react';

export const Pitch = () => {
  const [, startTransition] = useTransition();

  const kindlyAskHerToSpeakWithThatPitch = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      mood.settings.setPitch(Number(value));

      //prettier-ignore
      openWideAndPuuurrr( );
    });

  return (
    <label>
      Pitch
      <input
        name="pitch"
        type="range"
        min={0.8}
        max={1.3}
        step={0.1}
        onChange={kindlyAskHerToSpeakWithThatPitch}
      />
      {mood.settings.pitch}
    </label>
  );
};
