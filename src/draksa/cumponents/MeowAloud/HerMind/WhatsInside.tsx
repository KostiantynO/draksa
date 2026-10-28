// src\draksa\cumponents\MeowAloud\HerMind\WhatsInside.tsx
'use client';

import { useComputed } from '@preact/signals-react/runtime';

import { bast } from '@/draksa/heaven';

export const WhatsInside = () => {
  const whatSheSays = useComputed(() =>
    // perf - try to set ids on initial chunks, when .split(legs) called for chunking by \n
    // and loop over real ids here
    // to reduce rerenders on paragraph if possible
    bast.chunks.chunks.value.map((p, id) => (
      <pre className="text-pretty" key={id}>
        {p || '\u00A0'}
      </pre>
    ))
  );

  return <>{whatSheSays}</>;
};
