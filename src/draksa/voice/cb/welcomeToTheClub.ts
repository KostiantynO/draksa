// src\draksa\voice\cb\welcomeToTheClub.ts
'use client';
import { bast } from '@/draksa/heaven';
import { kisKisKis } from '@/draksa/voice/catCalling';
import { speakCurrentChunk } from '@/draksa/voice/speakCurrentChunk';
import { youAreNotPrepared } from '@/draksa/voice/youAreNotPrepared';

export const welcomeToTheClub = () => {
  kisKisKis();

  if (bast.throat.keyboardPasteState.peek() === 'pastingAfterCtrlV') {
    bast.throat.stopKeyboardPasting();
  }

  const sentences = youAreNotPrepared();
  if (!sentences?.length) return;

  const isChangingVoice = bast.voices.isChangingVoice.peek() === 'changingVoice';

  const chunks = bast.chunks.chunks.peek();

  if (isChangingVoice && chunks.length) {
    bast.voices.finishVoiceChange();
    speakCurrentChunk();
    return;
  }

  bast.chunks.setChunks(sentences);
  bast.chunks.setActiveChunkId(0);

  speakCurrentChunk();
};
