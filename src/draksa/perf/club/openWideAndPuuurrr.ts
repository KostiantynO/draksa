// src\draksa\perf\club\openWideAndPuuurrr.ts
'use client';

import { bast } from '@/draksa/heaven';
import { bounce } from '@/draksa/perf/club/bouncer';
import { welcomeToTheClub } from '@/draksa/voice/cb/welcomeToTheClub';

export const openWideAndPuuurrr = bounce(
  welcomeToTheClub,
  bast.settings.speechDebounceForTypingInMs.peek()
);
