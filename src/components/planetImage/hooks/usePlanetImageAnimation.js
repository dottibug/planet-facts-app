import { useState, useEffect } from 'react';
import {
  INTERNAL_STRUCTURE,
  OVERVIEW,
  SURFACE_GEOLOGY,
} from '../../../../data/infoSlugs';
import {
  IMAGE_ANIMATION,
  NO_ANIMATION,
} from '../animationVariants/planetImageAnimationVariants';

export const usePlanetImageAnimation = (info, prevInfo) => {
  const [animationVariant, setAnimationVariant] = useState(NO_ANIMATION);

  useEffect(() => {
    if (prevInfo.current !== info) {
      const prev = prevInfo.current;
      prevInfo.current = info;

      const isTransitionToOrFromInternal =
        (prev === INTERNAL_STRUCTURE &&
          (info === OVERVIEW || info === SURFACE_GEOLOGY)) ||
        ((prev === OVERVIEW || prev === SURFACE_GEOLOGY) && info === INTERNAL_STRUCTURE);

      setAnimationVariant(isTransitionToOrFromInternal ? IMAGE_ANIMATION : NO_ANIMATION);
    }
  }, [info, prevInfo]);

  return animationVariant;
};
