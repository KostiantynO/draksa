// src\draksa\cumponents\MeowAloud\ClubEntrance\ConvinceBouncerToLetYouIn.tsx
import { BouncerWristwatch } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BouncerWristwatch';
import { Deᓚᘏᗢtails } from '@/draksa/cumponents/ui/Deᓚᘏᗢtails';

import type { ReactNode } from 'react';

export const ConvinceBouncerToLetYouIn = ({ children }: { children: ReactNode }) => {
  return (
    <Deᓚᘏᗢtails className="flex p-2" summary={<BouncerWristwatch />}>
      {children}
    </Deᓚᘏᗢtails>
  );
};
