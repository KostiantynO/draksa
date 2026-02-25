// src\draksa\cumponents\MeowAloud\Mood\Mood.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { MeowOnType } from '@/draksa/cumponents/MeowAloud/Mood/MeowOnType';
import { SpeedButton } from '@/draksa/cumponents/MeowAloud/Mood/SpeedButton';

export const Mood = () => {
  return (
    <div className="relative mb-10 pt-20">
      <div className="absolute -top-1 right-12 left-12 z-50 flex items-center gap-4 rounded-full bg-neutral-900/50 p-2 @xs:max-w-xs">
        <SpeedButton />

        {/* <Pitch /> */}

        <FeedHer />
      </div>
      <MeowOnType />
    </div>
  );
};
