// src\draksa\voice\lanDyshy.ts
import { mood } from '@/draksa/perf/mood/mood';

export const lanDyshy = () => {
  if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

  mood.throat.clear();
};
