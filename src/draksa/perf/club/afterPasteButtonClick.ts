// src\draksa\perf\club\paste.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { pasteButtonClick } from '@/draksa/voice/cb/pasteButtonClick';

export const afterPasteButtonClick = bounce(pasteButtonClick, 50);
