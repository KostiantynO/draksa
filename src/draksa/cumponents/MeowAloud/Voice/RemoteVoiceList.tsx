// src\draksa\cumponents\MeowAloud\Voice\RemoteVoiceList.tsx
import type { ReactNode } from 'react';

export const RemoteVoiceList = ({ children }: { children: ReactNode }) => (
  <div>
    <p className="sticky top-0 bg-neutral-950/90 px-2 py-1 font-bold">Remote voices</p>
    {children}
  </div>
);
