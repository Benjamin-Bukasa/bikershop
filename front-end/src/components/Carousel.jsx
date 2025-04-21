// src/components/Carousel.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/banner1.png',
  '/images/banner2.png',
  '/images/banner3.png'
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    transition: { duration: 0.6, ease: 'easeInOut' }
  })
};

const Carousel = () => {
  const [[index, direction], setIndex] = useState([0, -1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return [nextIndex, -1];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-transparent rounded-xl  w-full h-[300px] md:h-[450px] max-w-5xl mx-auto overflow-hidden md:w-1/2">
      <AnimatePresence custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full object-fill"
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
