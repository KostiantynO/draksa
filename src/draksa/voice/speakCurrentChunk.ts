// src\draksa\voice\speakCurrentChunk.ts
'use client';

import { bast } from '@/draksa/heaven';
import { kisKisKis } from '@/draksa/voice/catCalling';
import { findVoice } from '@/draksa/voice/findVoice';

const fallbackLang = 'en-US';

export const speakCurrentChunk = () => {
  const kitty = kisKisKis();

  const id = bast.chunks.activeChunkId.peek();
  const chunks = bast.chunks.chunks.peek();

  if (id >= chunks.length) {
    bast.voices.stop();
    return;
  }

  const RRRAAAAAWRRR = chunks[id];
  const meow = new SpeechSynthesisUtterance(RRRAAAAAWRRR);

  const voice = findVoice();

  if (voice) meow.voice = voice;

  meow.rate = bast.settings.slurpRate.peek();
  meow.pitch = bast.settings.pitch.peek();
  meow.lang = voice?.lang ?? fallbackLang;

  meow.onstart = () => {
    bast.voices.meow();
    meow.onstart = null;
  };

  meow.onend = () => {
    meow.onstart = null;
    meow.onend = null;

    const chunkIdx = id + 1;

    if (chunkIdx < chunks.length) {
      bast.chunks.setActiveChunkId(chunkIdx);
      speakCurrentChunk();
      return;
    }

    bast.chunks.reset();
  };

  // if (Math.random() < 0.2 && meow.text.includes(':3')) {
  // play cat meow audio clip here
  // }

  kitty.speak(meow);
};
