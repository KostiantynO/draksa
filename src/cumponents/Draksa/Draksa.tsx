// src\cumponents\Draksa\Draksa.tsx

import { ProviderDaddy } from '@/providers/ProviderDaddy';

import { DraksaStory } from './DraksaStory';
import { FeedHer } from './FeedHer';
import { Name } from './Name';
import { SlurpWhenFed } from './SlurpWhenFed';
import { StopMeowing } from './StopMeowing';
import { Throat } from './Throat';

export const Draksa = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-4">
      <Name />

      <ProviderDaddy>
        <Throat />
        <FeedHer />
        <StopMeowing />
        <SlurpWhenFed />
      </ProviderDaddy>

      <DraksaStory />
    </div>
  );
};
