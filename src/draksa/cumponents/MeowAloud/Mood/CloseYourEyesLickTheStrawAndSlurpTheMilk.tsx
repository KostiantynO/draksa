// src\draksa\cumponents\MeowAloud\Mood\CloseYourEyesLickTheStrawAndSlurpTheMilk.tsx
import type { ReactNode } from 'react';

export const CloseYourEyesLickTheStrawAndSlurpTheMilk = ({
  hungry,
  playful,
}: {
  hungry: ReactNode;
  playful: ReactNode;
}) => {
  return (
    <div className="relative container mx-auto flex max-w-3xl gap-2 rounded-2xl p-2">
      <div className="grid gap-4">
        {hungry}
        {playful}
      </div>
    </div>
  );
};
