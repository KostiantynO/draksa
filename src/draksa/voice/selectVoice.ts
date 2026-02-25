// src\draksa\voice\selectVoice.ts
import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';

export const selectVoice = (voiceName: string) => {
  mood.moans.setVoice(voiceName);

  // prettier-ignore
  openWideAndPuuurrr( );
};
