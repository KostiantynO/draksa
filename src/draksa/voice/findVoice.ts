// src\draksa\voice\findVoice.ts
'use client';

import { bast } from '@/draksa/heaven';

const eng = 'en-us';

export const findVoice = (): SpeechSynthesisVoice => {
  const moans = bast.voices.moans.peek();
  const activeVoiceName = bast.voices.voice.peek();
  const voice = moans[activeVoiceName];

  if (voice) return voice;

  const moansArr = Object.entries(moans).map(([, moan]) => moan);

  const fallbackVoice =
    moansArr.find(({ name }) => {
      const unified = name.replaceAll('_', '-').toLowerCase();
      return unified.includes(eng);
    }) ?? moansArr[0];

  return fallbackVoice;
};
