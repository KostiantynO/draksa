// src\draksa\cumponents\MeowAloud\Voice\LocalVoiceList.tsx
import type { ReactNode } from 'react';

export const LocalVoiceList = ({ children }: { children: ReactNode }) => (
  <div>
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">Local voices</p>
    {children}
  </div>
);
