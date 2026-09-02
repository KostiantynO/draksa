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
    <details
      className={`group grid gap-1 overflow-hidden rounded-2xl transition-[height,grid-template-rows,opacity] duration-500 details-content:h-0 details-content:overflow-clip details-content:opacity-0 details-content:transition-[height,grid-template-rows,content-visibility,opacity] details-content:transition-discrete details-content:duration-500 details-content:ease-in-out open:details-content:h-auto open:details-content:opacity-100 ${className}`}
    >
      <summary className="flex cursor-pointer list-none gap-2 font-medium">
        <span className="transition-transform group-open:rotate-90">▶</span>
        <strong>{summary}</strong>
      </summary>

      {/* THIS is the only element that needs the transition */}
      <div className="grid grid-rows-[0fr] overflow-hidden opacity-0 transition-[height,grid-template-rows,content-visibility,opacity] duration-500 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100">
        {/* THIS is the only element that needs overflow-hidden */}
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </details>
  );
};
