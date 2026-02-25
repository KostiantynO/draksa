// src\draksa\hooks\OnlyOnce\useLoudMoans.ts
'use client';

import { useEffect } from 'react';

import { mood } from '@/draksa/perf/mood/mood';

export const useLoudMoans = () => {
  useEffect(() => {
    const updateVoiceArrayInSignalsStorage = () => {
      const voices = window.speechSynthesis.getVoices();
      mood.moans.setMoans(voices);
    };

    updateVoiceArrayInSignalsStorage();

    window.speechSynthesis.onvoiceschanged ??= updateVoiceArrayInSignalsStorage;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);
};
