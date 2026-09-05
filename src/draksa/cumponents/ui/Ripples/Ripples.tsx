// src\draksa\cumponents\ui\Ripples\Ripples.tsx
'use client';

import { RippleSpan } from '@/draksa/cumponents/ui/Ripples/RippleSpan';
import { useRipples } from '@/draksa/cumponents/ui/Ripples/useRipples';

import type { ComponentProps } from 'react';

interface RipplesProps extends ComponentProps<'div'> {}

export const Ripples = ({ className = '', children, ...props }: RipplesProps) => {
  const { ripples, makeWaves } = useRipples();

  const ripplesArray = ripples.map(({ id, x, y }) => <RippleSpan key={id} x={x} y={y} />);

  return (
    <div
      className={`relative grid h-full w-full px-4 py-2 ${className}`}
      onPointerDown={makeWaves}
      {...props}
    >
      {children}
      <div className="pointer-events-none absolute">{ripplesArray}</div>
    </div>
  );
};
