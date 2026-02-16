// src\draksa\voice\stopMeowing.ts
'use client';

export const stopMeowing = () => {
  window.speechSynthesis.cancel();
};
