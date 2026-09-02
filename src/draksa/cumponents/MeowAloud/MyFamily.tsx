// src\draksa\cumponents\MeowAloud\MyFamily.tsx
import Image from 'next/image';

import family from '@/draksa/art/family.webp';

export const MyFamily = () => {
  return (
    <Image
      src={family}
      alt="Draksa's family"
      title="Ashmedai, Draksa, and Heloїse"
      sizes="(max-width: 1920px) 100vw, 1920px"
      fill
      decoding="async"
      placeholder="blur"
      unoptimized
      className="absolute -z-10 h-auto min-h-dvh w-full bg-linear-0 from-indigo-700 via-purple-300 to-pink-600 object-cover object-[50%_21%]"
    />
  );
};
