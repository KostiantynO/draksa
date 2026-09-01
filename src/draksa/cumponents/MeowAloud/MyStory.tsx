// src\draksa\cumponents\MeowAloud\MyStory.tsx
import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { Details } from '@/draksa/cumponents/ui/Details';

export const MyStory = () => (
  <Details summary="Story" className="container mx-auto max-w-3xl bg-black/35 p-2">
    <div className="mt-1 flex flex-col gap-3 text-base">
      <p>
        TLDR: Use browser <code>SpeechSynthesis api</code>.
        <br />
        It is a voiceover gift from browser Gods.
      </p>

      <div>
        <h2>
          <strong>
            <code className="text-2xl">About me:</code> -{' '}
          </strong>
        </h2>

        <div className="break-after-auto text-pretty whitespace-pre-line">
          {draksaTells.myStory}
        </div>
      </div>
    </div>
  </Details>
);
