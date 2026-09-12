// src\draksa\perf\club\purrNow.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

const shortDelay = () => 50;

export const purrNow = bounce(welcomeToTheClub, shortDelay);
