// src\draksa\cumponents\MeowAloud\Humanity\Humanity.tsx

import { SpeakLikeAHuman } from '@/draksa/cumponents/MeowAloud/Humanity/SpeakLikeAHuman';
import { Details } from '@/draksa/cumponents/ui/Details';

export const Humanity = () => {
  return (
    <fieldset>
      <Details
        className="container mx-auto max-w-3xl p-2"
        summary={<legend>Humanity</legend>}
      >
        <SpeakLikeAHuman />
      </Details>
    </fieldset>
  );
};
