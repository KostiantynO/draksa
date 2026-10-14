// src\draksa\magic\regexp.ts

export const max2Newlines = /\n{3,}/g;
export const collapseHorizontalWhitespace = /[ \t]+/g;
export const noSpaceBeforeNewline = / \n/g;

// TODO ME too :D
export const globalMagic = /!\s*/g;
