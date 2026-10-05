// src\draksa\cumponents\MeowAloud\Here\Hare.tsx
'use client';

/*
- [ ] show which line she is currently reading. (highlight the currently-reading line). Or
      just make a tiny catgirl😺 emoji following the currently spoken line on the left at
      the beginning of the line. Like a tiny overlay icon.

*/

import { useComputed, useSignals } from '@preact/signals-react/runtime';

import { bast } from '@/draksa/heaven';

export const Hare = () => {
  useSignals();

  const bunnyHop = useComputed(() => {
    // const polyGlotka = bast.throat.polyGlotka.value;

    // const storage = [
    //   {
    //     originalStart: 0,
    //     originalEnd: 0,
    //     text: '',
    //   },
    // ];

    // const { length } = polyGlotka;

    // for (let i = 0; i < length; i++) {
    // const char = polyGlotka[i];
    // if (char === '\n') {
    // console.log(i);
    //     const index = i;
    //   storage[index] = {
    //     originalStart: index,
    //     originalEnd: 0,
    //     text: '',
    // }
    // }

    // return `${storage[bast.chunks.activeChunkId.value].originalStart * 1.5}rem`;
    return `${bast.chunks.activeChunkId.value * 1.5}rem`;
  });

  return (
    <b
      style={{ '--bunny-hop': bunnyHop.value }}
      className="absolute top-3 -left-6 translate-y-(--bunny-hop) transition-transform duration-300"
    >
      🐇
    </b>
  );
};

// it should be based on position start / position end
