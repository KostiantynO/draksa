// src\draksa\voice\purrify\codify.ts

import { braces, operators } from '@/draksa/magic/regexp';

// Works only for ts. Not other languages.
// But Draksa reads everything as if it is js/ts :D
// She doesn't know that other programming languages exist.
// Or that meowaloud explanation to the code may be given in another language than eng.
// Well, that is not mi problem :D
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

    // Assumes no '\n' or 'spaces' between greater than '<' and 'any-html-tag':
    // should be a silent token in `html/jsx context`,
    // means if regexp returns true for `less than sign '<' followed immediately by a word`, then replace '<' with ''
    '<': 'less than',

    // should be a silent token it in `html/jsx context`,
    // means if regexp returns true for a word followed immediately by a `greater than sign '>'`, then replace '>' with ''
    '>': 'greater than',

    '!': 'not', // In JS/TS context, it should only speak as ' not ' if regexp parse returns true for `exclamation mark sign immediately followed by a word, without any space between exclamation sign and a word` - like a `!myVar` should transform into `not myVar` - for correct speech of javascript/typescript negation.
    // It does not support other programming languages by design. As it is out of scope of current Draksa :D (2026-09-23)
    //    Partly due to the lack of skill of the writer :D
    //    But mainly because js is so fast to refactor and see the result.
    //    But also it would require me to learn another programming language. Which is time consuming endeavour I assume. IDK.
    //    And because JS is so vast. I can use it my whole life and not master it :D
    //    Also, if you want it, you will find a way :D If not, you would find an excuse :D Maybe this prysliv'ia/pogovorka is suitable here.
    //    Cause I don't want to support other langs :D
    //    I barely write anything for Draksa at at all.
    //    Need to be realistic about my mind capacity. There are geniuses that are 100x developers.
    //    And there is me, who does Draksa in spare time for fun :D
    //    2 years for a textarea and a 'play' button :D
    //    You see the difference :D
    //    And she is NOT an ai chatbot, btw.
    //    She just speaks text you feed her :D For you.
    //    So, is she just a tool? Not a conversation partner? I presume yes.
    //    Why do I even apologies for not supporting other stuff? :D
    //    Other guys would just say: `fck them! :D` And don't spend a paragraph of explanations :D
    //    I need to be more decisive. And assertive of my position.

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

  return text;
};
