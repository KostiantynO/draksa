// src\draksa\cumponents\MeowAloud\Face.tsx
import slowBlink from '@/draksa/art/blink.gif';
import Image from 'next/image';

export const Face = () => {
  return (
    <Image
      src={slowBlink}
      alt="slow blink"
      title="Draksa"
      decoding="async"
      unoptimized
      className="inline w-30.25"
    />
  );
};
