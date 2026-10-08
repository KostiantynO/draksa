// src\draksa\voice\purrify\codify.ts

import { curlyBraces, jsOperators } from '@/draksa/magic/regexp';

const jsOperator = new Map<string, string>(
  Object.entries({
    '(() => ': 'arrow function callback',
    '=>': 'arrow function',
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
    '/g': 'global',
  })
);

const overLOADedSymbolsMoaning = new Map<string, string>(
  Object.entries({
    '??': 'nullish coalescing',
    '<': 'less than',
    '>': 'greater than',
    '"!"': 'exclamation mark',
    "'!'": 'exclamation mark',
    '`!`': 'exclamation mark',
  })
);

const withTheirMeaning = (raw: string): string =>
  curlyBraces.test(raw)
    ? ''
    : jsOperator.has(raw)
      ? (jsOperator.get(raw) ?? '')
      : overLOADedSymbolsMoaning.has(raw)
        ? (overLOADedSymbolsMoaning.get(raw) ?? '')
        : raw;

const jsNot = /!(?=[a-zA-Z]+)/g;

export const codify = (rawCode: string): string =>
  rawCode.replace(jsOperators, withTheirMeaning).replace(jsNot, 'not ');
