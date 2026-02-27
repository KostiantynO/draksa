// src\draksa\voice\purrify\bellie.ts

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

  // very common in chunk example
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

export const yourSilenceIsMyFavoriteSaaaaauuund = (eilish: string): string =>
  eilish.split('\n').filter(silence).join('\n');
