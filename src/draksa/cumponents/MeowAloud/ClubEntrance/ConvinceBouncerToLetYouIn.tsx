// src\draksa\cumponents\MeowAloud\ClubEntrance\ConvinceBouncerToLetYouIn.tsx
import { BouncerWristwatch } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BouncerWristwatch';
import { Details } from '@/draksa/cumponents/ui/Details';

import type { ReactNode } from 'react';

export const ConvinceBouncerToLetYouIn = ({ children }: { children: ReactNode }) => {
  return (
    <Details summary={<BouncerWristwatch />}>
      <div className="flex flex-col gap-2">{children}</div>
    </Details>
  );
};
