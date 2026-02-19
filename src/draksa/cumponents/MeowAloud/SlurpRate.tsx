// src\draksa\cumponents\MeowAloud\SlurpRate.tsx
'use client';

import { useTransition } from 'react';

import { mood } from '@/draksa/perf/mood/mood';

import type { ChangeEvent } from 'react';

export const SlurpRate = () => {
  const [, startTransition] = useTransition();

  const kindlyAskHerToSlurpAtMyOwnTempo = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      mood.sheLikesThisTempo(Number(value));
    });

  return (
    <label className="flex items-center gap-2">
      <span className="whitespace-nowrap">Slurp rate</span>
      <input
        name="slurpRate"
        type="range"
        step={0.05}
        min={0.8}
        max={1.5}
        onChange={kindlyAskHerToSlurpAtMyOwnTempo}
      />
      {mood.slurpRate}
    </label>
  );
};
