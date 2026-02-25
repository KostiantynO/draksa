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
    <details className={`group rounded-lg ${className}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 font-medium">
        <span className="z-[-1] transition-transform group-open:translate-y-1 group-open:rotate-90">
          ▶
        </span>
        <strong>{summary}</strong>
      </summary>

      {children}
    </details>
  );
};
