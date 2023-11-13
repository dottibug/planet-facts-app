export const NO_ANIMATION = 'noAnimation';
export const IMAGE_ANIMATION = 'imageAnimation';
export const EXIT = 'exit';

export const planetImageAnimationVariants = {
  [NO_ANIMATION]: {},
  [IMAGE_ANIMATION]: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  [EXIT]: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};
