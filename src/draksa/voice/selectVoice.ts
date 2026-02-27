// src\draksa\voice\selectVoice.ts
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';

export const selectVoice = (voiceName: string) => {
  mood.moans.setVoice(voiceName);

  // prettier-ignore
  openWideAndPuuurrr( );
};
