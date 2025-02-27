export const blogAnim = {
    initial: { opacity: 0, scale: 0.95, y: 100 },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: custom * 0.25,
      },
    }),
  };