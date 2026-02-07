// src\cumponents\Draksa\FeedHer.tsx

import { useLips } from '@/hookers/loveTo/useLips';

export const FeedHer = () => {
  const slurp = useLips();

  return (
    <button
      onClick={slurp}
      className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-700"
    >
      Feed her
    </button>
  );
};
