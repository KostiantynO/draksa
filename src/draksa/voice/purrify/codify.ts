// src\draksa\voice\purrify\codify.ts

const jsOperator = new Map<string, string>(
  Object.entries({
    '(() =>': 'arrow function callback',
    '=>': 'arrow function',
    '() => {}': 'empty arrow',
    '{}': 'object',
    '= /': 'equals regular expression',
    '!==': 'strictly not equals',
    '!=': 'loosely not equals',
    '===': 'strictly equals',
    '==': 'loosely equals',
    '>=': 'greater than or equals',
    '<=': 'less than or equals',
    '||': 'or',
    '&&': 'and',
    ', []);': 'empty deps array',
    '...args': 'restArgs',
    "''": 'empty string',
    '""': 'empty string',
    '``': 'empty string',
    '/g;': 'global',
    '/g ': 'global',
    '/g\n': 'global',
    '/g)': 'global',
    '/g}': 'global',
    '/g"': 'global',
    "/g'": 'global',
    '/g`': 'global',

    '/u;': 'unicode',
    '/u ': 'unicode',
    '/u\n': 'unicode',
    '/u)': 'unicode',
    '/u}': 'unicode',
    '/u"': 'unicode',
    "/u'": 'unicode',
    '/u`': 'unicode',

    '/gu;': 'global unicode',
    '/gu ': 'global unicode',
    '/gu\n': 'global unicode',
    '/gu)': 'global unicode',
    '/gu}': 'global unicode',
    '/gu"': 'global unicode',
    "/gu'": 'global unicode',
    '/gu`': 'global unicode',
  })
);

const overLOADedSymbolsMoaning = new Map<string, string>(
  Object.entries({
    '??': 'nullish coalescing',
    '!!': 'double NOT',

    // '<': 'less than',
    // '>': 'greater than',
    '"!"': 'exclamation mark',
    "'!'": 'exclamation mark',
    '`!`': 'exclamation mark',
  })
);

const curlyBraces = /[{}]/g;

const withTheirMeaning = (raw: string): string =>
  jsOperator.has(raw)
    ? ` ${jsOperator.get(raw) ?? ''} `
    : curlyBraces.test(raw)
      ? ''
      : overLOADedSymbolsMoaning.has(raw)
        ? ` ${overLOADedSymbolsMoaning.get(raw) ?? ''} `
        : raw;

const jsOperators =
  /\(\(\) =>|=>|\(\s*\)\s*=>\s*\{\s*\}|\{\}|{}|{|}|, \[\]\);|= \/|!==|!=|===|==|>=|<=|\|\||&&|\.\.\.args|''|""|(?<!`)``(?!`)|(?<= )\?\?|!!|>|<|'!'|"!"|`!`|\/[gimsuy]{0,6}[; )}"'`\s\n]/g;
const jsNot = /!(?=[\w|"'])/g;

export const codify = (rawCode: string): string =>
  rawCode.replace(jsOperators, withTheirMeaning).replace(jsNot, 'not ');
