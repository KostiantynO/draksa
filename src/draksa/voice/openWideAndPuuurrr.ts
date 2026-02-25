// src\draksa\voice\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';

const sentenceSplitterRegExp = /(?<=[\n;.!?])\s+/;

const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  const polyGlotka = mood.throat.polyGlotka.peek();
  if (!polyGlotka.length) {
    mood.chunks.reset();
    return;
  }

  const chunks = mood.chunks.chunks.peek();

  if (chunks.length) {
    speakCurrentChunk();
    return;
  }

  const sentences = polyGlotka.split(sentenceSplitterRegExp);

  console.log(sentences);

  mood.chunks.setChunks(sentences);
  mood.chunks.setActiveChunkId(0);

  speakCurrentChunk();
};

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 500);
