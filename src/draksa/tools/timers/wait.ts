// src\draksa\tools\timers\wait.ts
export const wait = (ms: number): Promise<void> =>
  new Promise<void>(res => setTimeout(res, ms));
