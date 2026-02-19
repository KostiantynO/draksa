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

  pleasantFeelingOfGrGaGvity: Signal<string>;
  voiceOfGrGaGvity: Signal<string>;
  feelTheVoiceOfGrGaGvity: (name: string) => void;

  pitch: Signal<number>;
  setPitch: (arg: number) => void;

  moans: Signal<SpeechSynthesisVoice[]>;
  setMoans: (voices: SpeechSynthesisVoice[]) => void;

  currentSlurp: Signal<number>;
  setCurrentSlurp: (slurp: number) => void;

  isPrayingToGrGaGvity: Signal<boolean>;
  prayToGrGaGvity: (value: boolean) => void;
}

const eng = 'Google US English';

const polyGlotka = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);
const slurpRate = signal(1.1);
const isSlurping = signal(false);
const voiceOfGrGaGvity = signal(eng);
const pleasantFeelingOfGrGaGvity = signal(eng);
const pitch = signal(1.1);
const moans = signal<SpeechSynthesisVoice[]>([]);
const currentSlurp = signal(0);
const isPrayingToGrGaGvity = signal(false);

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

  pleasantFeelingOfGrGaGvity,
  voiceOfGrGaGvity,
  feelTheVoiceOfGrGaGvity: name => {
    pleasantFeelingOfGrGaGvity.value = voiceOfGrGaGvity.value;
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

  currentSlurp,
  setCurrentSlurp: slurp => {
    currentSlurp.value = slurp;
  },

  isPrayingToGrGaGvity,
  prayToGrGaGvity: value => {
    isPrayingToGrGaGvity.value = value;
  },
};
