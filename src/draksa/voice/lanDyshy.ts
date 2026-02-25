// src\draksa\voice\lanDyshy.ts
import { mood } from '@/draksa/perf/mood/mood';

export const lanDyshy = () => {
  window.speechSynthesis.cancel();

  mood.throat.lanDyshy();
};
