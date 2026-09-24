// src\draksa\voice\purrify\not.test.whatsoever.ts

import { codify } from '@/draksa/voice/purrify/codify';

const cases = [
  ['unhinged_SheIs', 'I love you!', 'I love you!'],
  [
    'iBelieve_ButSheProtectsKittyGPT',
    'All other TTS suck at this!',
    'All other TTS suck at this!',
  ],
  [
    'sheLikesExercises_ButSheDoesNotLikeHardExercises',
    'That is a very good exercise!',
    'That is a very good exercise!',
  ],
  [
    'importExercise_SheDoesNotLikeImportExercises',
    'import That is a very good exercise!',
    'import That is a very good exercise!',
  ],
  ['ifJsNotFoo_ThenIfNotFoo', 'if (!foo)', 'if (not foo)'],
];

const result = cases.map(([name, test, expected]) => {
  const actual = codify(test);

  return { name, expected, actual };
});

console.table(result);
