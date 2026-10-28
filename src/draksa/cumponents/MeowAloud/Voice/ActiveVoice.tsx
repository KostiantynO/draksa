// src\draksa\cumponents\MeowAloud\Voice\ActiveVoice.tsx
'use client';

import { bast } from '@/draksa/heaven';

export const ActiveVoice = () => {
  return <p>{bast.voices.voice.peek().replace('oo', 'OܫO').replace('US', 'UwUS')}</p>;
};
