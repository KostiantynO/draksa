// src\hookers\loveTo\useMeow.ts
'use client';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent } from 'react';

export const useMeow = () => {
  const { polyGlotka, isMeowingOnType, putInMeYour } = useDraksa();

  const { openWideAndPuuurrr } = useThroat();

  const sheMeows = (e: ChangeEvent<HTMLTextAreaElement>) => {
    putInMeYour(e.currentTarget.value);

    if (!isMeowingOnType.value) return;

    // prettier-ignore
    openWideAndPuuurrr( );
  };

  const meowAsYouType = { polyGlotka, sheMeows };

  return meowAsYouType;
};
