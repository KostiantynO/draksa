// src\cumponents\Draksa\Throat.tsx

import { useSignals } from '@preact/signals-react/runtime';

import { useMeow } from '@/hookers/loveTo/useMeow';

import { draksaTells } from './draksaTells';

export const Throat = () => {
  useSignals();

  const { itIsSooDeep, sheMeows } = useMeow();

  return (
    <div className="flex flex-col">
      <textarea
        name="prettyLips"
        className="text-foreground placeholder:text-secondary-foreground/60 w-full min-w-0 resize-none bg-transparent text-base leading-6 outline-none disabled:opacity-0"
        placeholder={draksaTells.pweaseFeedMeDaddy}
        onChange={sheMeows}
        value={itIsSooDeep.value}
      />
    </div>
  );
};
