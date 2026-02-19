// src\draksa\cumponents\Draksa.tsx
'use client';

import { DraksaMood } from '@/draksa/cumponents/MeowAloud/DraksaMood';
import { DraksaStory } from '@/draksa/cumponents/MeowAloud/DraksaStory';
import { FeedHer } from '@/draksa/cumponents/MeowAloud/FeedHer';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat';
import { VoiceSelector } from '@/draksa/cumponents/MeowAloud/VoiceSelector/VoiceSelector';
import { pleaseMakeMyMouthBusy } from '@/draksa/cumponents/pleaseMakeMyMouthBusy';

pleaseMakeMyMouthBusy();

export const Draksa = () => {
  return (
    <div className="flex w-[320] grow flex-col justify-between gap-4 rounded-2xl border p-4">
      <Name />

      <Throat />
      <FeedHer />

      <DraksaMood />

      <VoiceSelector />

      <DraksaStory />
    </div>
  );
};
