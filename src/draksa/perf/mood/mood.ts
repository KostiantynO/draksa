// src\draksa\perf\mood\mood.ts
'use client';

import { batch, signal } from '@preact/signals-react';

const EMPTY: [] = [];

type ChangingVoiceState = 'idle' | 'changingVoice';
type SpeechState = 'idle' | 'meowing' | 'paused' | 'changingVoice';
export type PasteButtonState = 'idle' | 'pastingAfterButtonClick';
type KeyboardPasteState = 'idle' | 'pastingAfterCtrlV';

// prettier-ignore
export const mood = {
  throat: {
    // polyGlotka: signal<string>(draksaTells.pleaseFeedMe),
    polyGlotka: signal<string>(''),
    pleaseFeedMe: (yogurt: string) => { mood.throat.polyGlotka.value = yogurt; },

    clear: () => {
      batch(() => {
        mood.throat.pleaseFeedMe('');
        mood.chunks.reset();
      });
    },

    pasteButtonState: signal<PasteButtonState>('idle'),
    stopButtonPasting: () => { mood.throat.pasteButtonState.value = 'idle'; },
    startButtonPasting: () => { mood.throat.pasteButtonState.value = 'pastingAfterButtonClick'; },

    keyboardPasteState: signal<KeyboardPasteState>('idle'),
    stopKeyboardPasting: () => { mood.throat.keyboardPasteState.value = 'idle'; },
    startKeyboardPasting: () => { mood.throat.keyboardPasteState.value = 'pastingAfterCtrlV'; },
  },

  settings: {
    slurpRate: signal(1.21),
    setSlurpRate: (value: number) => { mood.settings.slurpRate.value = value;  },

    pitch: signal(1.15),
    setPitch: (value: number) => { mood.settings.pitch.value = value; },

    isMeowingOnType: signal(true),
    toggleIsMeowingOnType: () => { mood.settings.isMeowingOnType.value = !mood.settings.isMeowingOnType.peek(); },

    speechDebounceForTypingInMs: signal(500),
    setSpeechDebounceForTypingInMs: (ms:number) => { mood.settings.speechDebounceForTypingInMs.value = ms },
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

    isChangingVoice: signal<ChangingVoiceState>('idle'),
    startVoiceChange: () => { mood.moans.isChangingVoice.value = 'changingVoice'; },
    finishVoiceChange: () => { mood.moans.isChangingVoice.value = 'idle'; },
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
