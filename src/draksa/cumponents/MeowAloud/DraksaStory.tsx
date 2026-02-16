// src\cumponents\Draksa\DraksaStory.tsx

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

export const DraksaStory = () => (
  <div className="pt-40">
    <details className="group rounded-lg border p-4">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-medium">
        <span className="transition group-open:rotate-90">▶</span>
        <strong>Story</strong>
      </summary>

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
    </details>
  </div>
);
