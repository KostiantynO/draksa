// src\providers\ProviderDaddy.tsx
import { signal } from '@preact/signals-react';
import { useMemo } from 'react';

import { draksaTells } from '@/cumponents/Draksa/draksaTells';
import { DraksaCuntext } from '@/cuntext/DraksaCuntext';

import type { ReactNode } from 'react';

const itIsSooDeep = signal<string>(draksaTells.pweaseFeedMeDaddy);
const isMeowingOnType = signal(true);

export const ProviderDaddy = ({ children }: { children: ReactNode }) => {
  const cuntextValue = useMemo(
    () => ({
      itIsSooDeep,
      putInMeYour: (value: string) => {
        itIsSooDeep.value = value;
      },

      isMeowingOnType,
      toggleIsMeowingOnType: () => {
        isMeowingOnType.value = !isMeowingOnType.value;
      },
    }),
    []
  );

  return <DraksaCuntext.Provider value={cuntextValue}>{children}</DraksaCuntext.Provider>;
};
