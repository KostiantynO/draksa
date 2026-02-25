// src\draksa\cumponents\MeowAloud\Voice\Voice.tsx
'use client';

import { ActiveVoice } from '@/draksa/cumponents/MeowAloud/Voice/ActiveVoice';
import { VoiceList } from '@/draksa/cumponents/MeowAloud/Voice/VoiceList';
import { Details } from '@/draksa/cumponents/ui/Details';
import { useLoudMoans } from '@/draksa/hooks/OnlyOnce/useLoudMoans';

const RemoteVoiceList = () => (
  <div>
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">Remote voices</p>
    <VoiceList local={false} />
  </div>
);

const LocalVoiceList = () => (
  <div>
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">Local voices</p>
    <VoiceList local={true} />
  </div>
);

export const Voice = () => {
  useLoudMoans();

  return (
    <Details summary={<ActiveVoice />}>
      <div className="flex flex-col gap-2">
        <RemoteVoiceList />

        <LocalVoiceList />
      </div>
    </Details>
  );
};
