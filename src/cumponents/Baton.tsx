// src\cumponents\Baton🥖🍞.tsx
import { useState } from 'react';

const BatonDecor = ({ pressed }: { pressed: boolean }) => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={`absolute inset-0 rounded-2xl border border-white transition-opacity duration-500 ${pressed ? 'opacity-0' : ''} ${pressed ? '' : 'animate-[fadeOut_0.5s_ease_forwards]'}`}
      />
      🍰
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-200 ${pressed ? 'opacity-50' : ''} ${pressed ? '' : 'animate-[fadeOutTo_0.2s_ease_forwards]'}`}
      />
    </div>
  );
};

export const Baton = () => {
  const [pressed, setPressed] = useState(false);

  const onMouseDown = () => {
    setPressed(true);
  };

  const onMouseUp = () => {
    setPressed(false);
  };

  const onMouseLeave = () => {
    setPressed(false);
  };

  return (
    <button
      className="group/button relative h-16 w-48 overflow-hidden rounded-2xl bg-gray-800 text-white focus:outline-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      Baton🥖🍞
      <BatonDecor pressed={pressed} />
    </button>
  );
};
