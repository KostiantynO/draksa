// src\draksa\tools\timers\wait.ts
export const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
