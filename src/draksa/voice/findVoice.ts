// src\draksa\voice\findVoice.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

const fallbackLangName = 'Google US English';

export const findVoice = () => {
  const voices = mood.moans.peek();

  const voice = voices.find(({ name }) => name === mood.voiceOfGrGaGvity.peek());

  if (voice) return voice;

  const fallbackVoice = voices.find(({ name }) => name === fallbackLangName);
  console.warn(`⚠️ No voice found, using fallback '${fallbackLangName}' ⚠️`);

  return fallbackVoice;
};
