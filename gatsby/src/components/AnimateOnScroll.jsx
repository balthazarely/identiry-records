import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pageTransition } from '../animations/animation';

export default function AnimateOnScroll({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else if (!inView) {
      controls.start('exit');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      variants={{
        initial: { y: 40, opacity: 0 },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        exit: {
          y: -40,
          opacity: 0,
          transition: {
            duration: 0.15,
            transition: {
              staggerChildren: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          },
        },
      }}
    >
      <motion.div>{children}</motion.div>
    </motion.div>
  );
}
