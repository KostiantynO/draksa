// src\draksa\voice\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';

const sentenceSplitterRegExp = /(?<=[,.!?])\s+/;

const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  const openWide = mood.throat.polyGlotka.peek();
  const chunks = mood.chunks.chunks.peek();

  if (chunks.length) {
    speakCurrentChunk();
    console.log({ chunks });

    return;
  }

  const sentences = openWide
    .split(sentenceSplitterRegExp)
    .map(s => s.trim())
    .filter(Boolean);

  console.log({ sentences });

  mood.chunks.setChunks(sentences);
  mood.chunks.setActiveChunkId(0);

  speakCurrentChunk();
};

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 210);
