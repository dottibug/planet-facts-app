import { INTERNAL_STRUCTURE } from '../../../../data/infoSlugs';

// Initial animation settings for planet image
export const getInitialSettings = (prevInfo) => {
  if (prevInfo === INTERNAL_STRUCTURE) return { opacity: 0 };
  return { opacity: 1 };
};
