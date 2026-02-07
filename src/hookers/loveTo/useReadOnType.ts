// src\hookers\loveTo\useReadOnType.ts
import { useCallback } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent } from 'react';

export const useReadOnType = () => {
  const { openWideAndPuuurrr } = useThroat();

  const { isSlurpingWhenFedRef, iWantYourJuicyRef } = useDraksa();

  const readOnType = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!iWantYourJuicyRef) return;

      iWantYourJuicyRef.current = e.currentTarget.value;

      if (!isSlurpingWhenFedRef.current) return;

      openWideAndPuuurrr(iWantYourJuicyRef.current);
    },
    [iWantYourJuicyRef, isSlurpingWhenFedRef, openWideAndPuuurrr]
  );

  return readOnType;
};
