// src\hookers\loveTo\useReadOnType.ts
import { useCallback, useMemo } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent } from 'react';

export const useReadOnType = () => {
  const { openWideAndPuuurrr } = useThroat();

  const { isSlurpingWhenFed, putInMeYour } = useDraksa();

  const readOnType = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!putInMeYour) return;

      putInMeYour.value = e.currentTarget.value;

      if (!isSlurpingWhenFed.value) return;

      openWideAndPuuurrr(putInMeYour.value);
    },
    [isSlurpingWhenFed, openWideAndPuuurrr, putInMeYour]
  );

  const speakAsYouType = useMemo(
    () => ({ putInMeYour, sheMeows: readOnType }),
    [putInMeYour, readOnType]
  );

  return speakAsYouType;
};
