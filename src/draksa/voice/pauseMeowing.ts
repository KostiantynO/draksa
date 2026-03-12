// src\draksa\voice\pauseMeowing.ts
'use client';

import { bast } from '@/draksa/heaven';

export const pauseMeowing = () => {
  const kitty = window.speechSynthesis;
  kitty.pause();

  bast.voices.pause();
};
