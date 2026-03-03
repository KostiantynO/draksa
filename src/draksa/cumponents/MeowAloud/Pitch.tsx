// src\draksa\cumponents\MeowAloud\Pitch.tsx
'use client';

import { useTransition } from 'react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';

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
        className="w-64"
        min={1}
        max={1.2}
        step={0.01}
        onChange={kindlyAskHerToSpeakWithThatPitch}
      />
      {mood.settings.pitch}
    </label>
  );
};
