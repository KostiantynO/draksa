// src\draksa\cumponents\ui\Ripples\useRipples.ts
'use client';

import { useEffect, useRef, useState } from 'react';

import type { Ripple } from '@/draksa/cumponents/ui/Ripples/types';
import type { PointerEvent } from 'react';

const RIPPLE_DURATION_MS = 1000;

export const useRipples = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);
  const willUnmount = useRef<boolean>(false);
  const timeOuts = useRef(new Set<ReturnType<typeof setTimeout>>());

  const timeOutCleanup = () => {
    timeOuts.current.forEach(clearTimeout);
    timeOuts.current.clear();
  };

  const makeWaves = ({
    clientX,
    clientY,
    currentTarget,
  }: PointerEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const id = nextId.current++;

    if (id > 1000) {
      timeOutCleanup();
      nextId.current = 0;
      setRipples([]);
      return;
    }

    setRipples(prev => [...prev, { id, x, y }]);

    const timeoutId = setTimeout(() => {
      timeOuts.current.delete(timeoutId);

      setRipples(p => p.filter(r => r.id !== id));
    }, RIPPLE_DURATION_MS);

    timeOuts.current.add(timeoutId);
  };

  useEffect(() => {
    return () => {
      willUnmount.current = true;
      timeOutCleanup();
    };
  }, []);

  return { ripples, makeWaves };
};
