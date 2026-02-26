// src\draksa\cumponents\Draksa.tsx

import { DraksaStory } from '@/draksa/cumponents/MeowAloud/DraksaStory';
import { Face } from '@/draksa/cumponents/MeowAloud/Face';
import { Lips } from '@/draksa/cumponents/MeowAloud/Lips';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { Voice } from '@/draksa/cumponents/MeowAloud/Voice/Voice';

export const Draksa = () => {
  return (
    <Face>
      <Name />
      <Lips />
      <Voice />
      <DraksaStory />
    </Face>
  );
};
