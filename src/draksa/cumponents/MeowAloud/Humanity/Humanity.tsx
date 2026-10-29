// src\draksa\cumponents\MeowAloud\Humanity\Humanity.tsx

import { SpeakLikeAHuman } from '@/draksa/cumponents/MeowAloud/Humanity/SpeakLikeAHuman';
import { Deᓚᘏᗢtails } from '@/draksa/cumponents/ui/Deᓚᘏᗢtails';

import type { JSX } from 'react';

export const Humanity = (): JSX.Element => {
  return (
    <fieldset>
      <Deᓚᘏᗢtails
        className="container mx-auto max-w-3xl p-2"
        summary={<legend>HUwUmanity</legend>}
      >
        <SpeakLikeAHuman />
      </Deᓚᘏᗢtails>
    </fieldset>
  );
};
