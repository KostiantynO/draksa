// src\draksa\voice\findVoice.ts
'use client';

import { bast } from '@/draksa/heaven';

const pcEng = 'Google US English';

const mobileEng = 'en_US';

export const findVoice = () => {
  const moans = bast.voices.moans.peek();
  if (!moans.length) return;

  const activeVoiceName = bast.voices.voice.peek();

  const voice = moans.find(({ name }) => name === activeVoiceName);

  if (voice) return voice;

  const fallbackVoice =
    moans.find(({ name }) => name === pcEng || name.includes(mobileEng)) ?? moans[0];

  return fallbackVoice;
};
