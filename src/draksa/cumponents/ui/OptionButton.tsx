// src\draksa\cumponents\ui\OptionButton.tsx
// src\draksa\cumponents\ui\Button.tsx

import type { ComponentProps } from 'react';

interface OptionButtonProps extends ComponentProps<'button'> {
  isActive: boolean;
}

export const OptionButton = ({
  className = '',
  isActive,
  children,
  ...props
}: OptionButtonProps) => {
  return (
    <button
      type="button"
      className={`w-full cursor-pointer rounded-2xl px-2 py-1 text-left text-base whitespace-nowrap transition-colors duration-210 hover:bg-pink-700 ${
        isActive ? 'bg-pink-600 text-white shadow-lg' : 'hover:bg-zinc-800'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
