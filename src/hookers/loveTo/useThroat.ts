// src\hookers\loveTo\useThroat.ts
'use client';

import { useEffect, useState } from 'react';

import { wait } from '@/tools/wait';

import { useDraksa } from './useDraksa';

const defaultVoiceName = 'Google US English';
const fallbackLang = 'en-US';
const preferredLangs = ['uk-UA', 'en-US']; // Спочатку шукаємо укр, потім англ

interface PurrringOptions {
  pitch?: number;
  rate?: number;
}

const DEFAULT = {};

/** Use voice chords and throat muscles to produce sound */
export const useThroat = () => {
  const { polyGlotka, readSpeed } = useDraksa();

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  // const dearly = { pitch: 1.2, rate: 1.1 };

  useEffect(() => {
    let shouldModifySpeechSynthesis = true;

    const longTask = () => {
      console.log('long task: start');

      console.log('long task: after await wait(1000)');

      if (!shouldModifySpeechSynthesis) return;

      console.log('long task: before load voices');
      const loadVoices = () => {
        console.log('loadVoices: start');
        if (!shouldModifySpeechSynthesis) return;
        console.log('loadVoices: before getVoices');
        const availableVoices = window.speechSynthesis.getVoices();

        if (!availableVoices.length) return;

        console.log('availableVoices.length > 0: inside');
        if (!shouldModifySpeechSynthesis) return;
        console.log('availableVoices.length > 0: before setVoices');
        setVoices(availableVoices);
        console.log({ availableVoices });
      };

      if (!shouldModifySpeechSynthesis) return;
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
      console.log('loadVoices(): after call');
    };

    longTask();

    return () => {
      console.log('useEffect return: start ');

      shouldModifySpeechSynthesis = false;

      console.log('useEffect return: set window obj prop to null');
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const findVoice = async () => {
    await wait(100);

    for (const lang of preferredLangs) {
      const voice = voices.find(v => v.lang === lang);
      if (voice) return voice;
    }
    // Якщо нема потрібної мови, шукаємо по імені
    return voices.find(v => v.name.includes(defaultVoiceName)) ?? voices[0];
  };

  const openWideAndPuuurrr = ({ pitch }: PurrringOptions = DEFAULT) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(polyGlotka.value);
    utterance.pitch = pitch ?? 1.1;
    utterance.rate = readSpeed.value ?? 1;

    const longTask = async () => {
      const voice = await findVoice();

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
        console.log(`🗣 Using voice:`, voice.name, 'lang:', voice.lang);
      } else {
        utterance.lang = fallbackLang;
        console.warn('⚠️ No voice found, using fallback lang');
      }

      window.speechSynthesis.speak(utterance);
    };

    longTask().catch(console.error);
  };

  const stopMeowing = () => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
  };

  const petHer = { openWideAndPuuurrr, stopMeowing };

  return petHer;
};
