// src\cumponents\Draksa\SlurpWhenFed.tsx

import { useCheckBucks } from '@/hookers/loveTo/useCheckBucks';

export const SlurpWhenFed = () => {
  const { isMeowingOnType, toggleIsMeowingOnType } = useCheckBucks();

  return (
    <label className="flex gap-3">
      <div className="flex flex-col">
        <span>Slurp when fed </span>
        <span>(read on type) </span>
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
