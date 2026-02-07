// src\cumponents\Draksa\SlurpWhenFed.tsx



import { useCallback, useMemo } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

import type { ChangeEvent } from 'react';

const useCheckbox = () => {
  const { isSlurpingWhenFedRef } = useDraksa();

  const toggleMeowingOnType = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!isSlurpingWhenFedRef) return;

      isSlurpingWhenFedRef.current = e.currentTarget.checked;
    },
    [isSlurpingWhenFedRef]
  );

  const checkbox = useMemo(
    () => ({ isSlurpingWhenFedRef, toggleMeowingOnType }),
    [isSlurpingWhenFedRef, toggleMeowingOnType]
  );

  return checkbox;
};

export const SlurpWhenFed = () => {
  const { toggleMeowingOnType, isSlurpingWhenFedRef } = useCheckbox();

  return (
    <label className="flex gap-3">
      <div className="flex flex-col">
        <span>Slurp when fed </span>
        <span>(read on type) </span>
      </div>

      <input
        className="w-10"
        type="checkbox"
        defaultChecked={isSlurpingWhenFedRef.current}
        onChange={toggleMeowingOnType}
      />
    </label>
  );
};
