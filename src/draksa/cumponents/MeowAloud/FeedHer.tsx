// src\draksa\cumponents\MeowAloud\FeedHer.tsx
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { useFeedHerLogic } from '@/draksa/cumponents/MeowAloud/useFeedHerLogic';
import { mood } from '@/draksa/perf/mood/mood';

export const FeedHer = () => {
  useSignals();
  const { sllluuuuuuuurp_8p_8P_8o_8O_8, petHer } = useFeedHerLogic();

  const isSlurping = mood.isSlurping.value ? 'Slurping...' : 'Feed her (Pway ;3)';

  return (
    <button
      type="button"
      onTouchStart={petHer}
      onClick={sllluuuuuuuurp_8p_8P_8o_8O_8}
      className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-700"
    >
      {isSlurping}
    </button>
  );
};
