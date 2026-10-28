// src\draksa\adapters\steppeBrOwOserPeech.tsx
'use client';

export const peechSinTheSis = {
  yaGotova: () => typeof window !== 'undefined',
  getMoans: () => window.speechSynthesis.getVoices(),

  onMoansChange: (loadMoans: (() => void) | null) => {
    window.speechSynthesis.onvoiceschanged ??= loadMoans;
  },

  meOwO: (utterance: SpeechSynthesisUtterance) => {
    window.speechSynthesis.speak(utterance);
  },

  pause: () => {
    window.speechSynthesis.pause();
  },

  resume: () => {
    window.speechSynthesis.resume();
  },

  stopMeowing: () => {
    const kitty = window.speechSynthesis;
    if (kitty.speaking) kitty.cancel();
  },
};
