// src\cumponents\Draksa\Draksa.tsx
import { DraksaProvider } from '@/providers/DraksaProvider';

import { DraksaStory } from './DraksaStory';
import { FeedHer } from './FeedHer';
import { Name } from './Name';
import { Settings } from './Settings';
import { StopMeowing } from './StopMeowing';
import { Throat } from './Throat';

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
