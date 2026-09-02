// src\draksa\hooks\OnlyOnce\useLoudMoans.ts
'use client';

import { useEffect } from 'react';

import { loadMoans } from '@/draksa/voice/loudMoans';
import { pleaseMakeMyMouthBusy } from '@/draksa/voice/pleaseMakeMyMouthBusy';

pleaseMakeMyMouthBusy();

export const useLoudMoans = () => {
  useEffect(() => {
    loadMoans();

    window.speechSynthesis.onvoiceschanged ??= loadMoans;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);
};
