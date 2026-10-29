// src\app\global-error.tsx
'use client';

import type { JSX } from 'react';

interface ErrorDigest extends Error {
  digest?: string;
}

const GlobalError = ({
  // error,
  reset,
}: {
  error: ErrorDigest;
  reset: () => void;
}): JSX.Element => {
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong</h2>
          <button onClick={reset}>Slurp again :3</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
