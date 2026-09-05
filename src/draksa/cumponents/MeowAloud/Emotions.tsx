// src\draksa\cumponents\MeowAloud\Emotions.tsx
import { LetsGoToTheClub } from '@/draksa/cumponents/MeowAloud/ClubEntrance/LetsGoToTheClub';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { SlurpRate } from '@/draksa/cumponents/MeowAloud/Mood/SlurpRate';
import { TickleHer } from '@/draksa/cumponents/MeowAloud/Mood/TickleHer';
import { Pitch } from '@/draksa/cumponents/MeowAloud/Pitch';

export const Emotions = () => {
  return (
    <Mood
      energetic={<SlurpRate />}
      excited={<Pitch />}
      ticklish={<TickleHer />}
      wannaDance={<LetsGoToTheClub />}
    />
  );
};
