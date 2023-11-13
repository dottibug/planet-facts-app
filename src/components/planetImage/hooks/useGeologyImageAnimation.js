import { useMemo } from 'react';
import { SURFACE_GEOLOGY, OVERVIEW } from '../../../../data/infoSlugs';
import {
  SHOW_GEOLOGY_IMAGE,
  DEFAULT_ANIMATION,
} from '../animationVariants/geologyAnimationVariants';

/**
 * Custom hook that manages the animation geology images based on the previous and current information states.
 *
 * @param {string} prevInfo - The previous information state.
 * @param {string} info - The current information state.
 *
 * @returns {Object} An object containing two properties:
 * - `initialGeologyOpacity`: Determines the initial opacity of the geology image. Returns `{ opacity: 1 }` if the previous state was 'surface-geology' and the current state is 'overview'. Returns `{ opacity: 0 }` if the previous state was 'overview' and the current state is 'surface-geology'.
 * - `animateGeologyImage`: Determines the animation of the geology image. Returns 'showGeologyImage' if the previous state was 'overview' and the current state is 'surface-geology'. Otherwise, returns 'defaultAnimation'.
 */
export const useGeologyImageAnimation = (prevInfo, info) => {
  const initialGeologyOpacity = useMemo(() => {
    if (prevInfo === SURFACE_GEOLOGY && info === OVERVIEW) return { opacity: 1 };
    if (prevInfo === OVERVIEW && info === SURFACE_GEOLOGY) return { opacity: 0 };
  }, [prevInfo, info]);

  const animateGeologyImage = useMemo(() => {
    if (prevInfo === OVERVIEW && info === SURFACE_GEOLOGY) return SHOW_GEOLOGY_IMAGE;
    return DEFAULT_ANIMATION;
  }, [prevInfo, info]);

  return { initialGeologyOpacity, animateGeologyImage };
};
