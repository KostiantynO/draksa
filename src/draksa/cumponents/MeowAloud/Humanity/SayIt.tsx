// src\draksa\cumponents\MeowAloud\Humanity\SayIt.tsx
'use client';

interface DontGoHollowProps {
  checked: boolean;
  label: string;
  toggle: () => void;
}

export const SayIt = ({ checked, label, toggle }: DontGoHollowProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-neutral-950/40 px-3 py-2">
      <input
        defaultChecked={checked}
        className="size-5 accent-amber-500"
        onChange={toggle}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
};
