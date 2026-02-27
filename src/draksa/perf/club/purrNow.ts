// src\draksa\perf\club\purrNow.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

export const purrNow = bounce(welcomeToTheClub, 50);
