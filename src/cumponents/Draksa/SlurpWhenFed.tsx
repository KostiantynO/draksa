// src\cumponents\Draksa\SlurpWhenFed.tsx
'use client';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

export const SlurpWhenFed = () => {
  const { isMeowingOnType, toggleIsMeowingOnType } = useDraksa();

  return (
    <label className="mt-3 flex gap-3">
      <span>Read on type</span>

      <input
        name="isMeowingOnType"
        className="w-10"
        type="checkbox"
        defaultChecked={isMeowingOnType.value}
        onChange={toggleIsMeowingOnType}
      />
    </label>
  );
};
