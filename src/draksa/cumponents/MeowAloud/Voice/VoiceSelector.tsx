// src\draksa\cumponents\MeowAloud\Voice\VoiceSelector.tsx
import { ActiveVoice } from '@/draksa/cumponents/MeowAloud/Voice/ActiveVoice';
import { Details } from '@/draksa/cumponents/ui/Details';

import type { ReactNode } from 'react';

export const VoiceSelector = ({ children }: { children: ReactNode }) => {
  return (
    <Details summary={<ActiveVoice />}>
      <div className="flex flex-col gap-2">{children}</div>
    </Details>
  );
};
