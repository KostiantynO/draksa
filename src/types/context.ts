// src\@types\context.ts

import type { Signal } from '@preact/signals-react';

export interface DraksaContextType {
  /** Draksa is a berry 🍓 smart girl! :D Eager for wisdom! */
  polyGlotka: Signal<string>;
  putInMeYour: (value: string) => void;

  isMeowingOnType: Signal<boolean>;
  toggleIsMeowingOnType: () => void;

  readSpeed: Signal<number>;
  setReadSpeed: (value: number) => void;
}
