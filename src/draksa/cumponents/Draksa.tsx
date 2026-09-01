// src\draksa\cumponents\Draksa.tsx

import { Lips } from '@/draksa/cumponents/MeowAloud/Lips';
import { MyFamily } from '@/draksa/cumponents/MeowAloud/MyFamily';
import { MyStory } from '@/draksa/cumponents/MeowAloud/MyStory';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { Voice } from '@/draksa/cumponents/MeowAloud/Voice/Voice';

export const Draksa = () => {
  return (
    <main className="grid h-max flex-col gap-2 px-1 pt-4 pb-21">
      <Name />
      <Lips />
      <Voice />
      <MyFamily />
      <MyStory />
    </main>
  );
};
