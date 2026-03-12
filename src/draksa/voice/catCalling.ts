'use client';

export const kisKisKis = () => {
  const kitty = window.speechSynthesis;
  if (kitty.speaking) kitty.cancel();

  return kitty;
};
