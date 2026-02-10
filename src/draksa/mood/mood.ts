// src\draksa\mood\mood.ts
'use client';

import { signal } from '@preact/signals-react';

import { draksaTells } from '@/draksa/cumponents/MeowAloud/draksaTells';

import type { Signal } from '@preact/signals-react';

export interface DraksaContextType {
  polyGlotka: Signal<string>;
  putInMeYour: (value: string) => void;

  isMeowingOnType: Signal<boolean>;
  toggleIsMeowingOnType: () => void;

  readSpeed: Signal<number>;
  setReadSpeed: (value: number) => void;
}

const polyGlotka = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);
const readSpeed = signal(1);

export const mood: DraksaContextType = {
  polyGlotka,
  putInMeYour: value => {
    polyGlotka.value = value;
  },

  isMeowingOnType,
  toggleIsMeowingOnType: () => {
    isMeowingOnType.value = !isMeowingOnType.value;
  },

  readSpeed,
  setReadSpeed: num => {
    readSpeed.value = num;
  },
};
