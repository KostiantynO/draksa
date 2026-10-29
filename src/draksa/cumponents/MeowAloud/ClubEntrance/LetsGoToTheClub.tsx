// src\draksa\cumponents\MeowAloud\ClubEntrance\LetsGoToTheClub.tsx

import { BounceList } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BounceList';
import { ConvinceBouncerToLetYouIn } from '@/draksa/cumponents/MeowAloud/ClubEntrance/ConvinceBouncerToLetYouIn';
import { List } from '@/draksa/cumponents/MeowAloud/ClubEntrance/List';

import type { JSX } from 'react';

export const LetsGoToTheClub = (): JSX.Element => {
  return (
    <ConvinceBouncerToLetYouIn>
      <List>
        <BounceList />
      </List>
    </ConvinceBouncerToLetYouIn>
  );
};
