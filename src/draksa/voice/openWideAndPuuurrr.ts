// src\draksa\voice\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';
import { findVoice } from '@/draksa/voice/findVoice';

const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  const openWide = mood.polyGlotka.peek();
  if (!openWide) return;

  const iLikeItAndILickIt = new SpeechSynthesisUtterance(openWide);

  iLikeItAndILickIt.rate = mood.slurpRate.peek();
  iLikeItAndILickIt.pitch = mood.pitch.peek();

  const voice = findVoice();

  if (voice) {
    iLikeItAndILickIt.voice = voice;
    iLikeItAndILickIt.lang = voice.lang;
  }

  iLikeItAndILickIt.onstart = () => {
    mood.doesSheWantToSlurp(true);

    iLikeItAndILickIt.onstart = null;
  };

  iLikeItAndILickIt.onend = () => {
    mood.doesSheWantToSlurp(false);

    iLikeItAndILickIt.onstart = null;
    iLikeItAndILickIt.onend = null;
  };

  synth.speak(iLikeItAndILickIt);
};

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 210);
