// src\draksa\voice\resumeMeowing.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const resumeMeowing = () => {
  const kitty = window.speechSynthesis;

  mood.moans.meow();
  kitty.resume();
};
