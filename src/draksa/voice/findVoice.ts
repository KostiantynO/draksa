// src\draksa\voice\findVoice.ts
'use client';

import { bast } from '@/draksa/heaven';

const eng = 'Google US English';

export const findVoice = () => {
  const moans = bast.voices.moans.peek();
  if (!moans.length) return;

  const activeVoiceName = bast.voices.voice.peek();

  const voice = moans.find(({ name }) => name === activeVoiceName);

  if (voice) return voice;

  const fallbackVoice = moans.find(({ name }) => name === eng) ?? moans[0];
  return fallbackVoice;
};
