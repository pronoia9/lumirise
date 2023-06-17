export const navbarMotion = {
  //! Navbar BG (not done)
  header: {
    initial: { background: 'none' },
    animate: { background: 'var(--c-background)' },
  },

  // Logo/Bitmoji (Scale + Wobble)
  logo: (floating) => ({
    animate: floating ? 'small' : 'big',
    variants: {
      small: { scale: 0.75, transition: { duration: 1, ease: 'easeInOut' } },
      big: { scale: [1.2, 0.8, 1], transition: { type: 'spring', stiffness: 400, damping: 40, duration: 0.1 } },
    },
    whileHover: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
    },
  }),

  // Sidebar Button (Hamburger <-> Close)
  sidebarButton: (isOpen) => ({
    initial: false,
    animate: isOpen ? 'open' : 'closed',
  }),
  sidebarButtonSVG: [
    { variants: { closed: { d: 'M 2 2.5 L 20 2.5' }, open: { d: 'M 3 16.5 L 17 2.5' } } },
    { variants: { closed: { opacity: 1 }, open: { opacity: 0 } }, transition: { duration: 0.1 } },
    { variants: { closed: { d: 'M 2 16.346 L 20 16.346' }, open: { d: 'M 3 2.5 L 17 16.346' } } },
  ],

  // Sidebar Menu
  sidebarMenu: (isOpen) => ({
    initial: false,
    animate: isOpen ? 'open' : 'closed',
  }),

  // Sidebar Background (Circle Scale)
  sidebarBackground: {
    variants: {
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
  },

  // Sidebar Links List
  sidebarLinks: {
    variants: {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    },
  },

  // Sidebar Link Item
  sidebarLinkItem: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    variants: {
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
  },
};

export const socialsMotion = {
  socials: () => ({
    variants: {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.33 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    },
  }),
  socialItem: () => ({
    variants: {
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
  }),
};

export const sectionWrapperMotion = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: false, amount: 0.25 },
  variants: {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 1, staggerChildren: 0.5, delayChildren: 0.5 } },
  },
};
