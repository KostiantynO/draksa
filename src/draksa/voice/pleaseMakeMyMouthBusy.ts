// src\draksa\voice\pleaseMakeMyMouthBusy.ts
'use client';

export const pleaseMakeMyMouthBusy = () => {
  if (typeof window === 'undefined') return;
  if (!window.speechSynthesis.speaking) return;

  window.speechSynthesis.cancel();
};
