// src\draksa\hooks\OnlyOnce\useLoudMoans.ts
'use client';

import { useEffect } from 'react';

import { peechSinTheSis } from '@/draksa/adapters/steppeBrOwOserPeech';
import { loadMoans } from '@/draksa/voice/loudMoans';
import { pleaseMakeMyMouthBusy } from '@/draksa/voice/pleaseMakeMyMouthBusy';

pleaseMakeMyMouthBusy();

export const useLoudMoans = (): void => {
  useEffect(() => {
    loadMoans();

    peechSinTheSis.onMoansChange(loadMoans);

    return () => {
      peechSinTheSis.onMoansChange(null);
    };
  }, []);
};
