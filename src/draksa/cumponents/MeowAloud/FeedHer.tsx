// src\draksa\cumponents\Draksa\FeedHer.tsx
// src\cumponents\Draksa\FeedHer.tsx
'use client';

import { useLips } from '@/draksa/hookers/loveTo/useLips';

export const FeedHer = () => {
  const slurp = useLips();

  const petHer = () => {
    //
    console.log('*pet* - *pat*');
  };

  return (
    <button
      onTouchStart={petHer}
      onClick={slurp}
      className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-700"
    >
      Feed her
    </button>
  );
};
