// src\draksa\voice\pleaseMakeMyMouthBusy.ts
'use client';

import { peechSinTheSis } from '@/draksa/adapters/steppeBrOwOserPeech';
import { kisKisKis } from '@/draksa/voice/catCalling';

export const pleaseMakeMyMouthBusy = () => {
  if (!peechSinTheSis.yaGotova()) return;

  kisKisKis();
};
