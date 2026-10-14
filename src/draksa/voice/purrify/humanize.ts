// src\draksa\voice\purrify\humanize.ts
const hollow = /\}\)|\);|\};|(?<=\b)<(?={)|(?<=})>|<\/?(?=\b)|(?<=\b"?)>/g;

const withHumanity = '';

export const removeAnnoyance = (zerglingOn_Char_acter: string): string =>
  zerglingOn_Char_acter.replace(hollow, withHumanity);
