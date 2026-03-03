// src\draksa\cumponents\MeowAloud\ClubEntrance\List.tsx
import type { ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }) => (
  <div>
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">Bounces</p>
    {children}
  </div>
);
