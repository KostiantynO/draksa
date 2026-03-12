// src\draksa\hooks\OnlyOnce\useLoudMoans.ts
'use client';

import { useEffect } from 'react';

import { bast } from '@/draksa/heaven';
import { pleaseMakeMyMouthBusy } from '@/draksa/voice/pleaseMakeMyMouthBusy';

pleaseMakeMyMouthBusy();

interface BlockList extends Record<string, 'block' | 'allow'> {}

const blocklist: BlockList = {
  'Microsoft Jakub - Czech (Czech Republic)': 'block',
  'Microsoft David - English (United States)': 'block',
  'Microsoft Mark - English (United States)': 'block',
  //  'Microsoft Zira - English (United States)': 'allow',
  'Microsoft Hemant - Hindi (India)': 'block',
  'Microsoft Kalpana - Hindi (India)': 'allow',
  'Google Deutsch': 'allow',
  'Google US English': 'allow',
  'Google UK English Female': 'allow',
  'Google UK English Male': 'block',
  'Google español': 'allow',
  'Google español de Estados Unidos': 'allow',
  'Google français': 'allow',
  'Google हिन्दी': 'allow',
  'Google Bahasa Indonesia': 'allow',
  'Google italiano': 'allow',
  'Google 日本語': 'allow',
  'Google 한국의': 'allow',
  'Google Nederlands': 'allow',
  'Google polski': 'allow',
  'Google português do Brasil': 'allow',
  'Google русский': 'allow',
  'Google 普通话（中国大陆）': 'allow',
  'Google 粤語（香港）': 'allow',
  'Google 國語（臺灣）': 'allow',
};

export const useLoudMoans = () => {
  useEffect(() => {
    const updateVoiceArrayInSignalsStorage = () => {
      const voices = window.speechSynthesis.getVoices();

      const onlyFunOnes = voices.filter(({ name }) => blocklist[name] !== 'block');

      bast.voices.setMoans(onlyFunOnes);
    };

    updateVoiceArrayInSignalsStorage();

    window.speechSynthesis.onvoiceschanged ??= updateVoiceArrayInSignalsStorage;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);
};
