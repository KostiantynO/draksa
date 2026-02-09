// src\context\DraksaContext.ts
'use client';

import { createContext } from 'react';

import type { Signal } from '@preact/signals-react';

interface DraksaContextType {
  polyGlotka: Signal<string>;
  putInMeYour: (value: string) => void;

  isMeowingOnType: Signal<boolean>;
  toggleIsMeowingOnType: () => void;
}

export const DraksaContext = createContext<DraksaContextType | undefined>(undefined);
