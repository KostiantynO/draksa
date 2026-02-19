// src\draksa\cumponents\MeowAloud\Pitch.tsx
import { useTransition } from 'react';

import { mood } from '@/draksa/perf/mood/mood';

import type { ChangeEvent } from 'react';

export const Pitch = () => {
  const [, startTransition] = useTransition();

  const kindlyAskHerToSpeakWithThatPitch = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      mood.setPitch(Number(value));
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
      {mood.pitch}
    </label>
  );
};
