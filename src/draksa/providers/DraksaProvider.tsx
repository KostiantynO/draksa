// src\draksa\providers\DraksaProvider.tsx
'use client';

import { DraksaContext } from '@/draksa/context/DraksaContext';

import { mood } from '../mood/mood';

import type { ReactNode } from 'react';

export const DraksaProvider = ({ children }: { children: ReactNode }) => {
  return <DraksaContext.Provider value={mood}>{children}</DraksaContext.Provider>;
};
