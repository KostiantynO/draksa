// src\draksa\voice\purrify\codify.ts

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
    '>': 'greater than',
    '<': 'less than',
    '||': 'or',
    '&&': 'and',
    '!': 'not',
    ', []);': 'empty deps array, ',
  })
);

const braces = /[{}]/g;

const replacer = (maybeCodik: string): string => {
  if (braces.test(maybeCodik)) return ''; // silent braces most of time
  if (!code.has(maybeCodik)) return maybeCodik;
  const codik = code.get(maybeCodik);

  return codik ? ` ${codik} ` : '';
};

// single ! only when it's logical not (very approximate)
// we skip it when followed by = or letter immediately after (basic heuristic)
const operators =
  /\(\(\) => |, \[\]\);|= \/|!==|!=|===|==|=>|>=|<=|>|<|\|\||&&|!(?!=|\w)/g;

// export const codify = (raw: string): string => {
//   return raw.replace(codeMagic, replacer);
// };

const magic = /[([,=;?:]\s*$/;

const globalMagic = /!\s*/g;

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
