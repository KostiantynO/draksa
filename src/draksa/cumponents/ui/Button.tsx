// src\draksa\cumponents\ui\Button.tsx
'use client';

import { Ripples } from '@/draksa/cumponents/ui/Ripples/Ripples';

import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = ({ className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`hover:pink-700 isolate cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-4xl font-bold whitespace-nowrap text-gray-50 shadow-md shadow-gray-400 transition-colors duration-210 contain-content hover:from-red-500 hover:to-fuchsia-500 ${className}`}
      {...props}
    >
      <Ripples>{children}</Ripples>
    </button>
  );
};
