// src\draksa\voice\cb\welcomeToTheClub.ts
'use client';
import { mood } from '@/draksa/perf/mood/mood';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';
import { youAreNotPrepared } from '@/draksa/voice/youAreNotPrepared';

export const welcomeToTheClub = () => {
  const synth = window.speechSynthesis;
  synth.cancel();

  if (synth.speaking) synth.cancel();

  if (mood.throat.keyboardPasteState.peek() === 'pastingAfterCtrlV') {
    mood.throat.stopKeyboardPasting();
  }

  const sentences = youAreNotPrepared();
  if (!sentences?.length) return;

  const isChangingVoice = mood.moans.isChangingVoice.peek() === 'changingVoice';

  const chunks = mood.chunks.chunks.peek();

  if (isChangingVoice && chunks.length) {
    mood.moans.finishVoiceChange();
    speakCurrentChunk();
    return;
  }

  mood.chunks.setChunks(sentences);
  mood.chunks.setActiveChunkId(0);

  speakCurrentChunk();
};
