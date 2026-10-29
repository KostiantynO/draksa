// src\draksa\cumponents\MeowAloud\Voice\Voice.tsx

import { LocalVoiceList } from '@/draksa/cumponents/MeowAloud/Voice/LocalVoiceList';
import { Moans } from '@/draksa/cumponents/MeowAloud/Voice/Moans';
import { RemoteVoiceList } from '@/draksa/cumponents/MeowAloud/Voice/RemoteVoiceList';
import { VoiceList } from '@/draksa/cumponents/MeowAloud/Voice/VoiceList';
import { VoiceSelector } from '@/draksa/cumponents/MeowAloud/Voice/VoiceSelector';

import type { JSX } from 'react';

export const Voice = (): JSX.Element => {
  return (
    <VoiceSelector>
      <Moans>
        <RemoteVoiceList>
          <VoiceList local={false} />
        </RemoteVoiceList>

        <LocalVoiceList>
          <VoiceList local={true} />
        </LocalVoiceList>
      </Moans>
    </VoiceSelector>
  );
};
