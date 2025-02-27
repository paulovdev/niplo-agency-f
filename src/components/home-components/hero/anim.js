export const imageAnim = {
  initial: {
    scale: 0.25,
    
    rotate: -15,
  },
  animate: (custom) => ({
    scale: 1,
    rotate: 0,
   
    transition: {
      duration: 0.75,
      ease: [0.53, 1, 0.88, 1],
      delay: custom,
    },
  }),
};

export const firstPhraseAnimation = {
  initial: { y: "175%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.45,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
};

export const comercialRAnimation = {
  initial: { opacity: 0, y: "50%", rotate: 10 },
  animate: {
    opacity: 1,
    y: "0",
    rotate: 0,
    transition: {
      duration: 0.25,
      ease: [0.33, 1, 0.88, 1],
    },
  },
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

export const textAnim = {
  hover: {
    top: "-100%",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  initial: {
    top: "0%",
  },
};
