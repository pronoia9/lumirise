export const sidebarMotion = {
  // Hamburger <-> Close
  menu: [
    { variants: { closed: { d: 'M 2 2.5 L 20 2.5' }, open: { d: 'M 3 16.5 L 17 2.5' } } },
    { variants: { closed: { opacity: 1 }, open: { opacity: 0 } }, transition: { duration: 0.1 } },
    { variants: { closed: { d: 'M 2 16.346 L 20 16.346' }, open: { d: 'M 3 2.5 L 17 16.346' } } },
  ],

  // Circle Background Open <-> Close
  background: {
    open: () => ({
      clipPath: `circle(${window.innerHeight * 2}px at 8% 6%)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(0px at 8% 6%)',
      transition: {
        delay: 0.25,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },

  // Sidebar Links List
  links: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },

  // Sidebar Link Item
  linkItem: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },

  // Sidebar Socials List
  socials: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.33 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },

  // Sidebar Social Item
  socialItem: {
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        scale: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        scale: { stiffness: 1000 },
      },
    },
  },
};
