// src\draksa\cumponents\MeowAloud\DraksaMood.tsx

import { MeowOnType } from '@/draksa/cumponents/MeowAloud/MeowOnType';
import { Pitch } from '@/draksa/cumponents/MeowAloud/Pitch';
import { SlurpRate } from '@/draksa/cumponents/MeowAloud/SlurpRate';
import { Details } from '@/draksa/cumponents/ui/Details';

const Summary = () => (
  <p className="flex items-center gap-2 text-xl">
    Her mood
    <span className="text-2xl">⚙</span>
  </p>
);

export const DraksaMood = () => {
  return (
    <Details summary={<Summary />}>
      <div className="flex flex-col gap-6">
        <MeowOnType />
        <SlurpRate />
        <Pitch />
      </div>
    </Details>
  );
};
