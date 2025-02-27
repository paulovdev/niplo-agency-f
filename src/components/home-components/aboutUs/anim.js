export const pSlideParagraphAnim = {
  initial: { y: "200%" },
  animate: (custom) => ({
    y: "0",
    transition: {
      duration: 0.75,
      
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * custom,
    },
  }),
};
