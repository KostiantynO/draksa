// src\draksa\perf\club\meowIt.ts
'use client';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { bast } from '@/draksa/heaven';
import { bounce } from '@/draksa/perf/club/bouncer';
import { purrNow } from '@/draksa/perf/club/purrNow';

import type { BounceReturn } from '@/draksa/perf/club/bouncer';

const meowItButtonClick = () => {
  const yogurt = draksaTells.myStory;

  bast.throat.pleaseFeedMe(yogurt);

  if (!bast.mood.isMeowingOnType.peek()) return;

  // prettier-ignore
  purrNow( )
};

const mediumDelay = () => 210;

export const meowIt: BounceReturn = bounce(meowItButtonClick, mediumDelay);
