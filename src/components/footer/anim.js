export const navigationsMenuTextAnim = {
  hover: {
    top: "-100%",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  initial: {
    top: "0%",
  },
};

export const menuAnim = {
  closed: {
    height: "0",
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
  open: {
    height: "100vh",
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      delay: 0,
    },
  },
};

export const contentAnim = {
  closed: {
    opacity: 0,
    y: 50,
    transition: { stiffness: 40, delay: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 40, delay: 1 },
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
