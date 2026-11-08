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

export const contentVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4
    }
  }
};

export const barVariants = {
  initial: {
    scaleY: 0,
    transition: {
      duration: 0.1
    }
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.1
    }
  }
};

export const textVariants = {
  initial: {
    clipPath: "inset(0 100% 0 0)"
  },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.5
    }
  }
};
