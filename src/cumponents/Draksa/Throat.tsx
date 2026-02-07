// src\cumponents\Draksa\Throat.tsx

import { useReadOnType } from '@/hookers/loveTo/useReadOnType';

import { draksaTells } from './draksaTells';

export const Throat = () => {
  const sheMeows = useReadOnType();

  return (
    <div className="flex flex-col">
      <textarea
        name="prettyLips"
        className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
        placeholder={draksaTells.pweaseFeedMeDaddy}
        defaultValue={draksaTells.pweaseFeedMeDaddy}
        onChange={sheMeows}
      />
    </div>
  );
};
