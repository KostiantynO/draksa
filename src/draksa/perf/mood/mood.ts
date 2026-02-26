// src\draksa\perf\mood\mood.ts
'use client';

import { batch, signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

const EMPTY: [] = [];

type SpeechState = 'idle' | 'meowing' | 'paused';
type PasteState = 'idle' | 'pasting';

// prettier-ignore
export const mood = {
  throat: {
    polyGlotka: signal<string>(draksaTells.pleaseFeedMe),
    pleaseFeedMe: (value: string) => { mood.throat.polyGlotka.value = value; },

    wantsAir: signal(false),
    careForHerAndGiveAir: () => {
      batch(()=>{
        mood.throat.pleaseFeedMe('');
        mood.throat.wantsAir.value = false;
      });
    },
    lanDyshy: () => {
      batch(() => {
        mood.throat.pleaseFeedMe('');
        mood.throat.wantsAir.value = true;
        mood.chunks.reset();
      });
    },
    pasteState: signal<PasteState>('idle'),
    stopPasting: () => { mood.throat.pasteState.value = 'idle' },
    startPasting: () => { mood.throat.pasteState.value = 'pasting' },
  },

  settings: {
    slurpRate: signal(1.21),
    setSlurpRate: (value: number) => { mood.settings.slurpRate.value = value;  },

    pitch: signal(1.1),
    setPitch: (value: number) => { mood.settings.pitch.value = value; },

    isMeowingOnType: signal(true),
    toggleIsMeowingOnType: () => { mood.settings.isMeowingOnType.value = !mood.settings.isMeowingOnType.peek(); },
  },

  moans: {
    voice: signal<string>('Google US English'),
    setVoice: (newVoice: string) => { mood.moans.voice.value = newVoice; },

    moans: signal<SpeechSynthesisVoice[]>([]),
    setMoans: (voices: SpeechSynthesisVoice[]) => { mood.moans.moans.value = voices; },

    state: signal<SpeechState>('idle'),
    stop: () => { mood.moans.state.value = 'idle'; },
    meow: () => { mood.moans.state.value = 'meowing'; },
    pause: () => { mood.moans.state.value = 'paused'; },
  },

  chunks: {
    chunks: signal<string[]>([]),
    setChunks: (newChunks: string[]) => { mood.chunks.chunks.value = newChunks; },

    reset: () => {
      batch(() => {
        mood.moans.stop();

        mood.chunks.setChunks(EMPTY);
        mood.chunks.setActiveChunkId(0);
      });
    },

    activeChunkId: signal(0),
    setActiveChunkId: (index: number) => { mood.chunks.activeChunkId.value = index; },
  },
};
