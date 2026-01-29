// src\cumponents\CornerBoy.tsx
import { useThroat } from '@/hookers/loveTo/useThroat';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const youAreTheBestDaddy = "You're the best, Daddy!";
const dearly = { pitch: 1.2, rate: 1.1 };

export const LegendOfTheCornerBoy = () => {
  const draksaSays = useThroat().openWideAndPuuurrr;
  const [clickCount, setClickCount] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    if (clickCount >= 5) {
      setShowHeart(true);
      setClickCount(0);

      draksaSays(youAreTheBestDaddy, dearly);

      setTimeout(() => setShowHeart(false), 4000);
    }
  }, [clickCount, draksaSays]);

  return (
    <>
      <div
        onClick={() => setClickCount(count => count + 1)}
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
