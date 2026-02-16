// src\draksa\perf\mood\mood.ts
'use client';

import { signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

import type { Signal } from '@preact/signals-react';

export interface DraksaMoodType {
  polyGlotka: Signal<string>;
  putInMeYour: (value: string) => void;

  isMeowingOnType: Signal<boolean>;
  toggleIsMeowingOnType: () => void;

  slurpRate: Signal<number>;
  sheLikesThisTempo: (value: number) => void;

  isSlurping: Signal<boolean>;
  doesSheWantToSlurp: (value: boolean) => void;

  voiceOfGrGaGvity: Signal<string>;
  feelTheVoiceOfGrGaGvity: (name: string) => void;

  pitch: Signal<number>;
  setPitch: (arg: number) => void;

  moans: Signal<SpeechSynthesisVoice[]>;
  setMoans: (voices: SpeechSynthesisVoice[]) => void;
}

const polyGlotka = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);
const slurpRate = signal(1);
const isSlurping = signal(false);
const voiceOfGrGaGvity = signal('Google US English');
const pitch = signal(1);
const moans = signal<SpeechSynthesisVoice[]>([]);

// const fallbackLang = 'en-US';

export const mood: DraksaMoodType = {
  polyGlotka,
  putInMeYour: value => {
    polyGlotka.value = value;
  },

  isMeowingOnType,
  toggleIsMeowingOnType: () => {
    isMeowingOnType.value = !isMeowingOnType.value;
  },

  slurpRate,
  sheLikesThisTempo: value => {
    slurpRate.value = value;
  },

  isSlurping,
  doesSheWantToSlurp: value => {
    isSlurping.value = value;
  },

  voiceOfGrGaGvity,
  feelTheVoiceOfGrGaGvity: name => {
    voiceOfGrGaGvity.value = name;
  },

  pitch,
  setPitch: value => {
    pitch.value = value;
  },

  moans,
  setMoans: voices => {
    moans.value = voices;
  },
};
