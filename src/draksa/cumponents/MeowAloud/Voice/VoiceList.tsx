// src\draksa\cumponents\MeowAloud\Voice\VoiceList.tsx
'use client';

import { useComputed, useSignals } from '@preact/signals-react/runtime';

import { LoadVoicesButton } from '@/draksa/cumponents/MeowAloud/Voice/LoadVoicesButton';
import { VoiceOption } from '@/draksa/cumponents/MeowAloud/Voice/VoiceOption';
import { bast } from '@/draksa/heaven';

const makeOption = ({ name }: SpeechSynthesisVoice) => (
  <VoiceOption key={name} voiceName={name} />
);

const Placeholder = () => (
  <div className="relative text-sm opacity-60">
    <LoadVoicesButton />
    woading voicef… meow :3
  </div>
);

export const VoiceList = ({ local }: { local: boolean }) => {
  useSignals();

  const voices = useComputed(() => {
    const ids = bast.voices.moansIds.value;
    return ids.map(id => bast.voices.moans.value[id]).filter(Boolean);
  });

  if (!voices.value.length) return <Placeholder />;

  const arr = voices.value
    .filter(({ localService }) => localService === local)
    .map(makeOption)
    .filter(Boolean);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(305px,1fr))] gap-x-4 gap-y-1">
      {arr}
    </ul>
  );
};
