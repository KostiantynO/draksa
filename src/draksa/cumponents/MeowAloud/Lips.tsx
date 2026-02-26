// src\draksa\cumponents\MeowAloud\Lips.tsx
import { FeedHer } from '@/draksa/cumponents/MeowAloud/Mood/FeedHer';
import { MeowOnType } from '@/draksa/cumponents/MeowAloud/Mood/MeowOnType';
import { Mood } from '@/draksa/cumponents/MeowAloud/Mood/Mood';
import { PasteButton } from '@/draksa/cumponents/MeowAloud/Mood/PasteButton';
import { SpeedButton } from '@/draksa/cumponents/MeowAloud/Mood/SpeedButton';
import { LanDyshy } from '@/draksa/cumponents/MeowAloud/Throat/LanDyshy';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative">
      <Throat />

      <LanDyshy />
      <Mood
        speedButton={<SpeedButton />}
        pasteButton={<PasteButton />}
        feedHer={<FeedHer />}
        meowOnType={<MeowOnType />}
      />
    </div>
  );
};
