// src\hookers\loveTo\useDraksa.ts
'use client';

import { useContext } from 'react';

import { DraksaContext } from '@/context/DraksaContext';
import { DraksaProvider } from '@/providers/DraksaProvider';

/** useContext(DraksaContext) */
export const useDraksa = () => {
  const context = useContext(DraksaContext);
  if (!context) {
    throw new Error(`Only ${DraksaProvider.name} can ${useDraksa.name} ;D`);
  }
  return context;
};
