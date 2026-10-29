// src\draksa\perf\club\afterPasteButtonClick.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { pasteButtonClick } from '@/draksa/voice/cb/pasteButtonClick';

import type { BounceReturn } from '@/draksa/perf/club/bouncer';

const shortDelay = () => 50;

export const afterPasteButtonClick: BounceReturn = bounce(pasteButtonClick, shortDelay);
