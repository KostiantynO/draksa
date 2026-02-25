// src\draksa\cumponents\MeowAloud\DraksaStory.tsx
import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { Details } from '@/draksa/cumponents/ui/Details';

export const DraksaStory = () => (
  <Details summary="Story" className="pb-30">
    <div className="mt-2 flex flex-col gap-3 text-base">
      <p>
        TLDR: Use browser <code>SpeechSynthesis api</code>.
        <br />
        It is a voiceover gift from browser Gods.
      </p>

      <h2>
        <strong>
          <code className="text-2xl">Draksa</code> -{' '}
        </strong>

        {draksaTells.aStory}
      </h2>
    </div>
  </Details>
);
