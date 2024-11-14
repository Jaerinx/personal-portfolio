export const navVariants = {
  initial: {
    y: "-100vh"
  },
  animate: {
    y: 0
  },
  hover: {
    y: 10,
    transition: {
      duration: 0
    }
  }
};

export const navShadowVariants = {
  initial: {
    display: "block",
    transition: {
      duration: 0,
      delay: 0.2
    }
  },
  animate: {
    display: "block",
    transition: {
      duration: 0,
      delay: 0.2
    }
  },
  hover: {
    display: "none",
    transition: {
      duration: 0,
      delay: 0
    }
  }
};
