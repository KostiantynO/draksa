// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx

import type { ReactNode } from 'react';

export const Mood = ({
  feedHer,
  soulHug,

  rate,
  pitch,

  meowOnType,
}: {
  feedHer?: ReactNode;
  soulHug?: ReactNode;

  pitch?: ReactNode;
  rate?: ReactNode;

  meowOnType?: ReactNode;
}) => {
  return (
    <div className="relative mb-10">
      <div className="grid grid-rows-2 items-center gap-4 rounded-full bg-neutral-900/50 p-2 @xs:max-w-xs">
        <div className="flex items-center gap-4">
          {feedHer}
          {soulHug}
        </div>

        <div className="flex items-center gap-4">
          {rate}
          {pitch}
        </div>
      </div>

      {meowOnType}
    </div>
  );
};
