// src\cumponents\Draksa\ReadSpeed.tsx

'use client';

import { useTransition } from 'react';

import { useDraksa } from '@/hookers/loveTo/useDraksa';

import type { ChangeEvent } from 'react';

export const ReadSpeed = () => {
  const { readSpeed, setReadSpeed } = useDraksa();
  const [, startTransition] = useTransition();

  const changeReadSpeed = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      setReadSpeed(Number(value));
      console.log(value);
    });

  return (
    <label className="flex items-center gap-2">
      ReadSpeed
      <input
        name="readSpeed"
        type="range"
        value={readSpeed.value}
        step={0.1}
        min={0.8}
        max={1.5}
        onChange={changeReadSpeed}
      />
      {readSpeed.value}
    </label>
  );
};
