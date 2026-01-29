// src\app\page.tsx
'use client';

import { LegendOfTheCornerBoy } from '@/cumponents/CornerBoy';
import { Draksa } from '@/cumponents/Draksa';

const OnlyVoice = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Draksa />

      <LegendOfTheCornerBoy />
    </main>
  );
};

export default OnlyVoice;
