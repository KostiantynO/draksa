// src\draksa\cumponents\MeowAloud\Lips.tsx
import { LipStick } from '@/draksa/cumponents/MeowAloud/Throat/LipStick';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative container mx-auto max-w-3xl">
      <LipStick />
      <Throat />
    </div>
  );
};
