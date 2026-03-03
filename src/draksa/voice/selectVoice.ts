// src\draksa\voice\selectVoice.ts
import { batch } from '@preact/signals-react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';

export const selectVoice = (voiceName: string) => {
  batch(() => {
    mood.moans.startVoiceChange();
    mood.moans.setVoice(voiceName);
  });

  // prettier-ignore
  openWideAndPuuurrr( );
};
