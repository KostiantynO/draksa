// src\draksa\voice\paste.ts
'use client';

import { batch } from '@preact/signals-react';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';

const cb = async () => {
  try {
    const text = await navigator.clipboard.readText();

    batch(() => {
      mood.throat.pleaseFeedMe(text);
      mood.throat.startPasting();
    });
  } catch (error) {
    console.error('Failed to read clipboard:', error);
  }
};

export const paste = bounce(cb, 50);
