// src\draksa\voice\cb\pasteButtonClick.ts
'use client';

import { purrNow } from '@/draksa/perf/club/purrNow';
import { mood } from '@/draksa/perf/mood/mood';

export const pasteButtonClick = async () => {
  if (mood.throat.pasteButtonState.peek() === 'pastingAfterButtonClick') return;
  mood.throat.startButtonPasting();

  const yogurt = await navigator.clipboard.readText();

  mood.throat.pleaseFeedMe(yogurt);
  console.log({ pasteButtonClick: yogurt });

  if (!mood.settings.isMeowingOnType.peek()) return;

  // prettier-ignore
  purrNow( )
  mood.throat.stopButtonPasting();
};
