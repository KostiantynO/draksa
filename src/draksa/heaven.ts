// src\draksa\heaven.ts
'use client';

import { batch, signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

const EMPTY: [] = [];

type ChangingVoiceState = 'idle' | 'changingVoice';
type SpeechState = 'idle' | 'meowing' | 'paused' | 'changingVoice';
export type PasteButtonState = 'idle' | 'pastingAfterButtonClick';
type KeyboardPasteState = 'idle' | 'pastingAfterCtrlV';

// prettier-ignore
export const bast = {
  throat: {
    polyGlotka: signal<string>(draksaTells.pleaseFeedMe),
    // polyGlotka: signal<string>(''),
    pleaseFeedMe: (yogurt: string) => { bast.throat.polyGlotka.value = yogurt; },

    clear: () => {
      batch(() => {
        bast.throat.pleaseFeedMe('');
        bast.chunks.reset();
      });
    },

    pasteButtonState: signal<PasteButtonState>('idle'),
    stopButtonPasting: () => { bast.throat.pasteButtonState.value = 'idle'; },
    startButtonPasting: () => { bast.throat.pasteButtonState.value = 'pastingAfterButtonClick'; },

    keyboardPasteState: signal<KeyboardPasteState>('idle'),
    stopKeyboardPasting: () => { bast.throat.keyboardPasteState.value = 'idle'; },
    startKeyboardPasting: () => { bast.throat.keyboardPasteState.value = 'pastingAfterCtrlV'; },
  },

  settings: {
    slurpRate: signal(1.21),
    setSlurpRate: (value: number) => { bast.settings.slurpRate.value = value;  },

    pitch: signal(1.15),
    setPitch: (value: number) => { bast.settings.pitch.value = value; },

    isMeowingOnType: signal(true),
    toggleIsMeowingOnType: () => { bast.settings.isMeowingOnType.value = !bast.settings.isMeowingOnType.peek(); },

    speechDebounceForTypingInMs: signal(500),
    setSpeechDebounceForTypingInMs: (ms:number) => { bast.settings.speechDebounceForTypingInMs.value = ms },
  },

  voices: {
    voice: signal<string>('Google US English'),
    setVoice: (newVoice: string) => { bast.voices.voice.value = newVoice; },

    moans: signal<SpeechSynthesisVoice[]>([]),
    setMoans: (voices: SpeechSynthesisVoice[]) => { bast.voices.moans.value = voices; },

    state: signal<SpeechState>('idle'),
    stop: () => { bast.voices.state.value = 'idle'; },
    meow: () => { bast.voices.state.value = 'meowing'; },
    pause: () => { bast.voices.state.value = 'paused'; },

    isChangingVoice: signal<ChangingVoiceState>('idle'),
    startVoiceChange: () => { bast.voices.isChangingVoice.value = 'changingVoice'; },
    finishVoiceChange: () => { bast.voices.isChangingVoice.value = 'idle'; },
  },

  chunks: {
    chunks: signal<string[]>([]),
    setChunks: (newChunks: string[]) => { bast.chunks.chunks.value = newChunks; },

    reset: () => {
      batch(() => {
        bast.voices.stop();

        bast.chunks.setChunks(EMPTY);
        bast.chunks.setActiveChunkId(0);
      });
    },

    activeChunkId: signal(0),
    setActiveChunkId: (index: number) => { bast.chunks.activeChunkId.value = index; },
  },
};
