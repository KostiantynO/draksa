// src\draksa\voice\purrify\ca.ts
const cats = new Map<string, string>(
  Object.entries({
    ':3': 'happy cat face',
    ';3': 'winking cat face',
    '>:3': 'mischievous cat face',
    uwu: 'cute cat face',
    UwU: 'cute catgirl with big eyes',
    owo: 'excited cat face',
    OwO: "NonSummerJack Bast'et me ancient egyptian temple priestess excited catgirl with big eyes ",
    'ฅ^•ﻌ•^ฅ': 'super-cute cat with paws up',
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

const necomancy =
  /(:3|;3|>:3|\^\^|\^_\^|\^\+_\+\^|uwu|UwU|owo|OwO|ฅ\^•ﻌ•\^ฅ|\^•ﻌ•\^|•ﻌ•|\^•w•\^|m\^•w•\^m|ฅ|\^|•|ﻌ)/g;

const withMeows = (meowbeCat: string): string => {
  if (!cats.has(meowbeCat)) return meowbeCat;

  const cat = cats.get(meowbeCat);
  return cat ? ` ${cat} ` : '';
};

export const purrifier = (raaawr: string): string => raaawr.replace(necomancy, withMeows);
