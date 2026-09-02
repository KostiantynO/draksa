// src\draksa\cumponents\MeowAloud\ClubEntrance\ConvinceBouncerToLetYouIn.tsx
import { BouncerWristwatch } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BouncerWristwatch';
import { Details } from '@/draksa/cumponents/ui/Details';

import type { ReactNode } from 'react';

export const ConvinceBouncerToLetYouIn = ({ children }: { children: ReactNode }) => {
  return (
    <Details className="flex p-2" summary={<BouncerWristwatch />}>
      {children}
    </Details>
  );
};
