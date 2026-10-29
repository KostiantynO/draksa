// src\draksa\cumponents\MeowAloud\MyStory\MeowIt.tsx
'use client';

import { useEffect } from 'react';

import { ButtOn } from '@/draksa/cumponents/ui/Button';
import { meowIt } from '@/draksa/perf/club/meowIt';

import type { JSX } from 'react';

export const MeowIt = (): JSX.Element => {
  useEffect(() => () => meowIt.cancel(), []);

  return (
    <ButtOn name="MeowIt" title="MeowItAloud" onClick={meowIt}>
      MeOwO it :3
    </ButtOn>
  );
};
