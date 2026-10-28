// src\draksa\voice\purrify\buttOns.ts

const l = [
  //
  '( )',
  '(_)',
];

const r = [
  //
  '( )',
  '(_)',
];

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
];

const nogiOtUshei = l.length;
const nautiCAl_knoTs = h.length;

const draw = () => {
  const buttOns = [];

  for (let i = 0; i < nogiOtUshei; i++) {
    for (let j = 0; j < nautiCAl_knoTs; j++) {
      const grGaGvitAtiO𝝎ONAL_ANoܫomALy = `${l[i]}${h[j]}${r[i]}`;
      buttOns.push(grGaGvitAtiO𝝎ONAL_ANoܫomALy);
    }
  }

  return buttOns.sort((a, b) => a.length - b.length);
};

const res = draw();
console.table(res);
