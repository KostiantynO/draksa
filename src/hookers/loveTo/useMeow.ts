// src\hookers\loveTo\useMeow.ts
import { useCallback, useMemo } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent } from 'react';

export const useMeow = () => {
  const { itIsSooDeep, isSlurpingWhenFed, putInMeYour } = useDraksa();

  const { openWideAndPuuurrr } = useThroat();

  const sheMeows = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      putInMeYour(e.currentTarget.value);

      if (!isSlurpingWhenFed.value) return;

      openWideAndPuuurrr(itIsSooDeep.value);
    },
    [putInMeYour, isSlurpingWhenFed.value, openWideAndPuuurrr, itIsSooDeep.value]
  );

  const meowAsYouType = useMemo(
    () => ({ itIsSooDeep, sheMeows }),
    [itIsSooDeep, sheMeows]
  );

  return meowAsYouType;
};
