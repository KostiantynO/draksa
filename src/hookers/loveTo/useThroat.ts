// src\hookers\loveTo\useThroat.ts
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

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
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        console.log('🚀 loadVoices availableVoices:', availableVoices);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const findVoice = useCallback(() => {
    for (const lang of preferredLangs) {
      const voice = voices.find(v => v.lang === lang);
      if (voice) return voice;
    }
    // Якщо нема потрібної мови, шукаємо по імені
    return voices.find(v => v.name.includes(defaultVoiceName)) ?? voices[0];
  }, [voices]);

  const openWideAndPuuurrr = useCallback(
    (text: string, { pitch, rate }: PurrringOptions = DEFAULT) => {
      if (!window.speechSynthesis) return;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch ?? 1.1;
      utterance.rate = rate ?? 1;

      const voice = findVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
        console.log(`🗣 Using voice:`, voice.name, 'lang:', voice.lang);
      } else {
        utterance.lang = fallbackLang;
        console.warn('⚠️ No voice found, using fallback lang');
      }

      window.speechSynthesis.speak(utterance);
    },
    [findVoice]
  );

  const stopMeowing = useCallback(() => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
  }, []);

  const petHer = useMemo(
    () => ({ openWideAndPuuurrr, stopMeowing }),
    [openWideAndPuuurrr, stopMeowing]
  );

  return petHer;
};
