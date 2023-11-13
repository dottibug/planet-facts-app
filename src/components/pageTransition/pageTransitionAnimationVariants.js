export const INITIAL = 'initial';
export const PAGE_VISIBLE = 'pageVisible';

export const pageTransitionAnimationVariants = {
  [INITIAL]: {
    opacity: 0,
    filter: 'blur(1.5px)',
  },
  [PAGE_VISIBLE]: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2, ease: 'easeOut' },
    filter: 'blur(0px)',
  },
};
