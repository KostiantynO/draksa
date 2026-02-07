// src\cumponents\CornerBoy.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

import { useThroat } from '@/hookers/loveTo/useThroat';

import { draksaTells } from './Draksa/draksaTells';

const dearly = { pitch: 1.2, rate: 1.1 };

export const LegendOfTheCornerBoy = () => {
  const { openWideAndPuuurrr } = useThroat();

  const [clickCount, setClickCount] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const draksaTellsYouASecret = () => {
    setClickCount(count => count + 1);

    if (clickCount >= 5) {
      setShowHeart(true);
      setClickCount(0);

      openWideAndPuuurrr(draksaTells.youAreTheBestDaddy, dearly);

      setTimeout(() => setShowHeart(false), 4000);
    }
  };

  return (
    <>
      <div
        onClick={draksaTellsYouASecret}
        className="fixed top-0 left-0 z-50 h-10 w-10 cursor-pointer"
      />
      {showHeart && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none fixed top-10 left-10 z-50 text-6xl text-pink-500"
        >
          ❤️
        </motion.div>
      )}
    </>
  );
};
