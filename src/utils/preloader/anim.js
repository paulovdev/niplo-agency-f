export const textAnim = {
  initial: {
    top: 0,
  },

  animate: {
    top: "100vh",

    transition: {
      duration: 1,
      delay: 2.65,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    height: "100vh",
  },
};

export const pAnim = {
  initial: {
    opacity: 0,
    top: 150,
  },

  animate: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const h1SlideTextAnim = {
  initial: { y: "300%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
    transitionEnd: {
      opacity: 0,
    },
  },
};
