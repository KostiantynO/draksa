// src\draksa\cumponents\MeowAloud\VoiceSelector\VoiceList.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { VoiceOption } from '@/draksa/cumponents/MeowAloud/VoiceSelector/VoiceOption';
import { mood } from '@/draksa/perf/mood/mood';

const makeVoiceOption = ({
  name,
  lang,
  default: isDefaultVoice,
}: SpeechSynthesisVoice) => {
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

  const voices = mood.moans.value;

  if (!voices.length) return <Placeholder />;

  const arr = voices
    .filter(({ localService }) => localService === local)
    .map(makeVoiceOption);

  return <ul>{arr}</ul>;
};
