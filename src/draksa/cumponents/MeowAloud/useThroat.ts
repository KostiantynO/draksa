// src\draksa\cumponents\MeowAloud\useThroat.ts
'use client';

import { useEffect } from 'react';

import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';

import type { ChangeEvent } from 'react';

export const useThroat = () => {
  const sheMeows = ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    window.speechSynthesis.cancel();

    mood.putInMeYour(value);

    if (mood.isPrayingToGrGaGvity.peek()) {
      mood.prayToGrGaGvity(false);
    }

    if (!mood.isMeowingOnType.peek()) return;

    // prettier-ignore
    openWideAndPuuurrr( );
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const meowAsYouType = { sheMeows };

  return meowAsYouType;
};
