// src\draksa\cumponents\Draksa.tsx
'use client';

import { DraksaStory } from '@/draksa/cumponents/MeowAloud/DraksaStory';
import { Face } from '@/draksa/cumponents/MeowAloud/Face';
import { Lips } from '@/draksa/cumponents/MeowAloud/Lips';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { Hug } from '@/draksa/cumponents/MeowAloud/Throat/Hug';
import { LanDyshy } from '@/draksa/cumponents/MeowAloud/Throat/LanDyshy';
import { Voice } from '@/draksa/cumponents/MeowAloud/Voice/Voice';
import { pleaseMakeMyMouthBusy } from '@/draksa/cumponents/pleaseMakeMyMouthBusy';

pleaseMakeMyMouthBusy();

export const Draksa = () => {
  return (
    <Face>
      <Name />

      <Lips>
        <Hug>
          <LanDyshy />

          <Mood />
        </Hug>
      </Lips>

      <Voice />

      <DraksaStory />
    </Face>
  );
};
