// src\hookers\loveTo\useLips.ts

import { useCallback } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

export const useLips = () => {
  const { itIsSooDeep } = useDraksa();

  const { openWideAndPuuurrr } = useThroat();

  const onFed = useCallback(() => {
    openWideAndPuuurrr(itIsSooDeep.value);
  }, [itIsSooDeep, openWideAndPuuurrr]);

  return onFed;
};
