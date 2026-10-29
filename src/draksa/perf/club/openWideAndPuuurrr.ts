// src\draksa\perf\club\openWideAndPuuurrr.ts
'use client';

import { bast } from '@/draksa/heaven';
import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

import type { BounceReturn } from '@/draksa/perf/club/bouncer';

const getDelay = () => bast.mood.howLongSheWaitsBeforeSpeakingMs.peek();

export const openWideAndPuuurrr: BounceReturn = bounce(welcomeToTheClub, getDelay);
