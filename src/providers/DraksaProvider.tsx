// src\providers\DraksaProvider.tsx
'use client';

import { signal } from '@preact/signals-react';

import { DraksaContext } from '@/context/DraksaContext';
import { draksaTells } from '@/cumponents/Draksa/draksaTells';

import type { ReactNode } from 'react';

const polyGlotka = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);

export const DraksaProvider = ({ children }: { children: ReactNode }) => {
  const contextValue = {
    polyGlotka,
    putInMeYour: (value: string) => {
      polyGlotka.value = value;
    },

    isMeowingOnType,
    toggleIsMeowingOnType: () => {
      isMeowingOnType.value = !isMeowingOnType.value;
    },
  };

  return <DraksaContext.Provider value={contextValue}>{children}</DraksaContext.Provider>;
};
