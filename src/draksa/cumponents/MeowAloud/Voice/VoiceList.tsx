// src\draksa\cumponents\MeowAloud\Voice\VoiceList.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { VoiceOption } from '@/draksa/cumponents/MeowAloud/Voice/VoiceOption';
import { bast } from '@/draksa/heaven';

const makeOption = ({ name, lang, default: isDefaultVoice }: SpeechSynthesisVoice) => {
  const label = `${name} (${lang}) ${isDefaultVoice ? ' — DEFAULT' : ''}`;

  return (
    <VoiceOption key={name} voiceName={name}>
      {label}
    </VoiceOption>
  );
};

const Placeholder = () => (
  <div className="text-sm opacity-60">woading voicef… meow :3</div>
);

export const VoiceList = ({ local }: { local: boolean }) => {
  useSignals();

  const voices = bast.voices.moans.value;

  if (!voices.length) return <Placeholder />;

  // prettier-ignore
  const arr = voices
    .filter(({ localService }) => localService === local)
    .map(makeOption);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(305px,1fr))] gap-x-4 gap-y-1">
      {arr}
    </ul>
  );
};
