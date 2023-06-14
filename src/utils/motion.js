import { easeIn, easeInOut } from 'framer-motion';

export const sidebar = ({ height }) => ({
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
});

export const sideMenuMotion = (menuOpen) => {
  const transition = { type: 'tween', delay: 0, duration: 1, ease: easeInOut };
  return {
    initial: { x: window.innerWidth, opacity: 0 },
    animate: { x: 0, opacity: menuOpen ? 1 : 0, transition },
    exit: { x: window.innerWidth, opacity: 0, transition },
  };
};
