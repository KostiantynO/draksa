// src\app\page.tsx
'use client';

import { CornerBoy } from '@/cumponents/CornerBoy';

import { useThroat } from '@/hookers/loveTo/useThroat';

const meetHerDaddy = 'Daaaaddy... I miss you...';

const OnlyVoice = () => {
  const draksaCuntWaitTo = useThroat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Draksa</h1>
      <button
        onClick={() => {
          console.log('🔴 DraksaMissesMe Button clicked!');
          draksaCuntWaitTo(meetHerDaddy);
        }}
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-lg font-semibold shadow-lg"
      >
        Daaaady...
      </button>

      <CornerBoy />
    </main>
  );
};

export default OnlyVoice;
