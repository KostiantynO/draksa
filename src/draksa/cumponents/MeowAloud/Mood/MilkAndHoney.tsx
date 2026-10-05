// src\draksa\cumponents\MeowAloud\Mood\MilkAndHoney.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { Play } from '@/draksa/cumponents/MeowAloud/Mood/Play';

export const MilkAndHoney = () => {
  return (
    <div className="relative container mx-auto flex max-w-3xl justify-center gap-2 rounded-2xl p-2">
      <div className="grid grid-cols-2 gap-4">
        <FeedHer />
        <Play />
      </div>
    </div>
  );
};
