// src\draksa\voice\youAreNotPrepared.ts
import { mood } from '@/draksa/perf/mood/mood';
import { purrify } from '@/draksa/voice/purrify/purrify';

const legs = /(?<=[\n;.!?])\s+/;

export const youAreNotPrepared = () => {
  const polyGlotka = mood.throat.polyGlotka.peek().trim();
  if (!polyGlotka.length) {
    mood.chunks.reset();
    return;
  }

  const draksa = purrify(polyGlotka);

  const catPoseYoga = draksa.split(legs);
  console.log(catPoseYoga);

  return catPoseYoga;
};
