// src\draksa\cumponents\MeowAloud\Lips.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { Play } from '@/draksa/cumponents/MeowAloud/Mood/Play';
import { SlurpRate } from '@/draksa/cumponents/MeowAloud/Mood/SlurpRate';
import { TickleHer } from '@/draksa/cumponents/MeowAloud/Mood/TickleHer';
import { Pitch } from '@/draksa/cumponents/MeowAloud/Pitch';
import { LipStick } from '@/draksa/cumponents/MeowAloud/Throat/LipStick';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative container mx-auto max-w-3xl">
      <LipStick />
      <Throat />
      <Mood
        hungry={<FeedHer />}
        playful={<Play />}
        energetic={<SlurpRate />}
        excited={<Pitch />}
        ticklish={<TickleHer />}
      />
    </div>
  );
};
