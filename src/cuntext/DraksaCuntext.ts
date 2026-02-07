// src\cuntext\DraksaCuntext.ts

import { createContext } from 'react';

interface DraksaCuntextType {
  iWantYourJuicyRef: React.RefObject<string>;
  isSlurpingWhenFedRef: React.RefObject<boolean>;
}

export const DraksaCuntext = createContext<DraksaCuntextType | undefined>(undefined);
