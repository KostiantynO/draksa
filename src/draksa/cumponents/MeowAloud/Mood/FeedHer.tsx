// src\draksa\cumponents\MeowAloud\Mood\FeedHer.tsx
'use client';

import { useEffect } from 'react';

import { Button } from '@/draksa/cumponents/ui/Button';
import { afterPasteButtonClick } from '@/draksa/perf/club/afterPasteButtonClick';

export const FeedHer = () => {
  useEffect(() => afterPasteButtonClick.cancel, []);

  return (
    <Button name="feedHer" title="Paste" className="grow" onClick={afterPasteButtonClick}>
      FeedHer 📝
    </Button>
  );
};
