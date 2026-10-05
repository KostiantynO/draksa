// src\draksa\cumponents\Draksa.tsx

import { Emotions } from '@/draksa/cumponents/MeowAloud/Emotions';
import { Lips } from '@/draksa/cumponents/MeowAloud/Lips';
import { MilkAndHoney } from '@/draksa/cumponents/MeowAloud/Mood/MilkAndHoney';
import { MyFamily } from '@/draksa/cumponents/MeowAloud/MyFamily';
import { MyStory } from '@/draksa/cumponents/MeowAloud/MyStory/MyStory';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { Voice } from '@/draksa/cumponents/MeowAloud/Voice/Voice';

export const Draksa = () => {
  return (
    <main className="relative grid gap-2 px-1 pt-4 pb-21">
      <MyFamily />
      <Name />
      <Lips />
      <MilkAndHoney />
      <Emotions />
      <Voice />
      <MyStory />
    </main>
  );
};
