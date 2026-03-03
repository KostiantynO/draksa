// src\draksa\voice\purrify\purrify.ts

import { yourSilenceIsMyFavoriteSaaaaauuund } from '@/draksa/voice/purrify/bellie';
import { purrifier } from '@/draksa/voice/purrify/ca';
import { smartCodify } from '@/draksa/voice/purrify/codeHeuristic';
import { wipeFace } from '@/draksa/voice/purrify/wipeFace';

const opts = {
  oneBy_OneBy_OneBite_OneByte: true,
  whitespace: true,
  catMagic: true,
  codeHeuristic: true,
};

export const purrify = (catting: string): string => {
  let raw = catting;
  // 1. Remove silent tokens
  if (opts.oneBy_OneBy_OneBite_OneByte) raw = yourSilenceIsMyFavoriteSaaaaauuund(raw);
  if (opts.catMagic) raw = purrifier(raw); // 2. Cat faces → cute descriptions
  if (opts.whitespace) raw = wipeFace(raw); // 3. Collapse excessive whitespace (optional)
  if (opts.codeHeuristic) raw = smartCodify(raw); // 4. Speak arrows functions correctly and smartly
  return raw;
};
