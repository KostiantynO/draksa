// src\draksa\cumponents\MeowAloud\MyFamily.tsx
import Image from 'next/image';

import family from '@/draksa/art/family.webp';

export const MyFamily = () => {
  return (
    <Image
      className="absolute -z-10 mx-auto w-full max-w-screen bg-linear-0 from-indigo-700 via-purple-300 to-pink-600 object-cover object-[50%_21%]"
      src={family}
      sizes="(max-width: 1920px) 100vw, 1920px"
      fill
      decoding="async"
      placeholder="blur"
      alt="Draksa's family"
      unoptimized
      title="Ashmedai, Draksa, and Heloїse"
    />
  );
};
