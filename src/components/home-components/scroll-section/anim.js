export const firstPhraseAnim = {
  initial: { opacity: 0, y: 150 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.49,
      ease: [0.33, 1, 0.68, 1],
      delay: i ? i * 0.02 : 0, // Garante que o atraso seja aplicado corretamente
    },
  }),
  exit: { opacity: 0, y: 150 },
};

export const h1PhraseAnim = {
  initial: { opacity: 0, y: 150 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.49,
      ease: [0.33, 1, 0.68, 1],
      delay: i ? i * 0.02 : 0,
    },
  }),
  exit: { opacity: 0, y: 150 },
};
