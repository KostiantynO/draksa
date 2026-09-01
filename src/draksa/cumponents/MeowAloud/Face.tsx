// src\draksa\cumponents\MeowAloud\Face.tsx
'use client';

import Image from 'next/image';

import family from '@/draksa/art/family.webp';

import type { ReactNode } from 'react';

export const Face = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Image
        src={family}
        alt="Draksa family"
        className="absolute -z-10 bg-linear-21 from-indigo-500 via-purple-500 to-pink-500"
      />
      {children}
    </div>
  );
};
