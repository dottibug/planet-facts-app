export const OPEN_NAV = 'openNav';
export const CLOSE_NAV = 'closeNav';

export const menuAnimationVariants = {
  [OPEN_NAV]: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  [CLOSE_NAV]: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
};
