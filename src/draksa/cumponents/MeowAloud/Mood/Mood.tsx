// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx

import type { ReactNode } from 'react';

export const Mood = ({
  hungry,
  playful,

  energetic,
  excited,

  ticklish,
  wannaDance,
}: {
  hungry?: ReactNode;
  playful?: ReactNode;

  excited?: ReactNode;
  energetic?: ReactNode;

  ticklish?: ReactNode;
  wannaDance?: ReactNode;
}) => {
  return (
    <div className="relative container mx-auto grid grid-rows-2 items-center gap-2 rounded-2xl bg-neutral-900/35 p-2">
      <div className="flex items-center gap-4">
        {playful}
        {hungry}
      </div>

      <div className="flex items-center gap-4">
        {energetic}
        {excited}
      </div>
      {ticklish}
      {wannaDance}
    </div>
  );
};
