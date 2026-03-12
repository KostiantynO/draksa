// src\draksa\cumponents\MeowAloud\ClubEntrance\BounceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';

export const BounceOption = ({ label }: { label: number }) => {
  useSignals();

  const chooseBounce = () => {
    mood.settings.setSpeechDebounceForTypingInMs(label);
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const isActive = mood.settings.speechDebounceForTypingInMs.value === label; // ok

  return (
    <li>
      <button
        name="voiceOption"
        type="button"
        className={`w-full cursor-pointer rounded-full px-1 py-1 text-left text-sm transition-colors duration-210 hover:bg-pink-700 ${
          isActive ? 'bg-pink-600 text-white shadow-lg' : 'hover:bg-zinc-800'
        }`}
        onClick={chooseBounce}
      >
        {isActive ? ' ✨' : null}
      </button>
    </li>
  );
};
