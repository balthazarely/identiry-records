export const pageTransition = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.09,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const recordTransition = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: { staggerChildren: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};

export const titleTransition = {
  initial: { x: -40, opacity: 0 },

  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: { staggerChildren: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};

export const artistPageTransition = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: { staggerChildren: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};

export const TitleHover = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
