// src\draksa\perf\club\paste.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { pasteButtonClick } from '@/draksa/voice/cb/pasteButtonClick';

const shortDelay = () => 50;

export const afterPasteButtonClick = bounce(pasteButtonClick, shortDelay);
