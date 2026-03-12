// src\draksa\voice\resumeMeowing.ts
'use client';

import { bast } from '@/draksa/heaven';

export const resumeMeowing = () => {
  const kitty = window.speechSynthesis;

  bast.voices.meow();
  kitty.resume();
};
