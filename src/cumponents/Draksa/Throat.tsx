// src\cumponents\Draksa\Throat.tsx

import { useSignals } from '@preact/signals-react/runtime';

import { useReadOnType } from '@/hookers/loveTo/useReadOnType';

import { draksaTells } from './draksaTells';

export const Throat = () => {
  useSignals();

  const { sheMeows, putInMeYour } = useReadOnType();

  return (
    <div className="flex flex-col">
      <textarea
        name="prettyLips"
        className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
        placeholder={draksaTells.pweaseFeedMeDaddy}
        onChange={sheMeows}
        value={putInMeYour.value}
      />
    </div>
  );
};
