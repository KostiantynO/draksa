// src\draksa\voice\cb\pasteButtonClick.ts
'use client';

import { bast } from '@/draksa/heaven';
import { purrNow } from '@/draksa/perf/club/purrNow';

export const pasteButtonClick = async () => {
  if (bast.throat.pasteButtonState.peek() === 'pastingAfterButtonClick') return;
  bast.throat.startButtonPasting();

  const yogurt = await navigator.clipboard.readText();

  bast.throat.pleaseFeedMe(yogurt);

  if (!bast.settings.isMeowingOnType.peek()) return;

  // prettier-ignore
  purrNow( )
  bast.throat.stopButtonPasting();
};
