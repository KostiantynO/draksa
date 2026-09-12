// import { createCanvas, registerFont } from 'canvas';

// registerFont('./fonts/SomeUnicodeFont.ttf', {
//   family: 'Draksa',
// });

// const canvas = createCanvas(400, 100);
// const context = canvas.getContext('2d');

// context.font = '48px Draksa';
// context.fillStyle = 'white';

// interface BlinkFrame {
//   face: string;
//   delay: number;
// }

// const realistic: BlinkFrame[] = [
//   { face: '≽^oܫo^≼', delay: 150 },
//   { face: '≽^*ܫ*^≼', delay: 180 },
//   { face: '≽^+ܫ+^≼', delay: 210 },
//   { face: '≽^⋆ܫ⋆^≼', delay: 240 },
//   { face: '≽^•ܫ•^≼', delay: 270 },
//   { face: '≽^-ܫ-^≼', delay: 300 },
//   { face: '≽^-ܫ-^≼', delay: 300 },
//   { face: '≽^•ܫ•^≼', delay: 270 },
//   { face: '≽^⋆ܫ⋆^≼', delay: 240 },
//   { face: '≽^+ܫ+^≼', delay: 210 },
//   { face: '≽^*ܫ*^≼', delay: 180 },
//   { face: '≽^oܫo^≼', delay: 150 },
// ];

// for (const { face, delay } of realistic) {
//   context.clearRect(0, 0, width, height);
//   context.fillText(face, 20, 65);
//   encoder.setDelay(delay);
//   encoder.addFrame(context);
// }


/*

150ms frame 1    ≽^oܫo^≼
180ms frame 2    ≽^*ܫ*^≼
210ms frame 3    ≽^+ܫ+^≼
240ms frame 4    ≽^⋆ܫ⋆^≼
270ms frame 5    ≽^•ܫ•^≼
300ms frame 6    ≽^-ܫ-^≼
300ms frame 7    ≽^-ܫ-^≼
270ms frame 8    ≽^•ܫ•^≼
240ms frame 9    ≽^⋆ܫ⋆^≼
210ms frame 10   ≽^+ܫ+^≼
180ms frame 11   ≽^*ܫ*^≼
150ms frame 12   ≽^oܫo^≼

*/
