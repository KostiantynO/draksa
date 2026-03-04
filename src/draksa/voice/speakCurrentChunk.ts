// src\draksa\voice\speakCurrentChunk.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';
import { findVoice } from '@/draksa/voice/findVoice';

const fallbackLang = 'en-US';

export const speakCurrentChunk = () => {
  const kitty = window.speechSynthesis;
  if (kitty.speaking) kitty.cancel();

  const id = mood.chunks.activeChunkId.peek();
  const chunks = mood.chunks.chunks.peek();

  if (id >= chunks.length) {
    mood.moans.stop();
    return;
  }

  const RRRAAAAAWRRR = chunks[id];
  const meow = new SpeechSynthesisUtterance(RRRAAAAAWRRR);

  const voice = findVoice();

  if (voice) meow.voice = voice;

  meow.rate = mood.settings.slurpRate.peek();
  meow.pitch = mood.settings.pitch.peek();
  meow.lang = voice?.lang ?? fallbackLang;

  meow.onstart = () => {
    mood.moans.meow();
    meow.onstart = null;
  };

  meow.onend = () => {
    meow.onstart = null;
    meow.onend = null;

    const chunkIdx = id + 1;

    if (chunkIdx < chunks.length) {
      mood.chunks.setActiveChunkId(chunkIdx);
      speakCurrentChunk();
      return;
    }

    mood.chunks.reset();
  };

  // if (Math.random() < 0.2 && meow.text.includes(':3')) {
  // play cat meow audio clip here
  // }

  kitty.speak(meow);
};
