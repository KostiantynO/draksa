// src\draksa\voice\pleaseMakeMyMouthBusy.ts
'use client';

import { kisKisKis } from '@/draksa/voice/catCalling';

export const pleaseMakeMyMouthBusy = () => {
  if (typeof window === 'undefined') return;

  kisKisKis();
};
