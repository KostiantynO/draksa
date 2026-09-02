// src\draksa\cumponents\MeowAloud\useThroat.ts
'use client';

import { useEffect, useRef } from 'react';

import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';

import type { ChangeEvent } from 'react';

// prettier-ignore
const emptyFn = () => { /* empty */ };

const sheMeows = ({
  currentTarget: { value: yogurt },
}: ChangeEvent<HTMLTextAreaElement>) => {
  bast.throat.pleaseFeedMe(yogurt);

  if (!bast.settings.isMeowingOnType.peek()) return;

  // prettier-ignore
  openWideAndPuuurrr( );
};

export const useThroat = () => {
  const throatRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const onChangeUpdateTextarea = bast.throat.polyGlotka.subscribe(state => {
      const textarea = throatRef.current;
      if (!textarea) return;
      if (textarea.value === state) return;

      textarea.value = state;
    });

    const cleanup = () => {
      onChangeUpdateTextarea();
      bast.throat.polyGlotka.subscribe(emptyFn);
    };

    return cleanup;
  }, []);

  return { sheMeows, throatRef };
};
