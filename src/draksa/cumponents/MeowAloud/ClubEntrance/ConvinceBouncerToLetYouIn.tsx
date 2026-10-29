// src\draksa\cumponents\MeowAloud\ClubEntrance\ConvinceBouncerToLetYouIn.tsx
import { BouncerWristwatch } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BouncerWristwatch';
import { Deᓚᘏᗢtails } from '@/draksa/cumponents/ui/Deᓚᘏᗢtails';

import type { JSX, ReactNode } from 'react';

export const ConvinceBouncerToLetYouIn = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <Deᓚᘏᗢtails className="flex p-2" summary={<BouncerWristwatch />}>
      {children}
    </Deᓚᘏᗢtails>
  );
};
