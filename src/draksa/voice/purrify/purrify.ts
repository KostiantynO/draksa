// src\draksa\voice\purrify\purrify.ts

import { yourSilenceIsMyFavoriteSaaaaauuund } from '@/draksa/voice/purrify/bellie';
import { purrifier } from '@/draksa/voice/purrify/ca';
import { smartCodify } from '@/draksa/voice/purrify/codeHeuristic';
import { codify } from '@/draksa/voice/purrify/codify';
import { wipeFace } from '@/draksa/voice/purrify/wipeFace';

const opts = {
  oneBy_OneBy_OneBite_OneByte: true,
  whitespace: true,
  catMagic: true,
  code: false,
  codeHeuristic: true,
};

export const purrify = (catting: string): string => {
  let raw = catting;

  // 1. Remove exact silent tokens (most aggressive first)
  if (opts.oneBy_OneBy_OneBite_OneByte) {
    raw = yourSilenceIsMyFavoriteSaaaaauuund(raw);
  }

  // 2. Cat faces → cute descriptions
  if (opts.catMagic) {
    raw = purrifier(raw);
  }

  // 3. Collapse excessive whitespace (optional)
  if (opts.whitespace) {
    raw = wipeFace(raw);
  }

  // 4. Speak arrows functions correctly
  if (opts.code) {
    raw = codify(raw);
  }

  // 4. Speak arrows functions correctly and smartly
  if (opts.codeHeuristic) {
    raw = smartCodify(raw);
  }

  return raw;
};
