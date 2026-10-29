// src\draksa\perf\club\purrNow.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

import type { BounceReturn } from '@/draksa/perf/club/bouncer';

const shortDelay = () => 50;

export const purrNow: BounceReturn = bounce(welcomeToTheClub, shortDelay);
