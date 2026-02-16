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
    <details className={`group rounded-lg border p-4 ${className}`}>
      <summary className="flex cursor-pointer list-none items-center gap-2 font-medium">
        <span className="transition group-open:rotate-90">▶</span>
        <strong>{summary}</strong>
      </summary>

      {children}
    </details>
  );
};
