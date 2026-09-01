// src\draksa\cumponents\MeowAloud\Pitch.tsx
'use client';

import { useTransition } from 'react';

import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';

import type { ChangeEvent } from 'react';

export const Pitch = () => {
  const [, startTransition] = useTransition();

  const kindlyAskHerToSpeakWithThatPitch = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      bast.settings.setPitch(Number(value));

      //prettier-ignore
      openWideAndPuuurrr( );
    });

  return (
    <label>
      Pitch
      <input
        name="pitch"
        type="range"
        className="min-w-36"
        min={1}
        max={1.2}
        step={0.01}
        onChange={kindlyAskHerToSpeakWithThatPitch}
      />
      {bast.settings.pitch}
    </label>
  );
};
