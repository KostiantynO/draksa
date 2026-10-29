// src\draksa\adapters\steppeBrOwOserPeech.ts
'use client';

export const peechSinTheSis = {
  yaGotova: (): boolean => typeof window !== 'undefined',
  getMoans: (): SpeechSynthesisVoice[] => window.speechSynthesis.getVoices(),

  onMoansChange: (loadMoans: (() => void) | null): void => {
    window.speechSynthesis.onvoiceschanged ??= loadMoans;
  },

  meOwO: (utterance: SpeechSynthesisUtterance): void => {
    window.speechSynthesis.speak(utterance);
  },

  pause: (): void => {
    window.speechSynthesis.pause();
  },

  resume: (): void => {
    window.speechSynthesis.resume();
  },

  stopMeowing: (): void => {
    const kitty = window.speechSynthesis;
    if (kitty.speaking) kitty.cancel();
  },
};
