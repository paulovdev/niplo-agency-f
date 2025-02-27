export const borderAnim = {
  hover: {
    width: "100%",
    transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
  },
  initial: {
    width: 0,
  },
};

export const appearAwardAnim = {
  animate: (custom) => ({
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.5,
      ease: [0.42, 1, 0.74, 1],
      delay: custom * 0.05,
    },
  }),
  initial: {
    opacity: 0,
    y: 0,
  },
};
