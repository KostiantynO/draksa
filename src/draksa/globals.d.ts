// src\draksa\globals.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties extends Record<`--${string}`, string> {}
}

declare module '*.css' {}

declare global {
  interface SpeechSynthesisVoice {
    gender: 'M' | 'F' | null;
  }
}
