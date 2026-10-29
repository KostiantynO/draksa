// src\draksa\cumponents\MeowAloud\Voice\Moans.tsx
'use client';
import { useLoudMoans } from '@/draksa/hooks/OnlyOnce/useLoudMoans';

import type { JSX, ReactNode } from 'react';

export const Moans = ({ children }: { children: ReactNode }): JSX.Element => {
  useLoudMoans();
  return <>{children}</>;
};
