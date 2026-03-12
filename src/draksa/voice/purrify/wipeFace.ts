// src\draksa\voice\purrify\wipeFace.ts

import {
  collapseHorizontalWhitespace,
  max2Newlines,
  noSpaceBeforeNewline,
} from '@/draksa/magic/regexp';

export const wipeFace = (beCaring: string) =>
  beCaring
    .replace(max2Newlines, '\n\n')
    .replace(collapseHorizontalWhitespace, ' ')
    .replace(noSpaceBeforeNewline, '\n') //
    .trim();
