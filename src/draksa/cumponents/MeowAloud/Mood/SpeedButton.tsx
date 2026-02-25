// src\draksa\cumponents\MeowAloud\Mood\SpeedButton.tsx
'use client';

import { useState, useTransition } from 'react';

import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';

const speeds = [1, 1.1, 1.21, 1.3, 1.4, 1.5];

const SlurpRateButtons = () => {
  const [, startTransition] = useTransition();

  const selectSpeed = (value: number) =>
    startTransition(() => {
      if (value === mood.settings.slurpRate.peek()) return;

      mood.settings.setSlurpRate(value);

      // prettier-ignore
      openWideAndPuuurrr( );
    });

  const buttons = speeds.map(speed => (
    <li key={speed}>
      <button
        className="relative flex cursor-pointer gap-2 rounded-2xl bg-pink-600 px-3 py-2 text-sm font-bold text-white transition-colors duration-100 outline-none select-none hover:bg-pink-700"
        onClick={() => selectSpeed(speed)}
      >
        {speed}
      </button>
    </li>
  ));

  return (
    <ul className="absolute bottom-0 left-0 flex translate-x-1 -translate-y-15 flex-col items-end gap-1 overflow-auto rounded-2xl border bg-black p-2">
      {buttons}
    </ul>
  );
};

export const SpeedButton = () => {
  const [opened, setOpened] = useState(false);
  const showSpeedButtons = () => {
    setOpened(o => !o);
  };

  return (
    <div className="relative">
      {opened ? <SlurpRateButtons /> : null}
      <button
        name="slurpRate"
        title="Slurp rate"
        className="min-w-21 cursor-pointer rounded-2xl bg-pink-600/90 px-4 py-2 text-xl font-bold text-white transition-colors select-none hover:bg-pink-700"
        onClick={showSpeedButtons}
      >
        {mood.settings.slurpRate}
      </button>
    </div>
  );
};
