// src\draksa\voice\purrify\humanize.ts

interface Mattern {
  name: string;
  mattern: string;
}

interface Matterns extends Record<
  | 'closingCurly'
  | 'jsxFragment'
  | 'jsxTag'
  | 'lessThan'
  | 'greaterThan'
  | 'gtClosingTag'
  | 'ltClosingTag'
  | 'markdown'
  | 'hyphenInLinks'
  | 'dotsAndHash'
  | 'tilda',
  Mattern
> {}

// prettier-ignore
export const matterns: Matterns = {
    closingCurly : { name:'closingCurly',  mattern: String.raw`}\)|[)}\`];`        },
    jsxFragment  : { name:'jsxFragment',   mattern: String.raw`<\/?>`              },
    jsxTag       : { name:'jsxTag',        mattern: String.raw`<\/?(?=\w)>`        },
    lessThan     : { name:'lessThan',      mattern: String.raw`<(?=[\w{"'])`       },
    greaterThan  : { name:'greaterThan',   mattern: String.raw`(?<=[^\d\W]|[}"'])>`},
    gtClosingTag : { name:'gtClosingTag',  mattern: String.raw`\/>`                },
    ltClosingTag : { name:'ltClosingTag',  mattern: String.raw`</`                 },
    markdown     : { name:'markdown',      mattern: String.raw`\`\`\`|\`|\*|_|---` },
    hyphenInLinks: { name:'hyphenInLinks', mattern: String.raw`(?<=\w)-(?=\w)`     },
    dotsAndHash  : { name:'dotsAndHash',   mattern: String.raw`\.\.\.|#`           },
    tilda        : { name:'tilda',         mattern: String.raw`~~~|~~`             },
  } as const;

const annoyance = Object.values<Mattern>(matterns)
  .map(({ mattern }) => mattern)
  .join('|');

// const new = /<\/?(\w*\s*)\/?>/g // with capture group

// console.log({ annoyance });

// 2026-10-27 23:45
// }\)|[)}\`];|<\/?>|<\/?(?=\w)>|<(?=[\w{"'])|(?<=[\w}"'])>|\/>(?=\s)|\`\`\`|\`|\*|_|---|(?<=\w)-(?=\w)|\.\.\.|#

{
  // test:  'Humanity.tsx must not contain tags angle brackets < >'
  // const toCheck = /<\/?(?=[\w{])|\/>|(?<=[\w"'}\/\s])>(?![>=])|<>|<\/>/g;
}

// const hollow = old;
const hollow = new RegExp(annoyance, 'g');

// new - with capture group
// const withHumanity = ' $1 ';

// old
const withHumanity = ' ';

export const removeAnnoyance = (zerglingOn_Char_acter: string): string =>
  zerglingOn_Char_acter.replace(hollow, withHumanity);
