// src\draksa\voice\stopMeowing.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const stopMeowing = () => {
  window.speechSynthesis.pause();

  mood.doesSheWantToSlurp(false);
  mood.prayToGrGaGvity(true);
};
