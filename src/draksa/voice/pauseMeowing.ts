// src\draksa\voice\pauseMeowing.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const pauseMeowing = () => {
  window.speechSynthesis.pause();

  mood.moans.pause();
};
