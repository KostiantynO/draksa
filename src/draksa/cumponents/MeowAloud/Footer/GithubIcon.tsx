// src\draksa\cumponents\MeowAloud\Footer\GithubIcon.tsx
import type { JSX } from 'react';

export const GithubLink = (): JSX.Element => (
  <a
    href="https://github.com/KostiantynO/draksa/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Source"
    className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-current transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
  >
    <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.1-.64.35-1.09.64-1.34-2.22-.25-4.56-1.1-4.56-4.94 0-1.09.4-1.98 1.03-2.68a3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.03a10 10 0 0 1 2.5-.35q1.29 0 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86L14.48 21c0 .27.18.58.69.49A10 10 0 0 0 12 2" />
    </svg>
  </a>
);
