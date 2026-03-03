// src\draksa\cumponents\MeowAloud\useThroat.ts
'use client';

import { useEffect, useRef } from 'react';

import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';
import { mood } from '@/draksa/perf/mood/mood';

import type { ChangeEvent } from 'react';

const sheMeows = ({
  currentTarget: { value: yogurt },
}: ChangeEvent<HTMLTextAreaElement>) => {
  mood.throat.pleaseFeedMe(yogurt);

  if (!mood.settings.isMeowingOnType.peek()) return;

  openWideAndPuuurrr();
};

export const useThroat = () => {
  const throatRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const onChangeUpdateTextarea = mood.throat.polyGlotka.subscribe(state => {
      const textarea = throatRef.current;
      if (!textarea) return;
      if (textarea.value === state) return;

      textarea.value = state;
    });

    const cleanup = () => {
      onChangeUpdateTextarea();
    };

    return cleanup;
  }, []);

  return { sheMeows, throatRef };
};
