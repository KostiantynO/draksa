// src\draksa\voice\purrify\wipeFace.ts

const max2Newlines = /\n{3,}/g;
const collapseHorizontalWhitespace = /[ \t]+/g;
const noSpaceBeforeNewline = / \n/g;

export const wipeFace = (beCaring: string): string =>
  beCaring
    .replace(max2Newlines, '\n\n')
    .replace(collapseHorizontalWhitespace, ' ')
    .replace(noSpaceBeforeNewline, '\n')
    .trim();
