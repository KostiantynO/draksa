// src\draksa\voice\resumeMeowing.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const resumeMeowing = () => {
  const synth = window.speechSynthesis;

  mood.moans.meow();
  synth.resume();
};
