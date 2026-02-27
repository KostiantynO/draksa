// src\draksa\voice\cb\welcomeToTheClub.ts
'use client';
import { mood } from '@/draksa/perf/mood/mood';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';
import { youAreNotPrepared } from '@/draksa/voice/youAreNotPrepared';

export const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;

  synth.cancel();

  if (mood.throat.keyboardPasteState.peek() === 'pastingAfterCtrlV') {
    mood.throat.stopKeyboardPasting();
  }

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
