// src\draksa\voice\selectVoice.ts
import { batch } from '@preact/signals-react';

import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';

export const selectVoice = (voiceName: string) => {
  batch(() => {
    bast.voices.startVoiceChange();
    bast.voices.setVoice(voiceName);
  });

  // prettier-ignore
  openWideAndPuuurrr( );
};
