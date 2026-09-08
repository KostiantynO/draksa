// src\draksa\cumponents\MeowAloud\Mood\TickleHer.tsx
'use client';

import { bast } from '@/draksa/heaven';

export const TickleHer = () => {
  return (
    <label className="flex gap-3">
      <span>Meow on type</span>

      <input
        name="isMeowingOnType"
        className="w-10"
        type="checkbox"
        defaultChecked={bast.mood.isMeowingOnType.peek()}
        onChange={bast.mood.toggleIsMeowingOnType}
      />
    </label>
  );
};
