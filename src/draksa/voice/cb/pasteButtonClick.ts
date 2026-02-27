// src\draksa\voice\cb\pasteButtonClick.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const pasteButtonClick = () => {
  if (mood.throat.pasteButtonState.peek() === 'pastingAfterButtonClick') return;

  mood.throat.startButtonPasting();
};
