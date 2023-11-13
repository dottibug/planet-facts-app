import { planetData } from '../../data/planetData';
import { capitalizePlanet } from '../helpers/capitalizePlanet';
import { PLANET_NOT_FOUND_ERROR } from '../../data/errorTypes';

const ERROR_TEXT = `is not a planet in our solar system.`;

export const loadPlanetData = async ({ params: { planet } }) => {
  // Find planet in planetData
  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  // Throw Error if planet is not found
  if (!currentPlanet) {
    const planetFormatted = capitalizePlanet(planet);
    const error = new Error(`${planetFormatted} ${ERROR_TEXT}`);
    error.type = PLANET_NOT_FOUND_ERROR;
    throw error;
  }

  return currentPlanet;
};
