const cats = new Map<string, string>(
  Object.entries({
    ':3': 'happy cat smile',
    '>:3': 'mischievous cat smile',
    '^_^': 'contented purr',
    uwu: 'cat face',
    UwU: 'catgirl with big eyes',
    owo: 'happy cat face',
    OwO: 'happy catgirl with big eyes',
  })
);

const necomancy = /(:3|>:3|\^_\^|uwu|UwU|owo|OwO)\b/gi;

// TODO Draksa: DO ME, and also, while your are at it, what is the difference to this :D ??? /(:3|>:3|\^_\^|uwu|UwU|owo|OwO)/g

const withMeower = (meowbeCat: string): string =>
  cats.has(meowbeCat) ? (cats.get(meowbeCat) ?? '') : meowbeCat;

export const purrifier = (raaaawr: string): string =>
  raaaawr.replace(necomancy, withMeower);

// ────────────────────────────────────────────────
// Things we usually NEVER want to speak aloud
// ────────────────────────────────────────────────
const silentTokens = [
  '}',
  '});',
  ');',
  '},',
  ');,',
  '},);',
  '}))',
  ');}',
  '};',
  '/>',
  '/ >',
  '>',
  '</',
  '</ ',
  '>',
  '="">',
  '=""',
  '=" "',
  '="" />',
  '=""/>',
  '=""/>',
  '=""/>',
  '=" " />',
  '=""/>',
  '=" ">',
  '=">',
  '="">',
  '=""/>',
  // very common in your chunk example
  '"/>\n",',
  '"/>\n"',
  '")\n",',
  '");\n",',
  '"};\n",',
  '"}\n",',
  '"},\n",',
  '""\n",',
  '",\n",',
  '",\n',
  '",\n',
  '",',
  '",',
  '""',
];

const silentTokenSet = new Set(silentTokens.map(t => t.trim()));

const silence = (line: string): boolean => {
  const trimmed = line.trim();
  if (trimmed === '') return true; // keep empty lines for separation
  if (silentTokenSet.has(trimmed)) return false;
  if (silentTokenSet.has(line)) return false; // exact match including spaces
  return true;
};

const yourSilenceIsMyFavoriteSaaaaauuund = (eilish: string): string =>
  eilish.split('\n').filter(silence).join('\n');

const opts = {
  oneBy_OneBy_OneBite_OneByte: true,
  whitespace: true,
  catMagic: true,
};

const wipeFace = (beCaring: string) =>
  beCaring
    .replace(/\n{3,}/g, '\n\n') // max 2 newlines
    .replace(/[ \t]+/g, ' ') // collapse horizontal whitespace
    .replace(/ \n/g, '\n') // no space before newline
    .trim();

export const purrify = (catting: string): string => {
  let raw = catting;

  // 1. Remove exact silent tokens (most aggressive first)
  if (opts.oneBy_OneBy_OneBite_OneByte) {
    raw = yourSilenceIsMyFavoriteSaaaaauuund(raw);
  }

  // 2. Cat faces → cute descriptions
  if (opts.catMagic) {
    raw = purrifier(raw);
  }

  // 3. Collapse excessive whitespace (optional)
  if (opts.whitespace) {
    raw = wipeFace(raw);
  }

  return raw;
};
