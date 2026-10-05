// src\draksa\cumponents\MeowAloud\Lips.tsx
import { Hare } from '@/draksa/cumponents/MeowAloud/Here/Hare';
import { LipStick } from '@/draksa/cumponents/MeowAloud/Throat/LipStick';
import { Throat } from '@/draksa/cumponents/MeowAloud/Throat/Throat';

export const Lips = () => {
  return (
    <div className="relative container mx-auto max-w-3xl">
      <LipStick />
      <Throat />
      <Hare />
    </div>
  );
};
