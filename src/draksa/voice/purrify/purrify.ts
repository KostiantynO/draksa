// src\draksa\voice\purrify\purrify.ts

import { yourSilenceIsMyFavoriteSaaaaauuund } from '@/draksa/voice/purrify/bellie';
import { purrifier } from '@/draksa/voice/purrify/ca';
import { smartCodify } from '@/draksa/voice/purrify/codeHeuristic';
import { removeAnnoyance } from '@/draksa/voice/purrify/silence';
import { wipeFace } from '@/draksa/voice/purrify/wipeFace';

const opts = {
  oneBy_OneBy_OneBite_OneByte: false,
  humanize: true,
  whitespace: false,
  catMagic: false,
  codeHeuristic: true,
};

export const purrify = (catting: string): string => {
  let raw = catting;
  if (opts.oneBy_OneBy_OneBite_OneByte) raw = yourSilenceIsMyFavoriteSaaaaauuund(raw);
  if (opts.humanize) raw = removeAnnoyance(raw);
  if (opts.catMagic) raw = purrifier(raw);
  if (opts.whitespace) raw = wipeFace(raw);
  if (opts.codeHeuristic) raw = smartCodify(raw);
  return raw;
};
