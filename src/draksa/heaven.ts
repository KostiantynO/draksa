// src\draksa\heaven.ts
'use client';

import { batch, signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

import type { Signal } from '@preact/signals-react';

const EMPTY: [] = [];

type ChangingVoiceState = 'idle' | 'changingVoice';
type SpeechState = 'idle' | 'meowing' | 'paused' | 'changingVoice';
type PasteButtonState = 'idle' | 'pastingAfterButtonClick';
type KeyboardPasteState = 'idle' | 'pastingAfterCtrlV';

interface MoansValues extends Record<string, SpeechSynthesisVoice> {}

type ArrowVoid = () => void;

interface ᓚᘏᗢ_CatGirl_Goܫddess_ᗢᘏⳊ {
  throat: {
    polyGlotka: Signal<string>;
    pleaseFeedMe: (yogurt: string) => void;
    clear: ArrowVoid;
    pasteButtonState: Signal<PasteButtonState>;
    stopButtonPasting: ArrowVoid;
    startButtonPasting: ArrowVoid;
    keyboardPasteState: Signal<KeyboardPasteState>;
    stopKeyboardPasting: ArrowVoid;
    startKeyboardPasting: ArrowVoid;
  };
  mood: {
    slurpRate: Signal<number>;
    setSlurpRate: (value: number) => void;
    pitch: Signal<number>;
    setPitch: (value: number) => void;
    isMeowingOnType: Signal<boolean>;
    toggleIsMeowingOnType: ArrowVoid;
    howLongSheWaitsBeforeSpeakingMs: Signal<number>;
    setHowLongSheWaitsBeforeSpeaking: (ms: number) => void;
  };
  parsing: {
    silence: Signal<boolean>;
    toggleSilence: ArrowVoid;
    humanize: Signal<boolean>;
    toggleHumanize: ArrowVoid;
    purrify: Signal<boolean>;
    togglePurrify: ArrowVoid;
    whitespace: Signal<boolean>;
    toggleWhitespace: ArrowVoid;
    codify: Signal<boolean>;
    toggleCodify: ArrowVoid;
  };
  voices: {
    voice: Signal<string>;
    setVoice: (newVoice: string) => void;
    moans: Signal<MoansValues>;
    setMoans: (voices: MoansValues) => void;
    moansIds: Signal<string[]>;
    setMoansIds: (voiceIds: string[]) => void;
    setMoansBeATCH: (moans: SpeechSynthesisVoice[]) => void;
    state: Signal<SpeechState>;
    stop: ArrowVoid;
    meow: ArrowVoid;
    pause: ArrowVoid;
    isChangingVoice: Signal<ChangingVoiceState>;
    startVoiceChange: ArrowVoid;
    finishVoiceChange: ArrowVoid;
  };
  chunks: {
    chunks: Signal<string[]>;
    setChunks: (newChunks: string[]) => void;
    reset: ArrowVoid;
    activeChunkId: Signal<number>;
    setActiveChunkId: (index: number) => void;
  };
}

// prettier-ignore
export const bast: ᓚᘏᗢ_CatGirl_Goܫddess_ᗢᘏⳊ = {
  throat: {
    polyGlotka: signal<string>(draksaTells.pleaseFeedMe),
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

  mood: {
    slurpRate: signal(1.21),
    setSlurpRate: (value: number) => { bast.mood.slurpRate.value = value;  },

    pitch: signal(1.15),
    setPitch: (value: number) => { bast.mood.pitch.value = value; },

    isMeowingOnType: signal(true),
    toggleIsMeowingOnType: () => { bast.mood.isMeowingOnType.value = !bast.mood.isMeowingOnType.peek(); },

    howLongSheWaitsBeforeSpeakingMs: signal(500),
    setHowLongSheWaitsBeforeSpeaking: (ms:number) => { bast.mood.howLongSheWaitsBeforeSpeakingMs.value = ms },
  },

  parsing: {
    silence: signal(false),
    toggleSilence: () => { bast.parsing.silence.value = !bast.parsing.silence.peek(); },

    humanize: signal(true),
    toggleHumanize: () => { bast.parsing.humanize.value = !bast.parsing.humanize.peek(); },

    purrify: signal(true),
    togglePurrify: () => { bast.parsing.purrify.value = !bast.parsing.purrify.peek(); },

    whitespace: signal(false),
    toggleWhitespace: () => { bast.parsing.whitespace.value = !bast.parsing.whitespace.peek(); },

    codify: signal(true),
    toggleCodify: () => { bast.parsing.codify.value = !bast.parsing.codify.peek(); },
  },

  voices: {
    voice: signal<string>('Google US English'),
    setVoice: (newVoice: string) => { bast.voices.voice.value = newVoice; },

    moans: signal<MoansValues>({}),
    setMoans: (voices: MoansValues) => { bast.voices.moans.value = voices; },

    moansIds: signal<string[]>([]),
    setMoansIds: (voiceIds: string[]) => { bast.voices.moansIds.value = voiceIds; },

    setMoansBeATCH: (moans:SpeechSynthesisVoice[]) => {
      batch(() => {
        const ids = moans.map(({ name }) => name);

        const values = moans.reduce<MoansValues>((acc, voice) => {
          acc[voice.name] = voice;
          return acc;
        }, {});

        bast.voices.setMoansIds(ids)
        bast.voices.setMoans(values)
      });
    },

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

/*
- [ ] Can you understand what each group is responsible for?
- [ ] Can you change voice logic without rewriting parsing logic?
- [ ] Can you test the chunk-management behavior independently?
- [ ] Can you predict the effects of each method from its name?
- [ ] Are the cross-domain dependencies intentional?
*/
