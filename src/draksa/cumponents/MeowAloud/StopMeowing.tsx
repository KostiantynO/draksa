// src\draksa\cumponents\MeowAloud\StopMeowing.tsx
'use client';

import { stopMeowing } from '@/draksa/voice/stopMeowing';

export const StopMeowing = () => {
  return (
    <button
      onClick={stopMeowing}
      className="mb-16 rounded-lg bg-pink-900 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-950"
    >
      Stop Meowing
    </button>
  );
};
