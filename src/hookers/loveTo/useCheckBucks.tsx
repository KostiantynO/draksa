// src\hookers\loveTo\useCheckBucks.tsx
'use client';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

export const useCheckBucks = () => {
  const checkbox = useDraksa();
  return checkbox;
};
