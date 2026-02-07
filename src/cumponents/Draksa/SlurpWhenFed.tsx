// src\cumponents\Draksa\SlurpWhenFed.tsx

import { useCheckBucks } from '@/hookers/loveTo/useCheckBucks';

export const SlurpWhenFed = () => {
  const { toggleMeowingOnType, isSlurpingWhenFed } = useCheckBucks();

  return (
    <label className="flex gap-3">
      <div className="flex flex-col">
        <span>Slurp when fed </span>
        <span>(read on type) </span>
      </div>

      <input
        name="isSlurpingWhenFed"
        className="w-10"
        type="checkbox"
        defaultChecked={isSlurpingWhenFed.value}
        onChange={toggleMeowingOnType}
      />
    </label>
  );
};
