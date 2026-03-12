// src\draksa\voice\purrify\codify.ts

import { braces, globalMagic, magic, operators } from '@/draksa/magic/regexp';

const code = new Map<string, string>(
  Object.entries({
    '(() => ': 'arrow function callback',
    '=>': 'arrow function',
    // '{': '',
    // '}': '',
    '= /': 'equals regular expression',
    '!==': 'strictly not equals',
    '!=': 'not equals',
    '===': 'strictly equals',
    '==': 'loosely equals',
    '>=': 'greater than or equals',
    '<=': 'less than or equals',
    '||': 'or',
    '&&': 'and',
    '!': 'not',
    ', []);': 'empty deps array, ',
    '...args': 'restArgs',
  })
);

const replacer = (maybeCodik: string): string => {
  if (braces.test(maybeCodik)) return ''; // silent braces most of time
  if (!code.has(maybeCodik)) return maybeCodik;
  const codik = code.get(maybeCodik);

  return codik ? ` ${codik} ` : '';
};

// export const codify = (raw: string): string => {
//   return raw.replace(codeMagic, replacer);
// };

export const codify = (raw: string): string => {
  let text = raw;

  // 1. operators with higher priority / longer length first
  text = text.replace(operators, replacer);

  // 2. single ! only if it looks like logical not
  // (very crude – after ( or , or => or = etc.)
  text = text.replace(globalMagic, (m, offset: number, s: string) => {
    const before = s.slice(Math.max(0, offset - 8), offset);
    if (magic.exec(before)) {
      return ' not ';
    }
    return m; // keep original ! in prose / HTML / etc.
  });

  return text;
};
