// src\draksa\voice\speakCurrentChunk.ts
'use client';

import { mood } from '@/draksa/perf/mood/mood';
import { findVoice } from '@/draksa/voice/findVoice';

const fallbackLang = 'en-US';

export const speakCurrentChunk = () => {
  const synth = window.speechSynthesis;
  synth.cancel();

  const id = mood.chunks.activeChunkId.peek();
  const chunks = mood.chunks.chunks.peek();

  if (id >= chunks.length) {
    mood.moans.beSilent();
    return;
  }

  const chunkText = chunks[id];
  const utter = new SpeechSynthesisUtterance(chunkText);

  const voice = findVoice();

  if (voice) utter.voice = voice;

  utter.rate = mood.settings.slurpRate.peek();
  utter.pitch = mood.settings.pitch.peek();
  utter.lang = voice?.lang ?? fallbackLang;

  utter.onstart = () => {
    mood.moans.meow();
    utter.onstart = null;
  };

  utter.onend = () => {
    utter.onstart = null;
    utter.onend = null;

    const chunkIdx = id + 1;

    if (chunkIdx < chunks.length) {
      mood.chunks.setActiveChunkId(chunkIdx);
      speakCurrentChunk();
      return;
    }

    mood.chunks.reset();
  };

  synth.speak(utter);
};
