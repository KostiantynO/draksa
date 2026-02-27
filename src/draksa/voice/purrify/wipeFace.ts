// src\draksa\voice\purrify\wipeFace.ts
export const wipeFace = (beCaring: string) =>
  beCaring
    .replace(/\n{3,}/g, '\n\n') // max 2 newlines
    .replace(/[ \t]+/g, ' ') // collapse horizontal whitespace
    .replace(/ \n/g, '\n') // no space before newline
    .trim();
