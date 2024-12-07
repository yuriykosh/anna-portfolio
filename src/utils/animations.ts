export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
};

export const revealInViewMotion = (delay: number) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: 0.3,
        ease: easings.easeOutQuart,
      },
    },
  };
};
