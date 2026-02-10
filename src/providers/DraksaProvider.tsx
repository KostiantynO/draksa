// src\providers\DraksaProvider.tsx
'use client';

import { signal } from '@preact/signals-react';

import { DraksaContext } from '@/context/DraksaContext';
import { draksaTells } from '@/cumponents/Draksa/draksaTells';

import type { DraksaContextType } from '@/types/context';
import type { ReactNode } from 'react';

const polyGlotka = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);
const readSpeed = signal(1);

export const DraksaProvider = ({ children }: { children: ReactNode }) => {
  const contextValue: DraksaContextType = {
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

  return <DraksaContext.Provider value={contextValue}>{children}</DraksaContext.Provider>;
};
