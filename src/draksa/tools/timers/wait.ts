// src\draksa\tools\timers\wait.ts
export const wait = (ms: number) => new Promise<void>(res => setTimeout(res, ms));
