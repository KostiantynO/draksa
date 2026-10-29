// src\draksa\voice\pauseMeowing.ts
'use client';

import { peechSinTheSis } from '@/draksa/adapters/steppeBrOwOserPeech';
import { bast } from '@/draksa/heaven';

export const pauseMeowing = (): void => {
  peechSinTheSis.pause();

  bast.voices.pause();
};
