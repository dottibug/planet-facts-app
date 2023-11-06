import { DESKTOP, LAPTOP, TABLET, MOBILE } from '../../../context/mediaContext';
import { planetImageSizes } from '../../../../data/planetImageSizes';

// GET IMAGE
export const getPlanetImage = (info, images) => {
  if (info === 'overview') return images.planet;
  if (info === 'internal-structure') return images.internal;
  if (info === 'surface-geology') return images.planet;
};

// GET ALT
export const getPlanetImageAlt = (planetName, info) => {
  const infoText = () => info.split('-').join(' ');

  return `Image of ${
    info === 'overview' ? planetName : `the ${infoText()} of ${planetName}`
  }.`;
};

// GET IMAGE SIZE
export const getPlanetImageSize = (media, planet) => {
  if (media === DESKTOP)
    return {
      width: `${planetImageSizes[planet][DESKTOP.toLowerCase()]}px`,
      height: `${planetImageSizes[planet][DESKTOP.toLowerCase()]}px`,
    };

  if (media === LAPTOP)
    return {
      width: `${planetImageSizes[planet][LAPTOP.toLowerCase()]}px`,
      height: `${planetImageSizes[planet][LAPTOP.toLowerCase()]}px`,
    };

  if (media === TABLET)
    return {
      width: `${planetImageSizes[planet][TABLET.toLowerCase()]}px`,
      height: `${planetImageSizes[planet][TABLET.toLowerCase()]}px`,
    };

  if (media === MOBILE)
    return {
      width: `${planetImageSizes[planet][MOBILE.toLowerCase()]}px`,
      height: `${planetImageSizes[planet][MOBILE.toLowerCase()]}px`,
    };
};
