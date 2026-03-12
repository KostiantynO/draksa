// src\draksa\cumponents\ui\Details.tsx

import type { ReactNode } from 'react';

export const Details = ({
  summary,
  className = '',
  children,
}: {
  summary: ReactNode;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <details className={`group flex flex-col gap-1 rounded-full ${className}`}>
      <summary className="flex cursor-pointer list-none gap-2 font-medium">
        <span className="z-[-1] transition-transform group-open:rotate-90">▶</span>
        <strong>{summary}</strong>
      </summary>

      {children}
    </details>
  );
};
