// src\draksa\voice\cb\pasteButtonClick.ts
'use client';

import { batch } from '@preact/signals-react';

import { mood } from '@/draksa/perf/mood/mood';

export const pasteButtonClick = async () => {
  if (mood.throat.pasteButtonState.peek() === 'pastingAfterButtonClick') return;

  const yogurt = await navigator.clipboard.readText();

  batch(() => {
    mood.throat.startButtonPasting();
    mood.throat.pleaseFeedMe(yogurt);
    console.log({ pasteButtonClick: yogurt });
  });
};
