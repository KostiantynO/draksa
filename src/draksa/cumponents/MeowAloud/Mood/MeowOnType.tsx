// src\draksa\cumponents\MeowAloud\Mood\MeowOnType.tsx
'use client';

import { bast } from '@/draksa/heaven';

export const MeowOnType = () => {
  return (
    <label className="flex gap-3">
      <span>Meow on type</span>

      <input
        name="isMeowingOnType"
        className="w-10"
        type="checkbox"
        defaultChecked={bast.settings.isMeowingOnType.peek()}
        onChange={bast.settings.toggleIsMeowingOnType}
      />
    </label>
  );
};
