export const imageAnim = {
  initial: {
    scale: 0.25,
    rotate: -15,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.75,
      ease: [0.53, 1, 0.88, 1],
      delay: 3.1,
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
  },
};

export const h1SlideTextAnim1 = {
  initial: { y: "175%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.49,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.075,
    },
  }),
};

export const pSlideTextAnim = {
  initial: { y: "300%" },
  animate: {
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const pSlideParagraphAnim = {
  initial: { y: "300%" },
  animate: (custom) => ({
    y: "0",
    transition: {
      duration: 0.6,
      ease: [0.42, 1, 0.74, 1],
      delay: custom * 0.09,
    },
  }),
};

export const textAnim = {
  hover: {
    top: "-100%",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  initial: {
    top: "0%",
  },
};

export const workAnimation = {
  initial: { opacity: 0, scale: 0.95, y: 100 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const appearAwardAnim = {
  animate: (custom) => ({
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.6,
      ease: [0.42, 1, 0.74, 1],
      delay: custom * 0.15,
    },
  }),
  initial: {
    opacity: 0,
    y: 0,
  },
};

export const imgZoom = {
  hover: {
    skew: 1,
    transition: {
      duration: 0.5,
      ease: [0.73, 1, 0.68, 1],
    },
  },
};
