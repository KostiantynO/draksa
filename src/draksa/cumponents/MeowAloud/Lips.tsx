// src\draksa\cumponents\MeowAloud\Lips.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { ClearButton } from '@/draksa/cumponents/MeowAloud/Throat/ClearButton';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative">
      <Throat />
      <ClearButton />
      <Mood
        feedHer={<FeedHer />}
        // soulHug={<Play />}
        // rate={<SlurpRate />}
        // pitch={<Pitch />}
        // meowOnType={<MeowOnType />}
      />
    </div>
  );
};
