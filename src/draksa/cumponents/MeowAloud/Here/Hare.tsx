// src\draksa\cumponents\MeowAloud\Here\Hare.tsx
'use client';

import { useComputed, useSignals } from '@preact/signals-react/runtime';

import { bast } from '@/draksa/heaven';

import type { JSX } from 'react';

export const Hare = (): JSX.Element => {
  useSignals();

  const bunnyHop = useComputed(() => {
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
