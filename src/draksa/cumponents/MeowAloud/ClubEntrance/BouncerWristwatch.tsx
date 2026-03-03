// src\draksa\cumponents\MeowAloud\ClubEntrance\BouncerWristwatch.tsx
'use client';

import { mood } from '@/draksa/perf/mood/mood';

export const BouncerWristwatch = () => {
  return <p className="mb-2">{mood.settings.speechDebounceForTypingInMs}</p>;
};
