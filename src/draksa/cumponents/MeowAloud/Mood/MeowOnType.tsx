// src\draksa\cumponents\MeowAloud\Mood\MeowOnType.tsx
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const MeowOnType = () => {
  return (
    <label className="flex gap-3">
      <span>Meow on type</span>

      <input
        name="isMeowingOnType"
        className="w-10"
        type="checkbox"
        defaultChecked={mood.settings.isMeowingOnType.peek()}
        onChange={mood.settings.toggleIsMeowingOnType}
      />
    </label>
  );
};
