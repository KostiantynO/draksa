// src\draksa\cumponents\ui\OptionButton.tsx
import type { ComponentProps, JSX } from 'react';

interface OptionButtonProps extends ComponentProps<'button'> {
  isActive: boolean;
}
export const OwOptionButton = ({
  className = '',
  isActive,
  children,
  ...props
}: OptionButtonProps): JSX.Element => {
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
