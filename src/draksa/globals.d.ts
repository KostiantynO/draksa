// src\draksa\globals.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties extends Record<`--${string}`, string> {}
}

declare module '*.css' {}
