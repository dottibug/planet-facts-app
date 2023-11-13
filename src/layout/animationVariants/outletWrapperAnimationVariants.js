export const INITIAL = 'initial';
export const SHOW_OUTLET = 'showOutlet';
export const HIDE_OUTLET = 'hideOutlet';

export const outletWrapperVariants = {
  [INITIAL]: { opacity: 0 },
  [SHOW_OUTLET]: {
    opacity: 1,
    transition: { ease: 'easeOut', delay: 0.1, duration: 0.2 },
  },
  [HIDE_OUTLET]: { opacity: 0, transition: { ease: 'easeOut', duration: 0.2 } },
};
