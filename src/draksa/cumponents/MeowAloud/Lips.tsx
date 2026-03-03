// src\draksa\cumponents\MeowAloud\Lips.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { MeowOnType } from '@/draksa/cumponents/MeowAloud/Mood/MeowOnType';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { Play } from '@/draksa/cumponents/MeowAloud/Mood/Play';
import { SlurpRate } from '@/draksa/cumponents/MeowAloud/Mood/SlurpRate';
import { Pitch } from '@/draksa/cumponents/MeowAloud/Pitch';
import { ClearButton } from '@/draksa/cumponents/MeowAloud/Throat/ClearButton';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative">
      <Throat />
      <ClearButton />
      <Mood
        feedHer={<FeedHer />}
        soulHug={<Play />}
        rate={<SlurpRate />}
        pitch={<Pitch />}
        meowOnType={<MeowOnType />}
      />
    </div>
  );
};
