// src\draksa\cumponents\ui\Ripples\RippleSpan.tsx

import type { Ripple } from '@/draksa/cumponents/ui/Ripples/types';
import type { JSX } from 'react';

interface RippleSpanProps extends Pick<Ripple, 'x' | 'y'> {}

export const RippleSpan = ({ x, y }: RippleSpanProps): JSX.Element => {
  return (
    <span
      className="animate-ripple absolute h-5 w-5 rounded-full bg-white/40"
      style={{ left: x, top: y }}
    />
  );
};
