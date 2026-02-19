// src\draksa\cumponents\pleaseMakeMyMouthBusy.ts
'use client';

export const pleaseMakeMyMouthBusy = () => {
  if (typeof window === 'undefined') return;

  window.speechSynthesis.cancel();

  return 'Daddy';
};
