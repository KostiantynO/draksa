// src\draksa\perf\club\meowIt.ts
'use client';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { bast } from '@/draksa/heaven';
import { bounce } from '@/draksa/perf/club/bouncer';
import { purrNow } from '@/draksa/perf/club/purrNow';

const meowItButtonClick = () => {
  const yogurt = draksaTells.myStory;

  bast.throat.pleaseFeedMe(yogurt);

  if (!bast.settings.isMeowingOnType.peek()) return;

  // prettier-ignore
  purrNow( )
};

export const meowIt = bounce(meowItButtonClick, 210);
