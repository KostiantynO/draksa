// src\draksa\cumponents\MeowAloud\Voice\VoiceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';
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
    // if (voiceName === mood.moans.voice.peek()) return;
    selectVoice(voiceName);
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const isActive = mood.moans.voice.value === voiceName; // ok

  return (
    <li>
      <button
        name="voiceOption"
        type="button"
        className={`w-full cursor-pointer rounded-2xl px-1 py-1 text-left text-sm transition-colors duration-210 hover:bg-pink-700 ${
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
