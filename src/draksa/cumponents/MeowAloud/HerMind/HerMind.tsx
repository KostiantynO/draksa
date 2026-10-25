// src\draksa\cumponents\MeowAloud\HerMind\HerMind.tsx

import { WhatsInside } from '@/draksa/cumponents/MeowAloud/HerMind/WhatsInside';
import { Details } from '@/draksa/cumponents/ui/Details';

export const HerMind = () => {
  return (
    <div className="relative container mx-auto max-w-3xl">
      <Details className="p-2" summary={<p>Her mind</p>}>
        <div className="rounded-2xl bg-black/35 p-3">{<WhatsInside />}</div>
      </Details>
    </div>
  );
};
