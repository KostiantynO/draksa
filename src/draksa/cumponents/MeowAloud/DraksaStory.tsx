// src\draksa\cumponents\MeowAloud\DraksaStory.tsx
import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { Details } from '@/draksa/cumponents/ui/Details';

export const DraksaStory = () => (
  <div className="pt-40">
    <Details summary="Story">
      <div className="mt-3 flex flex-col gap-4 text-base">
        <p>
          TLDR: Use browser <code>SpeechSynthesis api</code>.
          <span>It is a voiceover gift from browser Gods.</span>
        </p>

        <h2>
          <strong>
            <code className="text-2xl">Draksa</code> -{' '}
          </strong>

          {draksaTells.aStory}
        </h2>
      </div>
    </Details>
  </div>
);
