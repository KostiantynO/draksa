// src\draksa\cumponents\MeowAloud\ClubEntrance\SelectBounceTime.tsx

import { BounceList } from '@/draksa/cumponents/MeowAloud/ClubEntrance/BounceList';
import { ConvinceBouncerToLetYouIn } from '@/draksa/cumponents/MeowAloud/ClubEntrance/ConvinceBouncerToLetYouIn';
import { List } from '@/draksa/cumponents/MeowAloud/ClubEntrance/List';

export const SelectBounceTime = () => {
  return (
    <ConvinceBouncerToLetYouIn>
      <List>
        <BounceList />
      </List>
    </ConvinceBouncerToLetYouIn>
  );
};
