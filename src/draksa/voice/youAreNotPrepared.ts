// src\draksa\voice\youAreNotPrepared.ts
import { bast } from '@/draksa/heaven';
import { legs } from '@/draksa/magic/regexp';
import { purrify } from '@/draksa/voice/purrify/purrify';

export const youAreNotPrepared = () => {
  const polyGlotka = bast.throat.polyGlotka.peek();
  if (!polyGlotka.length) {
    bast.chunks.reset();
    return;
  }

  const draksa = purrify(polyGlotka);

  const catPoseYoga = draksa.split(legs);
  console.log(catPoseYoga);

  return catPoseYoga;
};
