// src\draksa\cumponents\MeowAloud\Voice\VoiceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { OptionButton } from '@/draksa/cumponents/ui/OptionButton';
import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
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

  const isActive = bast.voices.voice.value === voiceName;

  return (
    <li>
      <OptionButton
        name="voiceOption"
        className={`w-full cursor-pointer rounded-full px-1 py-1 text-left text-base whitespace-nowrap transition-colors duration-210 hover:bg-pink-700 ${
          isActive ? 'bg-pink-600 text-white shadow-lg' : 'hover:bg-zinc-800'
        }`}
        isActive={isActive}
        onClick={chooseVoice}
      >
        {children}
        {isActive ? ' ✨' : null}
      </OptionButton>
    </li>
  );
};
