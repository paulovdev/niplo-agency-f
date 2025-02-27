export const menu = {
  open: {
    width: "300px",
    height: "300px",

    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
  close: {
    width: "75px",
    height: "50px",

    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.3,
    },
  },
};

export const navigationsTextAnim = {
  hover: {
    top: "-100%",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  initial: {
    top: "0%",
  },
};
