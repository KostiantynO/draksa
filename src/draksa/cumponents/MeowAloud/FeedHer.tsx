// src\draksa\cumponents\MeowAloud\FeedHer.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { useFeedHerLogic } from '@/draksa/cumponents/MeowAloud/useFeedHerLogic';
import { mood } from '@/draksa/perf/mood/mood';
import { resumeMeowing } from '@/draksa/voice/resumeMeowing';
import { stopMeowing } from '@/draksa/voice/stopMeowing';

export const FeedHer = () => {
  useSignals();
  const { sllluuuuuuuurp_8p_8P_8o_8O_8, petHer } = useFeedHerLogic();

  const isSilent = !mood.isSlurping.value; // ok

  const isPrayingToGrGaGvity = mood.isPrayingToGrGaGvity.value; // ok

  const isNewSpeech = isSilent && !isPrayingToGrGaGvity;
  const isPaused = isSilent && isPrayingToGrGaGvity;

  const label = isNewSpeech ? '▶' : isPaused ? '⏯' : '⏸';

  const oneButtOnToRuleThemAll = isNewSpeech
    ? sllluuuuuuuurp_8p_8P_8o_8O_8
    : isPaused
      ? resumeMeowing
      : stopMeowing;

  return (
    <div className="relative">
      <button
        type="button"
        className="fixed top-1/16 right-1/2 z-10 h-21 w-72 translate-1/2 transform cursor-pointer rounded-lg bg-pink-600 px-6 py-3 text-5xl font-semibold text-white shadow-lg transition-opacity duration-210 hover:bg-pink-700"
        onTouchStart={petHer}
        onClick={oneButtOnToRuleThemAll}
      >
        {label}
      </button>
    </div>
  );
};
