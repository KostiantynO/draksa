// src\cumponents\Draksa\useThroatLogic.ts
'use client';

import { useSignals } from '@preact/signals-react/runtime';

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

import type { ChangeEvent } from 'react';

export const useThroatLogic = () => {
  useSignals();

  const { polyGlotka, isMeowingOnType, putInMeYour } = useDraksa();

  const { openWideAndPuuurrr } = useThroat();

  const sheMeows = ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    putInMeYour(value);

    if (!isMeowingOnType.value) return;

    // prettier-ignore
    openWideAndPuuurrr( );
  };

  const meowAsYouType = { polyGlotka, sheMeows };

  return meowAsYouType;
};
