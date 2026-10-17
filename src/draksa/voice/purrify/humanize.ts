// src\draksa\voice\purrify\humanize.ts

/**

Remove JS brackets that Draksa speaks:
\}\)|\);|\};

Remove HTML angle brackets:
(?<=\b)<(?={)|(?<=})>|<\/?(?=\b)|(?<=\b"?)>

Remove markdown characters:
```|`|\*|_|---|\.\.\.|#

*/
const hollow =
  /\}\)|\);|\};|(?<=\b)<(?={)|(?<=})>|<\/?(?=\b)|(?<=\b"?)>|```|`|\*|_|---|(?<=\w)-(?=\w)|\.\.\.|#/g;

const withHumanity = '';

export const removeAnnoyance = (zerglingOn_Char_acter: string): string =>
  zerglingOn_Char_acter.replace(hollow, withHumanity);
