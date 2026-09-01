// src\draksa\cumponents\MeowAloud\Face.tsx
import type { ReactNode } from 'react';

export const Face = ({ children }: { children: ReactNode }) => {
  return <div className="flex-col gap-4 bg-red-500 px-1 pt-4 pb-21">{children}</div>;
};
