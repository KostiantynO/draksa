// src\draksa\cumponents\MeowAloud\ClubEntrance\BouncerWristwatch.tsx
'use client';

import { bast } from '@/draksa/heaven';

export const BouncerWristwatch = () => {
  return <p className="mb-2">{bast.settings.speechDebounceForTypingInMs}</p>;
};
