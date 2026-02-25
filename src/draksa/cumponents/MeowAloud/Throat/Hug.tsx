// src\draksa\cumponents\MeowAloud\Throat\Hug.tsx
'use client';

import { Deep } from '@/draksa/cumponents/MeowAloud/Throat/Deep';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

import type { ReactNode } from 'react';

export const Hug = ({ children }: { children: ReactNode }) => {
  return (
    <Deep>
      <Throat />
      {children}
    </Deep>
  );
};
