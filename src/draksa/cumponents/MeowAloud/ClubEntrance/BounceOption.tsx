// src\draksa\cumponents\MeowAloud\ClubEntrance\BounceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { OptionButton } from '@/draksa/cumponents/ui/OptionButton';
import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';

export const BounceOption = ({ label }: { label: number }) => {
  useSignals();

  const chooseBounce = () => {
    bast.mood.setHowLongSheWaitsBeforeSpeaking(label);
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const isActive = bast.mood.howLongSheWaitsBeforeSpeakingMs.value === label; // ok

  return (
    <li>
      <OptionButton name="BounceOption" isActive={isActive} onClick={chooseBounce}>
        {label}
      </OptionButton>
    </li>
  );
};
