// src\draksa\cumponents\MeowAloud\MyStory\MyStory.tsx
import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';
import { MeowIt } from '@/draksa/cumponents/MeowAloud/MyStory/MeowIt';
import { Deᓚᘏᗢtails } from '@/draksa/cumponents/ui/Deᓚᘏᗢtails';

export const MyStoܫory = () => (
  <Deᓚᘏᗢtails summary="StOωOry" className="container mx-auto max-w-3xl p-2">
    <div className="flex flex-col gap-3 rounded-2xl bg-black/35 p-2 text-base">
      <p>
        TLDR: UwUse steppe-Browser <code>SpeechSynthesis api</code>.
        <br />
        It is a voiceOwOer gift frOwOm brOwOser Goܫds.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-8">
          <h2>
            <strong>
              <code className="text-2xl">About me:</code>
            </strong>
          </h2>

          <MeowIt />
        </div>

        <div className="break-after-auto text-pretty whitespace-pre-line">
          {draksaTells.myStory}
        </div>
      </div>
    </div>
  </Deᓚᘏᗢtails>
);
