// src\cuntext\DraksaCuntext.ts
import { createContext } from 'react';

import type { Signal } from '@preact/signals-react';

interface DraksaCuntextType {
  itIsSooDeep: Signal<string>;
  putInMeYour: (value: string) => void;

  isMeowingOnType: Signal<boolean>;
  toggleIsMeowingOnType: () => void;
}

export const DraksaCuntext = createContext<DraksaCuntextType | undefined>(undefined);
