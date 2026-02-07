// src\hookers\loveTo\useCheckBucks.tsx

import { useCallback, useMemo } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

import type { ChangeEvent } from 'react';

export const useCheckBucks = () => {
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
