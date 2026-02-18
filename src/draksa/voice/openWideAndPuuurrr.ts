// src\draksa\voice\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';
import { findVoice } from '@/draksa/voice/findVoice';

const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  const openWide = mood.polyGlotka.peek();
  if (!openWide?.trim()) return;

  const iLikeItAndILickIt = new SpeechSynthesisUtterance();
  iLikeItAndILickIt.text = openWide;
  iLikeItAndILickIt.rate = mood.slurpRate.peek();
  iLikeItAndILickIt.pitch = mood.pitch.peek();

  const voice = findVoice();

  if (voice) {
    iLikeItAndILickIt.voice = voice;
    iLikeItAndILickIt.lang = voice.lang;
  }

  console.log({ iLikeItAndILickIt });

  iLikeItAndILickIt.onend = () => {
    mood.doesSheWantToSlurp(false);
    iLikeItAndILickIt.onstart = null;
    iLikeItAndILickIt.onend = null;
  };

  synth.speak(iLikeItAndILickIt);
};

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 210);
