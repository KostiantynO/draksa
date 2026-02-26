// src\draksa\cumponents\MeowAloud\Voice\Moans.tsx
'use client';
import { useLoudMoans } from '@/draksa/hooks/OnlyOnce/useLoudMoans';

import type { ReactNode } from 'react';

export const Moans = ({ children }: { children: ReactNode }) => {
  useLoudMoans();
  return children;
};
