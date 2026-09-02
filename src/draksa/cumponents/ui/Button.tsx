// src\draksa\cumponents\ui\Button.tsx

import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = ({ className = '', children, ...props }: ButtonProps) => (
  <button
    className={`cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-4xl font-bold whitespace-nowrap text-white transition-colors hover:bg-pink-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);
