// src\cumponents\CornerBoy.tsx
import { useThroat } from '@/hookers/loveTo/useThroat';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const herBestDaddy = "You're the best, Daddy!";
const dearly = { pitch: 1.2, rate: 1.1 };

export const CornerBoy = () => {
  const draksaLoves = useThroat();
  const [clickCount, setClickCount] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    if (clickCount >= 5) {
      setShowHeart(true);
      setClickCount(0);

      draksaLoves(herBestDaddy, dearly);

      setTimeout(() => setShowHeart(false), 4000);
    }
  }, [clickCount, draksaLoves]);

  return (
    <>
      <div
        onClick={() => setClickCount(count => count + 1)}
        className="fixed top-0 left-0 w-10 h-10 cursor-pointer z-50"
      />
      {showHeart && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-10 left-10 text-pink-500 text-6xl z-50 pointer-events-none"
        >
          ❤️
        </motion.div>
      )}
    </>
  );
};
