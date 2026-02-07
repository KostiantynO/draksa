import { createContext } from 'react';

import type { Signal } from '@preact/signals-react';

interface DraksaCuntextType {
  itIsSooDeep: Signal<string>;
  putInMeYour: (value: string) => void;

  isSlurpingWhenFed: Signal<boolean>;
  toggleIsSlurpingWhenFed: () => void;
}

export const DraksaCuntext = createContext<DraksaCuntextType | undefined>(undefined);
