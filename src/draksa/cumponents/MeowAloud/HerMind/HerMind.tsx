// src\draksa\cumponents\MeowAloud\HerMind\HerMind.tsx

import { WhatsInside } from '@/draksa/cumponents/MeowAloud/HerMind/WhatsInside';
import { Deᓚᘏᗢtails } from '@/draksa/cumponents/ui/Deᓚᘏᗢtails';

export const HerMind = () => {
  return (
    <div className="relative container mx-auto max-w-3xl">
      <Deᓚᘏᗢtails className="p-2" summary={<p>Her mind</p>}>
        <div className="rounded-2xl bg-black/35 p-3">{<WhatsInside />}</div>
      </Deᓚᘏᗢtails>
    </div>
  );
};
