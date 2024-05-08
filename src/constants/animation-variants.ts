export const variant1 = {
  visible: {
    opacity: 1,
    scale: [0.8, 1.2, 1],
    rotate: [0, 4, 0],
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 0,
  },
};

export const variant2 = {
  visible: {
    opacity: 1,
    scale: [0.8, 1.2, 1],
    rotate: [0, 4, 0],
    x: [-20, 20, -10, 10, 0], // Animate along the x-axis with a zig-zag effect
    y: [-10, 10, -20, 20, -10, 10, 0], // Animate along the y-axis with a zig-zag effect
    transition: {
      duration: 0.8,
      delay: 0.1, // Add a delay before the animation starts
      ease: "easeInOut", // Use a custom easing function
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 0,
    x: 0,
    y: 0,
  },
};

export const variant3 = {
  visible: {
    opacity: 1,
    scale: [0.5, 1.5, 1],
    rotate: [0, 180, 0],
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: 0,
  },
};

export const variant4 = {
  visible: {
    opacity: 1,
    scale: [1, 1.2, 1],
    y: [-20, 20, -10, 10, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 0,
  },
};

export const variant5 = {
  visible: {
    opacity: 1,
    x: [-20, 20, -10, 10, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
  },
};

export const variant6 = {
  visible: {
    opacity: 1,
    y: [-20, 20, -10, 10, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
  },
};

export const variant7 = {
  visible: {
    opacity: 1,
    rotate: [0, 180, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    rotate: 0,
  },
};

export const variant8 = {
  visible: {
    opacity: 1,
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};

export const variant9 = {
  visible: {
    opacity: 1,
    x: [-20, 20, -10, 10, 0],
    y: [-10, 10, -20, 20, -10, 10, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
  },
};

export const variant10 = {
  visible: {
    opacity: 1,
    scale: [0.8, 1.2, 1],
    rotate: [0, 90, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 0,
  },
};
