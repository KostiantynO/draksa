// src\draksa\cumponents\MeowAloud\ClubEntrance\List.tsx
import type { JSX, ReactNode } from 'react';

export const List = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="flex flex-col gap-1">
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">
      On type `Bounce delay`
    </p>
    {children}
  </div>
);
