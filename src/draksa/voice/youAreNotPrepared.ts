// src\draksa\voice\youAreNotPrepared.ts
import { bast } from '@/draksa/heaven';
import { purrify } from '@/draksa/voice/purrify/purrify';

const unwrapLongLine = /(?<=[\n;.!?])\s+/g;

const legs = /\n/g;

export const youAreNotPrepared = (): string[] | undefined => {
  const polyGlotka = bast.throat.polyGlotka.peek();
  if (!polyGlotka.length) {
    bast.chunks.reset();
    return;
  }

  const draksa = purrify(polyGlotka);

  if (!legs.test(polyGlotka) && polyGlotka.length > 100) {
    return draksa.split(unwrapLongLine);
  }

  const catPoseYoga = draksa.split(legs);

  return catPoseYoga;
};
