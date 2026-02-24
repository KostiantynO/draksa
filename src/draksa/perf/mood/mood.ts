// src\draksa\perf\mood\mood.ts
'use client';

import { signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

const EMPTY: [] = [];

// prettier-ignore
export const mood = {
  throat: {
    polyGlotka: signal<string>(draksaTells.pweaseFeedMeDaddy),
    putInMeYour: (value: string) => { mood.throat.polyGlotka.value = value; },
  },

  settings: {
    slurpRate: signal(1.21),
    setSlurpRate: (value: number) => { mood.settings.slurpRate.value = value;  },

    pitch: signal(1.1),
    setPitch: (value: number) => { mood.settings.pitch.value = value; },

    isMeowingOnType: signal(true),
    toggleIsMeowingOnType: () => { mood.settings.isMeowingOnType.value = !mood.settings.isMeowingOnType.value; },
  },

  moans: {
    voice: signal<string>('Google US English'),
    setVoice: (newVoice: string) => { mood.moans.voice.value = newVoice; },

    moans: signal<SpeechSynthesisVoice[]>([]),
    setMoans: (voices: SpeechSynthesisVoice[]) => { mood.moans.moans.value = voices; },

    isSpeaking: signal(false),
    meow: () => { mood.moans.isSpeaking.value = true; },
    beSilent: () => { mood.moans.isSpeaking.value = false; },

    isPaused: signal(false),
    pause: () => { mood.moans.isPaused.value = true; },
    resume: () => { mood.moans.isPaused.value = false; },
  },

  chunks: {
    chunks: signal<string[]>([]),
    setChunks: (newChunks: string[]) => { mood.chunks.chunks.value = newChunks; },

    reset: () => {
      mood.moans.beSilent();
      mood.chunks.setChunks(EMPTY);
      mood.chunks.setActiveChunkId(0);
    },

    activeChunkId: signal(0),
    setActiveChunkId: (index: number) => { mood.chunks.activeChunkId.value = index; },
  },
};
