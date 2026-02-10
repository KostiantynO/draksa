// src\draksa\cumponents\Draksa.tsx
import { DraksaProvider } from '@/draksa/providers/DraksaProvider';

import { DraksaStory } from './MeowAloud/DraksaStory';
import { FeedHer } from './MeowAloud/FeedHer';
import { Name } from './MeowAloud/Name';
import { Settings } from './MeowAloud/Settings';
import { StopMeowing } from './MeowAloud/StopMeowing';
import { Throat } from './MeowAloud/Throat';

export const Draksa = () => {
  return (
    <div className="flex w-[320] flex-col gap-4 rounded-2xl border p-4">
      <Name />

      <DraksaProvider>
        <Throat />
        <FeedHer />
        <StopMeowing />

        <Settings />
      </DraksaProvider>

      <DraksaStory />
    </div>
  );
};
