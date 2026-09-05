// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx
'use client';
import { useState } from 'react';

import { Button } from '@/draksa/cumponents/ui/Button';

import type { ReactNode } from 'react';

const MoodButton = ({ toggleShowMood }: { toggleShowMood: () => void }) => {
  return (
    <Button className="max-w-34" onClick={toggleShowMood}>
      Mood
    </Button>
  );
};

export const Mood = ({
  energetic,
  excited,

  ticklish,
  wannaDance,
}: {
  excited: ReactNode;
  energetic: ReactNode;

  ticklish: ReactNode;
  wannaDance: ReactNode;
}) => {
  const [showMood, setShowMood] = useState(false);

  const toggleShowMood = () => {
    setShowMood(p => !p);
  };

  return (
    <div className="relative container mx-auto grid max-w-3xl gap-4 rounded-3xl">
      <MoodButton toggleShowMood={toggleShowMood} />

      {showMood ? (
        <div className="relative container mx-auto grid grid-rows-1 items-center gap-4 rounded-2xl bg-neutral-900/35 p-2">
          <div className="grid gap-4">
            {energetic}
            {excited}
            {ticklish}
            {wannaDance}
          </div>
        </div>
      ) : null}
    </div>
  );
};
