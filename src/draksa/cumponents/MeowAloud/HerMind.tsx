// src\draksa\cumponents\MeowAloud\HerMind.tsx
'use client';

import { useComputed } from '@preact/signals-react/runtime';

import { Details } from '@/draksa/cumponents/ui/Details';
import { bast } from '@/draksa/heaven';

export const HerMind = () => {
  const lines = useComputed(() =>
    bast.chunks.chunks.value.map((p, id) => (
      <pre className="text-pretty" key={id}>
        {p || '\u00A0'}
      </pre>
    ))
  );

  return (
    <div className="relative container mx-auto max-w-3xl">
      <Details className="p-2" summary={<p>Her mind</p>}>
        <div className="rounded-2xl bg-black/35 p-3">{lines}</div>
      </Details>
    </div>
  );
};
