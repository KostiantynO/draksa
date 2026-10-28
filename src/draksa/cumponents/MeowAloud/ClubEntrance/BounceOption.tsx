// src\draksa\cumponents\MeowAloud\ClubEntrance\BounceOption.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { OwOptionButton } from '@/draksa/cumponents/ui/OptionButton';
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
      <OwOptionButton name="BounceOption" isActive={isActive} onClick={chooseBounce}>
        {label}
      </OwOptionButton>
    </li>
  );
};
