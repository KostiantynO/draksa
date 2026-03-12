// src\draksa\voice\pauseMeowing.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const pauseMeowing = () => {
  const kitty = window.speechSynthesis;
  kitty.pause();

  mood.moans.pause();
};
