// src\cumponents\Draksa\FeedHer.tsx

import { useDraksa } from '@/hookers/loveTo/useDraksa';
import { useThroat } from '@/hookers/loveTo/useThroat';

export const FeedHer = () => {
  const { openWideAndPuuurrr } = useThroat();

  const { putInMeYour } = useDraksa();

  const onFed = () => {
    openWideAndPuuurrr(putInMeYour.value);
  };

  return (
    <button
      onClick={onFed}
      className="rounded-lg bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-pink-700"
    >
      Feed her
    </button>
  );
};
