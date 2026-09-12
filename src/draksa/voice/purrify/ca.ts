// src\draksa\voice\purrify\ca.ts
import { nekomancy } from '@/draksa/magic/regexp';

// src\draksa\voice\purrify\ca.ts
const cats = new Map<string, string>(
  Object.entries({
    ':3': 'happy cat',
    '83': 'pleading cat eyes',
    ';3': 'winking cat',
    '>:3': 'mischievous cat',
    uwu: 'cute cat',
    UwU: 'cute catgirl with big eyes',
    owo: 'excited cat',
    OwO: "NonSummerJack Bast'et me ancient egyptian temple priestess excited catgirl with big eyes ",

    ᓚᘏᗢ: 'small curled cat',
    'ლ^•ᴥ•^ლ': 'cute cat with big softy paws',

    'ฅ^•ﻌ•^ฅ': 'super-cute cat with paws',
    '^•ﻌ•^': 'super-cute cat with ears',
    '•ﻌ•': 'cute cat with hidden ears',
    '^+_+^': 'cat face',
    '^_^': 'contented purr face',
    '^^': 'contented eyes',
    '^•w•^': 'cute cat face',
    'm^•w•^m': 'cat peeks from the edge',
    ฅ: 'paw',
    '^': 'ear',
    '•': 'eye',
    ﻌ: 'mouth',
  })
);

const withMeows = (meowbeCat: string): string => {
  if (!cats.has(meowbeCat)) return meowbeCat;

  const cat = cats.get(meowbeCat);
  return cat ? ` ${cat} ` : '';
};

export const purrifier = (raaawr: string): string => raaawr.replace(nekomancy, withMeows);

// const kitties = [
//   '𑄝',
//   ':Þ',
//   '•ᴗ•',
//   '◕⩊◕',
//   'ฅᨐฅ',

//   '≽^•༚•^≼',
//   '≽^•༚• ྀི≼',
//   '≽^•⩊•^≼',

//   '^. .^₎ฅ',
//   'ฅ^•ﻌ•^ฅ',

//   '٩(ˊᗜˋ*)و ♡',
//   '₍^. .^₎⟆',
//   'ᓚ₍ ^. .^₎',

//   '⚞ • ⚟',
//   '⚞ •⩊ • ⚟',

//   '(ⓛωⓛ*)',
//   '(๑ↀᆺↀ๑)',
//   '( ⓛ ω ⓛ *)',

//   '( ｡ •̀ ᴗ •́ ｡)',

//   '𝑀𝒾 𝒜𝓂𝑜𝓇',
//   '♫⋆｡♪ ₊˚♬ ﾟ.',
//   '⋆｡˚ ☁︎ ˚｡⋆｡˚☽˚｡⋆',
// ];

// const closedEyes = [
//   '>ᴗ<',
//   '^𝝎^',
//   '≽ܫ≼',

//   '≽^•ܫ•^≼',
//   '≽^-ܫ-^≼',
//   '≽^-⩊-^≼',

//   'ฅ^>⩊<^ฅ',
//   '₍^ >⩊< ^₎Ⳋ',
//   '(๑ > ᴗ < ๑)',
// ];

// const slowBlink = {
//   short: ['oܫo', '≽ܫ≼'],
//   realistic: [
//     //
//     '≽^oܫo^≼',
//     '≽^*ܫ*^≼',
//     '≽^+ܫ+^≼',
//     '≽^⋆ܫ⋆^≼',
//     '≽^•ܫ•^≼',
//     '≽^-ܫ-^≼',
//   ],
//   uwu: [
//     //
//     '≽^o⩊o^≼',
//     '≽^*⩊*^≼',
//     '≽^+⩊+^≼',
//     '≽^⋆⩊⋆^≼',
//     '≽^•⩊•^≼',
//     '≽^-⩊-^≼',
//   ],
// };
