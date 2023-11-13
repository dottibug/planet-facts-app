export const DEFAULT_ANIMATION = 'defaultAnimation';
export const SHOW_GEOLOGY_IMAGE = 'showGeologyImage';
export const EXIT = 'exit';

export const geologyImageVariants = {
  [DEFAULT_ANIMATION]: {},
  [SHOW_GEOLOGY_IMAGE]: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: 'easeOut' },
  },
  [EXIT]: {
    opacity: 0,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
};
