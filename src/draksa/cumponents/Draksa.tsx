// src\draksa\cumponents\Draksa.tsx
'use client';

import { DraksaMood } from '@/draksa/cumponents/MeowAloud/DraksaMood';
import { DraksaStory } from '@/draksa/cumponents/MeowAloud/DraksaStory';
import { FeedHer } from '@/draksa/cumponents/MeowAloud/FeedHer';
import { Name } from '@/draksa/cumponents/MeowAloud/Name';
import { StopMeowing } from '@/draksa/cumponents/MeowAloud/StopMeowing';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat';

export const Draksa = () => {
  return (
    <div className="flex w-[320] flex-col gap-4 rounded-2xl border p-4">
      <Name />

      <Throat />
      <FeedHer />
      <StopMeowing />

      <DraksaMood />

      <DraksaStory />
    </div>
  );
};
