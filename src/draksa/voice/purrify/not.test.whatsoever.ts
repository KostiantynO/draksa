// src\draksa\voice\purrify\not.test.whatsoever.ts

import { codify } from '@/draksa/voice/purrify/codify';

const cases: [test: string, expected: string][] = [
  ['I love you!', 'I love you!'],
  ['Other TTS suck at this!', 'Other TTS suck at this!'],
  ['That is a good exercise!', 'That is a good exercise!'],
  ['import is a good exercise!', 'import is a good exercise!'],
  ['if (!foo)', 'if (not foo)'],
  ['!!!释放 ("hello")', ' triple NOT 释放 ("hello")'],
  ['!!!""', ' triple NOT empty string '],
  ['!!!{}', ' triple NOT object'],
  ['!!!5', ' triple NOT 5'],
  ['!!!0', ' triple NOT zero'],
  ['!!!null', ' triple NOT null'],
  ['!!!undefined', ' triple NOT undefined'],
];

const a = "Don't be sowwy🐾";
const b = 'Be BETTER :D';
const c = 'GITGUD';
const d = 'Praise the Sun';

const motivation = [a, a, a, b, b, b, c, c, c, d];

const dontBeSorry___BeBETTER = () => {
  const rnd = Math.random();

  const x10 = rnd * 10;

  const round = Math.round(x10);

  const final = round >= motivation.length ? motivation.length - 1 : round;
  console.table({ rnd, round, x10, final });

  return motivation[final];
};

const GITGUD = `❌ GITGUD n'єrd ${String.fromCharCode(92)}[T]/ 🌞`;

const result = cases
  .map(([test, expected]) => {
    const actual = codify(test);
    const code = expected === actual;

    return code ? null : { test, expected, actual, [GITGUD]: dontBeSorry___BeBETTER() };
  })
  .filter(Boolean);

console.table(result);
