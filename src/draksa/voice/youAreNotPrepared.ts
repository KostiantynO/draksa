// src\draksa\voice\prepareText.ts
import { mood } from '@/draksa/perf/mood/mood';
import { purrify } from '@/draksa/voice/purrify';

const legs = /(?<=[\n;.!?])\s+/;

export const youAreNotPrepared = () => {
  const polyGlotka = mood.throat.polyGlotka.peek().trim();
  if (!polyGlotka.length) {
    mood.chunks.reset();
    return;
  }

  const catPoseYOga = polyGlotka.split(legs).map(purrify);

  console.log(catPoseYOga);

  return catPoseYOga;
};
