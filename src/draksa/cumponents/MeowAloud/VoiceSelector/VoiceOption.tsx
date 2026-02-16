// src\draksa\cumponents\MeowAloud\VoiceSelector\VoiceOption.tsx

import { useSignals } from '@preact/signals-react/runtime';

import { mood } from '@/draksa/perf/mood/mood';

import type { ReactNode } from 'react';

export const VoiceOption = ({
  voiceName,
  children,
}: {
  voiceName: string;
  children: ReactNode;
}) => {
  useSignals();

  const selectLang = () => {
    mood.feelTheVoiceOfGrGaGvity(voiceName);
  };

  const isActive = mood.voiceOfGrGaGvity.value === voiceName;

  return (
    <li>
      <button
        type="button"
        className={`w-full rounded-lg px-4 py-2 text-left transition-all ${
          isActive ? 'bg-pink-600 text-white shadow-md' : 'hover:bg-zinc-800'
        }`}
        onClick={selectLang}
      >
        {children}
        {isActive && ' ✨'}
      </button>
    </li>
  );
};
