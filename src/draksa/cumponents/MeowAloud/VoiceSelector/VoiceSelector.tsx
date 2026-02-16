// src\draksa\cumponents\MeowAloud\VoiceSelector\VoiceSelector.tsx

'use client';

import { VoiceList } from '@/draksa/cumponents/MeowAloud/VoiceSelector/VoiceList';
import { Details } from '@/draksa/cumponents/ui/Details';
import { useLoudMoans } from '@/draksa/hooks/OnlyOnce/useLoudMoans';

const LocalVoiceList = () => (
  <div>
    <p>Local voices</p>
    <VoiceList local={true} />
  </div>
);

const RemoteVoiceList = () => (
  <div>
    <p>Remote voices</p>
    <VoiceList local={false} />
  </div>
);

export const VoiceSelector = () => {
  useLoudMoans();

  return (
    <Details summary={<p>VoiceSelector</p>}>
      <div className="flex flex-col gap-2">
        <RemoteVoiceList />

        <LocalVoiceList />
      </div>
    </Details>
  );
};
