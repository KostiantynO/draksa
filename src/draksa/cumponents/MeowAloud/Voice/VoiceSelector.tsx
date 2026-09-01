// src\draksa\cumponents\MeowAloud\Voice\VoiceSelector.tsx
import { ActiveVoice } from '@/draksa/cumponents/MeowAloud/Voice/ActiveVoice';
import { Details } from '@/draksa/cumponents/ui/Details';

import type { ReactNode } from 'react';

export const VoiceSelector = ({ children }: { children: ReactNode }) => {
  return (
    <Details
      summary={<ActiveVoice />}
      className="container mx-auto max-w-3xl bg-black/35 p-2"
    >
      <div className="flex flex-col gap-4">{children}</div>
    </Details>
  );
};
