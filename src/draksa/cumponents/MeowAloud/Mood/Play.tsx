// src\draksa\cumponents\MeowAloud\Mood\Play.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { useFeedHerLogic } from '@/draksa/cumponents/MeowAloud/useFeedHerLogic';
import { bast } from '@/draksa/heaven';
import { pauseMeowing } from '@/draksa/voice/pauseMeowing';
import { resumeMeowing } from '@/draksa/voice/resumeMeowing';

export const Play = () => {
  useSignals();
  const { sllluuuuuuuurp_8p_8P_8o_8O_8, petHer } = useFeedHerLogic();

  const state = bast.voices.state.value;
  const isIdle = state === 'idle';
  const isPaused = state === 'paused';

  const label = isIdle ? '▶' : isPaused ? '⏯' : '⏸';

  const oneButtOnToRuleThemAll = isIdle
    ? sllluuuuuuuurp_8p_8P_8o_8O_8
    : isPaused
      ? resumeMeowing
      : pauseMeowing;

  return (
    <button
      type="button"
      name="play"
      title="Play"
      className="w-21 cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-4xl font-bold text-white transition-colors select-none hover:bg-pink-700"
      onTouchStart={petHer}
      onClick={oneButtOnToRuleThemAll}
    >
      {label}
    </button>
  );
};
