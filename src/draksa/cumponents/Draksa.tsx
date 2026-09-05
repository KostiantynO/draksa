// src\draksa\cumponents\Draksa.tsx

import { Emotions } from '@/draksa/cumponents/MeowAloud/Emotions';
import { Lips } from '@/draksa/cumponents/MeowAloud/Lips';
import { CloseYourEyesLickTheStrawAndSlurpTheMilk } from '@/draksa/cumponents/MeowAloud/Mood/CloseYourEyesLickTheStrawAndSlurpTheMilk';
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { Play } from '@/draksa/cumponents/MeowAloud/Mood/Play';
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
      <CloseYourEyesLickTheStrawAndSlurpTheMilk hungry={<FeedHer />} playful={<Play />} />
      <Emotions />
      <Voice />
      <MyStory />
    </main>
  );
};
