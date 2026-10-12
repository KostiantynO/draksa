// src\draksa\voice\purrify\purrify.ts

import { bast } from '@/draksa/heaven';
import { yourSilenceIsMyFavoriteSaaaaauuund } from '@/draksa/voice/purrify/bellie';
import { purrifier } from '@/draksa/voice/purrify/ca';
import { smartCodify } from '@/draksa/voice/purrify/codeHeuristic';
import { removeAnnoyance } from '@/draksa/voice/purrify/silence';
import { wipeFace } from '@/draksa/voice/purrify/wipeFace';

export const purrify = (catting: string): string => {
  let raw = catting;
  if (bast.parsing.silence.peek()) raw = yourSilenceIsMyFavoriteSaaaaauuund(raw);
  if (bast.parsing.humanize.peek()) raw = removeAnnoyance(raw);
  if (bast.parsing.purrify.peek()) raw = purrifier(raw);
  if (bast.parsing.whitespace.peek()) raw = wipeFace(raw);
  if (bast.parsing.codify.peek()) raw = smartCodify(raw);
  return raw;
};
