// src\draksa\voice\cb\pasteButtonClick.ts
'use client';

import { bast } from '@/draksa/heaven';
import { purrNow } from '@/draksa/perf/club/purrNow';

export const pasteButtonClick = async () => {
  if (bast.throat.pasteButtonState.peek() === 'pastingAfterButtonClick') return;
  bast.throat.startButtonPasting();

  try {
    const yogurt = await navigator.clipboard.readText();

    bast.throat.pleaseFeedMe(yogurt);
    bast.throat.stopButtonPasting();

    if (!bast.mood.isMeowingOnType.peek()) return;

    // prettier-ignore
    purrNow( )
  } catch (error) {
    bast.throat.stopButtonPasting();
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }
};
