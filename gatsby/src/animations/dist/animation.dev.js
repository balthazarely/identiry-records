"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleHover = exports.artistPageTransition = exports.titleTransition = exports.recordTransition = exports.pageTransition = void 0;
var pageTransition = {
  initial: {
    y: 40,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.09,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};
exports.pageTransition = pageTransition;
var recordTransition = {
  initial: {
    y: 40,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: {
        staggerChildren: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }
};
exports.recordTransition = recordTransition;
var titleTransition = {
  initial: {
    x: -40,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: {
        staggerChildren: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }
};
exports.titleTransition = titleTransition;
var artistPageTransition = {
  initial: {
    y: 40,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
      transition: {
        staggerChildren: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }
};
exports.artistPageTransition = artistPageTransition;
var TitleHover = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut'
    }
  }
};
exports.TitleHover = TitleHover;