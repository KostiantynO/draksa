// src\cumponents\Draksa\StopMeowing.tsx
'use client';

import { useThroat } from '@/hookers/loveTo/useThroat';

export const StopMeowing = () => {
  const { stopMeowing } = useThroat();

  return (
    <button
      onClick={stopMeowing}
      className="rounded-lg bg-pink-900 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-950"
    >
      Stop Meowing
    </button>
  );
};
