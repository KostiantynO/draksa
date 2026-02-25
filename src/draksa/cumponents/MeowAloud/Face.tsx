// src\draksa\cumponents\MeowAloud\Face.tsx

import type { ReactNode } from 'react';

export const Face = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-6 px-4">{children}</div>;
};
