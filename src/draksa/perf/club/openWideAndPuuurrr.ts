// src\draksa\perf\club\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 500);
