// src\draksa\cumponents\MeowAloud\useThroat.ts
'use client';

import { useEffect, useRef } from 'react';

import { mood } from '@/draksa/perf/mood/mood';
import { openWideAndPuuurrr } from '@/draksa/voice/openWideAndPuuurrr';

import type { ChangeEvent } from 'react';

export const useThroat = () => {
  const sheMeows = ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    // window.speechSynthesis.cancel();
    mood.throat.pleaseFeedMe(value);

    if (!mood.settings.isMeowingOnType.peek()) return;

    // prettier-ignore
    openWideAndPuuurrr( );
  };

  useEffect(() => openWideAndPuuurrr.cancel, []);

  const feedMeRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const unsubWantsAirSignal = mood.throat.wantsAir.subscribe(wantsAir => {
      const polyGlotka = feedMeRef.current;
      if (!wantsAir || !polyGlotka) return;
      mood.throat.careForHerAndGiveAir();

      polyGlotka.value = '';
    });

    return unsubWantsAirSignal;
  }, []);

  useEffect(() => {
    const unsubInsertingSignal = mood.throat.pasteState.subscribe(pasteState => {
      const polyGlotkaDOM = feedMeRef.current;
      if (pasteState !== 'pasting' || !polyGlotkaDOM) return;
      const newVal = mood.throat.polyGlotka.peek();

      polyGlotkaDOM.value = newVal;

      polyGlotkaDOM.dispatchEvent(new Event('input', { bubbles: true })); // to trigger onChange

      mood.throat.stopPasting();
    });

    return unsubInsertingSignal;
  }, []);

  const meowAsYouType = { sheMeows, feedMeRef };

  return meowAsYouType;
};
