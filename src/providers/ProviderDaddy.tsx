// src\providers\ProviderDaddy.tsx
import { useMemo, useRef } from 'react';

import { draksaTells } from '@/cumponents/Draksa/draksaTells';
import { DraksaCuntext } from '@/cuntext/DraksaCuntext';

import type { ReactNode } from 'react';

export const ProviderDaddy = ({ children }: { children: ReactNode }) => {
  const iWantYourJuicyRef = useRef(draksaTells.pweaseFeedMeDaddy);
  const isSlurpingWhenFedRef = useRef(true);

  const cuntextValue = useMemo(() => ({ iWantYourJuicyRef, isSlurpingWhenFedRef }), []);

  return <DraksaCuntext.Provider value={cuntextValue}>{children}</DraksaCuntext.Provider>;
};
