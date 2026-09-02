// src\draksa\cumponents\MeowAloud\MyStory\MeowIt.tsx
'use client';

import { useEffect } from 'react';

import { Button } from '@/draksa/cumponents/ui/Button';
import { meowIt } from '@/draksa/perf/club/meowIt';

export const MeowIt = () => {
  useEffect(() => meowIt.cancel, []);

  return (
    <Button name="MeowIt" title="MeowItAloud" onClick={meowIt}>
      Meow it :3
    </Button>
  );
};
