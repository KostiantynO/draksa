// src\hookers\loveTo\useDraksa.ts
import { useContext } from 'react';

import { DraksaCuntext } from '@/cuntext/DraksaCuntext';
import { ProviderDaddy } from '@/providers/ProviderDaddy';

export const useDraksa = () => {
  const context = useContext(DraksaCuntext);
  if (!context) {
    throw new Error(`${useDraksa.name} is what Draksa's ${ProviderDaddy.name} does`);
  }
  return context;
};
