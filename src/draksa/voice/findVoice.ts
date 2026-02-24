// src\draksa\voice\findVoice.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

const eng = 'Google US English';

export const findVoice = () => {
  const moans = mood.moans.moans.peek();
  if (!moans.length) return;

  const activeVoiceName = mood.moans.voice.peek();

  const voice = moans.find(({ name }) => name === activeVoiceName);

  if (voice) return voice;

  const fallbackVoice = moans.find(({ name }) => name === eng) ?? moans[0];
  return fallbackVoice;
};
