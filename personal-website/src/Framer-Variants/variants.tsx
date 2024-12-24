export const navVariants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
  },
  hover: {
    y: 10,
    transition: {
      duration: 0,
    },
  },
};

export const navShadowVariants = {
  initial: {
    display: "block",
    transition: {
      duration: 0,
      delay: 0.2,
    },
  },
  animate: {
    display: "block",
    transition: {
      duration: 0,
      delay: 0.2,
    },
  },
  hover: {
    display: "none",
    transition: {
      duration: 0,
      delay: 0,
    },
  },
};

export const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const barVariants = {
  initial: {
    height: 0,
    overflow: "hidden",
    transition: {
      duration: 0.1,
    },
  },
  animate: {
    height: [0, "100%"],
    transition: {
      duration: 0.1,
    },
  },
};

export const textVariants = {
  initial: {
    width: 0,
    overflow: "hidden",
  },
  animate: {
    width: "100%",
    overflow: "hidden",
    transition: {
      duration: 0.5,
    },
  },
};
