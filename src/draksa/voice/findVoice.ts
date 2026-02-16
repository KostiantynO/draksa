// src\draksa\voice\findVoice.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

const fallbackLangName = 'Google US English';

/*
const GoogleVoiceKurvaNePyzdyMojuDatuBlyad: SpeechSynthesisVoice[] = [
  {
    voiceURI: 'Google Deutsch',
    name: 'Google Deutsch',
    lang: 'de-DE',
    localService: false,
    default: false,
  },
  {
    voiceURI: 'Google US English',
    name: 'Google US English',
    lang: 'en-US',
    localService: false,
    default: false,
  },
  {
    voiceURI: 'Google français',
    name: 'Google français',
    lang: 'fr-FR',
    localService: false,
    default: false,
  },
  {
    voiceURI: 'Google हिन्दी',
    name: 'Google हिन्दी',
    lang: 'hi-IN',
    localService: false,
    default: false,
  },
  {
    voiceURI: 'Google italiano',
    name: 'Google italiano',
    lang: 'it-IT',
    localService: false,
    default: false,
  },
  {
    voiceURI: 'Google Nederlands',
    name: 'Google Nederlands',
    lang: 'nl-NL',
    localService: false,
    default: false,
  },
];

*/

export const findVoice = () => {
  const voices = mood.moans.peek();

  const voice = voices.find(({ name }) => name === mood.voiceOfGrGaGvity.peek());

  if (voice) return voice;

  const fallbackVoice = voices.find(({ name }) => name === fallbackLangName);
  console.warn(`⚠️ No voice found, using fallback '${fallbackLangName}' ⚠️`);

  return fallbackVoice;
};
