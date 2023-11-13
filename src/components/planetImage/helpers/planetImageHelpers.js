import {
  OVERVIEW,
  INTERNAL_STRUCTURE,
  SURFACE_GEOLOGY,
} from '../../../../data/infoSlugs';
import { planetImageSizes } from '../../../../data/planetImageSizes';

// GET IMAGE
export const getPlanetImage = (info, images) => {
  if (info === OVERVIEW) return images.planet;
  if (info === INTERNAL_STRUCTURE) return images.internal;
  if (info === SURFACE_GEOLOGY) return images.planet;
};

// GET ALT
export const getPlanetImageAlt = (planetName, info) => {
  const infoText = () => info.split('-').join(' ');

  return `Image of ${
    info === OVERVIEW ? planetName : `the ${infoText()} of ${planetName}`
  }.`;
};

// GET IMAGE SIZE
export const getPlanetImageSize = (media, planet) => {
  const lowercaseMedia = media.toLowerCase();

  return {
    width: `${planetImageSizes[planet][lowercaseMedia]}px`,
    height: `${planetImageSizes[planet][lowercaseMedia]}px`,
  };
};
