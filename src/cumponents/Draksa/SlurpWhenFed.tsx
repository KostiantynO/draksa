// src\cumponents\Draksa\SlurpWhenFed.tsx
'use client';

import { useCheckBucks } from '@/hookers/loveTo/useCheckBucks';

export const SlurpWhenFed = () => {
  const { isMeowingOnType, toggleIsMeowingOnType } = useCheckBucks();

  return (
    <label className="flex gap-3 mt-3">
      <div className="flex flex-col">
        <span>Read on type</span>
      </div>

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
