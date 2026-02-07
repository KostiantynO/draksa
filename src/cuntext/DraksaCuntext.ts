import { createContext } from 'react';

import type { Signal } from '@preact/signals-react';

interface DraksaCuntextType {
  putInMeYour: Signal<string>;
  isSlurpingWhenFed: Signal<boolean>;
}

export const DraksaCuntext = createContext<DraksaCuntextType | undefined>(undefined);
