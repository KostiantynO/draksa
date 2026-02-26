// src\draksa\cumponents\MeowAloud\Voice\Voice.tsx

import { LocalVoiceList } from '@/draksa/cumponents/MeowAloud/Voice/LocalVoiceList';
import { Moans } from '@/draksa/cumponents/MeowAloud/Voice/Moans';
import { RemoteVoiceList } from '@/draksa/cumponents/MeowAloud/Voice/RemoteVoiceList';
import { VoiceList } from '@/draksa/cumponents/MeowAloud/Voice/VoiceList';
import { VoiceSelector } from '@/draksa/cumponents/MeowAloud/Voice/VoiceSelector';

export const Voice = () => {
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
