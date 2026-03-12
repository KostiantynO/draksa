// src\draksa\cumponents\MeowAloud\Voice\VoiceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';
import { selectVoice } from '@/draksa/voice/selectVoice';

import type { ReactNode } from 'react';

export const VoiceOption = ({
  voiceName,
  children,
}: {
  voiceName: string;
  children: ReactNode;
}) => {
  useSignals();

  const chooseVoice = () => {
    selectVoice(voiceName);
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const isActive = mood.moans.voice.value === voiceName;

  return (
    <li>
      <button
        name="voiceOption"
        type="button"
        className={`w-full cursor-pointer rounded-full px-1 py-1 text-left text-sm transition-colors duration-210 hover:bg-pink-700 ${
          isActive ? 'bg-pink-600 text-white shadow-lg' : 'hover:bg-zinc-800'
        }`}
        onClick={chooseVoice}
      >
        {children}
        {isActive ? ' ✨' : null}
      </button>
    </li>
  );
};
