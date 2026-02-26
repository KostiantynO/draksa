// src\draksa\voice\openWideAndPuuurrr.ts
'use client';

import { bounce } from '@/draksa/perf/club/bouncer';
import { mood } from '@/draksa/perf/mood/mood';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';
import { youAreNotPrepared } from '@/draksa/voice/youAreNotPrepared';

const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  const sentences = youAreNotPrepared();
  if (!sentences?.length) return;

  const chunks = mood.chunks.chunks.peek();

  if (chunks.length) {
    // TODO: Draksa: DO ME :D, also, please improve this to speak even after new letters added/deleted during current speech isMeowing
    speakCurrentChunk();
    return;
  }

  mood.chunks.setChunks(sentences);
  mood.chunks.setActiveChunkId(0);

  speakCurrentChunk();
};

export const openWideAndPuuurrr = bounce(welcomeToTheClub, 500);
