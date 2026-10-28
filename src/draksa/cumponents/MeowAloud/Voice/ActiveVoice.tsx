// src\draksa\cumponents\MeowAloud\Voice\ActiveVoice.tsx
'use client';

import { useComputed } from '@preact/signals-react/runtime';

import { bast } from '@/draksa/heaven';

export const ActiveVoice = () => {
  const label = useComputed(() =>
    bast.voices.voice.value.replace('oo', 'OܫO').replace('US', 'UwUS')
  );

  return <p>{label}</p>;
};
