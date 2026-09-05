// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx

import type { ReactNode } from 'react';

const MoodButton = () => {
  return <div>Mood</div>;
};

export const Mood = ({
  energetic,
  excited,

  ticklish,
  wannaDance,
}: {
  excited?: ReactNode;
  energetic?: ReactNode;

  ticklish?: ReactNode;
  wannaDance?: ReactNode;
}) => {
  return (
    <div className="relative container mx-auto grid grid-rows-2 items-center gap-2 rounded-2xl bg-neutral-900/35 p-2">
      <div>
        <MoodButton />
        <div className="flex items-center gap-4">
          {energetic}
          {excited}
        </div>
        {ticklish}
        {wannaDance}
      </div>
    </div>
  );
};
