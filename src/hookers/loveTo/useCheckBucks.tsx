// src\hookers\loveTo\useCheckBucks.tsx

import { useCallback, useMemo } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

import type { ChangeEvent } from 'react';

export const useCheckBucks = () => {
  const { isSlurpingWhenFed } = useDraksa();

  const toggleMeowingOnType = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!isSlurpingWhenFed) return;

      isSlurpingWhenFed.value = e.currentTarget.checked;
    },
    [isSlurpingWhenFed]
  );

  const checkbox = useMemo(
    () => ({ isSlurpingWhenFed, toggleMeowingOnType }),
    [isSlurpingWhenFed, toggleMeowingOnType]
  );

  return checkbox;
};
