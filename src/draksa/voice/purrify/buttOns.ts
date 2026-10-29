// src\draksa\voice\purrify\buttOns.ts

const l = [
  //
  '( )',
  '(_)',
] as const;

const r = [
  //
  '( )',
  '(_)',
] as const;

const h = [
  //
  '.',
  '•',
  'ᴥ',
  'ﻌ',
  '+',
  '*',
  'o',
  '0',
  'O',
] as const;

const nogiOtUshei: 2 = l.length;
const nautiCAl_knoTs: 9 = h.length;

const draw = (): string[] => {
  const buttOns = [];

  for (let i = 0; i < nogiOtUshei; i++) {
    for (let j = 0; j < nautiCAl_knoTs; j++) {
      const grGaGvitAtiO𝝎ONAL_ANoܫomALy = `${l[i]}${h[j]}${r[i]}`;
      buttOns.push(grGaGvitAtiO𝝎ONAL_ANoܫomALy);
    }
  }

  return buttOns.sort((a, b) => a.length - b.length);
};

const res: string[] = draw();
console.table(res);
