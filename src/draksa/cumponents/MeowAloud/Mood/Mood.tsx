// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx

import type { ReactNode } from 'react';

export const Mood = ({
  speedButton,
  pasteButton,
  feedHer,
  meowOnType,
}: {
  speedButton: ReactNode;
  pasteButton: ReactNode;
  feedHer: ReactNode;
  meowOnType: ReactNode;
}) => {
  return (
    <div className="relative mb-10 pt-20">
      <div className="absolute -top-1 right-12 left-12 z-50 flex items-center gap-4 rounded-full bg-neutral-900/50 p-2 @xs:max-w-xs">
        {speedButton}

        {pasteButton}

        {/* <Pitch /> */}

        {feedHer}
      </div>

      {meowOnType}
    </div>
  );
};
