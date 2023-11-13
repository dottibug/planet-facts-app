import { capitalizePlanet } from './capitalizePlanet';
import { INFO_NOT_FOUND_ERROR } from '../../data/errorTypes';
import { infoSlugs, OVERVIEW } from '../../data/infoSlugs';

const ERROR_TEXT = `We have no information about the`;

export const getPlanetInfo = (params) => {
  if (!params.info) return OVERVIEW;

  const { planet, info } = params;

  if (!infoSlugs.includes(info)) {
    const planetFormatted = capitalizePlanet(planet);
    const error = new Error(`${ERROR_TEXT} ${info} of ${planetFormatted}`);
    error.type = INFO_NOT_FOUND_ERROR;
    throw error;
  }

  return info;
};
