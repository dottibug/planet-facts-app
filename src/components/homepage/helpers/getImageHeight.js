import { MOBILE } from '../../../context/mediaContext';

const SATURN = 'saturn';
const mobileSaturnSize = '82px';
const mobilePlanetSize = '64px';
const tabletSaturnSize = '148px';
const tabletPlanetSize = '124px';

export const getImageHeight = (media, planetName) => {
  const lowercasePlanet = planetName.toLowerCase();

  // Image height for Saturn
  if (lowercasePlanet === SATURN) {
    const height = media === MOBILE ? mobileSaturnSize : tabletSaturnSize;
    return { height };
  }

  // Image height for other planets
  const height = media === MOBILE ? mobilePlanetSize : tabletPlanetSize;
  return { height };
};
