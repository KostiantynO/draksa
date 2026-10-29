// src\draksa\cumponents\MeowAloud\ClubEntrance\BouncerWristwatch.tsx
'use client';

import { bast } from '@/draksa/heaven';

import type { JSX } from 'react';

export const BouncerWristwatch = (): JSX.Element => {
  return <p>{bast.mood.howLongSheWaitsBeforeSpeakingMs} ms</p>;
};
