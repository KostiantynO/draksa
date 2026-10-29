// src\draksa\cumponents\MeowAloud\Emotions.tsx
import { LetsGoToTheClub } from '@/draksa/cumponents/MeowAloud/ClubEntrance/LetsGoToTheClub';
import { MO𝝎Od } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { SlurpRate } from '@/draksa/cumponents/MeowAloud/Mood/SlurpRate';
import { TickleHer } from '@/draksa/cumponents/MeowAloud/Mood/TickleHer';
import { Pitch } from '@/draksa/cumponents/MeowAloud/Pitch';

import type { JSX } from 'react';

export const Emotions = (): JSX.Element => {
  return (
    <MO𝝎Od
      energetic={<SlurpRate />}
      excited={<Pitch />}
      ticklish={<TickleHer />}
      wannaDance={<LetsGoToTheClub />}
    />
  );
};
