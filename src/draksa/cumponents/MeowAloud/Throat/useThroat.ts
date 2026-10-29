// src\draksa\cumponents\MeowAloud\Throat\useThroat.ts
'use client';
'use throat'; // Dear Vercel, is this the right way to parse the source code in 2026 :D Can I create my own directives :D :D :D?

import { useComputed } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

import { bast } from '@/draksa/heaven';
import { openWideAndPuuurrr } from '@/draksa/perf/club/openWideAndPuuurrr';

import type { ReadonlySignal } from '@preact/signals-react';
import type { ChangeEvent } from 'react';

const sheMeows = ({
  currentTarget: { value: yogurt },
}: ChangeEvent<HTMLTextAreaElement>): void => {
  bast.throat.pleaseFeedMe(yogurt);

  if (!bast.mood.isMeowingOnType.peek()) return;

  // prettier-ignore
  openWideAndPuuurrr( );
};

interface ThroatReturn {
  sheMeows: ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => void;
  cumPuted: ReadonlySignal<string>;
}

export const useThroat = (): ThroatReturn => {
  useSignals();

  const cumPuted = useComputed(() => bast.throat.polyGlotka.value);

  useEffect(() => () => openWideAndPuuurrr.cancel(), []);

  return { sheMeows, cumPuted };
};
