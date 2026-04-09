import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setIndexDimension] = useState({ width: 0, height: 0 });

  const words = ["Lisbon", "Comfort", "Secure", "Premium", "Hostel 15"];

  useEffect(() => {
    setIndexDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timeout);
  }, [index]);

  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
  };

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className="fixed inset-0 flex items-center justify-center z-[99999] bg-[#050505]">
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter" className="flex text-white text-4xl md:text-6xl items-center absolute z-10 font-heading font-black uppercase tracking-tighter">
            <span className="block w-3 h-3 bg-lisbon-yellow rounded-full mr-4 md:mr-6" />
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#050505]">
            <path d={`M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`} />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
