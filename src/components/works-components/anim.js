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

export const dropYAnim = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
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
