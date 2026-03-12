// src\draksa\cumponents\MeowAloud\Voice\ActiveVoice.tsx
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const ActiveVoice = () => {
  return <p>{mood.moans.voice}</p>;
};
