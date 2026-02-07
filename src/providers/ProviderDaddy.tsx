// src\providers\ProviderDaddy.tsx
import { signal } from '@preact/signals-react';
import { useMemo } from 'react';

import { draksaTells } from '@/cumponents/Draksa/draksaTells';
import { DraksaCuntext } from '@/cuntext/DraksaCuntext';

import type { ReactNode } from 'react';

const putInMeYour = signal(draksaTells.pweaseFeedMeDaddy);
const isSlurpingWhenFed = signal(true);

export const ProviderDaddy = ({ children }: { children: ReactNode }) => {
  const cuntextValue = useMemo(() => ({ putInMeYour, isSlurpingWhenFed }), []);

  return <DraksaCuntext.Provider value={cuntextValue}>{children}</DraksaCuntext.Provider>;
};
